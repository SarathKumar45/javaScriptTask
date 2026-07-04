// Task 1 - Employee Login (Scope)

function employeeLogin() {
    if (true) {
        var companyName = "Stackly IT";
        let employeeId = 3582;
        const password = "Stack@123";

        console.log("Employee ID:", employeeId);
        console.log("Password:", password);
    }

    console.log("Company Name:", companyName);

    // Uncomment to see the error
    // console.log(employeeId);
    // console.log(password);
}

employeeLogin();


// Task 2 - ATM Machine (Hoisting)

// var
console.log(accountBalance);
var accountBalance = 5000;

// Uncomment one at a time to see the errors

// console.log(balance);
// let balance = 10000;

// console.log(totalAmount);
// const totalAmount = 20000;


// Task 3 - Food Delivery App (Named Function)

function orderFood(foodName) {
    console.log("Order Placed :", foodName);
}

orderFood("Chicken Biryani");


// Task 4 - WhatsApp Status (Anonymous Function)

let statusUpdate = function (status) {
    console.log("Status Updated :", status);
};

statusUpdate("Busy in Meeting");


// Task 5 - Weather App (Arrow Function)

const weather = (city, temperature) => {
    console.log(`${city} Temperature is ${temperature}°C`);
};

weather("Bangalore", 26);


// Task 6 - Flipkart Offer (IIFE)

(function () {
    console.log("Today's Offer");
    console.log("Flat 60% Discount");
})();


// Task 7 - Online Payment (Higher Order + Callback)

function paymentSuccess() {
    console.log("Payment Successful");
}

function makePayment(callback) {
    console.log("Payment Processing...");
    callback();
}

makePayment(paymentSuccess);


// Task 8 - YouTube Playlist (Generator)

function* playlist() {
    yield "Video 1";
    yield "Video 2";
    yield "Video 3";
    yield "Video 4";
    return "Playlist Completed";
}

const videos = playlist();

console.log(videos.next().value);
console.log(videos.next().value);
console.log(videos.next().value);
console.log(videos.next().value);
console.log(videos.next().value);


// Task 9 - Student Result (Return)

function calculateTotal() {
    return 485;
}

let totalMarks = calculateTotal();

console.log("Total Marks :", totalMarks);


// Task 10 - Shopping Cart (Return)

function cartTotal(price1, price2, price3) {
    return price1 + price2 + price3;
}

let totalAmount = cartTotal(1000, 500, 250);

console.log("Total Amount :", totalAmount);


// Task 11 - Salary Calculator

function salary(basic, hra, bonus) {
    return basic + hra + bonus;
}

console.log("Total Salary :", salary(40000, 10000, 8000));


// Task 12 - Food Bill (Currying)

function foodBill(food) {
    return function (drinks) {
        return function (dessert) {
            return food + drinks + dessert;
        };
    };
}

console.log(foodBill(200)(100)(80));


// Task 13 - Coupon Generator

function* couponGenerator() {
    yield "WELCOME10";
    yield "SAVE20";
    yield "SUPER30";
    yield "MEGA50";
    return "No More Coupons";
}

const coupons = couponGenerator();

console.log(coupons.next().value);
console.log(coupons.next().value);
console.log(coupons.next().value);
console.log(coupons.next().value);
console.log(coupons.next().value);


// Task 14 - Bank Transaction

function transactionSuccess() {
    console.log("Transaction Successful");
}

function withdraw(callback) {
    console.log("Processing...");
    callback();
}

withdraw(transactionSuccess);


// Task 15 - Employee Profile (Scope)

function employeeProfile() {
    if (true) {
        var company = "Stackly";
        let designation = "Java Developer";
        const salary = 45000;

        console.log("Designation:", designation);
        console.log("Salary:", salary);
    }

    console.log("Company:", company);

    // Uncomment to see the errors
    // console.log(designation);
    // console.log(salary);
}

employeeProfile();
