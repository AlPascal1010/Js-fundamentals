// Objects
let Laptop = {
    name: "Laptop",
    price: 1000,
    quantity: 5
}
let smartphone = {
    name: "Smartphone",
    price: 800,
    quantity: 10
}



// creating object
// 1. object leteral
const Car = {
    make: 'Chevrolet',
    model: 'Camaro',
    year: 2021
};


// using the object constructor

const Bike = new Object({
    make: 'Trek',
    model: 'Domane',
    year: 2022
});

// console.log(Car['make']);
// console.log(Bike.make);


// const Student = {
//     name: 'John Doe',
//     age: 20,
//     Score: 90,
//     displayInfo: function() {
//         return(`Name: ${this.name}, Age: ${this.age}, Score: ${this.Score}`);
//     },
//     education: {
//         degree: 'Bachelor of Science',
//         major: 'Computer Science',
//         university: 'University of Example'
//     },

//     friends: ['Alice', 'Bob', 'Charlie'],

//     sibling: {
//         name: 'Jane Doe',
//         relationship: 'Sister',
//         age: 18
//     }
// }

// console.log(Student);

// console.log(Student.displayInfo());
// console.log(Student.friends[0]);
// console.log(Student.education.degree);
// console.log(Student.sibling['name']);

// Student.grade = function(Score) {
//     let score = this.Score;
//     if (this.Score >= 90) {
//         return 'A';
//     }else if (this.Score >= 80) {
//         return 'B';
//     }else if (this.Score >= 70) {
//         return 'C';
//     }else if (this.Score >= 60) {
//         return 'D';
//     }else if (this.Score < 60) {
//         return 'F';
//     }else{
//         return `Invalid score`;
//     }
// }

// Student.favoriteFood = "chinese Rice and Ramen";

// delete Student.grade;

// Student.age = 25;

// console.log(Student);


// Objects and Arrays
// console.log(Student.friends);



// for(let score of Student.friends){
//     console.log(score);
// }

// for (let i = 0; i < Student.friends.length; i++) {
//     console.log(Student.friends[i]);
// // }

// let friends = Student.friends.filter(function(friend) {
//     return friend.length > 3;
// });
// // console.log(friends);


// let grades = [90, 80, 70, 60, 50, 40, 30];

// // console.log(grades[0]);


// // using loops to access the properties of an Object
// for (let key in Student){
//     console.log(`${key}: ${Student[key]}`);
// }

// console.log(Student);

// Functions and Objects
function createStudent(name, age, score) {
    return {
        name: name,
        age: age,
        score: score,
        displayInfo: function() {
            return(`Name: ${this.name}, Age: ${this.age}, Score: ${this.score}`);
        }
    }
}

let student1 = createStudent("John", 20, 90);
// console.log(student1.displayInfo());

let student2 = createStudent("Jane", 22, 85);
// console.log(student2.displayInfo());

function displayStudent(student) {
    console.log(`name: ${student.name}, Age: ${student.age}, Score: ${student.score}`);
}

// displayStudent(student1);
// displayStudent(student2);

let student = {
    name: prompt("Enter your name: "),
    age: Number(prompt("Enter your age: ")),
    score: Number(prompt("Enter your score: ")),
    course: prompt("Enter your course: "),
};

/* using functions
1. display the student information
2. Calculate the student grade and add it to the object as a new property
3. determine if the student passed or failed and add it to the object as a new property
4. display the student information again with the new properties using alerts
*/


// task 1
function displayStudentInfo(){
    alert(`Student Information:\n
        Name: ${student.name}\n
        Age: ${student.age}\n
        Score: ${student.score}\n
        Course: ${student.course}`);
}


// task 2
function calculateStudentGrade(){
    let score = student.score;
    if (score >= 90 && score <= 100)  {
        student.grade = 'A';
    } else if (score >= 80 && score < 90) {
        student.grade = 'B';
    } else if (score >= 70 && score < 80) {
        student.grade = 'C';
    } else if (score >= 60 && score < 70) {
        student.grade = 'D';
    } else if (score >= 0 && score < 60) {
        student.grade = 'F';
    } else {
        student.grade = 'Invalid score';
    }
}

// task 3
function determineStudentStatus(){
    if(student.score >= 50) {
        student.status = 'Pass';
    } else {
        student.status = 'Fail';
    }
}

// Calling the function
displayStudentInfo();
calculateStudentGrade();
determineStudentStatus();

function displayStudentInfoWithNewProperties(){

    alert(`Student Information:\n
        Name: ${student.name}\n
        Age: ${student.age}\n
        Score: ${student.score}\n
        Course: ${student.course}\n
        Grade: ${student.grade}\n
        Status: ${student.status}`);
}

displayStudentInfoWithNewProperties();