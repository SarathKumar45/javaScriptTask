// Task 1: Employee Salary Dashboard

const employees = [
    { id: 1, name: "Sarath", salary: 45000 },
    { id: 2, name: "Rahul", salary: 65000 },
    { id: 3, name: "Priya", salary: 120000 },
    { id: 4, name: "Arun", salary: 55000 },
    { id: 5, name: "Divya", salary: 35000 }
];

// Display all employee names using map()
const employeeNames = employees.map(emp => emp.name);
console.log("Employee Names:");
console.log(employeeNames);

// Show employees with salary greater than 50,000
const highSalary = employees.filter(emp => emp.salary > 50000);
console.log("\nEmployees with Salary > 50000:");
console.log(highSalary);

// Find first employee with salary above 1,00,000
const highestEmployee = employees.find(emp => emp.salary > 100000);
console.log("\nFirst Employee with Salary > 100000:");
console.log(highestEmployee);

// Calculate total salary expense
const totalSalary = employees.reduce((total, emp) => total + emp.salary, 0);
console.log("\nTotal Salary Expense:", totalSalary);


// Task 2: E-Commerce Cart Management

const cart1 = ["Laptop", "Mouse", "Keyboard"];
const cart2 = ["Headphone", "Monitor"];

// Merge arrays using spread operator
const mergedCart = [...cart1, ...cart2];
console.log("Merged Cart:");
console.log(mergedCart);

// Add new product without changing original array
const updatedCart = [...mergedCart, "Webcam"];
console.log("\nUpdated Cart:");
console.log(updatedCart);

console.log("\nOriginal Merged Cart:");
console.log(mergedCart);

// Rest Operator
function checkout(...products) {
    console.log("\nProducts Purchased:");
    console.log(products);
    console.log("Total Products:", products.length);
}

checkout("Laptop", "Mouse", "Keyboard", "Headphone", "Webcam");


// Task 3: Student Report Card

const student = {
    name: "Sarath",
    department: "Computer Science",
    marks: [88, 92, 85, 90, 95]
};

// Object Destructuring
const { name, department, marks } = student;

// Array Destructuring
const [subject1, subject2, subject3] = marks;

const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
const averageMarks = totalMarks / marks.length;

console.log("Student Name:", name);
console.log("Department:", department);

console.log("\nFirst Three Subject Marks:");
console.log(subject1);
console.log(subject2);
console.log(subject3);

console.log("\nTotal Marks:", totalMarks);
console.log("Average Marks:", averageMarks);


// Task 4: Product Search System

let searchText = "   Apple iPhone 16 Pro   ";

// Remove extra spaces
let trimmed = searchText.trim();
console.log("Trimmed Text:", trimmed);

// Convert to lowercase
let lower = trimmed.toLowerCase();
console.log("Lowercase:", lower);

// Check keyword
let keyword = "iphone";

if (lower.includes(keyword)) {
    console.log("Product Found");
} else {
    console.log("Product Not Found");
}

// Highlight searched word
let highlighted = trimmed.replace("iPhone", "[iPhone]");
console.log("Highlighted Text:", highlighted);


// Task 5: Movie Collection Manager

let movies = ["Leo", "Vikram", "Master", "Jailer"];

console.log("Original Movies:");
console.log(movies);

// Add new movie
movies.push("Thunivu");
console.log("\nAfter Push:");
console.log(movies);

// Remove last movie
movies.pop();
console.log("\nAfter Pop:");
console.log(movies);

// Remove first movie
movies.shift();
console.log("\nAfter Shift:");
console.log(movies);

// Add featured movie
movies.unshift("Coolie");
console.log("\nAfter Unshift:");
console.log(movies);

// Replace one movie
movies.splice(2, 1, "GOAT");
console.log("\nAfter Splice:");
console.log(movies);

// Movie Ratings
let ratings = [8.4, 9.2, 7.8, 8.9, 9.5];

ratings.sort((a, b) => b - a);
console.log("\nRatings in Descending Order:");
console.log(ratings);

// Check whether movie exists
let movieName = "GOAT";

if (movies.includes(movieName)) {
    console.log("\nMovie Exists");
} else {
    console.log("\nMovie Not Found");
}