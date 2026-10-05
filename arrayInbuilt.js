let a = [2, 3, 4, 5, 6];
a.unshift(12);
a.pop();
a.shift();
a.splice(2, 1, 22);
console.log(a);
console.log(a.includes(22));

console.log(a.indexOf(5));
console.log(a.slice(2, 3))
console.log(a.join(""));

let t = [[11, 2, [31, 14, 51, [17, 8, [9, 10]]]]];
t = t.flat(Infinity);
console.log(t);
t.sort((a, b) => a - b);
console.log(t);
// t.copyWithin(4, 0, 1);
// console.log(t);
// t.fill(12, 0, 3);
// console.log(t);

let mExample = t.map((e) => {
    return e + 5;
})
console.log(mExample)

let fExample = t.filter((e) => {
    return e > 10;
})
console.log(fExample);

let fiExample = t.find((e) => {
    return e > 10;
})
console.log(fiExample);

let rExample = t.reduce((prev,e,i,o) => {
    return prev + e;
})
console.log(rExample)