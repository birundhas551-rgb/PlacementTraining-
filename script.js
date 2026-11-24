function showMyMessage(){
    var a=10;
    var b=20;
    console.log(a+b);
}
//NOTES:
//in javascript we can redeclare a variable using var and reassign the values.
// js is dynamically typed(no need to mention the datatypes).
//Var-reassign and redeclare.
//By using let we can reassign the value but we can't re-declare.
//const-can't redeclare or reassign the values.
//var b=40
//var b=50;
//const c=30;

//Datatypes in javascript:
//1)primitives:number,string,boolean,null,undefined,symbol,bigint.
//2)non-primitives:object,array,function.
(PRIMITIVES)
//1.Number:
//eg:
let c=30;
let d=40.0;
console.log(d);

//2.String:
//"",',``(mentioned using double,single and backquotes).
//eg:
let str1="Hello World";
let str2='Hello World';
let str3=`Hello World`;
console.log(typeof str);
console.log(typeof str2);
console.log(typeof str3);

//3.Boolean:
//eg:
let isTrue=true;
console.log(isTrue);
console.log(typeof isTrue);

//4.Null:
//Assigns nothing.
//eg:
let isValid=null;
let age=27;if(age>=18){
  isValid=true;
}
console.log(isValid);
console.log(typeof isValid);

//5.undefined:
//eg:
let isAvailable;
console.log(isAvailable);
console.log(typeof isAvailable);

//6.Symbol:
//eg:
let sym=Symbol("Hello");
console.log(sym);
console.log(typeof sym);
//symbol is unique and immutable primitive value and may be used as the key of an objects property.

7.bigint:
//eg:
let bigInt=BigInt(1234567890123456789012345678901234567890);
console.log(bigInt);
console.log(typeof bigInt);

(NON-PRIMITIVES):
1.Object:
//eg:
const person={
name:"john",
age:30
isStudent:false,
college:"Sri Eshwar College of Engineering",
address:{
city:"coimbatore",
state:"TamilNadu",
 },
contactNumbers:1234567890,
}
//we can also use array here.
person.college="Sree Eshwar college of Enginerring";
delete person.isStudent;
person.isGraduate=true;
console.log(person.name);
console.log(person);

//2.Array:
const number=[1,2,3,4,5];
//let age =new Array(5);
for(let i=0;i<age.length;i++){
    console.log(age[i]);
}

//built in array methods:
//1.push:
//Adding:push/swift 
//Pop

numbers.push(6);
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);

numbers.swift(0);
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}
//includes:
//searching for something;
includes(3);
let isPresent=numbers.includes(3);
console.log(isPresent);

//indexof:
let index=numbers.indexof(3);
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}

//slice:
const numbersCopy=numbers.slice(2,4);
console.log(numbersCopy);                                                                                                                           wz

//fucntions:
function name(){
    console.log("Hello World");
}
name();
name();
name();
name();
 function add(a,b){
    console.log(a+b);
    //return=a+b;
 }
 let a=20;
 let b=30;
 let c=add(a,b);
 console.log(add(a,b));
}
function print(a,b){
    return a+" "+b;
}
console.log(print("Hello","World"));
console.log(print("Hello","bruzz"));
//arrow function:
const multiply=(a,b)=>{
    return a*b;
}
console.log(multiply(2,3);

//callback function:
function greet(name,callback){
    console.log("Hello "+name);
    callback();
}
function sayGoodbye(){
    console.log("Goodnye!");
}
great("john",sayGoodbye);
