//#region Part1 Introduction
//console.log("I like pizza!");
//console.log('Its really good!')

//window.alert('I really love pizza!');

// This is a comment.

/*
This is
a 
multiline comment */
//#endregion

//#region Part 2 Variables

// A variable is a container for storing data.
// A variable behaves as if it was the value that it contains

// Two steps
//1. Declaration (var, let, const)
//2.Assignment (= Assignment operator)

//let age;
//console.log(age);
//output = undefined

// let age;
// age=21;                  //numbers
// let firstName="Chirag";  //string
// let student= true;       //boolean

// age= age +1;

// console.log("Hello " , firstName);
// console.log("Enrolled: ", student);
// console.log("You are",age,"years old.");

// document.getElementById("p1").innerHTML="Hello "+firstName;
// document.getElementById("p2").innerHTML="You are "+age+" years old.";
// document.getElementById("p3").innerHTML="Enrolled: "+student;
//#endregion

//#region Part 3 Arithmetic Expressions

//Arithmetic expression is a combination of
//operands (values, variables, etc)
//operators (+ - * / %)
//that can be evaluated to a value
// y=x+5;

//let students=20;

// students=students+1;
// students=students-1;
// students=students*1;
// students=students/1;
// students=students%1;

// students+=5;
// students-=1;
// students*=1;
// students/=1;

// console.log(students);

/* operator precedence
        paranthesis
        exponent
        multiplication and division
        addition and substraction
        */
// let result= 1+2*(3+4);
// //let result= (1+2)*(3+4);

// console.log(result);

//#endregion

//#region Part 4 User Input

//How to accept user input
//Easy way with a window prompt


// let username= window.prompt("What is your username?");
// console.log(username);

//Difficult way with a HTML textbox
// let username;
// document.getElementById("myButton").onclick = function(){

//     username=document.getElementById("myText").value;
//     console.log(username);
//     document.getElementById("myLabel").innerHTML="hello "+username;
// }

//#endregion

//#region  Part 5 Type Conversion
    // Type conversion = change the datatype of a value to another
    // (strings, numbers, booleans)

    // let age= window.prompt("How old are you?");
    // console.log(typeof(age));
    // age=Number(age);
    // console.log(typeof(age));

    // age+=1;
    // console.log("Happy birthday!, You are " + age + " years old.");

    // let x;
    // let y;
    // let z;

    // x=Number("3.14");// if you try to convert anything that is not a number, it will give you NaN= Not a Number
    // y=String(3.14);
    // z=Boolean("pizza");//converting an empty string to a boolean gives false. 
    //               // but if you type anything else it will give you true.
    // console.log(x, typeof(x));
    // console.log(y, typeof(y));
    // console.log(z, typeof(z));

//#endregion

//#region Part 6 Const

// const is a variable that cannot be changed.

// const PI=3.14159;
// let radius;
// let circumference;

// //PI=500;  //cant do this on a const variable.

// radius=window.prompt("Enter the radius of the circle.");
// radius=Number(radius);

// circumference= 2*PI*radius;
// console.log("The circumference is "+circumference);
//#endregion

//#region Part 7 Math

//Math: Math is an intrinsic object that provides basic mathematic functionality and constants

// let x = 3.14;
// let y= 5;
// let z= 9;
// let maximum,minimum;
// //x= Math.round(x);
// //x= Math.floor(x);
// //x= Math.ceil(x);
// //x= Math.pow(x,3);
// //x= Math.sqrt(x);
// //x= Math.abs(x);
// maximum= Math.max(x, y, z);
// minimum= Math.min(x,y,z);
// console.log(maximum);
// console.log(minimum);

// let x;
// x=Math.PI;
// console.log(x);

//#endregion

//#region Part 8 Hypotenuse calc practice program

// let a,b,c;


// a= window.prompt("Enter side a");
// a=Number(a);

// b= window.prompt("Enter side b");
// b=Number(b);

// c=Math.pow(a,2) + Math.pow(b,2);
// c=Math.sqrt(c);

// console.log("Hypotenuese,c = "+c);



// let a,b,c;



// document.getElementById("btncalculate").onclick=function(){

//     a=document.getElementById("txtsidea").value;
//     a=Number(a);

//     b=document.getElementById("txtsideb").value;
//     b=Number(b);

//     c= Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

//     document.getElementById("lblsidec").innerHTML="The hypotenuese is : "+c;
// }


//#endregion

//#region Part 9 Counter Program
// let x=0;

// document.getElementById("btnIncrease").onclick=function(){
//     x+=1;
//     document.getElementById("lblCounter").innerHTML=x;
// }   
// document.getElementById("btnReset").onclick=function(){
//     x=0;
//     document.getElementById("lblCounter").innerHTML=x;
// }   
// document.getElementById("btnDecrease").onclick=function(){
//     x-=1;
//     document.getElementById("lblCounter").innerHTML=x;
// }   

//#endregion

//#region Part 10 Random Number Generator

//let x = Math.random();//this generates number between 0 and 1.
// let x;
// let y;
// let z;

// document.getElementById("btnRoll").onclick = function () {
//     x = Math.floor(Math.random() * 6) + 1;
//     y = Math.floor(Math.random() * 6) + 1;
//     z = Math.floor(Math.random() * 6) + 1;

//     document.getElementById("xlabel").innerHTML = x;
//     document.getElementById("ylabel").innerHTML = y;
//     document.getElementById("zlabel").innerHTML = z;
// }

//#endregion

//#region Part 11 Useful string properties and methods

// let username="Prabin Manandhar";
// let phoneNumber="984 006 1172";

// console.log(username.length);

// console.log(username.charAt(7));

// console.log(username.indexOf("P"));
// console.log(username.indexOf("a"));

// console.log(username.lastIndexOf("a"));

// console.log(username.trim());    // removes empty spaces before and after ie at the beginning and at the end

// console.log(username.toUpperCase());
// console.log(username.toLowerCase());


// console.log(phoneNumber.replaceAll(" ",""));


//#endregion

//#region Part 12 String slicing

// // slice extracts a section of a string
// // and returns it as a new string
// // without modifying the original string

// let fullName="Prabin Manandhar";
// let firstName, lastName;

// firstName=fullName.slice(0,6);
// console.log(firstName);
// lastName=fullName.slice(7);
// console.log(lastName);

// lastName=fullName.slice(fullName.indexOf(" ")+1);
// console.log(lastName);
// firstName=fullName.slice(0,fullName.indexOf(" "));
// console.log(firstName);


//#endregion

//#region Part 13 Method Chaining

// /*method chaining = calling one method after another
//                     in one continious line of code */

// let username= "bro";

// // let letter=username.charAt(0);
// // letter=letter.toUpperCase();

// let letter=username.charAt(0).toUpperCase();

// console.log(letter);

//#endregion

//#region Part 14 if statements

/* if statement = a basic form of decision making 
                  if a condition is true, then do something
                  if not, then dont do it.
                  */
                 // order important cha hai.
                 // if 1st condition is true, then it doesnt check rest of the conditions

// let age=65;
// if(age>=65){
//     console.log("you are a senior citizen.");
// }
// else if(age>=18){
//     console.log("You are an adult.");
// }
// else if(age<0){
//     console.log("you havent been born yet.");
// }
// else{
//     console.log("You are a child.");
// }

//#endregion

//#region  Part 15 Checked property

// document.getElementById("myButton").onclick=function(){
//     if(document.getElementById("myCheckbox").checked){
//         console.log("you are subscribed.");
//     }
//     else{
//         console.log("you are NOT subscribed.");
//     }



    

//     const visaBtn= document.getElementById("visaBtn");
//     const mastercardBtn= document.getElementById("mastercardBtn");
//     const paypalBtn= document.getElementById("paypalBtn");

//     if(visaBtn.checked)
//         console.log("You are paying with a visa");
//     else if(mastercardBtn.checked)
//         console.log("You are paying with a mastercard");
//     else if(paypalBtn.checked)
//         console.log("You are paying with paypal");
//     else
//         console.log("You must select a payment type.");
// }

