const AIRTABLE_BASE_ID = 'your_base_id';
const AIRTABLE_TABLE_NAME = 'Tasks';
const AIRTABLE_TOKEN = 'your_token';

const airtableURL = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`
const headers = {
  'Authorization': `Bearer ${AIRTABLE_TOKEN}`,
  'Content-Type': 'application/json'
}

export async function postTask(task) {
    const response = await fetch(airtableURL, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        fields: {
          'Task Name': task.text,
          'Completed': task.completed,
          'Priority': task.priority,
          'Labels': task.labels,
          'Start Date': task.start,
          'End Date': task.end
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

async function airtablePatch(recordId, updatedFields) {
  const response = await fetch(`${airtableURL}/${recordId}`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({fields: updatedFields}),
  })
    if(!response.ok) {
      throw new Error('Failed to update record');
    }
    return await response.json();
}

export function complete(id, completedStatus) {
  return airtablePatch(id, {Completed: completedStatus})
}

export function updateTask(id, text, start, end) {
    return airtablePatch(id, {
      'Task Name': text,
      'Start Date': start,
      'End Date': end
    })
}

export function updatePriority(id, {priority: newPriority}) {
  return airtablePatch(id, {Priority: newPriority})
}

