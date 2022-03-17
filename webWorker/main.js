const worker = new Worker('worker.js')
const length = 10
const size = Int32Array.BYTES_PER_ELEMENT * 10

// 新建一段共享内存
const sharedBuffer = new SharedArrayBuffer(size)
const sharedArray = new Int32Array(sharedBuffer)
for (let i = 0; i < 10; i++) {
  Atomics.store(sharedArray, i, 0)
}

worker.postMessage(sharedBuffer)
