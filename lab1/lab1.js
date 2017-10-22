// Name: Yi Ding 
// CWID : 10419639
// CS 546 lab1


function sumOfSquares(num1, num2, num3) {
    if(typeof(num1) == "number" && typeof(num2) == "number" && typeof(num3) == "number") {
        return num1 * num1 + num2 * num2 + num3 *num3;
    } else {
        throw "Invalid imput !";
    }   
}
console.log(sumOfSquares(5, 3, 10)); 
console.log(sumOfSquares(5, "d", 10)); 



function sayHelloTo(firstName, lastName, title) {
    if(arguments.length == 3 && typeof(firstName) == "string" && typeof(lastName) == "string" && typeof(title) == "string") {
        console.log(`Hello, ${title} ${firstName} ${lastName}! Have a good evening!`);
    } else if (arguments.length == 2 && typeof(firstName) == "string" && typeof(lastName) == "string") {
        console.log(`Hello, ${firstName} ${lastName}. I hope you are having a good day!`);
    } else if (arguments.length == 1 && typeof(firstName) == "string" ) {
        console.log(`Hello, ${firstName}!`);
    } else {
         throw "Invalid imput !";
    }
}

sayHelloTo("123");
sayHelloTo("aa", "dd");
sayHelloTo("aa", "dd", 22);



function cupsOfCoffee(num) {
    if(arguments.length != 1 || typeof(num) != "number" || num % 1 !== 0 || num < 0) {
        throw "Invalid imput !";
    } else if(num == 0) {
        console.log("No coffee left on the desk");
    } else {
        for(let i = 1; i < num; i++) {
            console.log(`${num - i + 1} cups of coffee on the desk! ${num - i + 1} cups of coffee!`);
            console.log(`Pick one up, drink the cup, ${num - i} cups of coffee on the desk!`);
            console.log(" ");
        }
        console.log("1 cups of coffee on the desk! 1 cups of coffee!");
        console.log("Pick it up, drink the cup, no more coffee left on the desk!");
    }
}

cupsOfCoffee(-7);
cupsOfCoffee(5);
cupsOfCoffee(5.5);
cupsOfCoffee(1,6);
cupsOfCoffee("dd");



function occurrencesOfSubstring(fullString, subString) {
    if(arguments.length != 2 || typeof(fullString) != "string" || typeof(subString) != "string") {
       throw "Invalid imput !"; 
    } else {
        num = 0;
        while(fullString.search(subString) >= 0) {
            num ++;
            fullString = fullString.substring(fullString.search(subString) + 1);
        }
        console.log(num);
    }
};

occurrencesOfSubstring("hello world", "o");
occurrencesOfSubstring("hello world", "y");
occurrencesOfSubstring("Helllllllo, class!", "ll");
occurrencesOfSubstring("hello world");
occurrencesOfSubstring("hello world", 12);



function shuffle(array) {
    var _array = array.concat();
    for(var i = _array.length; i--;) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = _array[i];
        _array[i] = _array[j];
        _array[j] = temp;
    }
    return _array;
}
function randomizeSentences(paragraph) {
    if(arguments.length != 1 || typeof(paragraph) != "string") {
        throw "Invalid imput !"; 
    } else {
        var outCome = new Array;
        var pattern = /([A-Z][\w|\s|\d|\,|\-]*)([a-z])(\.|\!|\?)/g;
        var outCome = paragraph.match(pattern);
        var outCome = shuffle(outCome);
        var result = "";
        for(let i = 0; i < outCome.length; i++) {
            var result = result + " " + outCome[i];
        }
        return result;
    }   

}
var paragraph = "Hello, world! I am a paragraph. You can tell that I am a paragraph because there are multiple sentences that are split up by punctuation marks. Grammar can be funny, so I will only put in paragraphs with periods, exclamation marks, and question marks -- no quotations.";
console.log(randomizeSentences(paragraph));




    
    