//#endregion

//#region Part 16 Switch

// /* switch = statement that examins a value
//             for a match against many case clauses.
//             More efficient than many else-if statements.
//             */

// break required beacuse if there is no break, once a condition matches, that condition + all remaining subsequent condition gets executed.

// let grade = "D";

// switch(grade){

//     case "A":
//         console.log("You did great.");
//         break;

//     case "B":
//         console.log("You did good.");
//         break;
    
//     case "C":
//         console.log("You did okay.");
//         break;

//     case "D":
//         console.log("You passed...barely.");
//         break;

//     case "F":
//         console.log("You FAILED.");
//         break;

//     default:
//         console.log(grade + " is not a letter grade.");
// }

//#endregion

//#region Part 17 AND OR logical operators

/* Gives us ability to check more than 1 condotion concurrently
    && AND (BOTH conditions must be true)
    || OR (EITHER condition can be true)
    */

    // let temp = 15;

    // // if(temp > 0 && temp < 30){
    // //     console.log("The weather is good.")
    // // }
    // // else{
    // //     console.log("The weather is bad.")

    // // }

    // if(temp <= 0 || temp >= 30){
    //     console.log("The weather is bad.")
    // }
    // else{
    //     console.log("The weather is good.")

    // }


//#endregion

//#region Part 18 

    // ! NOT logical operator
    // typically used to reverse a condition's boolean value
    // true -> false , false-> true

    // let pass=true;
    // let fail=false;

    // console.log(!pass);
    // console.log(!fail);

//#endregion

//#region Part 19 while loops

    // while loop = repeat some code
    //                while some condition is true
    //                potentially infinite

    // let userName ="";

    // while(userName=="" || userName==null){
    //     userName= window.prompt("Enter your name.");
    // }
    // console.log("Your name is "+userName);

//#endregion

//#region Part 20 do while loops

    //do while loop = so something,
    //                    then check the condition,
    //                    repeat if the condition is true

// let userName;

// do{
//     userName=window.prompt("Enter your name.");
// }while(userName=="")

// console.log("Your name is "+userName);

//#endregion

//#region Part 21 for loops

// for loop = repeat some code a certain amount of times

// for (let i=10; i>0; i--){
//     console.log(i);
// }
// console.log("Happy new year");

//#endregion

//#region Part 22 break and continue statements

//break = breaks out of the loop entirely
//continue = skip an iteration of a loop

// for(let i=1;i<=25;i++){
//     if(i==13)
//     {
//         break;
//     }
//     console.log(i);
// }

// for(let i=1;i<=25;i++){
//     if(i==13)
//     {
//         continue;
//     }
//     console.log(i);
// }

//#endregion

//#region Part 23 nested loops

//nested loops = a loop inside of another loop

// let rows = window.prompt("Enter number of rows");
// let coloums = window.prompt("Enter number of coloums");


// for (let i=1; i<=rows; i++){
//     for(let j=1;j<=coloums;j++){
//         document.getElementById("myLabel").innerHTML+="*";
//     }
//     document.getElementById("myLabel").innerHTML+="<br/>";
// }

//#endregion

//#region Part 24 functions

//function = Define code once, use it many times.
//           To perform some code, call the function name.

// let userName= "Bro";
// let age = 21;

// happyBirthday();
// happyBirthday();
// happyBirthday();

// function happyBirthday(){
//     console.log("happy birthday to you");
//     console.log("happy birthday to you");
//     console.log("happy birthday dear ",userName);
//     console.log("happy birthday to you");
//     console.log("you are ",age," years old");
// }

// // startProgram();

// // function startProgram(){
// // let Name= "Bro";
// // let ag = 21;

// // happyBirthday(Name,ag);
// // happyBirthday(Name,ag);
// // }

// // function happyBirthday(userName,age){
// //     console.log("happy birthday to you");
// //     console.log("happy birthday to you");
// //     console.log("happy birthday dear ",userName);
// //     console.log("happy birthday to you");
// //     console.log("you are ",age," years old");
// // }

//#endregion

//#region Part 25 return statement

//return = returns a value back to the place 
//        where you invoked the function

// let area
// let width;
// let height;

// width = window.prompt("Enter width");
// height = window.prompt("Enter height");

// area=getArea(width,height);

// function getArea(w,h){  //no need to declare here
//  return w*h;
// }

// console.log("Area= ",area);

//#endregion

//#region Part 26 ternary operator

/* ternary operator = shortcut for an if/else statement
                       takes 3 operands
                       
                       1. a condition with ?
                       2. expression if true :
                       3. expression if false

        condition ? expriftrue : expriffalse
    */
   
// // let adult= checkAge(23);

// // function checkAge(age){
// //     return age>=18?true:false;
// // }
// // console.log(adult);


// let marks=5;
// checkPassed(marks);
// function checkPassed(result){
//     result>=40?console.log("You passed."):console.log("You failed.")
// }

//#endregion

//#region Part 27 let vs var

// let = variables are limited to block scope
// var = variables are limited to a function(){}
            //var variables can escape curly braces but cannot escape a function

// global variable = declared outside any function
// (if global, var will CHANGE browsers window property)

// for (let i=1;i<=3;i++){
//     console.log(i);
// }

// console.log(i);// gives error

// for (var i=1;i<=3;i++){
//     console.log(i);
// }

// console.log(i);// doesnt give error

////but var cannot escape a function


// doSomething();
// function doSomething(){
//     for (var i=1;i<=3;i++){
//        console.log(i);
//     }
// }
// //console.log(i);//gives error


//#endregion

//#region Part 28 template literals

// template literal = delimited with (`)
//                    instead of double or single quotes
//                    allows embedded variables and expressions

// let userName = "Bro";
// let items = 3;
// let total = 75;

// // console.log("Hello",userName);
// // console.log("You have",items,"items in your cart");
// // console.log("Your total is $",total);

// // console.log(`Hello ${userName}`);
// // console.log(`You have ${items} items in your cart.`);
// // console.log(`Your total is $${total}`);

// let text=`Hello ${userName}<br/>
//           You have ${items} items in your cart.<br/>
//           Your total is $${total}`;

// document.getElementById("myLabel").innerHTML = text;

//#endregion

//#region Part 29 format currency


//toLocaleString() = returns a string with a language
//                   sensitive representation of this number

// number.toLocaleString(locale,{options});

//'locale' = specify that language ( undefined = default set in browser)
// 'options' = object with formatting options

// let myNum = 100;

// //myNum = myNum.toLocaleString("en-US"); //US english
// //myNum = myNum.toLocaleString("hi-IN"); //hindi
// //myNum = myNum.toLocaleString("de-DE");  //standard german

// //myNum = myNum.toLocaleString("en-US", {style:"currency", currency:"USD"});
// //myNum = myNum.toLocaleString("hi-IN", {style:"currency", currency:"INR"});
// //myNum = myNum.toLocaleString("de-DE", {style:"currency", currency:"EUR"});

// //myNum=myNum.toLocaleString(undefined,{style:"percent"});

// //myNum=myNum.toLocaleString(undefined,{style:"unit",unit: "celsius"});

// console.log(myNum);
//#endregion

//#region Part 30 number guessing game

// const answer = Math.floor(Math.random() * 10 + 1);
// let guesses = 0;

// document.getElementById("submitButton").onclick = function () {

//     let guess = document.getElementById("guessField").value;
//     guesses += 1;

//     if (guess == answer) {
//         alert(`${guess} is the number. It took you ${guesses} guesses.`);
//     }
//     else if (guess < answer) {
//         alert("too small!");
//     }
//     else {
//         alert("too large!");
//     }
// }

//#endregion

//#region Part 31 Temperature conversion program

// let temp=document.getElementById("textbox").value;
// temp=Number(temp);
// let answer=0;

// let celsiuschk =document.getElementById("cBUtton");
// let Farenheitchk =document.getElementById("fBUtton");


