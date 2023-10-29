//using anonymous function

//1,prime numbers in an array 

var output=[];
var a=function(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2==1){
            output.push(arr[i]);
        }
    }
    return output;
}
console.log(a([1,2,3,4,5,6,7]));

//_____________________________________________________________________________________________________________________________________________________

//2,sum of numbers in an array 

var sum=0;
var a1=function(numbers){
    for(var i=0;i<numbers.length;i++){
        sum+=numbers[i];
    }
    return sum;
}
//a1([1,2,3]);
console.log(a1([12,3,5]));

//_____________________________________________________________________________________________________________________________________________________

//3,Convert all the strings to title caps in a string array 

var String=[];
var a2=function(str){
    str=str.toLowerCase().split("");
    for(var i=0;i<str.length;i++){
        str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
        String.push(str[i]);
    }
    return String.join(" ");
}
console.log(a2("guvi geeks"));

//_____________________________________________________________________________________________________________________________________________________


//4,Return all the prime numbers in an array

var a3 = function(numbers) {
    function isPrime(num) {
        if (num<=1) return false;
        if (num<=3) return true;
        if (num%2===0 || num%3===0) return false;
        for (var i=5;i*i<=num; i+=6) {
            if (num%i===0 || num % (i+2)===0) return false;
        }
    return true;
    }

    return numbers.filter(function(num) {
        return isPrime(num);
    });
}

var inputArray = [2, 3, 4, 5, 6, 7, 8, 9];
var primeNumbers = a3(inputArray);

console.log(primeNumbers);

//_____________________________________________________________________________________________________________________________________________________

//5,Return all the palindromes in an array

// var palindrome;
// var a4=function(isPalindrome){
//     var len=isPalindrome.length;
//     for(var i=0;i<len/2;i++){
//         if(isPalindrome[i] === isPalindrome(len-1-i)){
//             palindrome.push(isPalindrome[i]);
//         }

//     }
//     return palindrome;
// }
// console.log(a4(["aya","bets","pup"]));

//_____________________________________________________________________________________________________________________________________________________


//6,Remove duplicates from an array

var a5=function (removeDuplicates){
    let unique=[];
    for(var i=0;i<removeDuplicates.length;i++){
        if(unique.indexOf(removeDuplicates[i]===-1)){
            unique.push(removeDuplicates[i]);
        }
    }
    return unique;
}
console.log(a5(["mango","mango","apple","orange","apple"]));

//___________________________________________________________________________________________________________________________________________________
//___________________________________________________________________________________________________________________________________________________

//Using IIFE function

//1,

var output = (function(arr1) {
    var result =[];
    for (var i=0; i<arr1.length;i++) {
        if (arr1[i]%2===1) {
            result.push(arr1[i]);
        }
    }

    return result;
})([1,2,3,4,5,6,7]);
console.log(output);

//___________________________________________________________________________________________________________________________________________________


//2,

var result=(function(numbers) {
    var sum=0;

    for (var i=0;i<numbers.length;i++) {
        sum+=numbers[i];
    }
     return sum;
})([1,2,3,4,5]);
console.log(result);

//___________________________________________________________________________________________________________________________________________________


//3,

var a21 = (function(str1) {
    var stringArray=[];
    str1=str1.toLowerCase().split(" ");
    for (var i=0; i<str1.length; i++) {
        str1[i]=str1[i].charAt(0).toUpperCase()+str1[i].slice(1);
        stringArray.push(str1[i]);
    }
    return stringArray.join(" ");
})("guvi geeks");
console.log(a21);

//___________________________________________________________________________________________________________________________________________________

//Using arrow functions

//1,

var output=((arr2) => {
    var result=[];
    for (var i=0;i<arr2.length;i++) {
        if (arr2[i]%2===1) {
            result.push(arr2[i]);
        }
    }
    return result;
})([1,2,3,4,5,6,7]);
console.log(output);

//___________________________________________________________________________________________________________________________________________________


//2,

var result1=((numbers1 => {
    var sum=0;
    for (var i=0;i<numbers1.length;i++) {
        sum+=numbers1[i];
    }
    return sum;
})([1,2,3,4,5,6]));
console.log(result1);

//___________________________________________________________________________________________________________________________________________________


//3,

var a22 = ((str1) => {
    var stringArray = [];
    str1=str1.toLowerCase().split(" ");
    for (var i=0;i<str1.length;i++) {
        str1[i] = str1[i].charAt(0).toUpperCase()+str1[i].slice(1);
        stringArray.push(str1[i]);
    }
    return stringArray.join(" ");
})("guvi geeks");
console.log(a22);

//___________________________________________________________________________________________________________________________________________________







