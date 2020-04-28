const Fruit = require('./Fruit');

class FruitBasket{

    constructor(id, maxWeight, contents) {
        this.id = id;
        this.max_weight = maxWeight;
        this.contents = contents;
    }

    getFruitBasketSummary() {
        const fruitsCount = [];
        let index, totalWeight = 0;
        this.contents.forEach(content => {
            let fruit = new Fruit(content.type, content.color, content.weight);
            totalWeight = totalWeight + fruit.getWeight();
            const isFruitExist = fruitsCount.some(f => f['type'] === fruit.getType());
            if (!isFruitExist) {
                fruitsCount.push({type: fruit.getType(), count: 1})
            } else {
                index = fruitsCount.findIndex(f => f['type'] === fruit.getType());
                fruitsCount[index]['count']++
            }
        });
        return {
            id: this.id,
            total_fruits: this.contents.length,
            total_weight: totalWeight,
            fruit_counts: fruitsCount
        }
    }
}

module.exports = FruitBasket;
