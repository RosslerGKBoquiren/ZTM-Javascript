let obj = {
    username: 'JohnDoe',
    password: 'javascriptIsCool'
};

let database = [{
    username: 'JohnDoe',
    password: 'javascriptIsCool'
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


let userNamePrompt = prompt('What is your username?');
let passwordPrompt = prompt('What is your password?');

function signIn (user, pass) {
    if (user === database[0].username && 
        pass === database[0].password) {
            console.log(newsfeed);
    } else {
        alert ('Sorry, wrong username or password');
    }
};

signIn(userNamePrompt, passwordPrompt);