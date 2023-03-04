// Q1.a. Print odd numbers in an array
console.log("Print odd numbers in an array");
let arr = [1,2,3,4,6,8,9];
(function() {
   for(let i=0; i < arr.length; i++){
       if(arr[i] % 2 !== 0)
         console.log(arr[i]);
   };
}());

// b.Convert all the strings to title caps in a string array 
console.log("Convert all the strings to title caps in a string array");
let strarr = ["raj rampragash"];
(function() {
    for(let i=0; i < strarr.length; i++){
        let s = strarr[i];
        s = s[0].toUpperCase() + s.substring(1);
        strarr[i] = s;
    };
    console.log(strarr);
 }());

 // c. Sum of all numbers in an array 
 let mark = [1,2,3,4];
 (function(arr) {
    let sum = 0;
    for(let i=0; i < arr.length; i++){
        sum += arr[i];
    };
    console.log("Array sum:",sum);
 }(mark));

 // d. Return all the prime numbers in an array 
 let range = [1,2,3,4,5,6,7,8,9];
 let res = (function(arr) {
    let op = [];   
    for(let i=0; i < arr.length; i++){           
        if((function (num) {
            if(num < 2)
               return false;
            for(M=2; M<= (num/2) ; M++){
                if(num %M === 0)
                   return false;
            }
            return true;
        })(arr[i])) {
            op.push(arr[i]);
        }
     };
    return op;
 }(range));
 console.log("Prime numbers:",true);

 // e. Return all the palindromes in an array 
 let sample = ["MOM","121"];
 let palindrome = (function(arr) {
    let op = [];   
    for(let i=0; i < arr.length; i++){           
        if((function (word){
            word = String(word);
            let move1 = word;
            move1 = move1.split("").reverse().join("");
            if(word === move1)
               return true;
            else 
                return false;
        })(arr[i])) {
            op.push(arr[i]);
        }
     };
    return op;
 }(sample));
 console.log(palindrome); 

 // f. Return median of two sorted arrays of the same size. 
 let Arr1 = [2, 11, 17, 34,];
 let Arr2 = [3, 13, 27, 47]; 
 let median = (function(arr1, arr2) { 
    let op = arr1.concat(arr2);   
    op.sort((a,b) => a-b);
    let mid = op.length/2;
    return (op[mid-1] + op[mid])/2;
 }(Arr1,Arr2));
 console.log(median); 

 // g. Remove duplicates from an array 
 let list = [1,2,3,4,1,2,];
 let newlist = (function(arr) {
    let op = [];   
    for(let i=0; i < arr.length; i++){           
        if( ! op.includes(arr[i]) ) {
            op.push(arr[i]);
        }
     };
    return op;
 }(list));
 console.log( newlist);  

 //h. Rotate an array by k times
 let array = [1,2,3,4,5];
 let rotate = 2;
(function(k) { 
    k = k % array.length;
   for(let i=0; i < k; i++){
       let x = array.shift();
       array.push(x);
   };
}(rotate));
console.log("Rotated array:",array);  

console.log("-".repeat(50));
//  Programs using arrow function

// // Q1.a. Print odd numbers in an array
// console.log("Print odd numbers in an array using =>");
// let arr = [1,2,3,4,6,8,9];
// arr.forEach( (new) => {
//         if(new % 2 !== 0)
//           console.log(new);
// } );

// // b.Convert all the strings to title caps in a string array 
// console.log("Convert all the strings to title caps in a string array using =>");
// let strarr = ["raj", "rampragash"];
// let cap = strarr.map( (el) => {
//      new = new[0].toUpperCase() + new.substring(1);
//      return new;
//     });
// console.log(cap);


//  // c. Sum of all numbers in an array 
//  let mark = [2,3,4,5];
// console.log("Array sum is", mark.reduce((a,c) =>  a+c,0));


//  // d. Return all the prime numbers in an array 
//  let range = [1,2,3,4,,6,7,];
//  let prime =  range.filter((num) => {           
//             if(num < 2)
//                return false;
//             for(M=2; M<= (num/2) ; M++){
//                 if(num % M === 0)
//                    return false;
//             }
//             return true;
//         });
//  console.log(prime);
 
//  // e. Return all the palindromes in an array 
//  let sample = [ "radar","MOM", "121"];
//  let palindrome =  sample.filter((word) => {           
//             word = String(word);
//             let move1 = word;
//             move1 = move1.split("").reverse().join("");
//             if(word === move1)
//                return true;
//             else 
//                 return false;
// });
// console.log( palindrome); 