// document.getElementById("submitButton").onclick = function(){
//     if (celsiuschk.checked){
//         answer = toCelsius(temp);
//         //answer=answer.toLocaleString(undefined,{style:"unit",unit: "celsius"});
//         document.getElementById("finalLabel").innerHTML=`your temperature in Celsius is ${answer}`;
//     }
//     else if (Farenheitchk.checked){
//         answer = toFarenheit(temp);
//         //answer=answer.toLocaleString(undefined,{style:"unit",unit: "farenheit"});
//         document.getElementById("finalLabel").innerHTML=`your temperature in Farenheit is ${answer}`;
//     }
//     else{
//         document.getElementById("finalLabel").innerHTML="Please select a unit.";
//     }
    
// }
// function toCelsius(tempr) {
//     return (tempr-32)*(5/9);
// }

// function toFarenheit(tempr) {
//     return (tempr * 9 / 5 + 32);
// }
// // function toCelsius(temp) {
// //     return ((temp - 32) * (5 / 9));
// // }

// // function toFarenheit(temp) {
// //     return (temp * 9 / 5 + 32);
// // }

// // let x=212;
// // x=toCelsius(x);
// // console.log(x);
//#endregion

//#region Part 32 arrays

// array = think of it as a variable 
//         that can store multiple values

// let fruits = ["apple","orange","banana"];
// console.log(fruits);
// console.log(fruits[2]);

// fruits.push("avocado");// add an element
// console.log(fruits[3]);

// fruits.pop();  //removes last element
// console.log(fruits);

// fruits.unshift("mango");// add element at the begining
// console.log(fruits);

// fruits.shift();  // removes element from begining
// console.log(fruits);

// let length = fruits.length;
// let index= fruits.indexOf("orange");

// console.log(length);
// console.log(index);

// let index= fruits.indexOf("kiwi");  // returns -1 as kiwi is not found on the array

//#endregion

//#region Part 33 loop through an array

//let prices= [5,10,15,20];

// for (let i=prices.length-1; i>=0;i--){
//     console.log(prices[i]);
// }

// for(let price of prices){//for up statement re
//     console.log(price);
// }

//#endregion

//#region Part 34 sort an array of strings

// let fruits=["banana","apple","orange","mango"];

// // fruits=fruits.sort();
// fruits=fruits.sort().reverse();


// for (let fruit of fruits){
//     console.log(fruit);
// }

//#endregion

//#region Part 35 2D arrays (multidimensional arrays)

// 2D array = An array of arrays

// let fruits =     ["apples","oranges","bananas"];
// let vegetables = ["carrots","onions","potatoes"];
// let meats=       ["eggs","chickem","fish"];

// let groceryList=[fruits,vegetables,meats];

// groceryList[0][0]="mangoes";

// for(let list of groceryList){
//     for(let food of list){
//         console.log(food);
//     }
// }
//#endregion

//#region Part 36 spread operator

//spread operator = allows an iterable such as
//                  an array or string to be
//                  expanded in places where zero 
//                  or more arguments are expected
//                  (unpack the elements)

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(numbers);
// console.log(...numbers);

// let username="Bro Code";
// console.log(...username);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // let maximum= Math.max(numbers);
// // console.log(maximum); // OUTput: NaN= not a number

// let maximum= Math.max(...numbers);
// console.log(maximum); // output: 9

//another example

// let class1=["Spongebob", "Patrick","Sandy"];
// let class2=["Squidward", "Mr.Krabs","Plankton"];

// // class1.push(class2);
// // console.log(class1);

// class1.push(...class2);
// console.log(...class1);

//#endregion

//#region Part 37 rest parameters

// rest parameters = represents an indefinite
// ...               number of parameters
//                   (packs arguments into an array)

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let e = 5;

// // console.log(sum3(a,b,c));

// // function sum2(a,b){
// //     return a+b;
// // }

// // function sum3(a,b,c){
// //     return a+b+c;
// // }

// // function sum4(a,b,c,d){
// //     return a+b+c+d;
// // }

// function sum (...numbers){
//     let total=0;
//     for (let number of numbers){
//         total+=number;
//     }
//     return total;
// }

// console.log(sum(a,b));
// console.log(sum(a,b,c));
// console.log(sum(a,b,c,d));
// console.log(sum(a,b,c,d,e));

//#endregion

//#region Part 38 Callbacks

// callback = a function passed as an argument
//            to another function


/*          Ensures that a function is not going to
            run before a task is completed.
            Helps us develop asynchronous code.
            (When one function has to wait for another function)
            that helps us avoid errors and potential problems
            Ex. Wait for a file to load
            */

//method one
// let total = sum (2,3);
// displayConsole(total);
// displayDOM(total);


// function sum(x,y){
//     let result = x+y;
//     return result;
// }

// function displayConsole(output){
//     console.log(output);
// }

// function displayDOM(output){
//     document.getElementById("lbl").innerHTML=output;
// }


//method two

// sum(2,3,displayConsole);

// function sum(x,y,callBack){
//     let result=x+y;
//     callBack(result);
// }

// function displayConsole(output){
//     console.log(output);
// }

// function displayDOM(output){
//     document.getElementById("lbl").innerHTML=output;
// }

//#endregion

//#region Part 39 array.foreach()

//array.foreach() = executes a provided callback function
//                  once for each array element

// let students = ["spongebob","patrick","squidward"];

// students.forEach(capitalize);
// students.forEach(print);

// function capitalize(element,index,array){
//     array[index] = element[0].toUpperCase() + element.substring(1);
// }

// function print(index){
//     console.log(index);
// }
//#endregion

//#region Part 40 array.map()

//array.map() = executes a provided callback function
//              once for each array element
//              AND creates a new array

// let numbers = [1,2,3,4,5];
// let squares=numbers.map(square);
// let cubes=numbers.map(cube);
// squares.forEach(print);
// cubes.forEach(print);


// function square(element){
//     return element*element;
// }
// function cube(element){
//     return Math.pow(element,3);
// }
// function print(element){
//     console.log(element);
// }

//#endregion

//#region Part 41 array.filter()

//array.filter() = creates a new arrray with all
//                 elements that pass the test 
//                 provided by a function.

// let ages = [18,16,21,17,19,90];
// let newAges = ages.filter(checkAge);
// newAges.forEach(print);

// function checkAge(element){
//     return element >= 18;  
//     // true and false kina return nagareko
// }
// // function checkAge(element){
// //     if (element >= 18)
// //         return element;  
// // }
// function print(element){
//     console.log(element);
// }

//#endregion

//#region Part 42 array.reduce()

//array.reduce() = reduces an array to a single value

// let prices = [5,10,15,20,25];
// let total = prices.reduce(checkout);

// console.log(`The total is: ${total}.`);

// function checkout(total,element){
//     return total+element;
// }

//#endregion

//#region Part 43 sort an array of numbers

// let grades = [100,50,90,60,80,70] ;
// grades=grades.sort();
// grades.forEach(print);
// function decendingSort(x,y){
//     return y-x;
// }
// function ascendingSort(x,y){
//     return x-y;
// }
// function print(element){
//     console.log(element);
// }

//#endregion

//#region Part 44 function expression

//function expression = function without a name (anonymous function)
//                      avoid polluting the global scope with names                    
//                      write it, then forget about it

// // our regular methods

// sayHello();

// function sayHello(){
//     console.log("Hello");
// }

//with function expression
// example 1
// const greeting = function(){
//     console.log("Hello");
// }

// greeting();

// example 2

// let count = 0;

// let decrease = function(){
//     count-=1;
//     document.getElementById("myLabel").innerHTML=count;
// }
// let increase = function(){
//     count+=1;
//     document.getElementById("myLabel").innerHTML=count;
// }

// document.getElementById("btndecrease").onclick=function(){decrease();}
// document.getElementById("btnincrease").onclick=function(){increase();}


//or

// let count = 0;

