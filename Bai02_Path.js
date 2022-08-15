const http = require('http') // module http
const parser = require('url')

const hostname = "127.0.0.1"
const port = 3000
const server = http.createServer((req, res) => {
    const url = parser.parse(req.url, true)
    console.log(url)

    const nav = () => {
        return `<div>
        <a href="/test">Test</a>
        <a href="/home">Home</a>
        <a href="/">Default</a>
                </div>`
    }

    var sendToClient = (content) => {
        res.statusCode = 200
        res.setHeader('Context-Type', 'text/html')
        res.end(`${nav()} ${content}`)
    }
    

    switch (url.pathname) {
        case '/test':
            sendToClient('Test Page')
            break;
        case '/home':
            sendToClient('Home Page')
            break;
        default:
            sendToClient('Default Page')
            break;
    }
})

server.listen(port, hostname, () => console.log(`Server is running at http://${hostname}:${port}/`));