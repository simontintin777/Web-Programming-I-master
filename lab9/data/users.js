const bcrypt = require("bcrypt-nodejs");

var hashed_one = bcrypt.hashSync("elementarymydearwatson");
var hashed_two = bcrypt.hashSync("damnyoujackdonaghy");
var hashed_three = bcrypt.hashSync("quidditch");


const userList = [
    {
        "id": 1,
        "username": "masterdetective123",
        "first_name": "Sherlock",
        "last_name": "Holmes",
        "profession": "Detective",
        "bio": "Sherlock Holmes (/ˈʃɜːrlɒk ˈhoʊmz/) is a fictional private detective created by British author Sir Arthur Conan Doyle. Known as a 'consulting detective' in the stories, Holmes is known for a proficiency with observation, forensic science, and logical reasoning that borders on the fantastic, which he employs when investigating cases for a wide variety of clients, including Scotland Yard.",
        "password": hashed_one
    },
    {
        "id": 2,
        "username": "lemon",
        "first_name": "Elizabeth",
        "last_name": "Lemon",
        "profession": "Writer",
        "bio": "Elizabeth Miervaldis 'Liz' Lemon is the main character of the American television series 30 Rock. She created and writes for the fictional comedy-sketch show The Girlie Show or TGS with Tracy Jordan.",
        "password": hashed_two
    },
    {
        "id": 3,
        "username": "theboywholived",
        "first_name": "Harry",
        "last_name": "Potter",
        "profession": "Student",
        "bio": "Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the life of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry . The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic, and subjugate all wizards and Muggles.",
        "password": hashed_three
    }
];

let exportedMethods = {
    // getAllUsers: () => { return Promise.resolve(userList.slice(0)); },
    findOne: (username) => {
        if (username === undefined) return Promise.reject("No user provided");

        let user = userList.filter(x => x.username == username).shift();
        if (!user) return Promise.reject("No user found")

        return Promise.resolve(user);
    }
    // getUserByUsernameAndPassword: (username,password) => {
    //     if (username === undefined) return Promise.reject("No username provided");
    //     let user = userList.filter(x => x.username == username).shift();
    //     if (!user) return Promise.reject("No user found");
    //     else {
    //         if(user.password != password)
    //             return Promise.reject("password wrong");
    //     }
    //     return Promise.resolve(user);
    // }
}

module.exports = exportedMethods;