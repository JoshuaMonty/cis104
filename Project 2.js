"use strict";
const PROMPT = require('readline-sync');

let lastName, firstName;
let age;
const LANGUAGE = 'English';

function main() {
    let currentYear = 2017;
    setLastName();
    setFirstName();
    setAge(currentYear);
    printResults();
}

main();

function setLastName() {
    lastName = PROMPT.question(`\nPlease enter last name: `);
}

function setFirstName() {
    firstName = PROMPT.question(`\nPlease enter first name: `);
}

function setAge(currentYear) {
    let year = PROMPT.question(`\nWhat year were you born?: `);
    age = currentYear - year;
}

function printResults() {
    process.stdout.write('\x1Bc'); //Clears screen
    console.log("\nHello " + firstName + " " + lastName + ". You are " + age + " years old.");
    console.log(`Your primary language is ${LANGUAGE}`);
}