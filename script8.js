// Task 1: Employee Age Calculator

let dob = new Date("2002-07-15"); // Employee DOB

let currentDate = new Date();

let age = currentDate.getFullYear() - dob.getFullYear();

// Check if birthday has occurred this year
let monthDifference = currentDate.getMonth() - dob.getMonth();

if (
    monthDifference < 0 ||
    (monthDifference === 0 && currentDate.getDate() < dob.getDate())
) {
    age--;
}

console.log("Employee Age :", age, "Years");


// Task 2: Online Appointment Scheduler

let appointment = new Date();

appointment.setFullYear(2027);
appointment.setMonth(11); // December (0 = January)
appointment.setDate(15);
appointment.setHours(10);
appointment.setMinutes(30);
appointment.setSeconds(0);

console.log("Updated Appointment :", appointment.toString());


// Task 3: Multi-Country Meeting Time

let today = new Date();

console.log(
    "India Time      :",
    today.toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata"
    })
);

console.log(
    "New York Time   :",
    today.toLocaleString("en-US", {
        timeZone: "America/New_York"
    })
);

console.log(
    "Tokyo Time      :",
    today.toLocaleString("en-JP", {
        timeZone: "Asia/Tokyo"
    })
);


// Task 4: Product Warranty Expiry

let purchaseDate = new Date();

let warrantyExpiry = new Date(purchaseDate);

warrantyExpiry.setFullYear(warrantyExpiry.getFullYear() + 2);

console.log("Purchase Date   :", purchaseDate.toDateString());
console.log("Warranty Expiry :", warrantyExpiry.toDateString());


// Task 5: Digital Clock

function digitalClock() {
    let currentTime = new Date();

    console.clear(); // Clears previous time

    console.log("===== Digital Clock =====");
    console.log(
        currentTime.toLocaleTimeString("en-IN")
    );
}

// Display immediately
digitalClock();

// Update every second
setInterval(digitalClock, 1000);
