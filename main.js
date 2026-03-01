
// ========== session 9 ============

// ===> Q1
let fs = require('fs')

fs.writeFileSync('notes.txt', 'hello, node.js')
console.log('file created.')

fs.appendFileSync('notes.txt', ' learning fs module')
console.log('text appended.')

let data = fs.readFileSync('notes.txt')
console.log('file content : ' + data)

fs.unlinkSync('notes.txt')
console.log('file deleted.')



// ===>Q2
let os = require('os')
console.log('architecture: ' + os.arch())
console.log('platform: ' + os.platform())
console.log('total memory: ' + (os.totalmem()))
console.log('hostname: ' + os.hostname())
console.log('uptime: ' + os.uptime())



// ===>Q3
let http = require('http')

let server = http.createServer((req, res) => {
    res.end('i did it')
})

server.listen(3000, () => {
    console.log('server is running')
})





// ========== session 8 ============
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







// ========== session 5&6 cruds ============
// let name = document.getElementById("name");
// let price = document.getElementById("price");
// let category = document.getElementById("category");
// let desc = document.getElementById("desc");
// let display = document.getElementById("display");
// let search = document.getElementById("search");
// let submit = document.getElementById("submit");

// let indexBridge;
// let mode = 'create';

// let productList = []
// if(localStorage.getItem("products") != null){
//     productList =JSON.parse(localStorage.getItem("products"))
//     displayProduct()
// }


// function addProduct() {
//     let product = {
//         name: name.value,
//         price: price.value,
//         category: category.value,
//         desc: desc.value,
//     };

//     if (mode === 'create') {
//         productList.push(product);
//     } 
//     else {
//         productList[indexBridge] = product;
//         mode = 'create'; 
//         submit.innerHTML = "submit";
//     }

//     localStorage.setItem("products", JSON.stringify(productList));
//     clearInputs();
//     displayProduct();
// }

// function displayProduct(){
//     let products = ''
//     for(let i=0 ; i<productList.length ; i+=1){
//         products += `
//             <tr>
//                 <th scope="col">${i+1}</th>
//                 <td scope="col">${productList[i].name}</td>
//                 <td scope="col">${productList[i].price}</td>
//                 <td scope="col">${productList[i].category}</td>
//                 <td scope="col">${productList[i].desc}</td>
//                 <td><button onclick="deletProduct(${i})" class="btn btn-danger">delet</button></td>
//                 <td><button onclick="updateProduct(${i})" class="btn btn-primary">update</button></td>
//             </tr>
//         `
//     }

//     document.getElementById("display").innerHTML = products;
// }

// function clearInputs(){
//     name.value=''
//     price.value=''
//     category.value=''
//     desc.value=''
// }

// function deletProduct(index){
//     productList.splice(index,1)
//     localStorage.setItem("products" , JSON.stringify(productList))
//     displayProduct()
// }

// function searchProduct(){
//     let term = search.value

//     let products = ''
//     for(let i=0 ; i<productList.length ; i+=1){
//         if(productList[i].name.toLowerCase().includes(term.toLowerCase())){
//             products += `
//                 <tr>
//                     <th scope="col">${i+1}</th>
//                     <td scope="col">${productList[i].name}</td>
//                     <td scope="col">${productList[i].price}</td>
//                     <td scope="col">${productList[i].category}</td>
//                     <td scope="col">${productList[i].desc}</td>
//                     <td><button onclick="deletProduct(${i})" class="btn btn-danger">delet</button></td>
//                     <td><button onclick="updateProduct(${i})" class="btn btn-primary">update</button></td>
//                 </tr>
//             `
//         }
//     }
//     document.getElementById("display").innerHTML = products
// }

// function updateProduct(index) {
//     name.value = productList[index].name;
//     price.value = productList[index].price;
//     category.value = productList[index].category;
//     desc.value = productList[index].desc;

//     submit.innerHTML = "Update Product";
//     mode = 'update'; 
//     indexBridge = index;
// }








// ========== task session 3 ================
// var number = document.getElementById("number");
// function calcSum(){
//     var sum = 0 , evenCount = 0 , oddCount = 0;
//     for(var i=1 ; i<=number.value ; i++){
//         sum+=i;
//         if(i%2===0){
//             evenCount+=1
//         }
//         else{
//             oddCount+=1
//         }
//         document.getElementById("numbers").innerHTML += `${i}  `;
//     };
//     document.getElementById("demo").innerHTML = `<span>the sum is : ${sum} <br> number of even numbers : ${evenCount} <br> number of odd numbers : ${oddCount}</span>`;
// };


// ============= task session 2 ================
// Q1
// var number = Number(window.prompt("enter a number : "));
// console.log("the number is : " + number);


// Q2
// var number = Number(window.prompt("enter a number : "));
// if(number % 3 === 0 && number % 4 === 0){
//     console.log("yes");
// }
// else{
//     console.log("no");
// }


// Q3
// var num1 = Number(window.prompt("enter a num1 : "));
// var num2 = Number(window.prompt("enter a num2 : "));
// if(num1>num2){
//     console.log('max is : ' + num1);
// }
// else{
//     console.log('max is : ' + num2);
// }


// Q4
// var number = Number(window.prompt("enter a number : "));
// if(number<0){
//     console.log("negative");
// }
// else{
//     console.log("positive");
// }



// Q5
// var num1 = Number(window.prompt("enter a num1 : "));
// var num2 = Number(window.prompt("enter a num2 : "));
// var num3 = Number(window.prompt("enter a num3 : "));
// var maximum , minimum ;
// if(num1>=num2 && num1>=num3){
//     maximum = num1
// }
// else if(num2>=num1 && num2>=num3){
//     maximum = num2
// }
// else{
//     maximum = num3
// }
// if(num1<=num2 && num1<=num3){
//     minimum = num1
// }
// else if(num2<=num1 && num2<=num3){
//     minimum = num2
// }
// else{
//     minimum = num3
// }
// console.log("the maximum element is : " + maximum)
// console.log("the minimum element is : " + minimum)





//  ========== task session 1 =========== 
// var userName = window.prompt("enter your name : ");
// var userAge = window.prompt("enter your age : ");

// var nameQ = document.getElementById("name");
// var ageQ = document.getElementById("age");

// var theName = document.getElementById("name").innerHTML;
// var theAge = document.getElementById("age").innerHTML;

// nameQ.innerHTML = theName + userName
// ageQ.innerHTML = theAge + userAge