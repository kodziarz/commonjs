const path = require("path")
const fs = require("fs")
// załącz controller, utils , tablicę zwierząt

const utils = require("./utils")
const controller = require("./controller")

const viewsPath = path.join(__dirname, "views")

const router = async (request, response) => {

    switch (request.method) {
        case "GET":
            switch (request.url) {
                case "/":
                case "/index.html":
                    fs.readFile(path.join(viewsPath, "index.html"), function (error, data) {
                        //response.writeHead(200, { 'Content-Type': 'text/html' });
                        response.write(data);
                        response.end();
                    })
                    break
                case "/style.css":
                    fs.readFile(path.join(viewsPath, "style.css"), function (error, data) {
                        //response.writeHead(200, { 'Content-Type': 'text/html' });
                        response.write(data);
                        response.end();
                    })
                    break
                default:
                    response.write("404")
                    response.end()
                    break
            }


        case "POST":

            if (request.url == "/add") {
                // odczytaj dane z body
                // użyj funkcji z controllera
                // odpowiedz do klienta
                let data = JSON.parse(await utils.getRequestData(request));
                console.log(data);
                response.end(JSON.stringify(controller.add(data.name, data.color)))
                console.log("zawartość listy: ", controller.getall());
            }
            else if (request.url == "/getall") {
                response.end(JSON.stringify(controller.getall()))
            }
            else if (request.url == "/delete") {
                response.end(JSON.stringify(controller.delete((await utils.getRequestData(request)).id)))
            }
            else if (request.url == "/update") {
                //  updatuj danye z tablicy zwierząt i odpowiedz do klienta
            }

            break;

    }
}

module.exports = router
