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