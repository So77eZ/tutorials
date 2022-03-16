// // console.log(2+2);
// 1 урок


// "use strict";

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

"use strict";

// if (4 == 4) {
//     console.log("Ну ты даешь!!!");
// } else {
//     console.log("Fuck it");
// }

const num = +prompt("Type any number here");

if (num < 49) {
    console.log("num is less than server number");
    alert("num is less than server number");
} else if (num == 50) {
    console.log("num is equal to server number, congrats");
    alert("num is equal to server number, congrats");
} else {
    console.log("num is more than server number");
    alert("num is more than server number");
}