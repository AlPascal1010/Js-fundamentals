/*function getGrade(score) {
    if (score >= 90 && score <= 100) {
        return 'A';
    } else if (score >= 80 && score < 90) {
        return 'B';
    } else if (score >= 70 && score < 80) {
        return 'C';
    } else if (score >= 60 && score < 70) {
        return 'D';
    } else if (score >= 0 && score < 60) {
        return 'F';
    } else {
        return 'Invalid score';
    }
}

function getStatus(score){
    if(score >= 50) {
        return 'Pass';
    } else {
        return 'Fail';
    }
}

function getStudentInfo(name, score) {
    return `Student: ${name}, Score: ${score}, Grade: ${grade}, Status: ${status}`;
}

function displayResult(name, score) {
    let studentInfo = getStudentInfo(name, score);
    alert(
        `Student Result:\n
        ----------\n
        Name: ${name}\n
        Score: ${score}\n
        Grade: ${grade}\n
        Status: ${status}`
    );
}

let studentName = prompt("Enter student name:");
let studentScore = Number(prompt("Enter student score:"));
let grade = getGrade(studentScore);
let status = getStatus(studentScore);


displayResult(studentName, studentScore);*/

// Task 2
let products = [
    "Laptop",
    "Phone",
    "Headphones",
    "Keyboard",
    "Mouse"
];

let prices = [
    450000,
    300000,
    50000,
    35000,
    20000
];

let selectedProducts = [];
let selectedPrices = [];

// 1. Display available products
function displayProducts(products, prices) {
    let message = "AVAILABLE PRODUCTS\n\n";

    for (let i = 0; i < products.length; i++) {
        message += (i + 1) + ". " + products[i]
            + " - ₦" + prices[i] + "\n";
    }

    alert(message);
}

// 2. Find a product
function findProduct(productName, products) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].toLowerCase() === productName.toLowerCase()) {
            return i;
        }
    }

    return -1;
}

// 3. Calculate the total cost
function calculateTotal(prices) {
    let total = 0;

    for (let i = 0; i < prices.length; i++) {
        total += prices[i];
    }

    return total;
}

// 4. Calculate the discount
function calculateDiscount(total) {
    if (total >= 500000) {
        return total * 0.15;
    } else if (total >= 300000) {
        return total * 0.10;
    } else if (total >= 100000) {
        return total * 0.05;
    } else {
        return 0;
    }
}

// 5. Calculate the final price
function calculateFinalPrice(total, discount) {
    return total - discount;
}

// 6. Display the receipt
function displayReceipt(products, prices, total, discount, finalPrice) {
    let receipt = "===== SHOPPING RECEIPT =====\n\n";

    receipt += "ITEMS PURCHASED:\n";

    for (let i = 0; i < products.length; i++) {
        receipt += products[i] + " - ₦"
            + prices[i].toLocaleString("en-NG") + "\n";
    }

    receipt += "\n----------------------------\n";
    receipt += "Total: ₦" + total.toLocaleString("en-NG") + "\n";
    receipt += "Discount: ₦" + discount.toLocaleString("en-NG") + "\n";
    receipt += "Final Amount: ₦"
        + finalPrice.toLocaleString("en-NG") + "\n";
    receipt += "============================";

    alert(receipt);
}

// MAIN PROGRAM

displayProducts(products, prices);

let shopping = true;

while (shopping) {
    let choice = prompt(
        "Enter the name of the product you want to buy.\n"
        + "Type 'done' to finish shopping."
    );

    if (choice === null || choice.toLowerCase() === "done") {
        shopping = false;
    } else {
        let productIndex = findProduct(choice.trim(), products);

        if (productIndex !== -1) {
            selectedProducts.push(products[productIndex]);
            selectedPrices.push(prices[productIndex]);

            alert(products[productIndex] + " added to your cart!");
        } else {
            alert("Product not found. Please try again.");
        }
    }
}

// Calculate and display the receipt
if (selectedProducts.length > 0) {
    let total = calculateTotal(selectedPrices);
    let discount = calculateDiscount(total);
    let finalPrice = calculateFinalPrice(total, discount);

    displayReceipt(
        selectedProducts,
        selectedPrices,
        total,
        discount,
        finalPrice
    );
} else {
    alert("You did not purchase any products.");
}

