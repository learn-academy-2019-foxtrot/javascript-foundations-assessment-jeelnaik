# ASSESSMENT 2: FOUNDATIONS OF JAVASCRIPT
## Interview Practice Questions

### Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

Consider the function:

var text = 'outside'
function logIt(){
  console.log(text)
  var text = 'inside'
}
logIt()


1a. Look at this Javascript function and try to predict what the console show.

  Javascript function will show 'outside' in console

1b. Test the function. Explain why the function returned what it did.

  Your answer:  outside

  Researched answer: The output is 'undefined'. When the text variable is declared inside the 
  function logIt() with the same name 'text', inside the function the scope of the variable is local.
  Since the console log is stated before the declaration. function does not know what text is.


2. What is JSON?

  Your answer: Javascript Object Notation

  Researched answer: JSON (JavaScript Object Notation) is a lightweight data-interchange format.
  JSON is a syntax for storing and exchanging data. JSON is text, written with JavaScript object notation.
  JSON data is written as name/value pairs. A name/value pair consists of a field name (in double quotes), 
  followed by a colon, followed by a value:


3. What does CRUD stand for?

  Your answer: Create, Read , Update, Delete

  Researched answer: CRUD stands for Create, Read, Update and Delete and these are four basic functions to manipulate data.



4. What does are the 5 HTTP verbs?

  Your answer: -

  Researched answer:
  The primary or most-commonly-used HTTP verbs (or methods, as they are properly called) are POST, GET, PUT, PATCH, and DELETE. 
  These correspond to create, read, update, and delete (or CRUD) operations, respectively. 


5. What is a higher-order function?

  Your answer: Higher-order functions are functions that take one or more functions as argumnets.
  Like, map , filter and reduce.

  Researched answer:
  Higher order functions are functions that operate on other functions, 
  either by taking them as arguments or by returning them

6. STRETCH: What is a closure, what is it good for and how do you recognize one?

  Your answer: - 

  Researched answer:
  JavaScript variables can belong to the local or global scope.
  Global variables can be made local (private) with closures.
  To use a closure, define a function inside another function and expose it.
  To expose a function, return it or pass it to another function.
  

7. STRETCH: What is an API?

  Your answer: Application Programming Interface

  Researched answer:
  An application program interface (API) is a set of routines, protocols, and tools for building software applications. 
  Basically, an API specifies how software components should interact. Additionally, APIs are used when programming graphical user interface (GUI) components.
  A good API makes it easier to develop a program by providing all the building blocks. A programmer then puts the blocks together.


### Additional Feedback Questions.

1. Do you have a suggestion for a Check In question?



2. What was your favorite topic this week?

React State

3. What was your "A-ha!" moment this week?

Pig Latin Challenge
