




// ========== session 5&6 cruds ============
let name = document.getElementById("name");
let price = document.getElementById("price");
let category = document.getElementById("category");
let desc = document.getElementById("desc");
let display = document.getElementById("display");
let search = document.getElementById("search");
let submit = document.getElementById("submit");

let indexBridge;
let mode = 'create';

let productList = []
if(localStorage.getItem("products") != null){
    productList =JSON.parse(localStorage.getItem("products"))
    displayProduct()
}


function addProduct() {
    let product = {
        name: name.value,
        price: price.value,
        category: category.value,
        desc: desc.value,
    };

    if (mode === 'create') {
        productList.push(product);
    } 
    else {
        productList[indexBridge] = product;
        mode = 'create'; 
        submit.innerHTML = "submit";
    }

    localStorage.setItem("products", JSON.stringify(productList));
    clearInputs();
    displayProduct();
}

function displayProduct(){
    let products = ''
    for(let i=0 ; i<productList.length ; i+=1){
        products += `
            <tr>
                <th scope="col">${i+1}</th>
                <td scope="col">${productList[i].name}</td>
                <td scope="col">${productList[i].price}</td>
                <td scope="col">${productList[i].category}</td>
                <td scope="col">${productList[i].desc}</td>
                <td><button onclick="deletProduct(${i})" class="btn btn-danger">delet</button></td>
                <td><button onclick="updateProduct(${i})" class="btn btn-primary">update</button></td>
            </tr>
        `
    }

    document.getElementById("display").innerHTML = products;
}

function clearInputs(){
    name.value=''
    price.value=''
    category.value=''
    desc.value=''
}

function deletProduct(index){
    productList.splice(index,1)
    localStorage.setItem("products" , JSON.stringify(productList))
    displayProduct()
}

function searchProduct(){
    let term = search.value

    let products = ''
    for(let i=0 ; i<productList.length ; i+=1){
        if(productList[i].name.toLowerCase().includes(term.toLowerCase())){
            products += `
                <tr>
                    <th scope="col">${i+1}</th>
                    <td scope="col">${productList[i].name}</td>
                    <td scope="col">${productList[i].price}</td>
                    <td scope="col">${productList[i].category}</td>
                    <td scope="col">${productList[i].desc}</td>
                    <td><button onclick="deletProduct(${i})" class="btn btn-danger">delet</button></td>
                    <td><button onclick="updateProduct(${i})" class="btn btn-primary">update</button></td>
                </tr>
            `
        }
    }
    document.getElementById("display").innerHTML = products
}

function updateProduct(index) {
    name.value = productList[index].name;
    price.value = productList[index].price;
    category.value = productList[index].category;
    desc.value = productList[index].desc;

    submit.innerHTML = "Update Product";
    mode = 'update'; 
    indexBridge = index;
}








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