// document.getElementById("btndecrease").onclick=function(){    
//     count-=1;
//     document.getElementById("myLabel").innerHTML=count;
// }
// document.getElementById("btnincrease").onclick=function(){    
//     count+=1;
//     document.getElementById("myLabel").innerHTML=count;
// }


//#endregion

//#region Part 45 arrow function expressions

// arrow functions = compact alternative to a traditional function expression
//          =>

// const greeting = function(userName){
//     console.log(`Hello ${userName}`);
// }

// const greeting = (userName) => {
//     console.log(`Hello ${userName}`);
//  }

//greeting("bro");

//example two

// const percent = (x,y) => {
//     return x/y*100;
// }

// let answer = percent(5,10);

// console.log(answer);

//example three

// let grades = [100,50,90,60,80,70];

// grades.sort((x,y) => y-x);
// grades.forEach((element)=>console.log(element));

//#endregion

//#region  Part 46 shuffle an array

// let cards = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

// shuffle(cards);

// //console.log(cards)
// cards.forEach(element => {
//     console.log(element)

// });

// function shuffle(array){
    
//     let currentIndex = array.length;

//     while(currentIndex != 0){
        
//         let randomIndex = Math.floor(Math.random() * array.length);
//         currentIndex-=1;

//         let temp = array[currentIndex];
//         array[currentIndex] = array[randomIndex];
//         array[randomIndex] = temp;
//     }

//     return array;
// }

//#endregion

//#region Part 47 nested functions

/* nested functions = functions inside other functions.
                    Outer functions have access to inner functions.
                    Inner functions are "hidden" from outside the outer functions.
                    used in closures (future video topic)
                    */

// let userName = "Bro";
// let userInbox = 0;

// login();

// function  login(){
//     displayUserName();
//     displayUserInbox();
// }

// function displayUserName(){
//     console.log(`Welcome ${userName}`);
// }

// function displayUserInbox(){
//     console.log(`You have ${userInbox} new messages`);
// }

// problem here is that the functions displayUserName and displayUserInbox is available outside the login function

// // solution:
// let userName = "Bro";
// let userInbox = 0;

// login();
// // displayUserName();

// function  login(){
//     displayUserName();
//     displayUserInbox();

//     function displayUserName(){
//         console.log(`Welcome ${userName}`);
//     }
    
//     function displayUserInbox(){
//         console.log(`You have ${userInbox} new messages`);
//     }
// }



//#endregion

//#region Part 48 maps

//Map = object that holds key-value pairs of any data type

// const store = new Map([
//     ["t-shirt",20],
//     ["jeans",30],
//     ["socks",10],
//     ["underwear",50],
// ]);

// // let shoppingCart = 0;
// // shoppingCart += store.get("t-shirt");
// // console.log(shoppingCart);

// // store.set("hat",40);
// // store.delete("hat");

// //console.log(store.has("hat"));

// console.log(store.size);
// store.forEach((key,value) => console.log(`${key}, ${value}`));

//#endregion

//#region Part 49 objects

/* object = A group of properties and methods
            properties = what an object has
            methods = what an object can do
            use . to access properties/methods

*/
// const  car1 = {
//     model: "Mustang",
//     color: "red",
//     year: 2023,

//     drive: function(){
//         console.log("You drive the car.");
//     },
//     brake: function(){
//         console.log("You step on the brakes.");
//     }
// }

// console.log(car.model);
// console.log(car.year);

// car.drive();
// car.brake();

//#endregion

//#region Part 50 this keyword

// this = reference to a particular object
//        the object depends on the immediate context


// const  car1 = {
//     model: "Mustang",
//     color: "red",
//     year: 2023,

//     drive: function(){
//         console.log(`You drive the ${this.model}.`);
//     },
//     brake: function(){
//         console.log(`You step on the brakes.`);
//     }
// }
// const  car2 = {
//     model: "ford",
//     color: "blue",
//     year: 2023,

//     drive: function(){
//         console.log(`You drive the ${this.model}.`);
//     },
//     brake: function(){
//         console.log(`You step on the brakes.`);
//     }
// }

// car1.drive();
// car2.drive();


//console.log(this);
//#endregion

//#region Part 51 classes

/* class = a blueprint for creating objects
        define what properties and methods they have
        use a constructor for unique properties
        */

// class Player{
//     score = 0;

//     pause(){
//         console.log(`you paused the game.`);
//     }
//     exit(){
//         console.log(`You exited the game.`);
//     }
// }

// const player1 = new Player();
// const player2 = new Player();

// player1.score = 50;
// player2.score = 60;

// console.log(player1.score);
// console.log(player2.score);


// player1.pause();

//#endregion

//#region Part 52 constructors

// constructor = a special method of a class,
//               accepts arguments and assigns properties

// class Student{

//     constructor (name, age, gpa){
//         this.name = name;
//         this.age = age;
//         this.gpa = gpa;
//     }

//     study(){
//         console.log(`${this.name} is studying.`);
//     }
// }

// const student1= new Student("Spongebob",20,3.2);

// console.log(student1.name);
// console.log(student1.age);
// console.log(student1.gpa);
// student1.study();

//#endregion

//#region Part 53 static keyword

//static = belongs to a class, not the objects
//         properties: usseful for caches, fixed configurations
//         methods: useful for utility functions


// class Car{

//     static numberOfCars = 0;

//     constructor(model){
//         this.model = model;
//         Car.numberOfCars +=1;
//     }

//     static startRace(){
//         console.log("3.2.1.go"):
//     }
// }

// const car1 = new Car("Mustang");
// const car2 = new Car("Corvette");
// const car3 = new Car("BMW");

// console.log(Car.numberOfCars);
//#endregion

//#region Part 54 Inheritance

//inheritance = a child class can inherit all the 
//              methods and properties from another class

// class Rabbit{
//     alive = true;
//     name = "rabbit";

//     eat(){
//         console.log(`This ${this.name} is eating`);
//     }
//     sleep(){
//         console.log(`This ${this.name} is sleeping`);
//     }run(){
//         console.log(`This ${this.name} is running`);
//     }
// }

// class Fish{
//     alive = true;
//     name = "fish";

//     eat(){
//         console.log(`This ${this.name} is eating`);
//     }
//     sleep(){
//         console.log(`This ${this.name} is sleeping`);
//     }swim(){
//         console.log(`This ${this.name} is swimming`);
//     }
// }

// class Hawk{
//     alive = true;
//     name = "hawk";

//     eat(){
//         console.log(`This ${this.name} is eating`);
//     }
//     sleep(){
//         console.log(`This ${this.name} is sleeping`);
//     }fly(){
//         console.log(`This ${this.name} is flying`);
//     }
// }


//corollary:


// class Animal{

//     alive = true;

//     eat(){
//         console.log(`This ${this.name} is eating`);
//     }
//     sleep(){
//         console.log(`This ${this.name} is sleeping`);
//     }
// }


// class Rabbit extends Animal{

//     name = "rabbit";

//     run(){
//         console.log(`This ${this.name} is running`);
//     }
// }

// class Fish extends Animal{

//     name = "fish";
    
//     swim(){
//         console.log(`This ${this.name} is swimming`);
//     }
// }

// class Hawk extends Animal{

//     name = "hawk";
    
//     fly(){
//         console.log(`This ${this.name} is flying`);
//     }
// }


// const fish1 = new Fish();
// fish1.eat();

// const rabbit1 = new Rabbit();
// console.log(rabbit1.alive);
// console.log(rabbit1.name);

// rabbit1.eat();
// rabbit1.sleep();
// rabbit1.run();

//#endregion

//#region Part 55 super keyword

// super = refers to the parent class
// commonly used to invoke ctor of a parent class


// class Animal{

// }

// class Rabbit extends Animal{

//     constructor(name, age, runSpeed){
//         this.name = name;
//         this.age = age;
//         this.runSpeed = runSpeed;
//     }
// }

// class Fish extends Animal{
    
