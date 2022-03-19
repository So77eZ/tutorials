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
//14 урок. Циклы.

let num = 50;
// // 1 way
// while (num >= 45) {
//     console.log(num);
//     num--;
// }

// 2 way
// do {
//     console.log(num);
//     num--;
// }
// while (num >= 45 );

// 3 way
for (let i = 0; i <= 50; i++) {
    if (i === 6){
        //break; // скипнет весь цикл когда i === 6
        continue; // скипнет 6ку 
    }
    console.log(num++);
}