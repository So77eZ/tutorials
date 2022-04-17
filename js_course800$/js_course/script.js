// // console.log(2+2);
// 1 урок


"use strict";

// let something = 15;
// console.log(something);

// let number = 5; //изменяема//
// const LeftBorderWidth = 1;

// number = 10;
// console.log(number);

// const obj = {
//     a: 50
// };
// obj.a = 10;
// console.log(obj);
// урок 2



// "use strict";
// let number = 4.6;
// console.log(number);

// const person =`Alex Clarc`;

// const bool = true;

// const object = {
//     name: `John`,
//     age:25,
//     isMarried:false
// };
// console.log(object.name);

// let arr = [`plum.png`,`orange.jpg`,`apple.bmp`];
// console.log(arr[2]);
// урок 3

// "use sctrict";

// console.log(`Я`); console.log(`Учу`);
// console.log(`Джава скрипт епта`);

////12 урок. Практика, делаем какое-то приложение.
//
// //1 task
// const nubmberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?") ;
//
// //2 task
// let personalMovieDB = {
//     count: nubmberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     private: false
// };

// //3 task
// const lastSeenMovie = prompt('Какой фильм вы смотрели в последний раз?'),
// lastSeenMovieScore = prompt('На сколько его оцените?');

// personalMovieDB.movies[lastSeenMovie] = lastSeenMovieScore;

// console.log(personalMovieDB);

//13 урок. Условия.



// if (4 == 4) {
//     console.log("Ну ты даешь!!!");
// } else {
//     console.log("Fuck it");
// }
//
// const num = +prompt("Type any number here");
// // const num = 50;
// // if (num < 49) {
// //     console.log("num is less than server number");
// //     alert("num is less than server number");
// // } else if (num == 50) {
// //     console.log("num is equal to server number, congrats");
// //     alert("num is equal to server number, congrats");
// // } else {
// //     console.log("num is more than server number");
// //     alert("num is more than server number");
// // }

// // (num === 50) 
// // ? console.log("num is equal to server number, congrats?")
// // : console.log("number isn't equal to our score");


// switch (num) {
//     case 69:
//         console.log("Wrong, u horny bastard!");
//         alert("Wrong, u horny bastard!");
//         break;
//     case 100:    
//         console.log("No no no");
//         alert("No no no");
//         break;
//     case 1:    
//         console.log("That's not that easy as u think");
//         alert("That's not that easy as u think");
//         break;   
//     case 50:
//         console.log("Yeah, u right");
//         alert("U goddamn right");
//         break;
//     default:
//         console.log("Not this time!");
//         alert("Not this time!");
// }
// //14 урок. Циклы.

// let num = 50;
// // // 1 way
// // while (num >= 45) {
// //     console.log(num);
// //     num--;
// // }

// // 2 way
// // do {
// //     console.log(num);
// //     num--;
// // }
// // while (num >= 45 );

// // 3 way
// for (let i = 0; i <= 50; i++) {
//     if (i === 6){
//         //break; // скипнет весь цикл когда i === 6
//         continue; // скипнет 6ку 
//     }
//     console.log(num++);
// }

// //15 урок. Циклы.
// const nubmberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

// let personalMovieDB = {
//     count: nubmberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     private: false
// };

// for (let i = 0; i < 2; i++) {
//     const a = prompt("Один из недавно просмотренных фильмов?"),
//         b = prompt("На сколько его оцените?");


//     if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log("done");
//     } else {
//         console.log("error");
//         i--;
//     }
// }

// if (personalMovieDB.count < 10) {
//     prompt("Малова-то фильмов будет");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     prompt("Ну нормас так фильмов насмотрелся, четка!");
// } else if (personalMovieDB.count > 30) {
//     prompt("Че, дохуя киноман!?, красава!");
// } else {
//     prompt("Что-то пошло не так");
// }
// console.log(personalMovieDB);


// урок 16 Функции

// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     num = 20;
// }

// showFirstMessage("Hellow World");
// console.log(num);

// function calc(a, b, c) {
//        if (c == "+") {
//            return (a + b);  
//        }          
//     else if(c == "-") {
//         return (a - b);
//     }
//     else if(c == "*") {
//         return (a * b);
//     }
//     else if(c == "/") {
//         return (a / b);
//     }
//     else if(c == "//" || c == "%") {
//         return (a % b);
//     }
//     else{
//         return("Error");
//     }
// }
// console.log(calc(5, 10, "*"));

// // 1 тип функций - function declaration - globalnaya

// const anotherNum = ret();
// console.log(anotherNum);

// function ret() {
//     let num = "1 тип";
//     return num;
// }

// // 2 тип функций - function expression - localnaya

// const logger = function () {
//     console.log("2 тип");
// };

// logger();

// // 3 тип функций - ES6 - стрелочная

// const calc = (a, b) => a + b;

// console.log(calc(2,3));


// урок 17. Методы и свойства строк и чисел

let text = "Миша никак не может разобраться в себе";
let fullAddress = [`Sweden`, `Stockholm`, `Storgatan`, 52];

console.log(text.length);
console.log(fullAddress.length);
console.log(text.toUpperCase());
console.log(text.toLowerCase());

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));

const logg = "Hello intresting world";

console.log(logg.slice(-11, -6));
console.log(logg.slice(6));
console.log(logg.substring(6, 11));
console.log(logg.substr(0, 5));

const num = 12.22222;
console.log(Math.round(num));

const test = "12.25454px";
console.log(parseInt(test));
console.log(parseFloat(test));