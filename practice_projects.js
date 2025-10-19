// ===========================================
// JAVASCRIPT PRACTICE PROJECTS
// Small projects to reinforce your learning
// ===========================================

// ===========================================
// PROJECT 1: PERSONAL INFO CARD
// ===========================================
// Practice: Variables, strings, template literals, objects

function createPersonalCard() {
    // Your personal information
    const person = {
        firstName: "Your Name",
        age: 25,
        city: "Your City",
        occupation: "Student/Developer",
        hobbies: ["reading", "coding", "gaming"]
    };
    
    // Create a formatted card
    const card = `
    ╔══════════════════════════════════╗
    ║           PERSONAL CARD           ║
    ╠══════════════════════════════════╣
    ║ Name: ${person.firstName}                    ║
    ║ Age: ${person.age} years old                 ║
    ║ City: ${person.city}                        ║
    ║ Job: ${person.occupation}                   ║
    ║ Hobbies: ${person.hobbies.join(", ")}       ║
    ╚══════════════════════════════════╝
    `;
    
    console.log(card);
    return card;
}

// ===========================================
// PROJECT 2: SIMPLE CALCULATOR
// ===========================================
// Practice: Functions, parameters, return values, operators

function calculator(operation, num1, num2) {
    let result;
    
    switch(operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                return "Error: Cannot divide by zero!";
            }
            result = num1 / num2;
            break;
        default:
            return "Error: Invalid operation!";
    }
    
    return `${num1} ${operation} ${num2} = ${result}`;
}

// Test the calculator
console.log("=== CALCULATOR TESTS ===");
console.log(calculator('add', 10, 5));        // 10 add 5 = 15
console.log(calculator('multiply', 3, 4));   // 3 multiply 4 = 12
console.log(calculator('divide', 10, 0));    // Error: Cannot divide by zero!

// ===========================================
// PROJECT 3: GRADE CALCULATOR
// ===========================================
// Practice: Arrays, loops, conditionals, functions

function calculateGrade(scores) {
    if (scores.length === 0) {
        return "No scores provided!";
    }
    
    // Calculate average
    let total = 0;
    for (let score of scores) {
        total += score;
    }
    const average = total / scores.length;
    
    // Determine letter grade
    let letterGrade;
    if (average >= 90) {
        letterGrade = 'A';
    } else if (average >= 80) {
        letterGrade = 'B';
    } else if (average >= 70) {
        letterGrade = 'C';
    } else if (average >= 60) {
        letterGrade = 'D';
    } else {
        letterGrade = 'F';
    }
    
    return {
        average: average.toFixed(2),
        letterGrade: letterGrade,
        totalScores: scores.length
    };
}

// Test grade calculator
const studentScores = [85, 92, 78, 96, 88];
const gradeResult = calculateGrade(studentScores);
console.log("=== GRADE CALCULATOR ===");
console.log(`Average: ${gradeResult.average}`);
console.log(`Letter Grade: ${gradeResult.letterGrade}`);
console.log(`Total Tests: ${gradeResult.totalScores}`);

// ===========================================
// PROJECT 4: TO-DO LIST MANAGER
// ===========================================
// Practice: Arrays, objects, array methods

class TodoList {
    constructor() {
        this.todos = [];
    }
    
    addTodo(task, priority = 'medium') {
        const todo = {
            id: Date.now(), // Simple ID generation
            task: task,
            priority: priority,
            completed: false,
            createdAt: new Date().toLocaleDateString()
        };
        this.todos.push(todo);
        return `Added: "${task}"`;
    }
    
    completeTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = true;
            return `Completed: "${todo.task}"`;
        }
        return "Todo not found!";
    }
    
    getTodos() {
        return this.todos;
    }
    
    getCompletedTodos() {
        return this.todos.filter(todo => todo.completed);
    }
    
    getPendingTodos() {
        return this.todos.filter(todo => !todo.completed);
    }
    
    deleteTodo(id) {
        const index = this.todos.findIndex(t => t.id === id);
        if (index !== -1) {
            const deleted = this.todos.splice(index, 1)[0];
            return `Deleted: "${deleted.task}"`;
        }
        return "Todo not found!";
    }
}

// Test the todo list
console.log("=== TODO LIST MANAGER ===");
const myTodos = new TodoList();
console.log(myTodos.addTodo("Learn JavaScript", "high"));
console.log(myTodos.addTodo("Buy groceries", "medium"));
console.log(myTodos.addTodo("Call mom", "low"));
console.log(myTodos.addTodo("Exercise", "high"));

console.log("\nAll Todos:");
myTodos.getTodos().forEach(todo => {
    console.log(`- ${todo.task} (${todo.priority}) - ${todo.completed ? '✅' : '⏳'}`);
});

// ===========================================
// PROJECT 5: NUMBER GUESSING GAME
// ===========================================
// Practice: Random numbers, loops, conditionals, user interaction simulation

