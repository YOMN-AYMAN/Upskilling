// // ===> Q1
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }
// console.log("done");


// // ===> Q2
// // console.log("start");

// setTimeout(() => {
//     console.log("hello A-sync");
// }, 2000);

// console.log("end"); 


// // ===> Q3
// function getUser(id, callback) {
//     setTimeout(() => {
//         let user = { id: id, name: "Ali" };
//         callback(user); 
//     }, 2000);
// }

// getUser(1, (user) => {
//     console.log(user);
// });


// // ===> Q4
// function getUser(id, callback) {
//     setTimeout(() => {
//         let user = { id: id, name: "Ali" };
//         callback(user);
//     }, 2000);
// }

// function getPosts(userId, callback) {
//     setTimeout(() => {
//         let posts = ["Post 1", "Post 2"];
//         callback(posts);
//     }, 2000);
// }

// getUser(1, (user) => {
//     console.log("User:", user);

//     getPosts(user.id, (posts) => {
//         console.log("Posts:", posts);
//     });
// });



// // ===> Q5
// function getProduct(id) {
//     return new Promise((resolve, reject) => {
//         if (id === 1) {
//             resolve({ id: 1, name: "Laptop" });
//         } else {
//             reject("Product not found");
//         }
//     });
// }

// getProduct(1).then(product => console.log(product)).catch(error => console.error(error));




// // ===> Q6
// function getUser() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//         resolve({ id: 1, name: "Sara" });
//         }, 2000);
//     });
// }

// function getPosts() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//         resolve(["Post1", "Post2"]);
//         }, 3000);
//     });
// }

// Promise.all([getUser(), getPosts()]).then(([user, posts]) => {
//         console.log("User:", user)
//         console.log("Posts:", posts)}).catch(error => {console.log(error)});



// // ===> Q7
// function loadUsers() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(users => {
//             let tabs = document.getElementById('tabs');
//             users.forEach(user => {
//                 let button = document.createElement('button');
//                 button.innerText = user.username;
//                 button.onclick = () => loadPosts(user.id);
//                 tabs.appendChild(button);
//             });
//         })
//         .catch(err => console.log("Error fetching users:", err));
// }

// async function loadPosts(userId) {
//     let postsContainer = document.getElementById('posts');
//     postsContainer.innerHTML = "Loading posts..."; 

//     try {
//         let response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
//         let posts = await response.json();
        
//         postsContainer.innerHTML = `<h3>Posts for User ${userId}:</h3>`;
//         let ul = document.createElement('ul');
//         posts.forEach(post => {
//             let li = document.createElement('li');
//             li.innerText = post.title;
//             ul.appendChild(li);
//         });
//         postsContainer.appendChild(ul);
//     } catch (error) {
//         console.log("Error fetching posts:", error);
//     }
// }

// loadUsers();
