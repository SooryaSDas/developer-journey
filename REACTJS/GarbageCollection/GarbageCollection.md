1. Garbage Collection

it's a automatic process of removing the unused objects from the memory in javascript.
let user = {
  name: "Soorya"
};
user = null;
now the user is null so the javascript remove the name:soorya automatically.

Garbage Collection = finding unused objects and cleaning them from memory.

another example:
let user1 = {
  name: "Soorya"
};

let user2 = user1;
Now both variables point to the same object:

user1 ──┐
        ↓
      Object
        ↑
user2 ──┘

user1 = null;

Is the object deleted?

No.

Why?

Because user2 is still pointing to it:

user1 → null

user2 ───→ Object
---------------------------------------------

let user = {
  name: "Soorya"
};

user = null;

The object becomes eligible for garbage collection.
That doesn't mean JavaScript immediately deletes it at that exact moment.
The JavaScript engine decides when to run the Garbage Collector.
"Once an object becomes unreachable, it becomes eligible for garbage collection."