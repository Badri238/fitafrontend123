//pure/impure arrow IIFE higher order callback

//impure
let k = 12;
function hello() {
    k = 24;
    console.log("hello this is function");
}


hello();
hello();
console.log(k);

let hello1 = () => {
    console.log("arrow function");
}

hello1();

//Anonymous
(() => {
   console.log("IIFE") 
})()


function high(a){
    a();
}

function low(){
    console.log("this is low function")
}
high(low);