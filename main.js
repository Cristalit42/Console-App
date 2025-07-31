"use strict"

// let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', 0);

let personalMovieDB = {
    count: '',
    movies: {},
    actors: '',
    genres: '',
    privat: '',
};

let movieNameAnswer, 
    movieRateAnswer;

movieNameAnswer = prompt('Один из последних просмотренных фильмов?', '');
movieRateAnswer = prompt('На сколько оцените его?', '');

personalMovieDB.movies = {
  [movieNameAnswer]: movieRateAnswer,
};

console.log (personalMovieDB.movies)