let s = "Hello Javascript";
console.log(s.replace("Hello", "Hi"));
console.log(s.split(""));
console.log(s.length);

console.log(s.charAt(2));
console.log(s.indexOf("l", 4));
console.log(s.search(/L/i));
console.log(s.match(/l/gi));
console.log(Array.from(s.matchAll("l")));

console.log(s.includes("lJ"));
console.log(s.startsWith("H"));
console.log(s.endsWith("t"));

//pad slice trim

let u = "   Hi   ";
// console.log(u.padStart(4, "ffjfjfif"));
console.log(u.trim().length)

console.log(s.slice(-4));
console.log(s.substring(-4));
console.log(s.toUpperCase());
