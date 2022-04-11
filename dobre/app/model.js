
class Animal {
    constructor(name, color) {

        this.name = name;
        this.color = color;
        this.id = animalsArray.length
    }

}

let animalsArray = []

module.exports = { Animal, animalsArray };