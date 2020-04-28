const fs = require('fs');
const readyFile  = require('./load_contents');
const FruitBasket = require('./FruitBasket');

const readFile = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('input.json', 'utf8',  (err, data) => {
            if (err){
                console.error('Error while reading the input file');
                reject(err);
            } else {
                resolve(JSON.parse(data));
            }
        });
    });
};

const writeFile= (fruitsSummary,) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('output.json', JSON.stringify(fruitsSummary), 'utf8', (err, success) => {
            if (err) {
                console.error('Error while writing the output into file');
                reject(err);
            } else {
                resolve(success);
            }
        });
    });
};

const fruitsBasketSummary = async () => {
    const fileContains = await readyFile.getFileContents('input.json');
    const fruitsData = JSON.parse(fileContains);
    const fruitsSummary = fruitsData.map(fruitData => {
        let fruitBasketObj = new FruitBasket(fruitData.id, fruitData.max_weight, fruitData.contents);
        return fruitBasketObj.getFruitBasketSummary();
    });
    return writeFile(fruitsSummary);
};

fruitsBasketSummary().then();

module.exports = {fruitsBasketSummary};

