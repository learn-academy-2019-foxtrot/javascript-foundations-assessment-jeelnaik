// ASSESSMENT 2: JAVASCRIPT FOUNDATIONS
// Coding practical questions

// 1. Write a function that takes a number as an argument and decides if the number is evenly divisble by three or not. Use the test cases 15, 0, 385, -7. Expected output: "15 is divisible by three", "0 is divisible by three", "385 is not divisble by three", "-7 is not divisble by three".
var number = 15

var divisbleByThree = (number) => 
{   
    if(typeof number !== 'number'){
        return `Please enter a valid number. ${number} is not a number`
    }
    else if(number%3 === 0){
        return `${number} is divisble by Three`
    } else{
        return `${number} is not divisble by Three`
    }
}

console.log(divisbleByThree(number))

// 2. Create an object called helloMe. Include your firstName, lastName and TWO OTHER properties of you. Add a method to your object that will return a sentence using the object properties to describe you.

var helloMe = {
    firstName : 'Jeel',
    lastName : 'Naik',
    city : 'Vista',
    state : 'CA',
    helloMeDetails() {
        return `Hello! I am ${this.firstName} ${this.lastName}. I live in ${this.city}, ${this.state}. `
    }
}
console.log(helloMe.helloMeDetails())

// ------------------------------------- Consider the variable:

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]

// 3a. Write a function that returns every other item from the array as one string. Expected output: "streetlamp teeth nephew database"

var arrayToString = (arr) =>{
    let str =""
    for(let i=0; i<arr.length ; i+=2){
        str = str+arr[i]+" "
    }
    return str;
}
console.log(arrayToString(randomNouns))

// 3b. Create a function that takes in the variable and returns the array with all the words capitalized. Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

var capitalizedArray = (arr) => {
    
   return arr.map((value,index) =>{
       return value[0].toUpperCase() + value.slice(1)
   }) 
   
}
console.log(capitalizedArray(randomNouns))

// 3c. STRETCH: Create a function that returns the length of each string from the randomNouns variable. Expected output: [10, 6, 5, 10, 6, 11, 8]

var lengthArray = (arr) =>{
    return arr.map((value) =>{
        return value.length
    })
}
console.log(lengthArray(randomNouns))

// -------------------------------------- Consider the variables:
var testString1 = "learn"
var testString2 = "academy"
var testString3 = "sandiego"

// 4a. Write a function called alphabetSoup that takes one argument and returns a string with all the letters in alphabetical order. Use each of the varibales as test cases. Expected output: "aelnr" "aacdemy" "adeginos"

var alphabetSoup = (string) =>{
    return string.split('').sort().join('')
}
console.log(alphabetSoup(testString1))
console.log(alphabetSoup(testString2))
console.log(alphabetSoup(testString3))

// 4b. Write a function that takes in all three variables and returns a string with all the letters in alphabetical order. Expected output: "aaaacddeeegilmnnorsy"

var alphabetString = (...string) =>{
    let str = ''
    str = str.concat(...string)
    return str.split('').sort().join('')
  
}

console.log(alphabetString(testString1,testString2,testString3))

// ------------------------------------- Consider the variables:
var amounts = [9, 1, 8, 16, 5, 1, 42]
var animals = ["ducks","elephants", "pangolins", "zebras", "giraffes", "penguins", "llamas"]

// 5a. Write a function that takes the two variables and returns a combined string. Expected output: "9 ducks 1 elephants 8 pangolins 16 zebras 5 giraffes 1 penguins 42 llamas"

var combined = (arr1,arr2) =>{
    var str = '', arr = arr1
    if (arr1.length>arr2.length) 
    {
        arr = arr1;
    }
    else if (arr1.length<arr2.length) 
    {
        arr = arr2;  
    } 
    arr.map((v,i)=>{
        if (arr1[i] === undefined) 
        {
            arr1[i] = ''
        } 
        else if (arr2[i] === undefined) 
        {
            arr2[i] = ''
        } 
        return str += `${arr1[i]} ${arr2[i]} `
    })
    return str;
}
console.log(combined(amounts,animals))


// 5b. STRETCH: Create a function that combines the two variables and updates the animal to be singular if the animal's corresponding number is 1. Expected output: "9 ducks 1 elephant 8 pangolins 16 zebras 5 giraffes 1 penguin 42 llamas"


var combined = (arr1,arr2) =>{
    var str = '', arr = arr1
    if (arr1.length>arr2.length) 
    {
        arr = arr1;
    }
    else if (arr1.length<arr2.length) 
    {
        arr = arr2;  
    } 
    arr.map((v,i)=>{
        if (arr1[i] === undefined) 
        {
            arr1[i] = ''
        } 
        else if (arr2[i] === undefined) 
        {
            arr2[i] = ''
        }
        if(arr1[i] === 1 && arr1[i] !== undefined){
           
            arr2[i]=arr2[i].slice(0,arr2[i].length-1)
        }
        return str += `${arr1[i]} ${arr2[i]} `
    })
    return str;
}
console.log(combined(amounts,animals))