function numberGuessingGame() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    const maxAttempts = 7;
    
    console.log("🎯 NUMBER GUESSING GAME");
    console.log("I'm thinking of a number between 1 and 100...");
    console.log(`You have ${maxAttempts} attempts!\n`);
    
    // Simulate guesses (in real app, this would be user input)
    const guesses = [50, 25, 37, 43, 40, 41, 42]; // Example guesses
    
    for (let guess of guesses) {
        attempts++;
        console.log(`Attempt ${attempts}: You guessed ${guess}`);
        
        if (guess === secretNumber) {
            console.log(`🎉 Congratulations! You guessed it in ${attempts} attempts!`);
            return;
        } else if (guess < secretNumber) {
            console.log("📈 Too low! Try a higher number.");
        } else {
            console.log("📉 Too high! Try a lower number.");
        }
        
        if (attempts >= maxAttempts) {
            console.log(`😞 Game over! The number was ${secretNumber}`);
            return;
        }
        
        console.log(`Attempts left: ${maxAttempts - attempts}\n`);
    }
}

// ===========================================
// PROJECT 6: WEATHER SIMULATOR
// ===========================================
// Practice: Objects, arrays, random selection, string manipulation

function weatherSimulator() {
    const weatherConditions = [
        { type: "sunny", temp: 25, description: "☀️ Bright and sunny" },
        { type: "cloudy", temp: 18, description: "☁️ Overcast skies" },
        { type: "rainy", temp: 15, description: "🌧️ Light rain falling" },
        { type: "stormy", temp: 12, description: "⛈️ Heavy storm" },
        { type: "snowy", temp: -2, description: "❄️ Snowing gently" }
    ];
    
    // Generate random weather
    const randomWeather = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
    
    // Determine what to wear
    let clothing = "";
    if (randomWeather.temp > 20) {
        clothing = "👕 Light clothes and sunscreen";
    } else if (randomWeather.temp > 10) {
        clothing = "👔 Long sleeves and light jacket";
    } else if (randomWeather.temp > 0) {
        clothing = "🧥 Warm jacket and layers";
    } else {
        clothing = "🧤 Heavy coat, gloves, and hat";
    }
    
    console.log("🌤️ WEATHER SIMULATOR");
    console.log(`Current weather: ${randomWeather.description}`);
    console.log(`Temperature: ${randomWeather.temp}°C`);
    console.log(`Recommended clothing: ${clothing}`);
    
    return randomWeather;
}

// ===========================================
// PROJECT 7: PASSWORD GENERATOR
// ===========================================
// Practice: String manipulation, random generation, functions

function generatePassword(length = 12, includeSymbols = true) {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    let characters = lowercase + uppercase + numbers;
    if (includeSymbols) {
        characters += symbols;
    }
    
    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    return password;
}

// Test password generator
console.log("=== PASSWORD GENERATOR ===");
console.log("8-character password:", generatePassword(8, false));
console.log("12-character with symbols:", generatePassword(12, true));
console.log("16-character strong password:", generatePassword(16, true));

// ===========================================
// PROJECT 8: CONTACT BOOK
// ===========================================
// Practice: Objects, arrays, search functionality

class ContactBook {
    constructor() {
        this.contacts = [];
    }
    
    addContact(name, phone, email) {
        const contact = {
            id: Date.now(),
            name: name,
            phone: phone,
            email: email,
            createdAt: new Date().toLocaleDateString()
        };
        this.contacts.push(contact);
        return `Added contact: ${name}`;
    }
    
