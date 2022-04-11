const path = require("path")
const fs = require("fs")
// załącz controller, utils , tablicę zwierząt

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
                let data = await getRequestData(request);
                console.log(data);
                controller.add(data)
            }
            else if (request.url == "/getall") {
                //  pobierz dane z tablicy zwierząt i odpowiedz do klienta
            }
            else if (request.url == "/delete") {
                //  usuń dane z tablicy zwierząt i odpowiedz do klienta
            }
            else if (request.url == "/update") {
                //  updatuj danye z tablicy zwierząt i odpowiedz do klienta
            }

            break;

    }
}

module.exports = router
