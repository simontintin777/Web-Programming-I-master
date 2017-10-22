const fileData = require("./fileData");
const textMetrics = require("./textMetrics");
const fs = require("fs");

if (fs.existsSync("chapter1.result.json")) {
    let chapterResult1 = fileData.getFileAsJSON("chapter1.result.json");
    chapterResult1.then((data) => {
        console.log("chapter1.result.json is already existent !");
        console.log("The content of this file is as follows: ");
        console.log(data);
        return;
    }).catch((error) => {
        console.log(error);
    })
} else {
    let filetext1 = fileData.getFileAsString("chapter1.txt");
    filetext1.then((filetext1) => {
        let debugtext = textMetrics.simplify(filetext1);
        return debugtext;
    }).then((debugtext) => {
        fileData.saveStringToFile("chapter1.debug.txt", debugtext)
        return debugtext;
    }).then((debugtext) => {
        let metrics = textMetrics.createMetrics(debugtext);
        fileData.saveJSONToFile("chapter1.result.json", metrics);
        return metrics;
    }).then((metrics) => {
        console.log("The metrics of chapter1 are:")
        console.log(metrics);
        console.log("chapter1 is finished!");
    }).catch((error) => {
        console.log(error);
    });
}

if (fs.existsSync("chapter2.result.json")) {
    let chapterResult2 = fileData.getFileAsJSON("chapter2.result.json");
    chapterResult2.then((data) => {
        console.log("chapter2.result.json is already existent !");
        console.log("The content of this file is as follows: ");
        console.log(data);
        return;
    }).catch((error) => {
        console.log(error);
    })
} else {
    let filetext2 = fileData.getFileAsString("chapter2.txt");
    filetext2.then((filetext2) => {
        let debugtext = textMetrics.simplify(filetext2);
        return debugtext;
    }).then((debugtext) => {
        fileData.saveStringToFile("chapter2.debug.txt", debugtext)
        return debugtext;
    }).then((debugtext) => {
        let metrics = textMetrics.createMetrics(debugtext);
        fileData.saveJSONToFile("chapter2.result.json", metrics);
        return metrics;
    }).then((metrics) => {
        console.log("The metrics of chapter2 are:")
        console.log(metrics);
        console.log("chapter2 is finished!");
    }).catch((error) => {
        console.log(error);
    });
}

if (fs.existsSync("chapter3.result.json")) {
    let chapterResult3 = fileData.getFileAsJSON("chapter3.result.json");
    chapterResult3.then((data) => {
        console.log("chapter3.result.json is already existent !");
        console.log("The content of this file is as follows: ");
        console.log(data);
        return;
    }).catch((error) => {
        console.log(error);
    })
} else {
    let filetext3 = fileData.getFileAsString("chapter3.txt");
    filetext3.then((filetext3) => {
        let debugtext = textMetrics.simplify(filetext3);
        return debugtext;
    }).then((debugtext) => {
        fileData.saveStringToFile("chapter3.debug.txt", debugtext)
        return debugtext;
    }).then((debugtext) => {
        let metrics = textMetrics.createMetrics(debugtext);
        fileData.saveJSONToFile("chapter3.result.json", metrics);
        return metrics;
    }).then((metrics) => {
        console.log("The metrics of chapter3 are:")
        console.log(metrics);
        console.log("chapter3 is finished!");
    }).catch((error) => {
        console.log(error);
    });
}

    

// let res = textMetrics.createMetrics("Hello, my friends! This is a great day to say hello.\n\n\tHello! 2 3 4 23");
// console.log(res);
// var path = "chapter1.result.json";
// fileData.saveJSONToFile(path, "hello world");
