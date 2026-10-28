4. Calculate the sum of numbers from 1 to N

const n = 5;
let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += i;
}

console.log(sum);

result
15

The loop adds 1 + 2 + 3 + 4 + 5. The sum += i statement is shorthand for sum = sum + i.