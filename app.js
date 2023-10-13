// Practice exercise 2.1
console.log("*What are the types of these variables listed below? Verify this with typeof and output the result to the console");
let str1 = 'Laurence';
let str2 = "Svekis";
let val1 = undefined;
let val2 = null;
let myNum = 1000;
console.log("str1", typeof str1);
console.log("str2", typeof str2);
console.log("val1", typeof val1);
console.log("val2", typeof val2);
console.log("myNum",typeof myNum);
// practice ecercise 2.2
console.log("*Create a variable for your name, another one for your age, and another one forwhether you can code JavaScript or not.")
let int="Hello,"
let name="My Name Is MAHNOOR AMANAT ALI"
let age="My Age Is 20."
let bool="Yes,I Can Code Javascript."
let sentence=(`${int} ${name}  ${age} ${bool}`)
console.log(sentence);
// practice exercise 2.3
console.log("*Write some code to calculate the hypotenuse of a triangle using the Pythagorean theorem?");
let side1=prompt("Enter the value of side adjacent to the triangle.")
let side2=prompt("Enter the value of the opposite side to the triangle.")
console.log(side1**2+side2**2);
console.log("Sqrt");
let c=Math.sqrt(side1**2+side2**2)
console.log(c);
// practice exercise 2.4
console.log("*Create variables for three numbers: a, b, and c.");
let Nr=12;
let Nr2=8;
let Nr3=24;
let result1=(Nr2+=Nr);
// console.log(result1);
let result2=(Nr/=Nr3);
// console.log(result2);
let result3=(Nr3=Nr3%Nr2);
// console.log(result3);
console.log(`${result1}    ${result2}     ${result3}`);
console.log("*CHAPTER PROJECT*");
let mile=30
// 1 mile is equal to 1.60934 kilometers
let kms=mile *1.60934
console.log("The   distance    of "   +mile+  " kms   is   equal  to "  +kms+   "  miles.");
console.log("BMI CALCULATOR");
let height=4
let weight=2
let cm=height*2.54
let kilo=weight*2.2046
console.log(`${cm}      ${kilo}`);