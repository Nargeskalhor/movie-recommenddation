"use strict";
const recommendedMovies1 = [
  "Inception",
  "The Matrix",
  "Interstellar",
  "Memento",
];
const recommendedMovies2 = ["The Matrix", "Avatar", "Inception", "Titanic"];

const merged = [...recommendedMovies1, ...recommendedMovies2];

const unique = [...new Set(merged)];

const reversedMovies = unique.reverse();

const moviesString = reversedMovies.join("|");

console.log(moviesString);
