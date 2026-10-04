1. What is the Event Loop in JavaScript?

javascript is a single threaded.
that means js can execute one piece of js code at a time.
But we can still do things like:

1. API requests
2. setTimeout()
3. Reading files
4. User clicks
5. Database requests

without blocking the whole application.

The Event Loop is the mechanism that helps JavaScript handle these asynchronous tasks.
<!-- ---------------------------------------------------------------- -->

First understand these 4 things

For the Event Loop, remember:

1. Call Stack
2. Web APIs / Runtime APIs
3. Task Queue
4. Event Loop
5. Microtask Queue

<!-- --------------------------------------------------------------- -->

1. Call Stack
the callstack is where the js is executing the functions.
Example:

function hello() {
  console.log("Hello");
}
hello();
<!-- --------------------------------------------------------------- -->

2. Web APIs / Runtime APIs
Some things are not handled directly by the JavaScript engine.
for example :
setTimeout(()=>{
    console.log("B");
},2000);

The timer is handled by the runtime environment.
In a browser, this involves Web APIs.

In Node.js, the runtime provides its own asynchronous APIs.

Think of it like:

JavaScript
    ↓
"Start a timer"
    ↓
Runtime handles timer

JavaScript doesn't sit there waiting for 2 seconds.
<!-- ----------------------------------------------------------------------------- -->

3. Task Queue
when the asynchronous task is ready, its callback needs somewhere to wait.
That's where the task queue comes in.
setTimeout(() => {
  console.log("Hello");
}, 2000);

After 2 seconds:

Timer finished
      ↓
Callback
      ↓
Task Queue

The callback waits in the queue until JavaScript can execute it.
<!-- --------------------------------------------------------------- -->

4. Event Loop
Check whether the Call Stack is empty. If it is, move a waiting callback into the Call Stack so JavaScript can execute it.
        Event Loop
            ↓
   Is Call Stack empty?
        ↙       ↘
      NO         YES
      ↓           ↓
    Wait      Take task
              from queue
                  ↓
             Call Stack

example:
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");

answer:
A
C
B

<!-- -------------------------------------------------------------------------------- -->

1. What about Promises?
console.log("A");

setTimeout(()=>{
  console.log("B");
},0);

Promise.resolve().then(()=>{
  console.log("C");
})

console.log("D");

output:
A
D
C
B

There are two important queues:
1. Microtask Queue
     ↓
Promise.then()
async/await
queueMicrotask()


2. Task Queue
     ↓
setTimeout()
setInterval()
some event callbacks


The Event Loop gives microtasks priority.
After the current JavaScript code finishes, JavaScript processes the microtask queue before moving on to the next task.
Call Stack
    ↓
Microtask Queue
    ↓
Task Queue


* Explain the Event Loop and how asynchronous tasks are executed in JavaScript. ? 
JavaScript is single-threaded, so it can execute one piece of JavaScript code at a time. Asynchronous operations such as timers, API requests, and events are handled by the runtime environment. When they complete, their callbacks are placed into appropriate queues. The Event Loop checks when the Call Stack is empty and moves callbacks into the stack for execution. Microtasks, such as Promise callbacks, are processed before regular tasks such as timer callbacks. This allows JavaScript to perform asynchronous operations without blocking the main thread.