//     constructor(name, age, swimspeed){
//         this.name = name;
//         this.age = age;
//         this.swimspeed = swimspeed;
//     }
// }

// class Hawk extends Animal{
    
//     constructor(name, age, flyspeed){
//         this.name = name;
//         this.age = age;
//         this.flyspeed = flyspeed;
//     }
// }

// const rabbit = new Rabbit("rabbit",2,40);//this 
// const fish = new Fish("fish",3,80);//gives 
// const hawk = new Hawk("hawk",4,200);//error

// console.log(rabbit.name);//this
// console.log(rabbit.age);//gives
// console.log(rabbit.runSpeed);//error


//corollary:

// class Animal{

//     constructor(name,age){
//         this.name = name;
//         this.age=age;
//     }
// }

// class Rabbit extends Animal{

//     constructor(name, age, runSpeed){
//         super(name, age);
//         this.runSpeed = runSpeed;
//     }
// }

// class Fish extends Animal{
    
//     constructor(name, age, swimspeed){
//         super(name, age);
//         this.swimspeed = swimspeed;
//     }
// }

// class Hawk extends Animal{
    
//     constructor(name, age, flyspeed){
//         super(name, age);
//         this.flyspeed = flyspeed;
//     }
// }

// const rabbit = new Rabbit("rabbit",2,40);
// const fish = new Fish("fish",3,80);
// const hawk = new Hawk("hawk",4,200);

// console.log(rabbit.name);//
// console.log(rabbit.age);//
// console.log(rabbit.runSpeed);//

// console.log(fish.name);//
// console.log(fish.age);//
// console.log(fish.swimspeed);//

// console.log(hawk.name);//
// console.log(hawk.age);//
// console.log(hawk.flyspeed);//
//#endregion

//#region Part 56 getters and setters

// get = binds an object property to a function
//       when that property is accessed

// set = binds an object property to a function
//       when that property is assigned to a value


// class Car{

//     constructor(power){
//         this._power = power;
//         this._gas = 25;
//     }

//     get power(){
//         return `${this._power}hp`
//     }
//     get gas(){
//         return `${this._gas}L`
//     }
//     set gas(value){
//         if(value>50){
//             value = 50;
//         }
//         else if (value<0){
//             value=0;
//         }
//         this._gas = value;
//     }
// }

// let car = new Car(400);

// car.gas = 100;
// console.log(car.power);
// console.log(car.gas);
//#endregion

//#region Part 57 objects as arguments


// class Car{

//     constructor(model,year, color){
//         this.model = model;
//         this.year = year;
//         this.color = color;
//     }
// }

// const car1 = new Car("Mustang", 2023, "red");
// const car2 = new Car("Corvette", 2023, "blue");
// const car3 = new Car("Lambo", 2023, "Yellow");

// changeColor(car2,"black");
// displayInfo(car2);

// function displayInfo(car){
//     console.log(car.model);
//     console.log(car.year);
//     console.log(car.color);
// }

// function changeColor(car,color){
//     car.color=color;
// }
//#endregion

//#region Part 58 array of objects

// class Car{

//     constructor(model,year, color){
//         this.model = model;
//         this.year = year;
//         this.color = color;
//     }
//         drive(){
//             console.log(`You drive the ${this.model}.`);
//         }
    
// }

// const car1 = new Car("Mustang", 2023, "red");
// const car2 = new Car("Corvette", 2023, "blue");
// const car3 = new Car("Lambo", 2023, "Yellow");

// const cars = [car1,car2,car3];

// // console.log(cars[0].model);
// // console.log(cars[1].model);

// // cars[0].drive();
// // cars[1].drive();
// // cars[2].drive();

// display(cars);

// function display(carcollection){
//     carcollection.forEach(element => {
//         console.log(element.model);
//         element.drive();
//     });
// }

//#endregion

//#region Part 59 anonymous objects

// anonymous objects = objects without a name.
//                     Not directly referenced
//                     less syntax. No need for unique names.


// class Card{
//     constructor(value,suit){
//         this.value=value;
//         this.suit=suit;
//     }
// }

// let card1 = new Card("A","Hearts");
// let card2 = new Card("A","Spades");
// let card3 = new Card("A","Diamonds");
// let card4 = new Card("A","Clubs");

// let card5 = new Card("2","Hearts");
// let card6 = new Card("2","Spades");
// let card7 = new Card("2","Diamonds");
// let card8 = new Card("2","Clubs");

// let cards = [card1,card2,card3,card4,card5, card6, card7, card8];

// console.log(card1.value +" "+ card1.suit);
// console.log(cards[0].value +" "+ cards[0].suit);

//or

// let cards =[new Card("A","Hearts"),
//             new Card("A","Spades"),
//             new Card("A","Diamonds"),
//             new Card("A","Clubs"),
//             new Card("2","Hearts"),
//             new Card("2","Spades"),
//             new Card("2","Diamonds"),
//             new Card("2","Clubs")];

// //console.log(cards[7].value +" "+ cards[7].suit);

// cards.forEach((element) => {
//     console.log(element.value + element.suit);
// })

//#endregion

//#region Part 60 error handling

//error = object with a dscription of something went wrong

            // cant open a file
            // loose connection
            // user types incorrect input
            // Type error
//ex:1
// try{
//     console.lag();
// }
// catch(error){
//     console.log(error);
// }



// //ex:2
// try{
//     let x = window.prompt("Enter a number");
//     x = Number(x);

//     if(isNaN(x)){
//         throw "that wasnt a number";
//     }
//     if(x == ""){
//         throw "that was empty";
//     }

//     console.log(`${x} is a number`);

// }
// catch(error){
//     console.log(error);
// }

// finally{ // definitely executes weather there is an error or not
//     console.log("this always executes");
// }

//#endregion

//#region Part 61 setTimeout() & clearTimeout()

//setTimeout() = invokes a function after a number of milliseconds.
//               asynchronous function( doesnt pause the execution of your program)

// setTimeout(firstMessage, 3000);
// setTimeout(secondMessage, 6000);
// Timer3 = setTimeout(thirdMessage, 9000);


// function firstMessage(){
//     alert(`Buy this course for 500 dollars`);
// }
// function secondMessage(){
//     alert(`This is not a scam`);
// }
// function thirdMessage(){
//     alert(`DO IT!!!`);
// }

// clearTimeout(Timer3);
//#endregion

//#region Part 62 setInterval() & clearInterval()
// setInterval() = invokes a function repeatedly after a number of mlliseconds.....
//                asynchronous function (doesn't pause the program execution)

// let count = 0;
// let max = window.prompt("count up to what number?");
// max = Number(max);

// const myTimer = setInterval(countUp,1000);

// function countUp(){
//     count+=1;
//     console.log(count);
//     if(count >= max){
//         clearInterval(myTimer);
//     }
// }

//#endregion

//#region Part 63 Date objects

//The dat object is used to work with dates and times

// let date = new Date(0);
// let date = new Date(2023, 0, 1,2,3,4,5 );
// let date = new Date("January 1,2023 00:00:00");

// let date = new Date();

// let dayofmonth = date.getDate();
// let dayofweek = date.getDay();
// let year = date.getFullYear();
// let month = date.getMonth();
// let hour = date.getHours();
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();
// let ms = date.getMilliseconds();


// date.setFullYear(2024);
// date.setMonth(11);//11=december and same goes for week ie, week and month start from zero.

// console.log(year);
// console.log(dayofmonth);
// console.log(dayofweek);
// console.log(month);
// console.log(hour);
// console.log(minutes);
// console.log(seconds);
// console.log(ms);



//date = date.toLocaleString();
//console.log(date);
//document.getElementById("myLabel").innerHTML=date;


// let date = new Date();

// function formatDate(date){
//     let year = date.getFullYear();
//     let month = date.getMonth() +1;
//     let day = date.getDate();

//     return `${day}/${month}/${year}`;
// }
// document.getElementById("myLabel").innerHTML=formatTime(date);

