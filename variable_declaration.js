// ===========================================
// JAVASCRIPT FUNDAMENTALS - ROOT LEVEL KNOWLEDGE
// ===========================================

// 1. VARIABLES - Three ways to declare variables
// ===========================================

// var - function scoped (older way, avoid in modern JS)
var oldWay = "This is the old way";

// let - block scoped, can be reassigned
let modernWay = "This is the modern way";
modernWay = "I can change this value";

// const - block scoped, cannot be reassigned (preferred for constants)
const neverChanges = "This value cannot be changed";
// neverChanges = "This would cause an error!"; // ❌ Error!

// 2. DATA TYPES - JavaScript has dynamic typing
// ===========================================

// Primitive Data Types
let number = 42;                    // Number
let decimal = 3.14;                // Number (no separate float type)
let text = "Hello World";          // String
let singleChar = 'A';              // String (single quotes also work)
let isTrue = true;                 // Boolean
let isFalse = false;               // Boolean
let nothing = null;                // Null (intentional absence of value)
let notDefined = undefined;        // Undefined (variable declared but not assigned)

// Check data type with typeof operator
console.log(typeof number);        // "number"
console.log(typeof text);          // "string"
console.log(typeof isTrue);        // "boolean"
console.log(typeof nothing);       // "object" (this is a JavaScript quirk!)
console.log(typeof notDefined);   // "undefined"

// 3. STRINGS - Text manipulation
// ===========================================

let firstName = "John";
let lastName = "Doe";

// String concatenation
let fullName = firstName + " " + lastName;  // "John Doe"

// Template literals (ES6) - preferred way
let fullNameModern = `${firstName} ${lastName}`;  // "John Doe"

// String methods
let message = "Hello World";
console.log(message.length);       // 11
console.log(message.toUpperCase()); // "HELLO WORLD"
console.log(message.toLowerCase()); // "hello world"
console.log(message.indexOf("World")); // 6

// 4. NUMBERS - Mathematical operations
// ===========================================

let a = 10;
let b = 3;

console.log(a + b);    // 13 (addition)
console.log(a - b);    // 7 (subtraction)
console.log(a * b);    // 30 (multiplication)
console.log(a / b);    // 3.333... (division)
console.log(a % b);    // 1 (modulus/remainder)
console.log(a ** b);   // 1000 (exponentiation)

// Math object
console.log(Math.PI);              // 3.14159...
console.log(Math.round(4.7));      // 5
console.log(Math.floor(4.7));      // 4
console.log(Math.ceil(4.2));        // 5
console.log(Math.random());         // Random number between 0 and 1

// 5. BOOLEANS - True/False logic
// ===========================================

let isAdult = true;
let hasLicense = false;

// Logical operators
console.log(isAdult && hasLicense);  // false (AND)
console.log(isAdult || hasLicense);  // true (OR)
console.log(!isAdult);               // false (NOT)

// Comparison operators
let age = 18;
console.log(age > 17);    // true
console.log(age >= 18);   // true
console.log(age < 21);    // true
console.log(age <= 18);   // true
console.log(age === 18);  // true (strict equality)
console.log(age == "18"); // true (loose equality - avoid!)
console.log(age !== 19);  // true (not equal)

// 6. ARRAYS - Collections of data
// ===========================================

// Creating arrays
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["hello", 42, true, null];

// Accessing array elements (zero-indexed)
console.log(fruits[0]);    // "apple"
console.log(fruits[1]);    // "banana"
console.log(fruits.length); // 3

// Modifying arrays
fruits[0] = "grape";        // Change element
fruits.push("mango");       // Add to end
fruits.pop();               // Remove from end
fruits.unshift("kiwi");     // Add to beginning
fruits.shift();             // Remove from beginning

// Array methods
let numbers2 = [1, 2, 3, 4, 5];
console.log(numbers2.includes(3));        // true
console.log(numbers2.indexOf(3));         // 2
console.log(numbers2.slice(1, 3));        // [2, 3] (doesn't modify original)
console.log(numbers2.splice(1, 2));       // [2, 3] (modifies original)

// 7. OBJECTS - Key-value pairs
// ===========================================

// Creating objects
let person = {
    name: "John",
    age: 30,
    city: "New York",
    isStudent: false
};

// Accessing object properties
console.log(person.name);           // "John" (dot notation)
console.log(person["age"]);         // 30 (bracket notation)
console.log(person.city);           // "New York"

