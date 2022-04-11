const Datastore = require('nedb')
const fs = require('fs')
const os = require('os')

const coll1 = new Datastore({
    filename: 'kolekcja.db',
    autoload: true
});

const saveFiles = async (maxI) => {
    return new Promise((resolve, reject) => {

        let i = 0
        let savedFiles = []

        let interval = setInterval(() => {

            // let freemem = os.freemem()
            // let totalmem = os.totalmem()

            let obj = {
                freemem: os.freemem(),
                totalmem: os.totalmem()
            }

            fs.writeFile("file" + i + ".txt", JSON.stringify(obj), (err) => {
                if (err) throw err

                savedFiles.push("file" + i + ".txt")

                if (i == maxI) {
                    clearInterval(interval)
                    resolve(savedFiles)
                }
            })
            i++

        }, 1000)
    })
}

const readFiles = async (savedFiles) => {
    return new Promise((resolve, reject) => {

        let i = 0
        let readFiles = []


        // let interval = setInterval(() => {
        // i++

        // let freemem = os.freemem()
        // let totalmem = os.totalmem()

        for (let i = 0; i < savedFiles.length; i++) {



            fs.readFile("file" + i + ".txt", (err, data) => {
                if (err) throw err

                readFiles.push(data.toString())

                if (i == savedFiles.length - 1) {
                    resolve(readFiles)
                }

                // if (i == 5) {
                //     clearInterval(interval)
                //     resolve(readFiles)
                // }
            })
        }

        // }, 1000)
    })
}

const go = async () => {
    let savedFiles = await saveFiles(5)
    let files = await readFiles(savedFiles)
    console.log("readFiles: ", files);
}

go()