// function formatTime(date){
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();

//     hours = (hours % 12) || 12;  // using or bitwise operator
//     let amorpm = hours >= 12 ? "pm":"am"

//     return `${hours}/${minutes}/${seconds}${amorpm}`;

// }

//#endregion

//#region Part 64 Clock Program

// const myLabel = document.getElementById("myLabel");
// update();
// setInterval(update,1000);
// function update(){
//     let date = new Date();
//     myLabel.innerHTML = formatTime(date);

//     function formatTime(date){
//         let hours = date.getHours();
//         let minutes = date.getMinutes();
//         let seconds = date.getSeconds();

//         let amorpm = hours >= 12 ? "pm":"am";
//         hours = (hours % 12) || 12; // using OR BITWISE operator

//         hours = formatZeros(hours);
//         minutes = formatZeros(minutes);
//         seconds = formatZeros(seconds);

//         return `${hours}:${minutes}:${seconds}${amorpm}`;
//     }

//     function formatZeros(time){
//         time = time.toString();
//         return time.length < 2 ? ("0"+time) : time;
//     }
// }

//#endregion

//#region Part 65 asychronous code and asynchronous code

// synchronous code = In an ordered sequence.
//                    step by step linear instructions
//                    (start now, finish now)

// asynchronous code = Out of sequence.
//                     Ex: access a database
//                         fetch a file
//                     Tasks that take time
//                     (start now, finish sometime later)

//synchronous example
// console.log("start");
// console.log("this is synchronous");
// console.log("end");

//asynchronous example
// console.log("start");
// setTimeout(() =>console.log("this is asynchronous"),5000);
// console.log("end");

//#endregion

//#region Part 66 console.time

// console.time() = Starts a timer you can use to
//                  track how long an operation takes.
//                  Give each timer a unique name.

// console.time("Response time");

// alert("click the okay button");
// setTimeout(()=>console.log('hello'),3000);
// console.timeEnd("Response time");
//#endregion

//#region Part 67 promise

/* promise = object that encapsulates the result of an asynchronous operation.
             let asynchronous methods return values like synchronous methods.
             "I promise to return something in the future";
*/
/*           the STATE is "pending" then: "fulfilled" or "rejected"
             the RESULT is what can be returned
             2 parts producing and consuming
             */

// //example one
// const promise = new Promise((resolve,reject)=>{

//     let fileLoaded = false;

//     if (fileLoaded){
//         resolve("File loaded");
//     }
//     else{
//         reject("Unable to load file");
//     }

// } );


// promise.then((value)=>{console.log(value)})
//        .catch(error => console.log(error));

// //example two

// const promise = new Promise(resolve => setTimeout(resolve,5000));

// promise.then(() => console.log("Thanks for waiting!"));

//example three 

// const wait = (time) => new Promise(resolve => setTimeout(resolve,time));

// wait(3000).then(() => console.log("Thanks for waiting!"));
//#endregion

//#region Part 68 async

// async = makes a fuction return a Promise

// async function loadFile(){

//     let fileLoaded = true;

//     if (fileLoaded){
//         return ("File loaded");
//     }
//     else{
//         throw ("Unable to load file");
//     }
// }

// loadFile().then((value)=>{console.log(value)})
//           .catch(error => console.log(error));



//corollary


// function loadFile(){

//     let fileLoaded = false;

//     if (fileLoaded){
//         return Promise.resolve("File loaded");
//     }
//     else{
//         return Promise.reject("Unable to load file");
//     }
// }

// loadFile().then((value)=>{console.log(value)})
//           .catch(err => console.log(err));
//#endregion

//#region Part 69 await

// await = makes an async function wait for a Promise

// async function loadFile(){

//     let fileLoaded = false;

//     if (fileLoaded){
//         return ("File loaded");
//     }
//     else{
//         throw ("Unable to load file");
//     }
// }


//  async function startProcess(){

//     try{
//         let message = await loadFile();
//         console.log(message);
//     }
//     catch(error){
//         console.log(error);
//     }
//  }

// startProcess();


//#endregion

//#region Part 70 ES6 modules

/*  The idea behind a module is that its a file of reuable code
    We can import sections of pre-written code to use whenever we want
    Great for any general utility values and functions
    Helps to make your code more reusable and maintainable
    Think of modules as separate chapters of a book.
    */

    // import { PI, getCircumfrence, getArea} from "./math_util.js";

    // let rad = 10;
    // console.log(`Circumference = ${getCircumfrence(rad)}`);
    // console.log(`Area = ${getArea(rad)}`);



    // import * as MathUtil from "./math_util.js";

    // let rad = 10;
    // console.log(`Circumference = ${MathUtil.getCircumfrence(rad)}`);
    // console.log(`Area = ${MathUtil.getArea(rad)}`);

//#endregion

//#region Part 71 DOM Intro

// DOM = Document Object Model (API = Application Programming  Interface)
// An inteface for changing the content of a page.

// console.log(document);
// console.dir(document);

// console.log(document.title);
// console.log(document.URL);

// document.title="Title goes here!";
// console.log(document.title);

// document.body.style.backgroundColor = "skyblue";
// document.getElementById("myLabel").innerHTML="HellO";

//#endregion

//#region Part 72 element selectors

// //1.get element by id
// let element = document.getElementById("myTitle");
// element.style.backgroundColor = "lightgreen";


// //2.get elementSSS by name
// let fruits = document.getElementsByName("fruits");
// //console.log(fruits);
// //console.log(fruits[0]);
// fruits.forEach(fruit => {
//     if(fruit.checked){
//         console.log(fruit.value);
//     }
// })


// //3.get elementSSS by tagname
// let vegetables = document.getElementsByTagName("li");
// vegetables[0].style.backgroundColor="red";


// //4.get elementSSS by classname
// let desserts = document.getElementsByClassName("desserts");
// desserts[1].style.backgroundColor="green";


// //5.get element by queryselector(any of classname. id , tagname, or any attribute)
// let element2 = document.querySelector("#myTitle");
// element2.style.backgroundColor = "lightblue";

// let element3 = document.querySelector(".desserts");// it selects the first element of the group
// element3.style.backgroundColor = "lightblue";

// let element4 = document.querySelector("li");// it selects the first element of the group
// element4.style.backgroundColor = "lightblue";

// let element5 = document.querySelector("[for]");// it selects the first element of the group
// element5.style.backgroundColor = "lightblue";



// //6.get elementsss by queryselectorall(any of classname. id , tagname, or any attribute)
// let elements = document.querySelectorAll(".desserts");// it selects the first element of the group
// elements[2].style.backgroundColor = "darkblue";


// let elementss = document.querySelectorAll("li");// it selects the first element of the group
// elementss.forEach(element => {
//     element.style.backgroundColor = "violet";
// });


//#endregion

//#region Part 73 DOM Traversal

// .firstElementChild
// .lastElementChild
// .parentElement
// .nextElementSibling
// .previousElementSibling
// .children[]
// Array.from.(.children)


// let element = document.body;
// let child = element.firstElementChild;
// //let child = element.firstElementChild;  //this selects the script element because it is the last element
// let child = element.firstElementChild;
// child.style.backgroundColor = "lightgreen";

// let element = document.querySelector("#vegetables");
// // let parent = element.parentElement;
// // parent.style.backgroundColor = "lightgreen";
// // let sibling = element.nextElementSibling;
// // sibling.style.backgroundColor = "lightgreen";
// let sibling = element.previousElementSibling;
// sibling.style.backgroundColor = "lightgreen";

// same goes for list items if we select <ul> as parent


// let element = document.querySelector("#fruits");
// let child = element.firstElementChild;
// child.style.backgroundColor = "lightgreen";

//or

// let element = document.querySelector("#fruits");
// let child = element.children[1];
// child.style.backgroundColor = "lightgreen";

//corollary
// let element = document.querySelector("#fruits");
// let children = Array.from(element.children);
// children.forEach(element => {
//     element.style.backgroundColor = "lightgreen";

