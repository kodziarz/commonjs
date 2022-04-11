const animalsArray = require("./model").animalsArray

getRequestData = async (req) => {

    return new Promise((resolve, reject) => {
        try {

            let body = "";

            req.on("data", (part) => {
                body += part.toString();
            });

            req.on("end", () => {
                // mamy dane i zwracamy z promisy
                resolve(body);
            });

        } catch (error) {
            reject(error);
        }
    })

}

doesAnimalExist = (id) => {
    let exists = false
    for (let animal of animalsArray) {
        if (animal.id == id)
            exists = true
    }
    return exists
}

deleteAnimal = (id) => {
    for (let i = 0; i < animalsArray.length; i++) {
        if (animalsArray[i].id == id) {
            let j = 0;
            for (j = i; j < animalsArray.length - 1; j++) {
                animalsArray[j] = animalsArray[j + 1]
            }
            console.log(animalsArray[j + 1]);
            animalsArray.length--
        }
    }
}

module.exports = { getRequestData, doesAnimalExist, deleteAnimal }
