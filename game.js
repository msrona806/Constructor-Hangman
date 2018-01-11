// import { randomBytes } from "crypto";

// required packages
var fs = require("fs");
var inquire = require("inquirer");
// var letters = require("../letters.js");
var words = require ("./words.js")
// var word = require ("./word.js")

// VARIABLES

// random word to be guessed
var wordBank = words; 
var randomWord = Math.floor(Math.random() * words.length);
var currentWord = ""; // holds random word picked

console.log(currentWord = wordBank[randomWord]);

// display letters that have been guessed

// makes letters lowercase
// .toLowerCase();
// display score

// counter to display remaining guesses

// logic to end game if remaining guesses equal 0

// function to start the game


// function to end the game, restart if player wants to play again or display good-bye message

