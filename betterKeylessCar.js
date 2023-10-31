// improving the keyless car from the previous exercise

// previous code:
let age = prompt("What is your age?");

if (Number(age) < 18) {
    alert ('Sorry, you are too young to drive this car. Powering Off')
} else if (Number(age) === 18) {
    alert ('Congratulations on your first year of driving. Enjoy the ride')
} else if (Number(age) > 18) {
    alert ('Powering On. Enjoy the ride!')
}


// 1. make a function 
function checkDriverAge() {
    let age = prompt('What is your age?');

    if (Number(age) < 18) {
        alert ('Sorry, you are too young to drive this car. Powering Off')
    } else if (Number(age) === 18) {
        alert ('Congratulations on your first year of driving. Enjoy the ride')
    } else if (Number(age) > 18) {
        alert ('Powering On. Enjoy the ride!')
    }

}

// 2. make the same thing using function expression

let checkDriverAge2 = function () {
    let age = prompt('What is your age?');

    if (Number(age) < 18) {
        alert ('Sorry, you are too young to drive this car. Powering Off')
    } else if (Number(age) === 18) {
        alert ('Congratulations on your first year of driving. Enjoy the ride')
    } else if (Number(age) > 18) {
        alert ('Powering On. Enjoy the ride!')
    }

}


// 3. make the same but with no prompts

function checkDriverAge(age) {
    if (Number(age) < 18) {
        return 'Sorry, you are too young to drive this car. Powering Off';
    } else if (Number(age) === 18) {
        return 'Congratulations on your first year of driving. Enjoy the ride';
    } else if (Number(age) > 18) {
        return 'Powering On. Enjoy the ride!';
    }
}