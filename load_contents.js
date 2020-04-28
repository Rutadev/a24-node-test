const fs = require('fs');
const path = process.argv[2];

function isFileExist(path) {
    return new Promise((resolve, reject) => {
        fs.exists(path, exists => {
            if (exists) {
                console.log('exists', exists);
                resolve(exists);
            } else {
                reject(new Error('File does not exist'));
            }
        })
    });
}

function getFileStats(path) {
    return new Promise((resolve, reject) => {
        fs.stat(path, (err, stats) => {
            if (err) {
                reject(new Error('Error trying to get stats'));
            }
            console.log(stats);
            if (stats.size > 0) {
                resolve(stats.size);
            } else {
                reject(new Error('File exists but there is no content'));
            }
        });
    });
}

function readFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8',  (err, buffer) => {
            if (err) {
                reject(new Error('Error trying to get stats'));
            }
            console.info('File was found and the contents were loaded');
            resolve(buffer);
        })
    });

}

// *** To Avoid Callback hell convert functionality into modules ***

module.exports.getFileContents = async function (path) {
    await isFileExist(path);
    await getFileStats(path);
    return await readFile(path); // here return the file content to used in Section 5 (Fruit Basket)
};

this.getFileContents(path).then();



