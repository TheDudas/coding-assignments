// 1
ages =  [3, 9, 23, 64, 2, 8, 28, 93]  // creates an array called ages (1)
console.log (ages);   // console log prints the array to the console. 
// 1a)
console.log(ages.pop()- ages.shift()); // prints 90 (1a)
// 1b)
ages.push(17);   // adds age of 17 to array/
console.log(ages); // print console to see all ages
console.log(ages.pop() - ages.shift()); // prints new calculated value (1b)

// 1c)
function agesAvg(ages)  {   // function for getting the average age.  agesAvg (1c)
    let sum = 0;
    for (let i =0; i < ages.length; i++) {
        sum += ages[i];
    }
    return sum / ages.length; 
}
console.log(agesAvg(ages));  // console.log the answer of 25. 5 numbers. 23, 64, 2, 8, 28
//
// Question 2:
//
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];  // creates names array.

function calculateAverageWordLength(names) {   // create function to loop through names and get total letters. 
  let totalLetters = 0;
  for (let word of names) {
    totalLetters += word.length; // based on word length of each name. 

  }
  return totalLetters / names.length;  // return value to totalLetters. 

}
const averageLength = calculateAverageWordLength(names); // calculate average length of names array. 

//  const words = ["hello", "world", "JavaScript"];
console.log("Average word length: ", averageLength); // console log. 

//average word length  = // Output: 5.666666666666667

//  Question #3)
console.log("You access the last element of an array by creating the following: "); 
array = [2, 6, 9, 4, 10];   // array built to pull last element. 
const last = array[array.length - 1];
console.log(last);
// there are many ways to retrieve the last element of an array. 

// Question 4)
// How do you access the first element of an array?
console.log("You can access the first element of an array in many ways. Here is one:");
array2 = [2, 6, 9, 4, 10];  // array to find first element. 
var firstElement = array[0];
console.log(firstElement);
// this will print 2 to the console. 

console.log("Question 5");

let names2 = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; //Names array from above. renamed.... 
let nameLengths = [];   // empty array to add lengths into 

for (let i = 0; i < names2.length; i++) { // loop for adding name lengths into array. 
  nameLengths.push(names2[i].length);

}
console.log(names2, nameLengths); // prints names2 and then the number of characters per name.
//
console.log("Question 6");
console.log(nameLengths);

// Question 6)
const calculateTotal = [nameLengths];  // create new constant from nameLengths
let sum = 0;  // make sum = 0 to start.
for (let i=0; i < nameLengths.length; i++) {  // for loop to add all elements value
  sum += nameLengths[i];
} 
console.log(sum);  // print elements value of 23. 
// total should be 23. 

// Question 7)
console.log ("Question 7");
 // created a function and used the n as the number of times to repeat. 
function jd(word, n){
  console.log(word.repeat(n));
}  
jd("Hello", 3); // enter Hello in " " and a number to repeat it the correct number of times. 

// Question 8)
console.log( "Question - 8");

function fullName(firstName, lastName) {  // create function called fullName
    return Named = (firstName + " " + lastName); // Return a new name with the concantenation
}
fullName("John", "Dudas");  // enter function parameters
console.log(Named);   // print to console. 
// Returns John Dudas with the space. 

// question 9)
console.log("Question - 9");


function biggerThan100(bigNumbers) { // create function name and array
  let sum = 0;
  for (let i = 0; i < bigNumbers.length; i++) {  // run through loop iterations for number of times the array is long. 
    sum += bigNumbers[i];  // add values together to get sum
  }
    return sum > 100;  // return result as false or true. 
}
  console.log(biggerThan100([10, 50 , 15, 3, 5, 9, 16, 4]));  // values entered into Function from Console.log. 
  //
  // Question 10)
  console.log("Question 10");

  function averageNumber(newNumbers){ // create function name and array
    if (newNumbers.length === 0) {  // if results are 0 or array is empty return a 0.
      return 0;
    }
    let sum = 0;   
    for (let i = 0; i < newNumbers.length; i++) {  // run through loop iterations for number of times the array is long. 
      sum += newNumbers[i];  // add values together to get sum
    }
      return sum / newNumbers.length;   //. get the average divide amount by number of numbers 
  }
  const newNumbers = [10, 20, 5, 24];  // enter newNumbers values to calculate. 
  const average = averageNumber(newNumbers);  // const to get average. 
  console.log(average);  // print average. 
// results in 14.75

// Question - 11)  
//  Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater 
// than the average of the elements in the second array.

console.log("Question 11");
// ///
let numbers3 = [100, 100, 100]; // numbers in array
let numbers4 = [10, 50, 75];

function twoAverages(arr1, arr2) {   // create function for two arrays, 
  console.log("Parameters:", arr1, arr2); // add parameters of array
  let sum1 = 0; // Initialize loop. 
  let sum2 = 0;   

  for (const number of arr1) { // create loop for each array
    sum1 += number;
    console.log("Current number loop1: ", number, "sum1: ", sum1);
    }
  
  for (const number of arr2) { // for loop for array2
    sum2 += number;
    console.log("Current Number loop2: ", number, "Sum2: ", sum2);
    }

    let average1 = sum1 / arr1.length; // get average of arr1
    let average2 = sum2 / arr2.length; // get average of arr2

    console.log("Averages: ", average1, average2); // print averages and values.  

  if (average1 > average2) {  // if statement to determine what to print if true, false or equal. 
    console.log(true);
    return true
  }
    else if (average1 < average2) {
      console.log(false);
      return false
    } else {
      console.log("Numbers are equal");
    }
  }
    twoAverages(numbers3, numbers4); // values in function to start function
// with current values it completes as true. 100 and 45. 

// question 12.

console.log("Question 12");
// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
// and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket) {
console.log("Parameters: ", isHotOutside, moneyInPocket);

let buyDrink = isHotOutside === true && moneyInPocket > 10.5;
console.log("Buy a drink?", buyDrink);
return buyDrink;

}

willBuyDrink(true, 12)

// Question: 13
// Create a function on your own that solves a problem. In comments, write what that function does and why you created it. 

function investmentDecision(returns, outOfPocket) {
  console.log("Parameters: ", returns, outOfPocket); // A function to calculate if I should invest in a specific investment opportunity
let investNow = returns >= .20 && outOfPocket <= 10000;  // uses values from another calculation, returns and outOfPocket to determine answer
console.log("Invest in Opportunity?", investNow);      // If returns are = or greater than .20 or 20% and Less than a $10,000 cash investment then True. 
return investmentDecision;  // return the decision based on the numbers entered. Should be pulled from another calculation of investment criteria.
}
investmentDecision(.22, 10000);  // this would return true. Less than .20 or more than 10000 would return false. 

