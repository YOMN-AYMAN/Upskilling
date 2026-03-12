// const express = require('express');
// const path = require('path');
// const app = express();

// app.use(express.json());
// app.use(express.static('public')); 
// app.use((req, res, next) => {
//     console.log(` Method: ${req.method} \n URL: ${req.url}`);
//     next(); 
// });

// let users = [
//     { id: 1, name: 'ali' },
//     { id: 2, name: 'ahmed' },
//     { id: 3, name: 'sara' }
// ];

// const findUserIndex = (id) => users.findIndex(u => u.id === Number(id));

// app.get('/home', (req, res) => {
//     res.sendFile(path.resolve('../public/file.html'));
// });

// app.get('/users', (req, res) => {
//     const { name } = req.query;
//     if (name) {
//         const filteredUsers = users.filter(u => u.name.toLowerCase() === name.toLowerCase());
//         if (filteredUsers.length === 0) {
//             return res.json({ message: `${name} not found` });
//         }
//         return res.json(filteredUsers);
//     }
//     res.json(users);
// });

// app.get('/users/:id', (req, res) => {
//     const id = Number(req.params.id);
//     const user = users.find(u => u.id === id);
//     if (!user) {
//         return res.json({ message: "User not found" });
//     }
//     res.json(user);
// });

// app.post('/users', (req, res) => {
//     const {name} = req.body
//     const newId = users.length >0 ? Math.max(...users.map(u => u.id)) +1 : 1
//     const newUser = { id: newId, name };
//     users.push(newUser);
//     res.json({ message: "User added"});
// });


// app.put('/users/:id', (req, res) => {
//     const index = findUserIndex(req.params.id);
//     if (index === -1) return res.json({ message: "User not found" })
//     users[index].name = req.body.name
//     res.json({ message: "User updated"});
// });

// app.delete('/users/:id', (req, res) => {
//     const index = findUserIndex(req.params.id);
//     if (index === -1) return res.json({ message: "User not found" });
//     users.splice(index, 1);
//     res.json({ message: "User deleted" });
// });

// app.use((req, res) => {
//     res.send('<h1>404 Not Found</h1>');
// });

// app.listen(3000, () => {
//     console.log('Server is running');
// });

