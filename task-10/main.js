

// const http = require('http')

// let users = [
//     { id: 1, name: "ahmed" , email:"ahmed@gmail.com" , job:"pilot"},
//     { id: 2, name: "sara" , email:"sara@gmail.com" , job:"teacher"},
//     { id: 3, name: "ali" , email:"ali@gmail.com" , job:"michanic"},
//     { id: 4, name: "noura" , email:"noura@gmail.com" , job:"doctor"},
// ];

// const server = http.createServer((req, res) => {
//     const {url , method} = req

//     if (url === '/users' && method === 'GET') {
//         res.end(JSON.stringify(users))
//     }

//     else if (url === '/users' && method === 'POST') {
//         req.on('data', (user) => {
//             let newUser = JSON.parse(user)
//             users.push(newUser)
//             res.statusCode=201
//             res.end("user added")
//         })
//     }

//     else if (url === '/users' && method === 'DELETE') {
//         req.on('data', (user) => {
//             const deletedUser = JSON.parse(user);
//             const userId = deletedUser.id; 
//             users = users.filter(user => user.id !== userId);
//             res.end("user deleted");
//         });
//     }

//     else {
//         res.end("hello \n i did it ");
//     }
// });

// server.listen(3000, () => {
//     console.log('server is running');
// });