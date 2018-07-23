//  ---------- Hoisting

// FUNCTIONS
calculateAge(1988); // A função já está disponível para uso, pois foi atribuida ao 'variable object'

function calculateAge(birthYear) {
    console.log(2018 - birthYear);
}

//Não vai funcionar pois não é uma declaração de função e sim uma expressão de função o Hoisting não funciona para esse caso
//etirement(1988);

var retirement = function (year) {
    console.log(65 - (2018 - year));
}

//retirement(1988);

//VARIABLES
console.log(age); //undefined, pois o valor não foi atibuido e na fase de criação a varíavel foi atribuida com o valor de undefined
var age = 30;
console.log(age); // 30

function foo() {
    //undefined, pois como no caso acima a variável está declarada para o escopo da função e o age fora da função, escopo global
    console.log(age);
    var age = 60;
    console.log(age) //60
}

console.log(age) //30, pois é o age do escopo global e não sofre alteração alguma

///////////////////////
//  ---------- Scoping
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';

        //O escopo tem acesso as variáveis previamente declaradas, mas o escopo global, por exemplo, não tem acesso a elas, 
        // a menos que sejam retornadas;
        console.log(a + b + c);
    }
}

///////////////////////
//  The 'this' Keyword

