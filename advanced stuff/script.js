// Function constructor

//var john = {
//  name: 'John',
//  yearOfBirth: 1990,
//  job: 'teacher'
//};
//console.log(john);

//var Person = function(name, yearOfBirth, job) {
//  this.name = name;
//  this.yearOfBirth = yearOfBirth;
//  this.job = job;
//  //this.calculateAge = function() {
//  //  console.log(2020 - this.yearOfBirth);
//  //};
//}
//
//Person.prototype.calculateAge = function() {
//    console.log(2020 - this.yearOfBirth);
//};
//
//Person.prototype.lastName = 'Smith';
//
//var john = new Person('John', 1990, 'teacher');
////console.log(john);
//
//var jane = new Person('Jane', 1988, 'designer');
//var mark = new Person('Mark', 1948, 'retired');
//
//john.calculateAge();
//jane.calculateAge();
//mark.calculateAge();
//
//console.log(john.lastName);
//console.log(jane.lastName);
//console.log(mark.lastName);
//console.log(john);

// Object.create

//var personProto = {
//  calculateAge: function() {
//    console.log(2020 - this.yearOfBirth);
//  }
//};
//
//var john = Object.create(personProto);
//john.name = 'John';
//john.yearOfBirth = 1990;
//john.job = 'teacher';
//
//var jane = Object.create(personProto, {
//  name: { value: 'Jane' },
//  yearOfBirth: { value: 1969 },
//  job: { value: 'designer' }
//});

//var years = [1990, 1965, 1976, 1954, 2005];
//
//function arrayCalc(arr, fn) {
//  var arrRes = [];
//  for (var i = 0; i < arr.length; i++) {
//    arrRes.push(fn(arr[i]));
//  }
//  return arrRes;
//}
//
//function calculateAge(el) {
//  return 2020 - el;
//}
//
//function isFullAge(el) {
//  return el >= 18;
//}
//
//function maxHeartRate(el) {
//  if (el >= 18 && el <= 81) {
//  return Math.round(206.9 - (.67 * el));
//  } else {
//    return -1;
//  }
//}
//
//var ages = arrayCalc(years, calculateAge);
//var fullAges = arrayCalc(ages, isFullAge);
//var rates = arrayCalc(ages, maxHeartRate);
//
//console.log(ages);
//console.log(rates);

//function interviewQuestions(job) {
//  if (job === 'designer') {
//    return function(name) {
//      console.log(name + ', can you please explain what UX desogn is?');
//    }
//  } else if(job === 'teacher') {
//    return function(name) {
//      console.log('What subject do you teach, ' + name + '?');
//    }
//  } else {
//    return function(name) {
//      console.log(`Hello ${name}, what do you do?`);
//    }
//  }
//}
//
//var teacherQuestion = interviewQuestions('teacher');
//
//teacherQuestion('John');
//interviewQuestions('teacher')('Mark');


//function game() {
//  var score = Math.random() * 10;
//  console.log(score >= 5);
//}
//
//game();
//
//(function () {
//  var score = Math.random() * 10;
//  console.log(score >= 5);
//}) ();
//
////console.log(score);
//
//(function (goodLuck) {
//  var score = Math.random() * 10;
//  console.log(score >= 5 - goodLuck);
//}) (5);


//function retirement(retirementAge) {
//  var a = ' years left untill retirement.';
//  return function(yearOfBirth) {
//    var age = 2020 - yearOfBirth;
//    console.log((retirementAge - age) + a);
//  }
//}
//
//var retirementUS = retirement(66);
//
//var retirementGermany = retirement(65);
//var retirementIceland = retirement(67);
//
//retirementGermany(1990);
//retirementUS(1990);
//retirementIceland(1990);
//
//function interviewQuestions(job) {
//  return function(name) {
//    if (job === 'designer') {
//      console.log(name + ', can you please explain what UX desogn is?');
//    } else if(job === 'teacher') {
//      console.log('What subject do you teach, ' + name + '?');
//    } else {
//      console.log(`Hello ${name}, what do you do?`);
//    }
//  }
//}
//
//teacher = interviewQuestions('teacher');
//teacher('Jack')
//interviewQuestions('designer') ('Mike');


