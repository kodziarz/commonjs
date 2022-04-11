// załącz klasę Animal i tablicę zwierząt

const { Animal, animalsArray } = require("./model")
const { getRequestMethod, doesAnimalExist, deleteAnimal } = require("./utils")

module.exports = {
    add: (name, color) => {
        let animal = new Animal(name, color)
        animalsArray.push(animal)
        return animal
    },
    delete: (id) => {
        if (!doesAnimalExist)
            return { status: "error" }
        else {
            deleteAnimal(id)
            return { status: "ok" }
        }
    },
    update: (id) => {
        // update po id elementu animalsArray
    },
    getall: () => {
        return animalsArray
    }

}