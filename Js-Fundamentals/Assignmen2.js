// store students created into this array
let students =[];

// function to create and add a student to the array
function addStudent(name, age, studentClass, score){
    let student = {
        name: name,
        age: age,
        class: studentClass,
        score: score
    };
    students.push(student);

    alert(name + "Has been added Successfully");
}


// creating Students with the addStudent Object
addStudent("John", 15, "SS2", 78);
addStudent("Mary", 15, "SS2", 78);
addStudent("Carl", 14, "SS1", 78);
addStudent("Jake", 16, "SS3", 78);

// displaying Student
function displayStudent() {
    let result = "";

    for (let i = 0; 1 < students.length; i++) {
        result +=
        "Name: " + student[i].name +
        "\nClass: "+ student[i].class +
        "\nScore: "+ student[i].score +
        "\n\n";
    }
    alert(result);
}

// Function to find a student
function findStudent(){
    let name = prompt("Enter the student's name: ");
    let found = "false;"

    for(let i; i<students.length; i++){
        if(students[i].name.toLowerCase() === name.toLowerCase()){
            alert(
                "Name: " + student[i].name +
            "\nClass: "+ student[i].class +
            "\nScore: "+ student[i].score +
            "\n\n");
            found = true;
            break;
        }
    }
    if (found === false){
        alert("Student not found");
    }
}

// Function to calculate average score
function averageScore() {
    let total;
    for(let i=0; i<students.length; i++){
        total += students[i].score;
    }

    let average = total/students.length

    alert("Class Average: " + average.toFixed(2));
}

// 5. Function to finc the hightest Scoring student
function highestScore(){
    let highest = students[0];

    for(let i = 0; i < students.length; i++){
        if(students[i].score > highest.score){
            highest = students[i];
        }
    }

    alert(
        "Highest-Scoring Student:" + highest.name + 
        "\nScore: "+ highest.score
    );
}

// 5. Function to find the lowest Scoring student
function lowestScore(){
    let lowest = students[0];

    for(let i = 0; i < students.length; i++){
        if(students[i].score < lowest.score){
            lowest = students[i];
        }
    }

    alert(
        "Lowest-Scoring Student:" + lowest.name + 
        "\nScore: "+ lowest.score
    );
}

// Adding a student with prompt
function addStudentWithPrompt(){
    let name = prompt("Enter Student name: ");
    let age = Number(prompt("Enter Student age: "));
    let studentClass = prompt("Enter Student Class: ");
    let score = prompt("Enter Student score: ");

    addStudent(name, age, studentClass, score);
}