//Task 1 - Employee Login Eligibility

let empAge = 22;
let empID = true;
let empAttendance = 80;

if (empAge >= 18 && empID === true && empAttendance >= 75) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}


//Task 2 - Student Grade System

let marks = 87;

if (marks >= 90 && marks <= 100) {
    console.log("Grade A+");
} else if (marks >= 80) {
    console.log("Grade A");
} else if (marks >= 70) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
} else {
    console.log("Fail");
}


//Task 3 - ATM Withdrawal

let balance = 5000;
let withdraw = 3000;

if (withdraw <= balance && withdraw % 100 === 0) {
    balance -= withdraw;
    console.log("Transaction Successful");
    console.log("Remaining Balance:", balance);
} else {
    console.log("Transaction Failed");
}


//Task 4 - Food Ordering App

let choice = 3;

switch (choice) {
    case 1:
        console.log("You Ordered Pizza");
        break;
    case 2:
        console.log("You Ordered Burger");
        break;
    case 3:
        console.log("You Ordered Shawarma");
        break;
    case 4:
        console.log("You Ordered Biryani");
        break;
    case 5:
        console.log("You Ordered Juice");
        break;
    default:
        console.log("Invalid Choice");
}


//Task 5 - E-Commerce Discount

let purchase = 6000;
let isPremium = true;
let discount;

if (purchase > 5000 && isPremium) {
    discount = purchase * 0.20;
} else {
    discount = purchase * 0.10;
}

let finalPrice = purchase - discount;

console.log("Original Price:", purchase);
console.log("Discount:", discount);
console.log("Final Price:", finalPrice);


//Task 6 - Attendance Report

for (let day = 1; day <= 10; day++) {
    console.log("Day " +day+ " Present");
}


// Task 7 - Even Number Generator

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}



//Task 8 - Mobile Number Validation

let mobile = "7639169981";

if (
    mobile.length === 10 &&
    (mobile.startsWith("6") ||
        mobile.startsWith("7") ||
        mobile.startsWith("8") ||
        mobile.startsWith("9"))
) {
    console.log("Valid Mobile Number");
} else {
    console.log("Invalid Mobile Number");
}


//Task 9 - Shopping Cart

let cart = ["Milk", "Bread", "Egg", "Rice", "Oil"];

console.log("First Item:", cart[0]);
console.log("Last Item:", cart[cart.length - 1]);
console.log("Total Items:", cart.length);


//Task 10 - Employee Database

let employee = {
    name: "Sarath",
    salary: 42000,
    department: "Software Development",
    experience: 1
};

console.log("Employee Name:", employee.name);
console.log("Department:", employee.department);
console.log("Experience:", employee.experience, "Years");


//Task 11 - Company ID Generator

let name = "Sarath";
let id = 3582;
let department = "Software Development";

console.log("Welcome "+name)
console.log("Your Employee ID is STK"+id)
console.log("Department: "+department);


//Task 12 - User Registration

let userName = prompt("Enter Your Name");
let userAge = prompt("Enter Your Age");
let terms = confirm("Do you accept the Terms & Conditions?");

if (terms) {
    alert("Registered Successfully");
} else {
    alert("Registration Cancelled");
}


//Task 13 - Salary Increment Calculator

let salary = 42000;
let increment = 15;
let incrementAmount = salary * increment / 100;
let newSalary = salary + incrementAmount;

console.log("Old Salary:", salary);
console.log("Increment Amount:", incrementAmount);
console.log("New Salary:", newSalary);


//Task 14 - Restaurant Bill Generator

let burger = 150;
let pizza = 300;
let juice = 80;
let subtotal = burger + pizza + juice;
let gst = subtotal * 18 / 100;
let grandTotal = subtotal + gst;

console.log("Subtotal:", subtotal);
console.log("GST:", gst);
console.log("Grand Total:", grandTotal); 


//Task 15 - Company Attendance Dashboard

let employees = [
    { name: "Anu", status: "Present" },
    { name: "Arun", status: "Absent" },
    { name: "Lokesh", status: "Present" },
    { name: "Priya", status: "Present" },
    { name: "Bhuvana", status: "Absent" }
];

let present = 0;
let absent = 0;

for (let emp of employees) {
    if (emp.status === "Present") {
        console.log(emp.name + " - Present");
        present++;
    } else {
        console.log(emp.name + " - Absent");
        absent++;
    }
}

console.log("Total Present:", present);
console.log("Total Absent:", absent);


//Mini Project - Employee Management System

let employees2 = [
    {
        id: 101,
        name: "Gokul",
        salary: 30000,
        experience: 2
    },
    {
        id: 102,
        name: "Priya",
        salary: 45000,
        experience: 5
    }
];

let choose = Number(prompt(`
1. Add Employee
2. View Employees
3. Search Employee
4. Bonus
5. Senior/Junior
6. Delete
7. Exit
`));

switch (choose) {

    case 1:
        employees2.push({
            id: 103,
            name: "Sarath",
            salary: 40000,
            experience: 3
        });
        console.log("Employee Added Successfully");
        break;

    case 2:
        console.log("Employee List");
        for (let emp of employees2) {
            console.log(emp);
        }
        break;

    case 3:
        let searchId = 101;
        let found = false;

        for (let emp of employees2) {
            if (emp.id === searchId) {
                console.log(emp);
                found = true;
            }
        }

        if (!found) {
            console.log("Employee Not Found");
        }
        break;

    case 4:
        for (let emp of employees2) {
            let bonus = emp.salary * 0.10;
            console.log(emp.name+" Salary with Bonus: ",emp.salary + bonus);
        }
        break;

    case 5:
        for (let emp of employees2) {
            if (emp.experience >= 5) {
                console.log(emp.name+" - Senior Employee");
            } else {
                console.log(emp.name+" - Junior Employee");
            }
        }
        break;

    case 6:
        let deleteId = 102;

        employees2 = employees2.filter(emp => emp.id !== deleteId);

        console.log("Employee Deleted");
        console.log(employees2);
        break;

    case 7:
        console.log("Exiting Employee Management System...");
        break;

    default:
        console.log("Invalid Choice");
}
