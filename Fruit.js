class Fruit {
    constructor(type, color, weight) {
        this.type = type;
        this.color = color;
        this.weight = weight;
    }

    getType() {
        return this.type;
    }

    getWeight() {
        return this.weight;
    }
}

module.exports = Fruit;
