// ===> Q1
// let fs = require('fs')

// fs.writeFileSync('notes.txt', 'hello, node.js')
// console.log('file created.')

// fs.appendFileSync('notes.txt', ' learning fs module')
// console.log('text appended.')

// let data = fs.readFileSync('notes.txt')
// console.log('file content : ' + data)

// fs.unlinkSync('notes.txt')
// console.log('file deleted.')



// ===>Q2
// let os = require('os')
// console.log('architecture: ' + os.arch())
// console.log('platform: ' + os.platform())
// console.log('total memory: ' + (os.totalmem()))
// console.log('hostname: ' + os.hostname())
// console.log('uptime: ' + os.uptime())



// ===>Q3
// let http = require('http')

// let server = http.createServer((req, res) => {
//     res.end('i did it')
// })

// server.listen(3000, () => {
//     console.log('server is running')
// })