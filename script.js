

// QUESTION NUMBER 1
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
document.write("Hello " + fullName + "<br><br>");

// QUESTION NUMBER 2
var user = prompt("Which one is your favourite mobile?");
document.write("Your favourite mobile is " + user + "<br>");
document.write("String length is " + user.length + "<br><br>");

// QUESTION NUMBER 3
var Pakistan = "Pakistan";
document.write("Index of n is : " + Pakistan.indexOf("n") + "<br><br>");

// QUESTION NUMBER 4
var Pan = "Hello World";
document.write("Index of l is : " + Pan.lastIndexOf("l") + "<br><br>");

// QUESTION NUMBER 5
var isl = "islamabad";
document.write("Character at index 3 is " + isl.charAt(3) + "<br><br>");

// QUESTION NUMBER 6
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
document.write(firstName.concat(lastName) + "<br><br>");

// QUESTION NUMBER 7
var city = "Hyderabad";
document.write(city + "<br>");
document.write(city.replace("Hyderabad", "Sialkot") + "<br><br>");

// QUESTION NUMBER 8
var message = "Ali and Sami are best friends. They play cricket and football together";
document.write(message + "<br>");
document.write(message.replace("and", "&") + "<br><br>");

// QUESTION NUMBER 9
var number = "472";
document.write(Number(number) + "<br><br>");

// QUESTION NUMBER 10
var peanuts = "peanuts";
document.write(peanuts.toUpperCase() + "<br><br>");

// QUESTION NUMBER 11
var javascript = "java script";
document.write(
    javascript.charAt(0).toUpperCase() + javascript.slice(1) + "<br><br>"
);

// QUESTION NUMBER 12
var change = "35.36";
document.write(change + "<br>");
document.write(change.replace(".", " ") + "<br><br>");

// QUESTION NUMBER 13
var magician = prompt("Enter a username");

if (magician == 33 || magician == 44 || magician == 46 || magician == 64) {
    alert("Valid username");
} else {
    alert("Enter a valid username");
}

// QUESTION NUMBER 14
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var item = prompt("What do you want to order?").toLowerCase();
var index = A.indexOf(item);

if (index !== -1) {
    document.write(item + " is available at index " + index + " in our bakery<br><br>");
} else {
    document.write("Item is not available in our bakery<br><br>");
}

// QUESTION NUMBER 15
var password = prompt("Enter your password:");
var hasAlpha = false;
var hasNum = false;

for (var i = 0; i < password.length; i++) {
    var code = password.charCodeAt(i);

    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        hasAlpha = true;
    }

    if (code >= 48 && code <= 57) {
        hasNum = true;
    }
}

if (password.length < 6) {
    document.write("Password must be at least 6 characters long<br>");
} else if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {
    document.write("Password can not begin with a number<br>");
} else if (!hasAlpha || !hasNum) {
    document.write("Password must contain alphabets and numbers<br>");
} else {
    document.write("Valid password<br>");
}

// QUESTION NUMBER 16
var university = "University of Karachi";
var arr = university.split("");

for (var i = 0; i < arr.length; i++) {
    document.write(arr[i] + "<br>");
}

// QUESTION NUMBER 17
var input = prompt("User input:");
document.write("User input: " + input + "<br>");
document.write(
    "Last character of input: " + input.charAt(input.length - 1) + "<br><br>"
);

// QUESTION NUMBER 18
var text = "The quick brown fox jumps over the lazy dog";
var words = text.toLowerCase().split(" ");
var count = 0;

for (var i = 0; i < words.length; i++) {
    if (words[i] === "the") {
        count++;
    }
}

document.write("Text: " + text + "<br>");
document.write("There are " + count + " occurrence(s) of word 'the')");

// MATH QUESTIONS

// QUESTION 1
var number = +prompt("Enter a positive integer:");

document.write("Number: " + number + "<br>");
document.write("Round off value: " + Math.round(number) + "<br>");
document.write("Floor value: " + Math.floor(number) + "<br>");
document.write("Ceil value: " + Math.ceil(number) + "<br><br>");


// QUESTION 2
var negativeNumber = +prompt("Enter a negative floating point number:");

document.write("Number: " + negativeNumber + "<br>");
document.write("Round off value: " + Math.round(negativeNumber) + "<br>");
document.write("Floor value: " + Math.floor(negativeNumber) + "<br>");
document.write("Ceil value: " + Math.ceil(negativeNumber) + "<br><br>");


// QUESTION 3
var num = +prompt("Enter a number:");

document.write("Absolute value: " + Math.abs(num) + "<br><br>");


// QUESTION 4
var dice = Math.floor(Math.random() * 6) + 1;

document.write("Dice value: " + dice + "<br><br>");


// QUESTION 5
var coin = Math.floor(Math.random() * 2) + 1;

if (coin === 1) {
    document.write("Coin: Heads<br><br>");
} else {
    document.write("Coin: Tails<br><br>");
}


// QUESTION 6
var randomNumber = Math.floor(Math.random() * 100) + 1;

document.write("Random number between 1 and 100: " + randomNumber + "<br><br>");


// QUESTION 7
var weight = prompt("Enter your weight:");

var parsedWeight = parseFloat(weight);

document.write("Your weight is: " + parsedWeight + " kg<br><br>");


// QUESTION 8
var secretNumber = Math.floor(Math.random() * 10) + 1;

var userNumber = +prompt("Enter a number between 1 and 10:");

if (userNumber === secretNumber) {
    document.write("Congratulations! You guessed the secret number.");
} else {
    document.write("Sorry! The secret number was " + secretNumber);
}