//var john = {
//  name: 'John',
//  age: 26,
//  job: 'teacher',
//  presentation: function(style, timeOfDay) {
//    if (style == 'formal') {
//      console.log(`Good ${timeOfDay} Ladies and gentelmen! I'm ${this.name}, I'm a ${this.job} and I'm ${this.age} years old`);
//    } else if (style == 'friendly') {
//      console.log(`Hey! What's up? I'm ${this.name}, I'm a ${this.job} and I'm ${this.age} years old. Have a nice ${timeOfDay}!`);
//    }
//  }
//}
//
//var emily = {
//  name: 'Emily',
//  age: 35,
//  job: 'designer'
//}
//
//john.presentation('formal', 'mornng');
//john.presentation.call(emily, 'friendly', 'afternoon');
//john.presentation.apply(emily, ['formal', 'afternoon']);
//
//var johnFriendly = john.presentation.bind(john, 'friendly');
//johnFriendly('evening');
//johnFriendly('night');
//
//
//var years = [1990, 1965, 1976, 1954, 2005];
//
//function arrayCalc(arr, fn) {
//  var arrRes = [];
//  for (var i = 0; i < arr.length; i++) {
//    arrRes.push(fn(arr[i]));
//  }
//  return arrRes;
//}
//
//function calculateAge(el) {
//  return 2020 - el;
//}
//
//function isFullAge(limit ,el) {
//  return el >= limit;
//}
//
//var ages = arrayCalc(years, calculateAge);
//
//var fullJapan = arrayCalc(ages, isFullAge.bind(this, 40));
//console.log(ages);
//console.log(fullJapan);


(function() {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (var i =0; i < this.answers.length; i++) {
      console.log(`${i}: ${this.answers[i]}`);
    }
  }

  Question.prototype.checkAnswers = function(ans) {
    if (ans === this.correct) {
      console.log('Correct answer!');
    } else {
      console.log('Wrong answer. Try again.')
    }
  }

  var q1 = new Question('Is JavaScript the coolest pprogramming language in the world?', ['yes', 'no'], 0);
  var q2 = new Question('What is your name?', ['Jay', 'Ivan', 'Iurii'], 2);
  var q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tediuos'], 2);
  var questions = [q1, q2, q3];
  var n = Math.floor(Math.random() * questions.length);
  questions[n].displayQuestion();
  var answer = parseInt(prompt('Please select the correct answer.'));
  questions[n].checkAnswers(answer);
})();



(function() {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (var i =0; i < this.answers.length; i++) {
      console.log(`${i}: ${this.answers[i]}`);
    }
  }

  Question.prototype.checkAnswers = function(ans, callback) {
    var sc;

    if (ans === this.correct) {
      console.log('Correct answer!');
      sc = callback(true);
    } else {
      console.log('Wrong answer. Try again.')
      sc = callback(false);
    }

    this.displayScore(sc);
  }

  Question.prototype.displayScore = function(score) {
    console.log('Your curent score is: ' + score);
    console.log('-------------------------------');
  }

  var q1 = new Question('Is JavaScript the coolest pprogramming language in the world?', ['yes', 'no'], 0);
  var q2 = new Question('What is your name?', ['Jay', 'Ivan', 'Iurii'], 2);
  var q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tediuos'], 2);
  var questions = [q1, q2, q3];

  function score() {
    var sc = 0;
    return function(correct) {
      if (correct) {
        sc++;
      }
      return sc;
    }
  }

  var keepScore = score();
  function nextQuestion() {
    var n = Math.floor(Math.random() * questions.length);
    questions[n].displayQuestion();

    var answer = prompt('Please select the correct answer.');

    if(answer !== 'exit') {
      questions[n].checkAnswers(parseInt(answer), keepScore);

      nextQuestion();
    }
  }
  nextQuestion();
})();
