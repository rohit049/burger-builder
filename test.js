const arr = [1, 5, 45, 234, 57, 32, 0, -12, 3];
const reducer = (acc, curr) => {
  console.log(`Math.max(${acc}, ${curr}) = ${Math.max(acc, curr)}`);
  return Math.max(acc, curr);
};
// const res = arr.reduce((acc, curr) => {
//   console.log(`${acc} + ${curr} = ${acc + curr}`);
//   return acc + curr;
// });

console.log(arr.reduce(reducer, 100));
