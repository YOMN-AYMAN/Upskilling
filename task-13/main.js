
// Task 1 – Understanding Node.js fs Module

//  const fs = require("fs");
//  fs.writeFileSync("notes.txt", "Hello Node.js");
//  const data = fs.readFileSync("notes.txt", "utf-8");
//  console.log(data);

//  Questions:

//  1. What does this code do?
// ==>using core module fs (file system) this code create file notes.txt by writeFileSync method and put  the content Hello Node.js inside it then create a varible data and assign to it the return value of following by readFileSync method read the content of the file and it is important to specify the encoding for cleaner output because readFileSync returns a Buffer by default then print the varible in console

//  2. What will be printed in the console?
// ==> Hello Node.js

//  3. What is the purpose of the fs module in Node.js?
// ==> dealing with the device's file system, such as reading, creating, updating, or deleting files.

//  4. What is the difference between writeFileSync and writeFile?
// ==> writeFileSync => synchrounus method The code stops completely and the next line will not be executed until the file has been fully written
// ==> writeFile => asynchrounus method The code continues to execute and a Callback Function is executed when the writing process is finished 






// Task 2 – HTTP Server in Node.js

//  const http = require("http");
//  const server = http.createServer((req, res) => {
//  	res.write("Hello from Node.js Server");
//  	res.end();
//  });
//  server.listen(3000);

//  Questions:

//  1. What is the purpose of the http module?
// ==>creating a web server that receives requests from the browser and sends responses.

//  2. What happens when you open http://localhost:3000 in the browser?
// ==> Hello from Node.js Server will appear on the page (the response of the server)

//  3. Why do we call res.end()?
// ==> to let the server know that the response is complete and all data has been sent  

//  4. What would happen if res.end() was removed?
// ==> the page will keep loading









// Task 3 – JavaScript Asynchronous Behavior

//  console.log("Start");
//  setTimeout(() => {
//  	console.log("Hello Async");
//  }, 2000);
//  console.log("End");

//  Questions:

//  1. What will be the output order in the console?
// ==> Start --> End --> Hello Async

//  2. Why does JavaScript print the messages in this order?
// ==> because setTimeout is asynchronous it is sent to web APIs and executed without interrupting the rest of the code which continues to run normally after execution the event loop adds the setTimeout to the event queue then moves to the stack and is ultimately displayed

//  3. Is setTimeout synchronous or asynchronous?
// ==> asynchronous (non-blocking) because it does not prevent the execution of the code that follows it










// Task 4 – Array and Loop Logic

//  const numbers = [1, 2, 3, 4, 5];
//  let sum = 0;
//  for (let i = 0; i < numbers.length; i++) {
//  	sum += numbers[i];
//  }
//  console.log(sum);

//  Questions:

//  1. What will be printed in the console?
// ==> 15 ->sum of the numbers

//  2. What is the purpose of the loop in this code?
// ==> iterate through each element in the array and add it to the variable sum to sum the values.

//  3. Modify the code to calculate the average instead of the sum.
// ==> 
//  const numbers = [1, 2, 3, 4, 5];
//  let sum = 0;
//  for (let i = 0; i < numbers.length; i++) {
//  	sum += numbers[i];
//  }
//  let average = sum / numbers.length;
//  console.log(average);










// Task 5 – Problem Solving (Two Sum)
// Problem:
//  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//  You may assume that each input would have exactly one solution, and you may not use the same element twice.
//  You can return the answer in any order.

//  Example 1:
//  Input: nums = [2,7,11,15], target = 9
//  Output: [0,1]
//  Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

//  Example 2:
//  Input: nums = [3,2,4], target = 6
//  Output: [1,2]

//  Example 3:
//  Input: nums = [3,3], target = 6
//  Output: [0,1]

//  Tasks:
//  1. Write a JavaScript function that solves this problem
// ===>
    // function twoSum(nums, target) {
    //     let map = {};
    //     for (let i = 0; i < nums.length; i++) {
    //         let num = nums[i];
    //         let needed = target - num;
    //         if (map[needed] !== undefined) {
    //             return [map[needed], i];
    //         }
    //         map[num] = i;
    //     }
    // }


//  2. Explain the logic of your solution step by step.
// ==> 
// 1- create an empty object map
// 2- loop through the array nums
// 3- for each number calculate needed = target - num
// 4- check if needed exists in map
// 5- if it exists, return the indices [map[needed], i]
// 6- otherwise store the current number in map with its index
// 7- continue until the pair is found


//  3. What is the time complexity of your solution?
// ==> O(n) --> in worst case loop is run n times to find the solution
