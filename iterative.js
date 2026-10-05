//for while do while for of for in

for (let i = 0; i < 5; i++)
    console.log("hello");


let i = 0;
while (i<5) {
    console.log("hello", i);
    i++;
}

do {
    console.log("do while");
} while (3 < 1);

let a = [6, 2, 3, 4, 6, 8, 9, 12];

// for (let i = 0; i < a.length; i++){
//     console.log(a[i]);
// }

for (let k of a) {
    console.log(k);
}

let r = { name: "javascript", time: "11am" };
for (let k in r) {
    console.log(k);
    console.log(r[k]);
}