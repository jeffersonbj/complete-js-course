//Constructor
// var Person = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person.prototype.calculateAge = function () {
//     console.log('Age:', 2018 - this.yearOfBirth);
// }

// var jeff = new Person('Jefferson', 1988, 'Dev')
// console.log(jeff, jeff.calculateAge());

// var amanda = new Person('Amanda', 1995, 'Future Dev');
// console.log(amanda, amanda.calculateAge());

//Object.create
// var personProto = {
//     calculateAge: function () {
//         console.log(2018 - this.yearOfBirth);
//     }
// };

// var jeff = Object.create(personProto);
// jeff.name = 'Jefferson';
// jeff.yearOfBirth = 1988;
// jeff.job = 'Dev';

// var jane = Object.create(personProto, {
//     name: {
//         value: 'Jane'
//     },
//     yearOfBirth: {
//         value: 1995
//     },
//     job: {
//         value: 'teacher'
//     }
// });

// console.log(jeff, jane);

// Passing Functions as arguments
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arraryCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }

    return arrRes;
}

function calculateAge(el) {
    return 2018 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81)
        return Math.round(206.9 - (0.67 * el));

    return -1;
}

var ages = arraryCalc(years, calculateAge);
console.log(ages);

var fullAges = arraryCalc(ages, isFullAge);
console.log(fullAges);

var maxHeart = arraryCalc(ages, maxHeartRate);
console.log(maxHeart);
*/

// IIFE
/*
(function () {
    var score = Math.random() * 10;
    console.log(score, score >= 5);
})();

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score, score >= 5 - goodLuck);
})(5);
*/

//Closure

function retirement(retirementAge) {
    var a = ' years left until retirement.';

    return function (yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
retirementUS(1988);

function interviewQuestion(job) {
    return function (name) {
        if (job === 'designer') {
            console.log('E os design, ' + name + '?');
        } else if (job === 'teacher') {
            console.log('Ensina o que, ' + name + '?');
        } else
            console.log('O que você faz da vida, ' + name + '?');
    }
}

interviewQuestion('designer')('Jeff');
interviewQuestion('teacher')('Jeff');
interviewQuestion('driver')('Jeff');