type PrefetchTask = {
  key: string;
  action: () => Promise<any>;
};

let queue: PrefetchTask[] = [];

export function addTask(task: PrefetchTask) {
  queue.push(task);
}

export function injectTaskAtFront(task: PrefetchTask) {
  queue.unshift(task);
}

export function injectTasksAtFront(tasks: PrefetchTask[]) {
  for (let i = tasks.length - 1; i >= 0; i--) {
    injectTaskAtFront(tasks[i]);
  }
}

export async function processQueue() {
  while (queue.length > 0) {
    const task = queue.shift();
    if (task) {
      try {
        await task.action();
      } catch (e) {
        // Optionally log errors
      }
    }
  }
}