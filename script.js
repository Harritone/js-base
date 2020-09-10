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

//var now = 2018;
//var yearJohn = 1989;
//var fullAge = 18;
//
////Multiple operators
//var isFullAge = now - yearJohn >= fullAge;
//console.log(isFullAge);
//
//// Grouping
//var ageJohn = now - yearJohn;
//var ageMark = 35;
//var average = (ageJohn + ageMark) / 2;
//console.log(average);
//
//// Multiple assignments
//
//var x, y;
//x = y = (3 + 5) * 4 - 6; 
//console.log(x, y);
//
//// more operators
//
//x *= 2;
//console.log(x);
//
//x += 10;
//console.log(x);
//
//x++;
//console.log(x);
//
//x--;
//console.log(x);

//****************************************
// Challenge 1
//****************************************

//var massMark = 100;
//var heightMark = 1.86;
//var massJohn = 85;
//var heightJohn = 1.65;
//
//var bmiMark = massMark / heightMark**2;
//console.log(bmiMark);
//var bmiJohn = massJohn / heightJohn**2;
//console.log(bmiJohn);
//var fater = bmiMark > bmiJohn;
//console.log(`Is Mark's BMI higher than John's? ${fater}`);

//****************************************
// If / else statement
//****************************************

//var firstName = 'John';
//var civilStatus = 'single';
//
//if (civilStatus === 'maried') {
//  console.log(`${firstName} is married`)
//} else {
//  console.log(`${firstName} is single`)
//}
//
//var isMarried = true;
//
//if (isMarried) {
//  console.log(`${firstName} is married`)
//} else {
//  console.log(`${firstName} is single`)
//}
//
//
//var massMark = 100;
//var heightMark = 1.86;
//var massJohn = 85;
//var heightJohn = 1.65;
//
//var bmiMark = massMark / heightMark**2;
////console.log(bmiMark);
//var bmiJohn = massJohn / heightJohn**2;
////console.log(bmiJohn);
////var fater = bmiMark > bmiJohn;
////console.log(`Is Mark's BMI higher than John's? ${fater}`);
//
//if (bmiMark > bmiJohn) {
//  console.log("Mark's BMI is higher than John's")
//} else {
//  console.log("John's BMI is higher than Mark's")
//}

//****************************************
// Boolean logic
//****************************************

//var firstName = 'John';
//var age = 20;
//if (age < 13) {
//  console.log(`${firstName} is a boy.`);
//} else if(age >= 13 && age < 20) {
//  console.log(`${firstName} is a teenager.`);
//} else if (age >= 20 && age < 30) {
//  console.log(`${firstName} is a young man`);
//} else {
//  console.log(`${firstName} is a man.`);
//}

//****************************************
// Ternary opertor and swith statements
//****************************************

//var firstName = 'John';
//var age = 20;
//
////ternary operator
//age >= 18 ? console.log(`${firstName} drinks beer.`) : console.log(`${firstName} drinks juice`);
//
//age = 14;
//var drink = age >= 18 ? 'beer' : 'juice';
//
//console.log(`${firstName} drinks ${drink}`);
//
//age = 23;
//if (age >= 18) {
//  var drink = 'beer'
//} else {
//  var drink = 'juice'
//}
//
//console.log(`${firstName} drinks ${drink}`);
//
////switch statements
//
//var job = 'freelancer';
//switch (job) {
//  case 'teacher':
//  case 'instructor':
//    console.log(`${firstName} is a teacher`);
//    break;
//  case 'driver':
//    console.log(`${firstName} drives an yandex cab in Moscow`);
//    break;
//  case 'designer':
//    console.log(`${firstName} designs beautiful websites`);
//    break;
//  default:
//    console.log(`${firstName} is self-employed`);
//}
//
////if (age < 13) {
////  console.log(`${firstName} is a boy.`);
////} else if(age >= 13 && age < 20) {
////  console.log(`${firstName} is a teenager.`);
////} else if (age >= 20 && age < 30) {
////  console.log(`${firstName} is a young man`);
////} else {
////  console.log(`${firstName} is a man.`);
////}
//var firstName = 'John';
//var age = 13;
//
//switch(true) {
//  case age < 13:
//    console.log(`${firstName} is a boy.`);
//    break;
//  case age >= 13 && age < 20:
//    console.log(`${firstName} is a teenager.`);
//    break;
//  case age >= 20 && age < 30:
//    console.log(`${firstName} is a young man`);
//    break;
//  default:
//    console.log(`${firstName} is a man.`);
//}

