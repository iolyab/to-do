export function postTask(task) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.7) {
          resolve(task);
        } else {
          reject('Failed to post task');
        }
      }, 2000);
    });
}

export function removeTask(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.7) {
        resolve(id);
      } else {
        reject('Failed to delete task');
      }
    }, 2000);
  });
}

export function complete(id, completedStatus) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.7) {
        resolve({id, completed: completedStatus});
      } else {
        reject('Failed to complete task');
      }
    }, 2000);
  });
}

export function updateTask(id, text, start, end) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.7) {
          resolve({id, text, start, end});
        } else {
          reject('Failed to edit task');
        }
      }, 2000);
    });
}

export function updatePriority(id, {priority: newPriority}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.7) {
        resolve({id, priority: newPriority});
      } else {
        reject('Failed to update priority');
      }
    }, 2000);
  });
}

