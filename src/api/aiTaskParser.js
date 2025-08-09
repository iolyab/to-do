import { apiKey } from "../store/tasks/actions";

export const parseTaskWithAI = async (userInput) => {
  if (!userInput?.trim()) return createEmptyTask();

  try {
    const rawJson = await callOpenAI(userInput);
    return validateAndCleanResponse(rawJson, userInput);
  } catch (err) {
    console.error("AI parsing failed, falling back:", err);
    return fallbackParsing(userInput);
  }
};

export const createPrompt = (userInput) => {
  return `
You are a task parser AI. Extract structured task data from the input below.
ONLY return a valid JSON object, no explanation, no markdown, no commentary.

Format:
{
  "text": "task without any date, time, or labels",
  "hasDateTime": true or false,
  "dateTime": "ISO 8601 string like '2025-07-02T14:00:00Z' or null",
  "hasLabel": true or false,
  "labels": ["label1", "label2"] or [],
  "type": "structured" if date/labels are present, otherwise "simple"
}

Instructions:
- Extract all hashtags (words starting with #) as labels without the # symbol.
- Remove these hashtags from the task text.
- Detect date/time expressions like “tomorrow at 2 pm” or “at 2 pm” and convert to ISO 8601 UTC string.
- If only date is mentioned (no time), use 9:00 AM by default.
- If only time is mentioned (no date), assume the next occurrence of that time (today if time is in future, otherwise tomorrow).
- Interpret times as local time zone (e.g., America/New_York).
- Return ISO 8601 strings adjusted to that timezone.
- If no date/time/labels → type is "simple". Otherwise → "structured".

Examples:
Input: "Call #work"
Output:
{
  "text": "Call",
  "hasDateTime": false,
  "dateTime": null,
  "hasLabel": true,
  "labels": ["work"],
  "type": "structured"
}

Input: "${userInput}"
Current date: ${new Date().toISOString()}

Output:
  `;
};

export const callOpenAI = async (userInput) => {
  const prompt = createPrompt(userInput);

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4",
      temperature: 0,
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!res.ok) {
    const msg = await res.text();
    throw new Error(`OpenAI ${res.status} – ${msg}`);
  }
  const data = await res.json();
  return data.choices[0].message.content;
};

const cleanAIResponse = (text) => {
  return text
    .trim()
    .replace(/^```json\s*/, "")
    .replace(/```$/, "")
    .trim();
};

export const validateAndCleanResponse = (aiResponse, originalInput) => {
  const cleaned = cleanAIResponse(aiResponse);
  const parsed = JSON.parse(cleaned);

  return {
    text: parsed.text ?? originalInput,
    hasDateTime: !!parsed.hasDateTime,
    dateTime: parsed.dateTime ?? null,
    hasLabel: !!parsed.hasLabel,
    labels: Array.isArray(parsed.labels) ? parsed.labels : [],
    type:
      parsed.type ??
      (parsed.hasDateTime || parsed.hasLabel ? "structured" : "simple"),
  };
};

export const createEmptyTask = () => ({
  text: "",
  hasDateTime: false,
  dateTime: null,
  hasLabel: false,
  labels: [],
  type: "simple",
});

export const fallbackParsing = (input) => {
  const hasLabel = /#\w+/.test(input);
  const hasTime =
    /\d{1,2}(?::\d{2})?\s*(am|pm|AM|PM)/.test(input) || /\bat\s+\d/.test(input);
  const hasDate =
    /(tomorrow|today|monday|tuesday|wednesday|thursday|friday|saturday|sunday)/i.test(
      input
    );

  return {
    text: input.replace(/#\w+/g, "").trim(),
    hasDateTime: hasTime || hasDate,
    dateTime: null,
    hasLabel: hasLabel,
    labels: hasLabel
      ? (input.match(/#\w+/g) || []).map((l) => l.substring(1))
      : [],
    type: hasTime || hasDate || hasLabel ? "structured" : "simple",
  };
};
