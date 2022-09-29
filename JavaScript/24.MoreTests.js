let String1="Hello";
let String2="World";

console.log(String1==String2?"it is equal":"unequal");
console.log(String1=="Hello"?"true":"false");
console.log(String1>=String2?"String1 is greater":"String2 is greater");
console.log(String1=="Hello" && String2=="World"?"true":"false");
console.log(String1=="Hello" || String2=="Hello"?"true":"false");

let result = Array.isArray(String1);
console.log("string1 is Array",result)

String1.toLowerCase();
String2.toLowerCase();
console.log(String1==String2?"it is equal":"unequal");


