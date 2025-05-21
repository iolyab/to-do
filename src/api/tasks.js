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
