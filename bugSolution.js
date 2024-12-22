function foo(a, b) {
  a = a === null ? 0 : a; // if a is null, set it to 0. otherwise set it to a
  b = b === null ? 0 : b;// if b is null, set it to 0. otherwise set it to b
  return a + b; // if both a and b are null, it'll return 0
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 2
console.log(foo(1, null)); // Output: 1
console.log(foo(null, null)); // Output: 0