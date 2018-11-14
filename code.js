
//---------------------
//      Arrays
//---------------------

let friend1 = 'John';
let friend2 = 'Mark';
let friend3 = 'David';

let friends = ['John', 'Mark', 'David'];
let testGrades = [99, 87, 65, 92];

console.log(testGrades);
console.log(testGrades[0]);
console.log(testGrades[1]);
console.log(testGrades[2]);
console.log(testGrades[3]);

testGrades[3] = 900;
console.log(testGrades[3]);

console.log(testGrades.length);
console.log(testGrades[testGrades.length - 1]);

for(let i = 0; i < testGrades.length; i++){
    console.log(testGrades[i]);
}

testGrades.forEach(function(grade){
    console.log(grade);
});

//---------------------
//   Array Functions
//---------------------

testGrades.push(400);
console.log(testGrades);
testGrades.pop();
console.log(testGrades);
testGrades.reverse();
console.log(testGrades);
testGrades.shift();
console.log(testGrades);
testGrades.unshift(200);
console.log(testGrades);
testGrades.splice(1,1);
console.log(testGrades);
testGrades.sort();
console.log(testGrades);
friends.sort();
console.log(friends);

//---------------------
//      Functions
//---------------------

function sayHello(){
    console.log("Hello");
}

let sayHello = function (){
    console.log("Hello");
}

function sayHello(name){
    console.log("Hello " + name);
}

sayHello('alex');

let addNumbers = function(num1, num2){
    console.log(num1 + num2);
}
let addNumbers = (num1, num2) => {
    console.log(num1 + num2);
}
addNumbers(3, 5);

//---------------------
//  Function Returns
//---------------------

let addNumbers = function(num1, num2) {
	return num1 + num2;
}

let result = addNumbers(3,5);

console.log(result);

//---------------------
//      Recursion
//---------------------

function openDoll(dollNumber) {
	console.log("Opening doll #" + dollNumber);
	if(dollNumber == 1) {
		return;
	}else {
		openDoll(dollNumber - 1);
	}
}

openDoll(7);

//---------------------
//       Scope
//---------------------

let globalVar = 9;

function myFunc() {
	if(true) {
		let localVar = 5;
	}
	//console.log(localVar);
}

myFunc();
console.log(globalVar);

sayHi();  //hoisting

function sayHi(){
	console.log("hi");
}

//---------------------
//  Var Let Const
//---------------------

if(true){
	var i = 0; //not limited to scope in block
	let j = 1; //limited to scope
	const k = 2; //limited to scope, cant be changed
}

function foo(){ //all are limited to scope in a function
	var i = 0;
	let j = 1;
	const k = 2;
}

const k = {name: 'Mike'};
k.name = 'Joe';
console.log(k);

//---------------------
//       Closure
//---------------------

function adder() {
	let num1 = 12;
	let num2 = 5;
	function addNumbers(){
		console.log(num1 + num2);
	}
	return addNumbers;
}

let numberAdder = adder();
numberAdder();

function counter(){
	let count = 0;
	function incrementCount(){
		count++;
		console.log("The Count is " + count);
	}
	return incrementCount;
}

let counterIncrementer = counter();

counterIncrementer();
counterIncrementer();
counterIncrementer();
counterIncrementer();

//---------------------
// High Order Functions
//---------------------

function getAddFunction(){
	return (num1, num2) => num1 + num2;
}

let addFunction = getAddFunction();

console.log(addFunction(5,6));

//---------------------
// Advanced Arrays
//---------------------

let letters = ['c', 'a', 't'];
let numbers = [2, 60, 500];

console.log(letters.toString());
console.log(letters.join(''));
console.log(letters.concat(numbers));
console.log(letters.includes('a'));
console.log(letters.indexOf('c'));
console.log(letters.slice(1));
console.log(letters.slice(0,2));

let filtered = letters.filter( (letter) => {return letter == 'a'});
console.log(filtered);

let mapped = letters.map( (letter) => {return letter + '|'});
console.log(mapped);

function reducerFunction(accumulator, currentValue) {
	return accumulator + currentValue;
}

let reducedArray = numbers.reduce(reducerFunction);

console.log(reducedArray);


//---------------------
//      Objects
//---------------------

let personArray = ['Mike', 24, 'Programmer', true];

let person = {
	name: 'Mike',
	age: 24,
	occupation: 'Programmer',
	registeredVoter: true,
}
console.log( person );
console.log( person.name );
console.log( person['name']);
person.age = 900;
console.log( person.age );

//---------------------
//       Classes
//---------------------

class Book {
	constructor(title, author){
		this.title = title;
		this.author = author;
	}

	readBook(){
		console.log("Reading " + this.title);
	}

}

let hp = new Book("Harry Potter", "JK Rowling");

console.log(hp);
hp.readBook();

//---------------------
//       REGEX
//---------------------

console.log(
	"Hello".search(/lo/)
);

//---------------------
//       Errors
//---------------------

try {
	console.log(z);
	throw SyntaxError("custom error");
} catch(error) {
	console.log(error);
	console.log(error.name);
} finally {
	console.log("always executed");
}