// });

//#endregion

//#region Part 74 add/change HTML elements

// .innerHTML (vunerable to XSS attacks) cross side scripting attacks
// .textContent (more secure)

// const nameTag = document.createElement("h1");
// nameTag.innerHTML = "Bro";
// document.body.append(nameTag);

// const nameTag = document.createElement("h1");
// nameTag.innerHTML = window.prompt("Enter your firdt name");
// document.body.append(nameTag);

// const nameTag = document.createElement("h1");
// nameTag.textContent = window.prompt("Enter your firdt name");
// document.body.append(nameTag);

// const myList = document.querySelector("#fruit");
// const listItem = document.createElement("li");
// listItem.textContent = "mango";
// //myList.append(listItem);
// //myList.prepend(listItem);
// myList.insertBefore(listItem,myList.getElementsByTagName("li")[1]);

//#endregion

//#region Part 75 add/change CSS properties

// const title = document.getElementById("myTitle");

// title.style.backgroundColor = "rgb(50,100,90)"
// title.style.color = "#222222"

// title.style.fontFamily="consolas";
// title.style.textAlign="center";
// title.style.border="5px solid blue";
// title.style.display = "block;"//"none";

//#endregion

//#region Part 76 events

// //#1
// const element = document.getElementById("myButton");
// element.onclick = doSth;
// function doSth(){
//     alert("You clicked the button");
// }

//#2
// const element = document.body;
// element.onload = doSomething;
// function doSomething(){
//     alert("You clicked the button");
// }

// //#3
// const element = document.getElementById("myText");
// element.onchange = doSomething;
// function doSomething(){
//     alert("You clicked the button");
// }

// //#3
// const element = document.getElementById("myDiv");
// // element.onmouseover = doSomething;
// // element.onmouseout = doSomethingElse;
// element.onmousedown = doSomething;
// element.onmouseup = doSomethingElse;
// function doSomething(){
//     element.style.backgroundColor = "red";
// }function doSomethingElse(){
//     element.style.backgroundColor = "lightgreen";
// }
//#endregion

//#region Part 77 addEventListner

/*  .addEeventListner(event, function, useCapture)
    You can add many event handlers to one element.
    Even the same event that invokes different functions*/

    //const innerDiv = document.getElementById("innerDiv");
    //const outerDiv = document.getElementById("outerDiv");

    //part one
    // innerDiv.addEventListener("mouseover",changeRed);
    // innerDiv.addEventListener("mouseout",changeGreen);

    // function changeRed(){
    //     innerDiv.style.backgroundColor="red";
    // }
    // function changeGreen(){
    //     innerDiv.style.backgroundColor="lightgreen";
    // }


    //part two
    // innerDiv.addEventListener("click",changeBlue);
    // outerDiv.addEventListener("click",changeBlue,true);

    // function changeBlue(){
    //     alert(`You selected ${this.id}`);
    //     this.style.backgroundColor="blue";
    // }

//#endregion

//#region Part 78 show/hide HTML elements

// const myButton = document.querySelector("#myButton");
// const myImg = document.querySelector("#myImg");

// // myButton.addEventListener("click",() =>{
// //     if(myImg.style.display == "none"){
// //         myImg.style.display = "block";
// //     }else{
// //         myImg.style.display = "none";
// //     }
// // })


// myButton.addEventListener("click",() =>{
//         if(myImg.style.visibility == "hidden"){
//             myImg.style.visibility = "visible";
//         }else{
//             myImg.style.visibility = "hidden";
//         }
//     })
    

//#endregion

//#region Part 79 detect key presses

// const myDiv = document.getElementById("myDiv");
// window.addEventListener("keydown",move);
// let x=0;
// let y=0;
// function move(event){
//     switch(event.key){
//         case "ArrowDown":
//             y+=5;
//             myDiv.style.top = y + "px";
//             break;
//         case "ArrowUp":
//             y-=5;
//             myDiv.style.top = y + "px";
//             break;
//         case "ArrowLeft":
//             x-=5;
//             myDiv.style.left = x + "px";
//             break;
//         case "ArrowRight":
//             x+=5;
//             myDiv.style.left = x + "px";
//             break;
//     }
// }
//#endregion

//#region Part 80 animations


// // animation one
// const myButton = document.getElementById("myButton");
// const myDiv = document.getElementById("myDiv");

// myButton.addEventListener("click",begin);

// function begin(){

//     let timerId = null;
//     let x=0;
//     let y=0;

//     timerId = setInterval(frame, 5);

//     function frame(){
//         if(x>=200 || y>=200)
//             clearInterval(timerId);
//         else{
//             x+=1;
//             y+=1;
//             myDiv.style.left = x+"px";
//             myDiv.style.top = y+"px";
//         }
//     }
// }


// // animation two
// const myButton = document.getElementById("myButton");
// const myDiv = document.getElementById("myDiv");

// myButton.addEventListener("click",begin);

// function begin(){

//     let timerId = null;
//     let degrees=0;


//     timerId = setInterval(frame, 5);

//     function frame(){
//         if(degrees >= 360)
//             clearInterval(timerId);
//         else{
//             degrees+=1;
//             myDiv.style.transform="rotateZ("+degrees+"deg)";
//         }
//     }
// }


// // animation three
// const myButton = document.getElementById("myButton");
// const myDiv = document.getElementById("myDiv");

// myButton.addEventListener("click",begin);

// function begin(){

//     let timerId = null;
//     let degrees=0;
//     let x=0;
//     let y=0;

//     timerId = setInterval(frame, 5);

//     function frame(){
//         if(x>=200 || y>=200 || degrees >= 360)
//             clearInterval(timerId);
//         else{
//             x+=1;
//             y+=1;
//             myDiv.style.left = x+"px";
//             myDiv.style.top = y+"px";
//             degrees+=1;
//             myDiv.style.transform="rotateZ("+degrees+"deg)";
//         }
//     }
// }


// // animation four
// const myButton = document.getElementById("myButton");
// const myDiv = document.getElementById("myDiv");

// myButton.addEventListener("click",begin);

// function begin(){

//     let timerId = null;
//     let scaleX=1;
//     let scaleY=1;

//     timerId = setInterval(frame, 5);

//     function frame(){
//         if(scaleX>=3)
//             clearInterval(timerId);
//         else{
//             scaleX+=0.01;
//             scaleY+=0.01;
//             myDiv.style.transform="scale(" + scaleX + "," + scaleY+")";
//         }
//     }
// }

//#endregion

//#region Part 81 canvas API

// Canvas API = a means for drawing graphics
//              used for animations, games, data visualization

// let canvas = document.getElementById("myCanvas");
// let context = canvas.getContext("2d");

//draw lines
// context.strokeStyle = "purple";
// context.lineWidth = 10;

// context.beginPath();
// context.moveTo(0,0);
// context.lineTo(250,250);
// context.lineTo(250,500);
// context.moveTo(500,0);
// context.lineTo(250,250);
// context.stroke();

// //draw triangle
// context.strokeStyle="grey";
// context.fillStyle = "yellow";
// context.lineWidth=10;

// context.beginPath();
// context.moveTo(250,0);
// context.lineTo(0,250);
// context.lineTo(500,250);
// context.lineTo(250,0);
// context.stroke();
// context.fill();

// //draw rectangle
// context.lineWidth=10;
// context.fillStyle = "yellow";
// context.strokeStyle="grey";
// context.strokeRect(0,0,250,250);
// context.fillRect(0,0,250,250);

// // cricle
// //(x,y,r,sAngle,EAngle,counterclockwise) //angles are in radians
// context.beginPath();
// context.arc(250,250,100,0,2*Math.PI,true);
// context.stroke();

// //draw text
// context.font = "50px MV Boli";
// context.fillStyle = "yellow";
// //context.fillText("you win",100,100);
// //to keep in the center
// context.textAlign = "center";
// context.fillText("you win",canvas.width/2,canvas.height/2);

//#endregion

