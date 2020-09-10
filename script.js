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
//  var whatDoYouDo = function(job, firstName){
//    switch(job) {
//      case 'teacher':
//        return firstName + ' teaches kids how to code';
//      case 'driver':
//        return firstName + ' drives an uber cab';
//      case 'designer':
//        return firstName + ' creates beautiful apps';
//        default:
//        return firstName + ' does something else';
//    }
//  }
//
//var jake = whatDoYouDo('designer', 'Jake');
//console.log(whatDoYouDo('teacher', 'Jake'));
//console.log(jake);

//****************************************
// Functions expressions and declarations
//****************************************

// initialize new array
//var names = ['John', 'Mark', 'Mario'];
//var years = new Array(1990, 1969, 1948);
//
//console.log(names[0]);
//console.log(names[2]);
//console.log(names);
//console.log(names.length);
//
//// mutate array data
//names[1] = 'Ben';
//names[names.length] = 'Mary';
//console.log(names);
//
//// different data types
//
//var john = ['John', 'Smith', 1990, 'teacher', true, 'designer'];
//
//john.push('blue');
//john.unshift('Mr');
//last = john.pop();
//first = john.shift();
//console.log(john);
//console.log(first);
//console.log(last);
//
//console.log(john.indexOf(1990));
//console.log(john.indexOf(11)); // => -1
//
//var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';
//console.log(isDesigner);

//****************************************
// Coding challenge 3
//****************************************

//var billOne = 124;
//var billTwo = 48;
//var billThree = 268;
//
//
//function tipCalc(bill) {
//  switch(true){
//    case bill < 50:
//      return bill * .2;
//    case bill >= 50 && bill < 200:
//      return bill * .15;
//    case bill > 200:
//      return bill * .1;
//  }
//}
//
//var arr1 = [billOne, billTwo, billThree];
//var arr2 = [arr1[0] + tipCalc(billOne), arr1[1] + tipCalc(billTwo), arr1[2] + tipCalc(billThree)];
//
//console.log(arr1, arr2);
//
//function tipCalculator(bill) {
//  var percentage;
//  if (bill < 50) {
//    percentage = .2;
//  } else if (bill >= 50 && bill < 200) {
//    percentage = .15;
//  } else {
//    percentage =.1;
//  }
//  return percentage * bill;
//}
//console.log(tipCalculator(1000));
//var tips = [ tipCalculator(arr1[0]),
//  tipCalculator(arr1[1]),
//  tipCalculator(arr1[2])];
//console.log(tips);
//
//var arr3 = [arr1[0] + tipCalculator(arr1[0]), arr1[1] + tipCalculator(arr1[1]), arr1[2] + tipCalculator(arr1[2])];
//console.log(arr3);
//

//****************************************
// Objects and properties
//****************************************

// object literal
//var john = {
//  firsName: 'John',
//  lastName: 'Smith',
//  birthYear: 1990,
//  family: ['Jane', 'Mark', 'Bob', 'Emily'],
//  job: 'teacher',
//  isMarried: false
//};
//
//console.log(john.firsName);
//console.log(john.family);
//console.log(john['lastName']);
//var x = 'birthYear';
//console.log(john[x]);
//
//john.job = 'designer';
//john['isMarried'] = true;
//console.log(john);
//
//// new Object syntax
//var jane = new Object();
//jane.name = 'Jane';
//jane.birthYear = '1988';
//jane.job = 'Teacher';
//console.log(jane);

//****************************************
// Objects and properties
//****************************************


//var john = {
//  firsName: 'John',
//  lastName: 'Smith',
//  birthYear: 1986,
//  family: ['Jane', 'Mark', 'Bob', 'Emily'],
//  job: 'teacher',
//  isMarried: false,
//  calcAge: function(){
//    this.age = 2020 - this.birthYear;
//  }
//};
//
//john.calcAge();
//console.log(john);

//****************************************
// Coding challenge 4
//****************************************
//var mark = {
//  name: 'Mark',
//  mass: 86,
//  height: 1.83,
//  calcBMI: function() {
//    this.bmi = this.mass / this.height**2;
//  }
//};
//
//var john = {
//  name: 'John',
//  mass: 73,
//  height: 1.53,
//  calcBMI: function() {
//    this.bmi = this.mass / this.height**2;
//    return this.bmi;
//  }
//};
//
//console.log(john, mark);
//
//var isFater = function(john, mark) {
//
//  if (mark.calcBMI() > john.calcBMI()) {
//    return `${mark.name} has the highest BMI - ${mark.bmi}`;
//  } else if (john.bmi > mark.bmi) {
//    return `${john.name} has the highest BMI - ${john.bmi}`;
//  } else {
//    return `They have the same BMI - ${john.bmi}`;
//  }
//};
//
//console.log(isFater(john, mark));

//****************************************
// Loops and iterators
//****************************************

//for (var i = 0; i < 10; i++) {
//  console.log(i);
//}

// for loop
//var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
//
//for (var i = 0; i < john.length; i++) {
//  console.log(john[i]);
//}
//
////while loop
//var i = 0;
//while(i < john.length) {
//  console.log(john[i]);
//  i++;
//}

// continue and brake statements

//for (var i = 0; i < john.length; i++) {
//  if (typeof john[i] !== 'string') continue;
//  console.log(john[i]);
//}
//
//for (var i = 0; i < john.length; i++) {
//  if (typeof john[i] !== 'string') break;
//  console.log(john[i]);
//}

// Looping backwards
//for (var i = (john.length - 1); i >= 0; i--) {
//  console.log(i);
//}

//****************************************
// Coding challenge 5
//****************************************

john = {
  bills: [124, 58, 268, 180, 42],
  calcTips: function() {
    this.tips = [];
    this.finalValues = [];

    for (var i = 0; i < this.bills.length; i++) {
      var percentage;
      var bill = this.bills[i];
      if (bill < 50) {
        percentage = .2;
      } else if(bill >= 50 && bill < 200) {
        percentage = .15;
      } else {
        percentage = .1;
      }
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  }
}

john.calcTips();
console.log(john);
