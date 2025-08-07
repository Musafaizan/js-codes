 
// Count how many even numbers are in an array
// → Example: [1, 2, 3, 4, 5, 6] → 3

// let arr = [ 1,2,3,4,5,10,6,12,14,17]
// let sum =0
// for (let i =0 ; i<arr.length;i++)
// {
//     if (arr[i]%2===0){
//        sum++
//     }
 
// }
//   console.log("total even numbers are : ",sum++)


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Check if a string is a palindrome
// → Example: "madam" → true, "hello" → false

// let str = "01010"
// let reverse = str.split("").reverse().join("")
// if(str===reverse){
//     console.log(" This in palindrome true")
// }
// else
// {
//     console.log ('not a palindrome false')
// }

// ------------------------------------------------------------------------------------

// Count how many times a specific character appears in a string
// → Example: "banana", 'a' → 3

// let str = "BanAna"
// let alphabet = "Aa"
// sum = 0
// for (let i = 0 ; i<str.length ; i++){
//     if (alphabet.includes(str[i])){
//         sum++;
//     }
// }
// console.log(sum)



// ------------------------------------------------------------------------------------


// Count how many numbers in an array are greater than a given number
// → Example: [1, 5, 8, 3, 10], target = 5 → 2


// let arr = [1, 2, 9, 3, 4, 5, 6, 7, 8];
// let greater = 5;
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > greater) {
//     count++;
//   }
// }
// console.log(count);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//   Count how many vowels are in a string (assume all lowercase)
// → Example: "hello world" → 3


// let str = " Musa fizan "
// let vowels = "aeiouAEIOU"
//  let sum = 0  
//  for (let i = 0 ; i<str.length;i++)
// {
//     if (vowels.includes(str[i]) ){
//         sum++
//     }
// }
// console.log ('total vowels are :', sum )

//------------------------------------------------------------------------------------

// Count how many words are in a string (words are separated by a single space)
// → Example: "this is a test" → 4
// (edited)

// let str ='coding is my hobby.'
// let arr = " "
// sum = 0 
// for (let i = 0 ;i<str.length ; i++){
//     if (str[i]== arr){
//         sum++
//     }
// }
// console.log (sum)

// -----------------------------------------------------------------------------------

// Check if an array is sorted in ascending order
// → Example: [1, 2, 3, 5] → true, [3, 2, 1] → false


// let arr = [1, 2, 3, 5 ,7, 6];
// let sort = true;
// for (let i = 0; i < arr.length - 1; i++) {
//   if (arr[i] > arr[i + 1]) {
//     sort = false;
//     break;
//   }
// }

// console.log(sort);
