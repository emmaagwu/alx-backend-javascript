export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const innertask = false;
    const innertask2 = true;
    return [innertask, innertask2];
  }

  return [task, task2];
}
