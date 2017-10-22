// Name: Yi Ding 
// CWID : 10419639
// CS 546 lab2

const printShape = require ("./printShape");
const prompt = require ("prompt");

function getInfo() {
    
    prompt.start();
    
    const linesOfTriangle = {
        name: 'linesOfTriangle',
        description: 'How big of triangles do you want to print?',     
        type: 'number',                 
        required: true                      
    };

    const linesOfSquare = {
        name: 'linesOfSquare',
        description: 'How big of squares do you want to print?', 
        type: 'number',  
        required: true 
    };

    const linesOfRhombus = {
        name: 'linesOfRhombus',
        description: 'How big of rhombuses do you want to print?', 
        type: 'number',  
        required: true 
    }; 

    const quitPrompt = {
        name: 'quit',
        description: 'Do you want to quit after this print?', 
        type: 'boolean',  
        required: true 
    }; 
    
    prompt.get([linesOfTriangle, linesOfSquare, linesOfRhombus, quitPrompt], function (err, result) {

        if(result) { 
            let lines1 = result.linesOfTriangle;
            let lines2 = result.linesOfSquare;
            let lines3 = result.linesOfRhombus;
            let quit = result.quit;
            console.log("Triangles:");
            for(let i = 0; i < 10; i++) {
                console.log(printShape.triangle(lines1));
            }

            console.log("Squares:");
            for(let i = 0; i < 10; i++) {
                console.log(printShape.square(lines2));
            }

            console.log("Rhombuses:");
            for(let i = 0; i < 10; i++) {
                console.log(printShape.rhombus(lines3));
            }
            
            if(!quit) {
                getInfo();
            }
        } else if (err) {
            console.error(err)
        }
        
  });
    
}
getInfo();
