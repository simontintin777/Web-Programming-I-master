const fs = require('fs');

let fileData = exports = module.exports;

fileData.getFileAsString = (path) => {
    return new Promise((fulfill, reject) => {
        if (!path) reject("No path provided");
        fs.readFile(path, "utf-8", (error, data) => {
            if (error) {
                reject(error);
                return;
            }
            fulfill(data);            
        });
    })
};

fileData.getFileAsJSON = (path) => {
    return new Promise((fulfill, reject) => {
        if (!path) reject("No path provided");
        fs.readFile(path, "utf-8", (error, data) => {
            try {
                let JSONData = JSON.parse(data);
                fulfill(JSONData);
            } catch (error) {
                reject(error);
            }
        });
    })
};

fileData.saveStringToFile = (path, text) => {
    return new Promise((fulfill, reject) => {
        if (!path || !text ) reject("No path or text provided");

        fs.writeFile(path, text, (error, data) => {
            if (error) {
                reject(error);
                return;
            }
            fulfill(data);
            return true;
        });
    });
};

fileData.saveJSONToFile = (path, obj) => {
 return new Promise((fulfill, reject) => {
        if (!path || !obj ) reject("No path or obj provided");

        fs.writeFile(path, JSON.stringify(obj, null, 4), (error, data) => {
            if (error) {
                reject(error);
                return;
            }
            fulfill(data);
            return true;
        });
    });
};

