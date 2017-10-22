// Name: Yi Ding 
// CWID : 10419639
// CS 546 lab2

function str_repeat(str, num){ 
    return new Array( num + 1 ).join( str ); 
}

module.exports = { 
    description : "This metric will print out a variety of shapes on your console", 

    triangle: function (lines) {
        let string = "";
        if(lines === undefined || typeof lines !== "number" || Math.floor(lines) !== lines || lines < 0) {
                throw "Invalid input lines! lines should be positive integer.";
        } else if(lines === 1) {
            string = ("\/" + "\\");
        } else if(lines === 2){
            string = (" " + "\/" + "\\" + "\n");
            string = string + ("\/" + "\-" + "\-" + "\\");
        } else {
            for(let i = 1; i < lines; i++) {
                string = string + (str_repeat(" ", lines - i) + "\/" + str_repeat(" ", 2 * i - 2)+ "\\" + str_repeat(" ", lines - i) + "\n");
            }
            string = string + ("\/" + str_repeat("-", 2 * lines - 2) + "\\");
        }
        return string;    
    },          

    square: function (lines) {
        let string = "";
        if(lines === undefined || typeof lines !== "number" || lines <= 1 || Math.floor(lines) !== lines) {
                throw "Invalid input lines! lines should be positive integer more than 1.";
        } else if(lines === 2) {
            string = ("\|" + "\-" + "\-" + "\|"+ "\n");
            string = string + ("\|" + "\-" + "\-" + "\|"+ "\n");
        } else {
            string = string + ("\|" + str_repeat('-', lines) + "\|"+ "\n");
            for(let i = 1; i <= lines - 2; i++) {
                string = string + ("\|" + str_repeat(' ', lines) + "\|"+ "\n");
            }
            string = string + ("\|" + str_repeat('-', lines) + "\|"+ "\n");
        }
        return string;
    },

    rhombus: function (lines) {
        let string = "";
        if(lines === undefined || typeof lines !== "number" || Math.floor(lines) !== lines || lines % 2 !== 0 || lines < 2) {
                throw "Invalid input lines! lines should be positive even-integer.";
        } else if (lines === 2) {
            string = ("\/" + "\-" + "\\"+ "\n");
            string = string + ("\\" + "\-" + "\/"+ "\n");
        } else {
            string = (str_repeat(" ", lines / 2 - 1) + "\/" + "\-" + "\\"+ "\n");
            for(let i = 1; i <= lines / 2 - 1; i++) {
                string = string + (str_repeat(" ", lines / 2 - i - 1) + "\/" + str_repeat(" ", 2 * i + 1) + "\\"+ "\n");
            }
            for(let i = lines / 2 - 1; i >= 1; i--) {
                string = string + (str_repeat(" ", lines / 2 - i - 1) + "\\" + str_repeat(" ", 2 * i + 1) + "\/"+ "\n");
            }  
            string = string + (str_repeat(" ", lines / 2 - 1) + "\\" + "\-" + "\/"+ "\n");
        }
        return string;
    },

};


