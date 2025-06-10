const AIRTABLE_TOKEN = process.env.REACT_APP_AIRTABLE_TOKEN;
const BASE_ID = process.env.REACT_APP_AIRTABLE_BASE_ID;
const TABLE_NAME = process.env.REACT_APP_AIRTABLE_TABLE_NAME;

const airtableURL = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`
const headers = {
  'Authorization': `Bearer ${AIRTABLE_TOKEN}`,
  'Content-Type': 'application/json'
}

export async function getTasks() {
  const response = await fetch(airtableURL, {headers});

  if (!response.ok) throw new Error('Failed to fetch tasks');
  return await response.json();
}

export async function postTask(task) {
    const response = await fetch(airtableURL, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        fields: {
          'text': task.text,
          'completed': task.completed,
          'priority': task.priority,
          'labels': task.labels,
          'start': task.start,
          'end': task.end
        }
      })
    });
    if(!response.ok) {
      throw new Error('Failed to post task');
    }
    return await response.json();
}

export async function removeTask(recordId) {
  const response = await fetch(`${airtableURL}/${recordId}`, {
    method: 'DELETE',
    headers,
  })
    if(!response.ok) {
      throw new Error('Failed to delete task');
    }
    return await response.json();
}

export async function updateTask(recordId, updatedFields) {
  const response = await fetch(`${airtableURL}/${recordId}`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({fields: updatedFields}),
  })

  const responseData = await response.json();

    if(!response.ok) {
      throw new Error(`Failed to update task: ${responseData.error?.message || JSON.stringify(responseData)}`);
    }
    return responseData;
}



