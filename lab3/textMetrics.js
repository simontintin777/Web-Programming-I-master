let textMetrics = exports = module.exports;

textMetrics.simplify = (text) => {
    if (text && typeof text == "string") {
        text = text.toLowerCase();
        text = text.replace(/[\s|\n|\r|\n\r]+/g, " ");
        text = text.replace(/(\.|\!|\?|\,|\-|\;|\:|\[|\]|\{|\}|\(|\)|\\|\||\/|\=|\<|\>|\@|\#|\$|\%|\^|\&|\_|\+|\"|\`|\*)*/g, "");
        text = text.replace(/^\s+|\s+$/g,"");
        return text;
    } else {
        throw "No valid text provided to simplify !";
    }   
}

textMetrics.createMetrics = (text) => {
   
    if (!text || typeof text !== "string") {
        throw "No valid text provided to createMetrics !";
    }

    let totalLetters = 0, totalWords = 0, uniqueWords = 0, longWords = 0, averageWordLength = 0;
    let wordOccurrences = {};
    let strArr = textMetrics.simplify(text).split(" ");
    totalLetters = text.replace(/[^\w]/g, "").length; 
    totalWords = strArr.length;
    averageWordLength = totalLetters / totalWords;

    for (let i = 0; i < strArr.length; i++) {
        let currentWord = strArr[i];
        if (currentWord.length > 5) {
            longWords ++;
        }
        if (wordOccurrences[currentWord] === undefined) {
            wordOccurrences[currentWord] = 1
        } else {
            wordOccurrences[currentWord]++;
        } 
    }
        Object.keys(wordOccurrences).forEach((key) => {
        uniqueWords ++;
    });

    let result = {};
    result["totalLetters"] = totalLetters;
    result["totalWords"] = totalWords;
    result["uniqueWords"] = uniqueWords;
    result["longWords"] = longWords;
    result["averageWordLength"] = averageWordLength;
    result["wordOccurrences"] = wordOccurrences;
    return result;
    
}    