// Modifying objects
person.age = 31;                    // Change property
person.job = "Developer";           // Add new property
delete person.isStudent;            // Remove property

// Object methods
console.log(Object.keys(person));    // ["name", "age", "city", "job"]
console.log(Object.values(person)); // ["John", 31, "New York", "Developer"]

// 8. FUNCTIONS - Reusable code blocks
// ===========================================

// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function expression
const greet2 = function(name) {
    return `Hi, ${name}!`;
};

// Arrow function (ES6) - modern way
const greet3 = (name) => {
    return `Hey, ${name}!`;
};

// Arrow function (shorter syntax)
const greet4 = name => `Yo, ${name}!`;

// Calling functions
console.log(greet("Alice"));        // "Hello, Alice!"
console.log(greet2("Bob"));         // "Hi, Bob!"
console.log(greet3("Charlie"));     // "Hey, Charlie!"
console.log(greet4("David"));       // "Yo, David!"

// 9. CONTROL STRUCTURES - Decision making
// ===========================================

// If/else statements
let temperature = 25;

if (temperature > 30) {
    console.log("It's hot!");
} else if (temperature > 20) {
    console.log("It's warm!");
} else {
    console.log("It's cool!");
}

// Ternary operator (shorthand if/else)
let weather = temperature > 20 ? "warm" : "cool";
console.log(weather);

// Switch statement
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of work week");
        break;
    case "Friday":
        console.log("TGIF!");
        break;
    default:
        console.log("Regular day");
}

// 10. LOOPS - Repeating code
// ===========================================

// For loop
for (let i = 0; i < 5; i++) {
    console.log(`Count: ${i}`);
}

// While loop
let count = 0;
while (count < 3) {
    console.log(`While count: ${count}`);
    count++;
}

// For...of loop (for arrays)
let colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log(color);
}

// For...in loop (for objects)
let car = { make: "Toyota", model: "Camry", year: 2020 };
for (let key in car) {
    console.log(`${key}: ${car[key]}`);
}

// 11. SCOPE - Where variables can be accessed
// ===========================================

// Global scope
let globalVar = "I'm global";

function scopeExample() {
    // Function scope
    let functionVar = "I'm in function scope";
    
    if (true) {
        // Block scope
        let blockVar = "I'm in block scope";
        console.log(blockVar);      // ✅ Works
        console.log(functionVar);   // ✅ Works
        console.log(globalVar);     // ✅ Works
    }
    
    // console.log(blockVar);      // ❌ Error! blockVar is not accessible here
    console.log(functionVar);       // ✅ Works
    console.log(globalVar);         // ✅ Works
}

// 12. BASIC DOM MANIPULATION (Browser only)
// ===========================================

// These only work in a browser environment
// document.getElementById("myElement");
// document.querySelector(".my-class");
// element.innerHTML = "New content";
// element.style.color = "red";

// 13. CONSOLE METHODS - Debugging
// ===========================================

console.log("Regular message");           // General logging
console.warn("Warning message");          // Warning (yellow)
console.error("Error message");           // Error (red)
console.info("Info message");             // Info (blue)
console.table([{name: "John", age: 30}]); // Table format

// 14. COMMON PATTERNS AND BEST PRACTICES
// ===========================================

// Use const by default, let when you need to reassign
const PI = 3.14159;
let currentUser = "John";

// Use meaningful variable names
let userAge = 25;           // ✅ Good
let a = 25;                 // ❌ Bad

// Use camelCase for variables and functions
let firstName = "John";     // ✅ Good
let first_name = "John";   // ❌ Bad (snake_case)

// Use descriptive function names
function calculateArea(width, height) {  // ✅ Good
    return width * height;
}

function calc(w, h) {       // ❌ Bad
    return w * h;
}

// ===========================================
// NEXT STEPS TO LEARN:
// ===========================================
// 1. Practice these concepts with small projects
// 2. Learn about ES6+ features (arrow functions, destructuring, etc.)
// 3. Understand asynchronous JavaScript (callbacks, promises, async/await)
// 4. Learn about the Document Object Model (DOM)
// 5. Explore JavaScript frameworks (React, Vue, Angular)
// 6. Understand modules and imports/exports
// 7. Learn about error handling (try/catch)
// 8. Practice with real projects and challenges
