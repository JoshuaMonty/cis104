"use strict";
const PROMPT = require('readline-sync');

let continueResponse;
let LastName, FirstName, DateofBirth, Age;
let PolicyNumber, PremiumDueDate, AtFaultAccidents, InsurancePremium;

function main() {
    if (continueResponse !== 0 && continueResponse !== 1) {
        setContinueResponse();
    }
    if (continueResponse = 1) {
        setcontinueResponse();
        setLastName();
        setFirstName();
        setDateOfBirth();
        setAge();
        setAtFaultAccidents();
        setPolicyNumber();
        setInsurancePremium();
        setPremiumDueDate();
        printInsurancePremium();
        return main();
    }
    printGoodbye();
}

main();

function setContinueResponse() {
    if (continueResponse === 1 || continueResponse !== 0) {
        continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        if (continueResponse === 0 || continueResponse !== 1) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = 1;

            return setContinueResponse();
        } else {
            continueResponse = 1;
        }
    }
}

function setLastName() {
    lastName = PROMPT.question(`\nEnter your last name: `);
}

function setFirstName() {
    firstName = PROMPT.question(`\nEnter your first name: `);
}

function setDateOfBirth() {
    DateOfBirth = String(PROMPT.question(`\nEnter Your Date Of Birth (mm/dd/yyyy): `));
}

function setAge() {
    Age = Number(PROMPT.question(`\nEnter Your Current Age: `));
    if (Age < 18 || Age > 100) {
        console.log(`Incorrect Age. Please Try Again. `);
        return setAge();
    }
}

function setAtFaultAccidents() {
    AtFaultAccidents = Number(PROMPT.question(`\nEnter the number of at fault accidents within the last three years: `));
}

function setInsurancePremium() {
    InsurancePremium = 0;
    const BASE_PRICE = 100;
    const AGE_OVER_15 = 20;
    const AGE_OVER_30 = 10;
    const AGE_OVER_60 = 30;
    const EACH_A_F_A = 50;
    const A_F_A_TOTAL = AtFaultAccidents * EACH_A_F_A;
    if (Age > 0) {
        if (Age >= 15 && Age < 30) {
            InsurancePremium = AGE_OVER_15 + BASE_PRICE + A_F_A_TOTAL;
        } else if (Age >= 30 && Age < 45) {
            InsurancePremium = AGE_OVER_30 + BASE_PRICE + A_F_A_TOTAL;
        } else if (Age >= 60) {
            InsurancePremium = AGE_OVER_60 + BASE_PRICE + A_F_A_TOTAL;
        } else {
            InsurancePremium = BASE_PRICE + A_F_A_TOTAL;
        }
    }
}

function setPremiumDueDate() {
    PremiumDueDate = ('PAID');
}

function printInsurancePremium() {
    process.stdout.write('\x1Bc');
    console.log(`\n ${PolicyNumber} \n ${FirstName} ${LastName} \n ${DateOfBirth} \n ${InsurancePremium} \n ${PremiumDueDate}`);
}

function printGoodbye() {
    console.log(`\nThank You! Good-Bye! `);
}