
//---------------------
//      Arrays
//---------------------

// let friend1 = 'John';
// let friend2 = 'Mark';
// let friend3 = 'David';

let friends = ['John', 'Mark', 'David'];
let testGrades = [99, 87, 65, 92];

// console.log(testGrades);
// console.log(testGrades[0]);
// console.log(testGrades[1]);
// console.log(testGrades[2]);
// console.log(testGrades[3]);

// testGrades[3] = 900;
// console.log(testGrades[3]);

// console.log(testGrades.length);
// console.log(testGrades[testGrades.length - 1]);

// for(let i = 0; i < testGrades.length; i++){
//     console.log(testGrades[i]);
// }

// testGrades.forEach(function(grade){
//     console.log(grade);
// });

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