//Variables & Data Types

//let var const
let a = 12;
let b = "helo";
let c = true;
let d;
a = "updated";
console.log(d);

//non primitive array object
let arr = [2, 23, 45, 34, 22];
console.log(arr[2]);
arr[2] = 22;
console.log(arr[2]);
arr[16] = 74;
let m = structuredClone(arr);
m[2] = 87;
console.log(arr[2]);

//object
let r = { name: "hello", course: "Frontend" }
Object.seal(r);
r["course1"] = "Java";
console.log(r);
console.log(Object.values(r));

//Unary ++ --
let q = 5;
let w = q++ + q + ++q + q++ + q;
console.log(q);

//Binary
//Arit Rela Logi Bitwise Assign

//+ - * / %
console.log("21a" + 1);
console.log(true + true);

// > < >= <= == !=
console.log(null == undefined);
console.log([3, 4] < [7]);
console.log("dance" > "apple")

//&& ||
console.log(3 > 1 && 2 > 1 || 3 < 0);

// & | ^
console.log(5 | 3);

console.log(!false);
console.log(~4);

console.log(null && 2 && 0 && false && 10);
//3
//1-1

//0101
//0011

//0111
//2^0 *1 + 2^1 * 1 + 2^2*1 + 2^3*0

let m = 2 > 1 ? 17 : 22;