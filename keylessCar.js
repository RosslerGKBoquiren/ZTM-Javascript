// make a keyless car
// this car will only let you drive if you are over 18 years old.

let age = prompt("What is your age?");

if (Number(age) < 18) {
    alert ('Sorry, you are too young to drive this car. Powering Off')
} else if (Number(age) === 18) {
    alert ('Congratulations on your first year of driving. Enjoy the ride')
} else if (Number(age) > 18) {
    alert ('Powering On. Enjoy the ride!')
}