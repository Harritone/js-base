// 1
//console.log('Hello World!!!');
//
//****************************************
// Data types
//****************************************
//
//var firstName = 'Ivan';
//console.log(firstName);
//
//var lastName = 'Smith';
//var age = 28;
//
//var fullAge = true;
//console.log(fullAge);
//
//var job;
//console.log(job);
//
//job = 'Teacher';
//console.log(job);
//
//****************************************
// Variable mutation and Type coercion
//****************************************

var firstName = 'Ivan';
var age = 28;

console.log(firstName + ' ' + age);

// Type coercion
var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation

age = 'twenty eight';
job = 'driver'
alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(`${firstName} ${lastName}`);