//#region Part 82 window
// window = interface used to talk to the web browser
//          the DOM is a property of the window

//console.log(window);

// console.log(window.innerHeight);
// console.log(window.innerWidth);
// console.log(window.outerHeight);
// console.log(window.outerWidth);

// console.log(scrollX);//long content needed
// console.log(scrollY);

// console.log(window.location.href);
// window.location.href="https://google.com";

// console.log(window.location.hostname);

// console.log(window.location.pathname);






//const btnMyButton = document.querySelector("#btnMyButton");

//btnMyButton.addEventListener("click", ()=> window.open("https://google.com"))
//btnMyButton.addEventListener("click", ()=> window.open())
//btnMyButton.addEventListener("click", ()=> window.close())
//btnMyButton.addEventListener("click", ()=> window.print())

//window.alert("hello");
//window.confirm("are you ssure?");
//let age = window.prompt("enter anything bcuz this isnt doing anything");

//#endregion

//#region Part 83 cookies

/* cookie = a small text file stored on your computer 
            used to remember information about the user 
            saved in name-value pairs
            */

// //check if cookie is enabled
// console.log(navigator.cookieEnabled);

// // to add a cookie
// document.cookie = "firstName=Spongebob; expires = Sun, 1 January 2030 12:00:00 UTC; path=/";
// document.cookie = "lastName=SquarePants; expires = Sun, 1 January 2030 12:00:00 UTC; path=/";
// document.cookie = "lastName=SquarePantssss; expires = Sun, 1 January 2030 12:00:00 UTC; path=/";
// console.log(document.cookie);


//-------------------------------------


// setCookie("email","sponge@gmail.com",365);
// //deleteCoookie("email");
// //console.log(document.cookie);
// console.log(getValueByName("email"));

// function setCookie(name,value,daysToLive){
//     const date = new Date();
//     date.setTime(date.getTime() + daysToLive*24*60*60*1000);
//     let expires = "expires=" + date.toUTCString();

//     document.cookie = `${name}=${value};${expires}; path=/`;

// }


// function deleteCoookie(name){
//     setCookie(name,null,null);
// }


// function getValueByName(name){
//     const cDecoded = decodeURIComponent(document.cookie);
//     const cArray = cDecoded.split("; ");
//     //console.log(cArray);
//     let result = null;

//     cArray.forEach((element)=>{
//         if(element.indexOf(name)==0){
//             result = element.substring(name.length+1);
//         }
//     })
//     return result;
// }

//-------------------------------------
//#endregion

//#region Part 84 stopwatch program

// const timeDiv = document.querySelector("#timeDiv");
// const btnStart = document.querySelector("#btnStart");
// const btnPause = document.querySelector("#btnPause");
// const btnReset = document.querySelector("#btnReset");

// let startTime = 0;
// let elaspedTime = 0;
// let currentTime = 0;
// let paused = true;
// let intervalId;
// let hrs = 0;
// let mins = 0;
// let secs = 0;


// btnStart.addEventListener("click",() =>{
//     if(paused){
//         paused = false;
//         startTime = Date.now()-elaspedTime;//-------------1
//         intervalId = setInterval(updateTime,1000);
//     }
// });

// btnPause.addEventListener("click",()=>{
//     if(!paused){
//         paused = true;
//         elaspedTime = Date.now() - startTime;
//         clearInterval(intervalId);
//     }
// });

// btnReset.addEventListener("click",()=>{
//     paused = true;
//     clearInterval(intervalId);
//     startTime = 0;
//     elaspedTime = 0;
//     currentTime = 0;
//     hrs = 0;
//     mins = 0;
//     secs = 0;
//     timeDiv.textContent ="00:00:00";

// });

// function updateTime(){

//     elaspedTime = Date.now()-startTime; //------------2

//     secs = Math.floor((elaspedTime / 1000) % 60);
//     mins = Math.floor((elaspedTime / (1000 * 60)) % 60);
//     hrs = Math.floor((elaspedTime / (1000 * 60 * 60)) % 60);

//     secs = pad(secs);
//     mins = pad(mins);
//     hrs = pad(hrs);
    
//     timeDiv.textContent = `${hrs}:${mins}:${secs}`;

//     function pad(unit){
//         return ("0"+unit).length > 2 ? unit : "0"+unit;
//     }
// }
////console.log(Date.now()/1000);//gives time in milliseconds
//#endregion

//#region Part 85 Rock Paper Scissors Game

// const playerText = document.querySelector("#playerText");
// const computerText = document.querySelector("#computerText");
// const resultText = document.querySelector("#resultText");

// const choiceBtn = document.querySelectorAll(".choiceBtn");

// let player;
// let computer;
// let result;

// choiceBtn.forEach(button => {
//     button.addEventListener("click",()=>{
//         player = button.textContent;
//         computer = computerTurn();
//         playerText.textContent = `Player: ${player}`;
//         computerText.textContent = `Computer: ${computer}`;
//         resultText.textContent = checkWinner();
//     })
// });

// function computerTurn(){
//     const randNum = Math.floor((Math.random()*3)+1);

//     switch(randNum){
//         case 1:
//             return "ROCK";
//         case 2:
//             return "PAPER";
//         case 3:
//             return "SCISSORS";
//     }
// }

// function checkWinner(){
//     if(player==computer)
//         return "Draw";
//     else if(computer == "ROCK")
//         return (player == "PAPER") ? "You win":"You lose";
//     else if(computer == "PAPER")
//         return (player == "SCISSORS") ? "You win":"You lose";
//     else if(computer == "SCISSORS")
//         return (player == "ROCK") ? "You win":"You lose";

// }
//#endregion

//#region Part 86 Tic Tac Toe Game

// const cells = document.querySelectorAll(".cell");
// const statusText = document.querySelector("#statusText");
// const restartBtn = document.querySelector("#restartBtn");
// const winConditions = [
//                     [0, 1, 2],
//                     [3, 4, 5],
//                     [6, 7, 8],
//                     [0, 3, 6],
//                     [1, 4, 7],
//                     [2, 5, 8],
//                     [0, 4, 8],
//                     [2, 4, 6]
// ];

// let options = ["","","","","","","","",""];
// let currentPlayer = "X";
// let running = false;

// initializeGame();

// function initializeGame(){
// cells.forEach(cell => cell.addEventListener("click",cellClicked));
// restartBtn.addEventListener("click",restartGame);
// statusText.textContent = `${currentPlayer}'s turn`;
// running = true;
// }

// function cellClicked(){
//     const cellIndex = this.getAttribute("cellIndex");

//     if(options[cellIndex] != "" || !running){
//         return;
//     }

//     updateCell(this, cellIndex);
//     checkWinner();

// }

// function updateCell(cell,index){
//     options[index] = currentPlayer;
//     cell.textContent = currentPlayer;
// }

// function changePlayer(){
//     currentPlayer = (currentPlayer == "X")? "O":"X";
//     statusText.textContent = `${currentPlayer}'s turn`;
// }

// function checkWinner(){
//     let roundWon = false;

//     for (let i=0;i<winConditions.length;i++){
//         const condition = winConditions[i];
//         const cellA = options[condition[0]];
//         const cellB = options[condition[1]];
//         const cellC = options[condition[2]];

//         if(cellA == "" || cellB == "" || cellC == ""){
//             continue;
//         }
//         if(cellA==cellB && cellB==cellC){
//             roundWon = true;
//             break;
//         }
//     }

//     if(roundWon){
//         statusText.textContent=`${currentPlayer} wins`;
//         running = false;
//     }
//     else if(!options.includes("")){
//         statusText.textContent=`Draw`;
//         running = false;
//     }
//     else{
//         changePlayer();
//     }
// }

// function restartGame(){
//     currentPlayer = "X";
//     options = ["","","","","","","","",""];
//     statusText.textContent = `${currentPlayer}'s turn`;
//     cells.forEach(cell => cell.textContent="");
//     running = true;
// }
//#endregion


