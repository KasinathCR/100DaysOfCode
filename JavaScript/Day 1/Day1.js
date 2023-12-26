//JavaScript console.log
alert("Hello Kasinath Conjeevaram Ravi, Welcome to Learning JavaScript - The Smart Way!");

//Text String Variables
var greeting = "Hello Kasinath Conjeevaram Ravi!";
console.log(greeting);
greeting = "Welcome to Learning JavaScript - The Smart Way!";
console.log(greeting);

//Number Variables
var num = 10;
var newNum = num + 100;
console.log(num);
console.log(newNum);
//The Number Variable became a String
num = "Hello!"
console.log(num);

//Variable naming rules - Below is a multi-line comment
/*
* A variable name can't contain any spaces. 
* A variable name can contain only letters, numbers, dollar signs, and underscores. 
* Though a variable name can't be any of JavaScript's keywords, it can contain keywords. For example, userconsole.log and myVar are legal. Capital letters are fine, but be careful. Variable names are case sensitive. A rose is not a Rose. If you assign the string "Floribundas" to the variable rose, and then ask JavaScript for the value assigned to Rose, you'll come up empty. 
* I teach the camelCase naming convention. Why "camelCase"? Because there is a hump or two (or three) in the middle if the name is formed by more than one word. A camelCase name begins in lower case. If there's more than one word in the name, each subsequent word gets an initial cap, creating a hump. If you form a variable name with only one word, like response, there's no hump. It's a camel that's out of food. Please adopt the camelCase convention. It'll make your variable names more readable, and you'll be less likely to get variable names mixed up.
* Make your variable names descriptive, so it's easier to figure out what your code means when you or someone else comes back to it three weeks or a year from now. Generally, userName is better than x, and faveBreed is better than favBrd, though the shorter names are perfectly legal. You do have to balance readability with conciseness, though. bestSupportingActressInADramaOrComedy is a model of clarity, but may be too much for most of us to type or read. I'd shorten it.
*/

//Math expressions: Familiar operators
var num = 10;
var add = num + num;
var sub = add - num;
var prod = num * num;
var div = prod / sub;
var mod = prod % num;
console.log("The Number is " + num);
console.log("The Sum is " + add);
console.log("The Difference is " + sub);
console.log("The Product is " + prod);
console.log("The Quotient is " + div);
console.log("The Remainder is " + mod);

//Math expressions: Unfamiliar operators
var newNum = num++;
console.log("The Number is "+ num);
console.log("The Post-Incremented Number is "+ newNum);
newNum = ++num;
console.log("The Number is "+ num);
console.log("The Pre-Incremented Number is "+ newNum);
newNum = num--;
console.log("The Number is "+ num);
console.log("The Post-Decremented Number is "+ newNum);
newNum = --num;
console.log("The Number is "+ num);
console.log("The Pre-Decremented Number is "+ newNum);