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
//
//var firstName = 'Ivan';
//var age = 28;
//
//console.log(firstName + ' ' + age);
//
//// Type coercion
//var job, isMarried;
//job = 'teacher';
//isMarried = false;
//
//console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
//
//// Variable mutation
//
//age = 'twenty eight';
//job = 'driver'
//alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
//
//var lastName = prompt('What is his last name?');
//console.log(`${firstName} ${lastName}`);


//****************************************
// Basic operators
//****************************************

//var year, ageJohn, ageMark;
//now = 2020;
////Math operators
//ageJohn = 28;
//ageMark = 33;
//
//console.log(ageJohn);
//console.log(ageMark);
//console.log(now + 2);
//console.log(now * 2);
//console.log(now / 10);
//
//// Logical operators
//
//var johnOlder = ageJohn > ageMark;
//console.log(johnOlder);
//
////typeof operator
//
//console.log(typeof johnOlder);
//console.log(typeof ageMark);
//console.log(typeof 'yeah');
//var day;
//console.log(typeof day);
//var day = null;
//console.log(typeof day);

//****************************************
// Operator precedence
//****************************************

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

//Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments

var x, y;
x = y = (3 + 5) * 4 - 6; 
console.log(x, y);

// more operators

x *= 2;
console.log(x);

x += 10;
console.log(x);

x++;
console.log(x);

x--;
console.log(x);
