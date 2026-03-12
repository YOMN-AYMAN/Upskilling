

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