//****************************************
// Truthy and Falsy values
//****************************************

////Falsy: undefined, null, 0, '', NaN
////Truthy: NOT falsy
//
//var height;
//
//height = '';
//
//height ? console.log('Variable is defined') : console.log('Variable has NOT been defined');
//
//if (height || height === 0) {
//  console.log('Variable is defined');
//} else {
//  console.log('Variable has NOT been defined');
//}
//
//// Equality operators
//
//height = '23';
//
//if (height == 23) {
//  console.log('The ==  operator dies type coercion!');
//}

//****************************************
// Coding challenge 2
//****************************************

  //var firstGameScoreJohn = 89;
  //var secondGameScoreJohn = 120;
  //var thirdGameScoreJohn = 103;
  //
  //var firstGameScoreMike = 116;
  //var secondGameScoreMike = 94;
  //var thirdGameScoreMike = 123;
  //
  //var avarageJohn = (firstGameScoreJohn + secondGameScoreJohn + thirdGameScoreJohn) / 3;
  //var avarageMike = (firstGameScoreMike + secondGameScoreMike + thirdGameScoreMike) / 3;
  //
  //console.log(avarageMike);
  //console.log(avarageJohn);
  //
  //switch (true) {
  //  case avarageMike > avarageJohn:
  //    console.log("Mike's team's won!");
  //    break;
  //  case avarageJohn > avarageMike:
  //    console.log("John's team's won!");
  //    break;
  //  default:
  //    console.log("Equal average scores!")
  //}
  //
  //var firstGameScoreMary = 97;
  //var secondGameScoreMary = 134;
  //var thirdGameScoreMary = 105;
  //
  //var averageMary = (firstGameScoreMary + secondGameScoreMary + thirdGameScoreMary) / 3;
  //console.log(averageMary);
  //
  //switch (true) {
  //  case avarageMike > averageMary && avarageMike > avarageJohn:
  //    console.log("Mike's team's won!");
  //    break;
  //  case avarageJohn > averageMary && avarageJohn > avarageMike:
  //    console.log("John's team's won!");
  //    break;
  //  case averageMary > avarageMike && averageMary > avarageJohn:
  //    console.log("Mary's team's won!");
  //    break;
  //  case avarageJohn === avarageMike && (avarageJohn > averageMary || avarageMike > averageMary):
  //    console.log("Mike's team and John's team have equal scores and Mary's team lost.");
  //    break;
  //  case averageMary === avarageMike && (averageMary > avarageJohn || avarageMike > avarageJohn):
  //    console.log("Mary's team and Mike's team won and John's team lost");
  //    break;
  //  case avarageJohn === averageMary && (avarageJohn > avarageMike || averageMary > avarageMike):
  //    console.log("Mary's team and John's team won and Mike's team lost")
  //  default: 
  //    console.log('Draw!');
  //}

//****************************************
// FUnctions
//****************************************
//
//function calculateAge(birthYear) {
//  return 2020 - birthYear;
//}
//
//console.log(calculateAge(1986));
//
//var ageMe = calculateAge(1986);
//console.log(ageMe);
//var ageHegh = calculateAge(1231);
//var ageKate = calculateAge(1988);
//console.log(ageKate, ageHegh, ageMe);
//
//function yearsUntilRetirement(birthYear, firstName) {
//  var age = calculateAge(birthYear);
//  var retirement = 65 - age;
//  console.log(` ${firstName} retires in ${retirement}.`)
//}
//
//yearsUntilRetirement(1986, 'Iurii');

//****************************************
// Functions expressions and declaretions
//****************************************

// function expresion
//function whatDoYouDo(job, firstName){}

// function expresion
  var whatDoYouDo = function(job, firstName){
    switch(job) {
      case 'teacher':
        return firstName + ' teaches kids how to code';
      case 'driver':
        return firstName + ' drives an uber cab';
      case 'designer':
        return firstName + ' creates beautiful apps';
        default:
        return firstName + ' does something else';
    }
  }

var jake = whatDoYouDo('designer', 'Jake');
console.log(whatDoYouDo('teacher', 'Jake'));
console.log(jake);
