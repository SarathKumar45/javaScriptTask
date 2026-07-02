//Task 1 - Company Welcome Function

function company() {
    console.log("Welcome to Stackly IT");
}
company();


//Task 2 - Employee Details

function employee(name, department, salary) {
    console.log("Employee Name : " + name);
    console.log("Department : " + department);
    console.log("Salary : " + salary);
}

employee("Sarath", "Developer", 38000);


//Task 3 - Calculate Bonus

function calculateBonus(salary, bonus) {
    console.log("Total Salary : " + (salary + bonus));
}

calculateBonus(45000, 5000);


//Task 4 - Student Result

function studentResult(marks) {
    if (marks >= 35) {
        console.log("Pass");
    } else {
        console.log("Fail");
    }
}

studentResult(45);


//Task 5 - Return Employee Name

function employeeName() {
    return "Sarath";
}

let empName = employeeName();
console.log(empName);


//Task 6 - Product Price

function productPrice() {
    return 35000;
}

let price = productPrice();
let gst = price * 18 / 100;

console.log("Price : " + price);
console.log("GST : " + gst);
console.log("Total Price : " + (price + gst));


//Task 7 - Scope

function demo() {

    if (true) {

        var a = 10;
        let b = 20;
        const c = 30;

    }

    console.log(a); // 10
    // console.log(b); // Error
    // console.log(c); // Error
}

demo();

/*
Output:
10

Explanation:
var -> Function Scope
let -> Block Scope
const -> Block Scope
*/


//Task 8 - Hoisting

console.log(a);

var a = 100;

// Output:
// undefined


console.log(b);

let b = 200;

Output:
ReferenceError

let b = 200;
console.log(b);

/*
Difference

var
-----
Hoisted and initialized as undefined.

let
-----
Hoisted but kept in Temporal Dead Zone.
Cannot access before declaration.
*/


//Task 9 - Named Function

function greeting() {
    console.log("Good Morning");
}

greeting();


//Task 10 - Anonymous Function

let welcome = function () {
    console.log("Welcome Employee");
};

welcome();


//Task 11 - Arrow Function

const training = () => {
    console.log("JavaScript Training");
};

training();


//Task 12 - Return Function

function companyName() {
    return "Stackly";
}

let companyResult = companyName();

console.log("Welcome " + companyResult);


//Task 13 - Higher Order Function

function dashboard() {
    console.log("Dashboard Loaded");
}

function login(nextFunction) {
    console.log("Login Successful");
    nextFunction();
}

login(dashboard);


//Task 14 - Callback Function

function delivered() {
    console.log("Delivered");
}

function preparing(callback) {
    console.log("Preparing Food");
    callback();
}

function orderReceived(callback) {
    console.log("Order Received");
    callback(delivered);
}

orderReceived(preparing);


//Task 15 - Generator Function

function* coupons() {
    yield "10% Discount";
    yield "20% Discount";
    yield "30% Discount";
    yield "Better Luck Next Time";
}

let coupon = coupons();

console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);


//Task 16 - Return + Generator

function* fruits() {
    yield "Apple";
    yield "Orange";
    yield "Banana";
}

let fruit = fruits();

console.log(fruit.next().value);
console.log(fruit.next().value);
console.log(fruit.next().value);


//Task 17 - Currying

function discount(price) {
    return function (percentage) {
        let finalPrice = price - (price * percentage / 100);
        console.log("Final Price : " + finalPrice);
    };
}

discount(1000)(10);


//Task 18 - Company Salary

function salary(baseSalary) {
    return function (bonus) {
        return function (allowance) {
            console.log("Total Salary : " + (baseSalary + bonus + allowance));
        };
    };
}

salary(30000)(5000)(2000);


//Task 19 - Real-Time Login System

function loadDashboard() {
    console.log("Load Dashboard");
}

function loginSuccess() {
    console.log("Login Successful");
    loadDashboard();
}

function verifyPassword() {
    console.log("Verify Password");
    loginSuccess();
}

function enterUsername() {
    console.log("Enter Username");
    verifyPassword();
}

enterUsername();


//Mini Project Employee Salary Management System

console.log("\n========== Employee Salary Management ==========");

// Employee Details

function employeeDetails(name, department, salary) {
    console.log("Employee Name : " + name);
    console.log("Department : " + department);
    console.log("Salary : " + salary);
}

employeeDetails("Sarath", "Java Developer", 45000);


// Salary + Bonus

function totalSalary(salary, bonus) {
    return salary + bonus;
}

let finalSalary = totalSalary(45000, 5000);


// Arrow Function

const welcomeEmployee = () => {
    console.log("Welcome Employee");
};

welcomeEmployee();


// Anonymous Function

let department = function () {
    console.log("Department : Java Developer");
};

department();


// Higher Order Function

function dashboardPage() {
    console.log("Employee Dashboard Loaded");
}

function loginEmployee(callback) {
    console.log("Employee Login Successful");
    callback();
}

loginEmployee(dashboardPage);


// Generator Function

function* monthlyBonus() {
    yield "₹1000 Bonus";
    yield "₹2000 Bonus";
    yield "₹3000 Bonus";
    yield "No Bonus";
}

let monthly = monthlyBonus();

console.log(monthly.next().value);
console.log(monthly.next().value);
console.log(monthly.next().value);
console.log(monthly.next().value);


// Currying Tax Calculation

function tax(salary) {
    return function (taxPercent) {
        let amount = salary - (salary * taxPercent / 100);
        console.log("Salary After Tax : " + amount);
    };
}

tax(finalSalary)(10);


// Final Report

console.log("\n========= Final Employee Report =========");
console.log("Employee Name : Naveen");
console.log("Department : Java Developer");
console.log("Salary : 40000");
console.log("Bonus : 5000");
console.log("Final Salary : " + finalSalary);
console.log("=========================================");
