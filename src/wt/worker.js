import { isMainThread, parentPort, workerData } from 'node:worker_threads';

const nthFibonacci = (n) => (n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2));

const sendResult = () => {
  if (isMainThread) throw new Error('MainThread');
  const result = nthFibonacci(workerData);
  parentPort.postMessage(result);
};

sendResult();