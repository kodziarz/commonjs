const http = require("http");
const fs = require("fs")
const path = require("path")
const Datastore = require('nedb')


const staticPath = path.join(__dirname, "static")
const PORT = 3000;

const collection1 = new Datastore({
    filename: 'kolekcja1.db',
    autoload: true
});

const server = http.createServer((req, res) => {
    // parametr res oznacza obiekt odpowiedzi serwera (response)
    // parametr req oznacza obiekt żądania klienta (request)

    console.log(`adres żądania: ${req.url}`)

    switch (req.method) {
        case "GET":
            //wyświetlenie strony html

            fs.readFile(path.join(staticPath, "index.html"), "utf-8", (err, data) => {
                if (err) throw err
                res.end(data)
            })

            break;
        case "POST":
            // odbiór posta

            let body = ""
            switch (req.url) {
                case "/add":

                    break
            }
            break
    }
})

server.listen(PORT, () => {
    console.log(`serwer startuje na porcie ${PORT}`)
});