    findContact(searchTerm) {
        return this.contacts.filter(contact => 
            contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.phone.includes(searchTerm) ||
            contact.email.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    
    getAllContacts() {
        return this.contacts;
    }
    
    deleteContact(id) {
        const index = this.contacts.findIndex(c => c.id === id);
        if (index !== -1) {
            const deleted = this.contacts.splice(index, 1)[0];
            return `Deleted contact: ${deleted.name}`;
        }
        return "Contact not found!";
    }
}

// Test contact book
console.log("=== CONTACT BOOK ===");
const myContacts = new ContactBook();
myContacts.addContact("John Doe", "555-0123", "john@email.com");
myContacts.addContact("Jane Smith", "555-0456", "jane@email.com");
myContacts.addContact("Bob Johnson", "555-0789", "bob@email.com");

console.log("All contacts:");
myContacts.getAllContacts().forEach(contact => {
    console.log(`- ${contact.name}: ${contact.phone} (${contact.email})`);
});

console.log("\nSearching for 'John':");
const searchResults = myContacts.findContact("John");
searchResults.forEach(contact => {
    console.log(`Found: ${contact.name} - ${contact.phone}`);
});

// ===========================================
// PROJECT 9: SIMPLE QUIZ GAME
// ===========================================
// Practice: Objects, arrays, loops, scoring

function quizGame() {
    const questions = [
        {
            question: "What is the capital of France?",
            options: ["London", "Berlin", "Paris", "Madrid"],
            correct: 2,
            explanation: "Paris is the capital and largest city of France."
        },
        {
            question: "Which planet is closest to the Sun?",
            options: ["Venus", "Mercury", "Earth", "Mars"],
            correct: 1,
            explanation: "Mercury is the closest planet to the Sun."
        },
        {
            question: "What is 2 + 2?",
            options: ["3", "4", "5", "6"],
            correct: 1,
            explanation: "Basic math: 2 + 2 = 4"
        }
    ];
    
    let score = 0;
    const totalQuestions = questions.length;
    
    console.log("🧠 QUIZ GAME");
    console.log("Answer the following questions:\n");
    
    questions.forEach((q, index) => {
        console.log(`Question ${index + 1}: ${q.question}`);
        q.options.forEach((option, i) => {
            console.log(`${i + 1}. ${option}`);
        });
        
        // Simulate user answer (in real app, this would be user input)
        const userAnswer = Math.floor(Math.random() * 4) + 1; // Random answer for demo
        console.log(`Your answer: ${userAnswer}`);
        
        if (userAnswer === q.correct + 1) {
            console.log("✅ Correct!");
            score++;
        } else {
            console.log("❌ Wrong!");
        }
        
        console.log(`Explanation: ${q.explanation}\n`);
    });
    
    const percentage = Math.round((score / totalQuestions) * 100);
    console.log(`🎯 QUIZ COMPLETE!`);
    console.log(`Score: ${score}/${totalQuestions} (${percentage}%)`);
    
    if (percentage >= 80) {
        console.log("🏆 Excellent work!");
    } else if (percentage >= 60) {
        console.log("👍 Good job!");
    } else {
        console.log("📚 Keep studying!");
    }
}

// ===========================================
// PROJECT 10: SIMPLE EXPENSE TRACKER
// ===========================================
// Practice: Objects, arrays, calculations, filtering

class ExpenseTracker {
    constructor() {
        this.expenses = [];
        this.categories = ['food', 'transport', 'entertainment', 'shopping', 'bills'];
    }
    
    addExpense(description, amount, category) {
        if (!this.categories.includes(category)) {
            return "Invalid category! Use: " + this.categories.join(", ");
        }
        
        const expense = {
            id: Date.now(),
            description: description,
            amount: parseFloat(amount),
            category: category,
            date: new Date().toLocaleDateString()
        };
        
        this.expenses.push(expense);
        return `Added expense: $${amount} for ${description}`;
    }
    
    getTotalExpenses() {
        return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    }
    
    getExpensesByCategory(category) {
        return this.expenses.filter(expense => expense.category === category);
    }
    
    getCategoryTotals() {
        const totals = {};
        this.categories.forEach(category => {
            totals[category] = this.getExpensesByCategory(category)
                .reduce((total, expense) => total + expense.amount, 0);
        });
        return totals;
    }
    
    getRecentExpenses(limit = 5) {
        return this.expenses.slice(-limit).reverse();
    }
}

// Test expense tracker
console.log("=== EXPENSE TRACKER ===");
const myExpenses = new ExpenseTracker();
myExpenses.addExpense("Coffee", 4.50, "food");
myExpenses.addExpense("Bus ticket", 2.00, "transport");
myExpenses.addExpense("Movie", 12.00, "entertainment");
myExpenses.addExpense("Groceries", 45.30, "food");
myExpenses.addExpense("Phone bill", 60.00, "bills");

console.log(`Total expenses: $${myExpenses.getTotalExpenses().toFixed(2)}`);
console.log("\nExpenses by category:");
const categoryTotals = myExpenses.getCategoryTotals();
Object.entries(categoryTotals).forEach(([category, total]) => {
    if (total > 0) {
        console.log(`${category}: $${total.toFixed(2)}`);
    }
});

// ===========================================
// HOW TO USE THESE PROJECTS
// ===========================================

console.log("\n" + "=".repeat(50));
console.log("🚀 HOW TO PRACTICE WITH THESE PROJECTS:");
console.log("=".repeat(50));
console.log("1. Run each function individually to see the output");
console.log("2. Modify the code to add your own features");
console.log("3. Try to recreate these projects from scratch");
console.log("4. Add error handling and validation");
console.log("5. Create a simple HTML page to make them interactive");
console.log("6. Combine multiple projects into one larger application");

console.log("\n" + "=".repeat(50));
console.log("📚 NEXT LEARNING STEPS:");
console.log("=".repeat(50));
console.log("• Learn about DOM manipulation");
console.log("• Understand asynchronous JavaScript (callbacks, promises)");
console.log("• Explore ES6+ features (destructuring, spread operator)");
console.log("• Practice with real APIs");
console.log("• Learn about modules and imports");
console.log("• Try building a simple web application");

// Uncomment the lines below to run specific projects:
// createPersonalCard();
// numberGuessingGame();
// weatherSimulator();
// quizGame();
