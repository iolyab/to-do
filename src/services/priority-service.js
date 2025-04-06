console.log('===>');
const priorityOptions = ['High', 'Medium', 'Low'];
localStorage.setItem('priorityOptions', JSON.stringify(priorityOptions));
export const retrievedPriorityOptions = JSON.parse(localStorage.getItem('priorityOptions'));
