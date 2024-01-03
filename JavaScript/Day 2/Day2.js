//JavaScript Precedence Rules
var result = 0;

result = 1 + (3 * 4);
console.log(result);

result = (1 + 3) * 4;
console.log(result);

result = (2 * 4) * 4 + 2;
console.log(result);

result = ((2 * 4) * 4) + 2;
console.log(result);

result = (2 * 4) * (4 + 2);
console.log(result);

//Concatenating Text Strings
var name = "Kasinath"
var greeting = "Hello "
var output = greeting + name;
console.log(output);

output = "Welcome "+ name;
console.log(output);

output = "2 plus 2 is: "+ 2 + 2;
console.log(output);

//Prompts
var getName = prompt("What is your name?", "Kasinath Conjeevaram Ravi");
console.log(getName);

var getNumberAsString = prompt("What is 1 + 1?")
console.log(getNumberAsString);

var getNumberAsString = prompt("How many dogs do you have?", 1);
var getNumberAsConcatenatedString = getNumberAsString + 1;
console.log(getNumberAsConcatenatedString);

var getNull = window.prompt("???"); //user presses cancel
console.log(getNull);

//if Statements
var getAnswer = prompt("What is the Capital of TamilNadu?");
if (getAnswer === "Chennai")
{
    console.log("That's Correct!");
}

//Comparison Operators
var name1 = "Kasinath";
var name2 = "Kasinath";
if (name1 === name2)
{
    console.log("The names are same");
}
name2 = "kasinath"
if (name1 !== name2)
{
    console.log("The names are different");
}
var num1 = 0;
var num2 = 1;
if (num1 < num2)
{
    console.log("Num1 is less than Num2");
}
num1 = 1;
if (num1 <= num2)
{
    console.log("Num1 is less than or equal to Num2");
}
num2 = 0
if (num1 > num2)
{
    console.log("Num1 is greater than Num2");
}
num2 = 1;
if (num1 >= num2)
{
    console.log("Num1 is greater than or equal to Num2");
}

//if...else and else if Statements
name1 = "Kasinath";
name2 = "Conjeevaram"
if (name1 === name2)
{
    console.log("Name 1 = "+ name1 +", Name 2 = "+ name2 +" are same");
}
else
{
    console.log("Name 1 = "+ name1 +", Name 2 = "+ name2 +" are different");
}

num1 = 1000;
num2 = num1 * num1;
if (num1 > num2)
{
    console.log(num1 + " is greater than "+ num2);
}
else if(num2 > num1)
{
    console.log(num2 + " is greater than "+ num1);
}
else
{
    console.log(num1 + " is equal to "+ num2);
}
