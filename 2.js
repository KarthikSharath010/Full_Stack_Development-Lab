//Read a string from the user, Find its length. Extract the word "JavaScript" using substring() or slice(). Replace one word with another word and log the new string. Write a function isPalindrome(str) that checks if a given string is a palindrome.
const prompt = require("prompt-sync")(); 

let str = prompt("Enter a string: ");
console.log("Length:", str.length);

let extracted = str.substring(str.indexOf("JavaScript"), str.indexOf("JavaScript") + 10);
console.log("Extracted:", extracted);

let newStr = str.replace("morning", "evening"); 
console.log("Modified:", newStr);

function isPalindrome(str) {
    if(str == str.split("").reverse().join(""))
        console.log("It is a palindrome.")
    else
        console.log("It is not a palindrome.")
}
let a=prompt("Enter string to check for palindrome: ");
console.log(isPalindrome(a));
