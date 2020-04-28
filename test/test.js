const sinon = require('sinon');
const chai = require('chai');
const assert = chai.assert;
const fs = require('fs');
const {fruitsBasketSummary} = require('../app');

it('Success Scenario: Should return fruit summary', (done) => {
    const fruitInput = [{
        "id": "1ceb8c95-736f-4da3-86d9-86d55893b38a",
        "max_weight": 8,
        "contents": [
            {
                "type": "apple",
                "color": "green",
                "weight": 1.5
            },
            {
                "type": "apple",
                "color": "red",
                "weight": 1
            },
            {
                "type": "pear",
                "color": "green",
                "weight": 2.5
            }
        ]
    }];

    const fakeRead = sinon.fake.yieldsAsync(null, JSON.stringify(fruitInput));
    sinon.replace(fs, 'readFile', fakeRead);

    const fakeWrite = sinon.fake.yieldsAsync(null, undefined);
    sinon.replace(fs, 'writeFile', fakeWrite);
    fruitsBasketSummary()
        .then(data => {
            assert.isUndefined(data);
            done();
        })
});
