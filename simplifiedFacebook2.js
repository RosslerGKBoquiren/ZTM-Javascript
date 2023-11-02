let obj = {
    username: 'JohnDoe',
    password: 'javascriptIsCool'
};

let database = [
    {
        username: 'JohnDoe',
        password: 'javascriptIsCool'
    },

    // added 2 other usernames and passwords since on facebook, there are more than 1 account

    {
        username: 'Charlotte',
        password: 'jowaislife'
    },

    {
        username: 'Jason',
        password: 'excavatorislife'
    }
];

let newsfeed = [
    {
        username: 'Banana',
        timeline: 'Hello, World!'
    }, 
    
    {
        username: 'JasonKaka',
        timeline: 'Excavator and trains!'
    }, 
    
    {
        username: 'Charmuta',
        timeline: 'Jowa ko!'
    }
];

// created a new function that validates the username and password in order to avoid looping through each and returning the newsfeed everytime 

function isUserValid(user, pass) {
    for (let i = 0; i < database.length; i++) {
        if (database[i].username === user &&
            database[i].password === pass) {
                return true;
            }
        }
        return false;
}

// using the previous function, we use the isolated username and password to reveal the newsfeed 

function signIn(user, pass) {
    if (isUserValid(user, pass)) {
            console.log(newsfeed);
    } else {
        alert ('Sorry, wrong username or password');
    }
};

let userNamePrompt = prompt('What is your username?');
let passwordPrompt = prompt('What is your password?');

signIn(userNamePrompt, passwordPrompt);