// Task 3
let students = [
    "John",
    "Mary",
    "Peter",
    "Sarah",
    "David"
];

let scores = [
    85,
    72,
    91,
    64,
    78
];


// 1. Display all students
function displayStudents(names, marks) {
    let result = "ALL STUDENTS\n\n";

    for (let i = 0; i < names.length; i++) {
        result += (i + 1) + ". "
            + names[i]
            + " - "
            + marks[i]
            + "\n";
    }

    alert(result);
}


// 2. Find a student
function findStudent(studentName, names) {

    for (let i = 0; i < names.length; i++) {

        if (names[i].toLowerCase() === studentName.toLowerCase()) {
            return i;
        }

    }

    return -1;
}


// 3. Calculate grade
function calculateGrade(score) {

    if (score >= 70) {
        return "A";
    } 
    else if (score >= 60) {
        return "B";
    } 
    else if (score >= 50) {
        return "C";
    } 
    else if (score >= 45) {
        return "D";
    } 
    else if (score >= 40) {
        return "E";
    } 
    else {
        return "F";
    }
}


// 4. Calculate class average
function calculateAverage(marks) {

    let total = 0;

    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }

    return total / marks.length;
}


// 5. Find highest score
function findHighest(names, marks) {

    let highest = marks[0];
    let highestStudent = names[0];

    for (let i = 1; i < marks.length; i++) {

        if (marks[i] > highest) {
            highest = marks[i];
            highestStudent = names[i];
        }

    }

    return {
        name: highestStudent,
        score: highest
    };
}


// 6. Find lowest score
function findLowest(names, marks) {

    let lowest = marks[0];
    let lowestStudent = names[0];

    for (let i = 1; i < marks.length; i++) {

        if (marks[i] < lowest) {
            lowest = marks[i];
            lowestStudent = names[i];
        }

    }

    return {
        name: lowestStudent,
        score: lowest
    };
}


// 7. Display a student's result
function displayStudentResult(name, score) {

    let grade = calculateGrade(score);

    alert(
        "STUDENT RESULT\n\n" +
        "Name: " + name + "\n" +
        "Score: " + score + "\n" +
        "Grade: " + grade
    );
}


// MAIN PROGRAM

let running = true;

while (running) {

    let menu = prompt(
        "STUDENT MANAGEMENT SYSTEM\n\n" +
        "1. Display all students\n" +
        "2. Find a student\n" +
        "3. Calculate a student's grade\n" +
        "4. Show class average\n" +
        "5. Show highest score\n" +
        "6. Show lowest score\n" +
        "7. Exit\n\n" +
        "Enter your choice:"
    );

    switch (menu) {

        case "1":

            displayStudents(students, scores);

            break;


        case "2":

            let searchName = prompt(
                "Enter the student's name:"
            );

            let studentIndex = findStudent(
                searchName,
                students
            );

            if (studentIndex !== -1) {

                alert(
                    "Student found!\n\n" +
                    "Name: " + students[studentIndex] +
                    "\nScore: " + scores[studentIndex]
                );

            } else {

                alert(
                    "Student not found."
                );

            }

            break;


        case "3":

            let gradeName = prompt(
                "Enter the student's name:"
            );

            let gradeIndex = findStudent(
                gradeName,
                students
            );

            if (gradeIndex !== -1) {

                displayStudentResult(
                    students[gradeIndex],
                    scores[gradeIndex]
                );

            } else {

                alert(
                    "Student not found."
                );

            }

            break;


        case "4":

            let average = calculateAverage(scores);

            alert(
                "CLASS AVERAGE\n\n" +
                "Average Score: " +
                average.toFixed(2)
            );

            break;


        case "5":

            let highest = findHighest(
                students,
                scores
            );

            alert(
                "HIGHEST SCORE\n\n" +
                "Student: " + highest.name +
                "\nScore: " + highest.score
            );

            break;


        case "6":

            let lowest = findLowest(
                students,
                scores
            );

            alert(
                "LOWEST SCORE\n\n" +
                "Student: " + lowest.name +
                "\nScore: " + lowest.score
            );

            break;


        case "7":

            running = false;

            alert(
                "Thank you for using the Student Management System."
            );

            break;


        default:

            alert(
                "Invalid choice.\nPlease select a number from 1 to 7."
            );

    }
}