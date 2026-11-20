// console.log(document);

/* selecting html elements
1. using getElementById
*/
// let heading = document.getElementById("heading");

// console.log(heading);

// let heading2 = document.getElementsByClassName("heading");
// console.log(heading2);
// console.log(heading2.length);


// 2. using querySelector
// let title = document.querySelector(".title");
// let message = document.querySelector("#message");

// console.log(title.outerHTML);
// console.log(message.outerHTML);




// 3. using querySelectorAll
// let items = document.querySelectorAll(".item")
// console.log(items);

// //loop through the array
// items.forEach(function(item){
//     console.log(item.textContent);
// })

// for (let i = 0; i < items.length; i++){
//     console.log(items[i].textContent);
// }

// let heads = document.getElementById("head");
// console.log(heads.textContent);

// let para = document.querySelectorAll(".para");
// for (let i = 0; i < para.length; i++){
//     console.log(para[i].textContent);
// }

// let but = document.querySelectorAll(".but");
// for (let i = 0; i < but.length; i++){
//     console.log(but[i].textContent);
// }


// let heads = document.getElementById("heads");
// heads.textContent = "This is my head, its really big";
// console.log(heads);

// let heade = document.getElementById("heade");
// heade.innerHTML = "<h6>im a changed head</h6>";
// console.log(heade.innerHTML);


// let header = document.querySelector("#header");

// header.style.color = "red";
// header.style.backgroundColor = "black";
// header.style.textAlign = "center";
// header.style.fontSize = "40px";
// header.style.padding = "30px";

// let heading = document.querySelector("#heading");
// let button1 = document.querySelector("#button1");

// button1.addEventListener("click", function(){
//     heading.textContent = "Welcome!";
// });

// let button2 = document.querySelector("#button2");
// button2.addEventListener("click", function() {
//     heading.textContent = "Keep learning";
// })

// let button3 = document.querySelector("#button3");
// button3.addEventListener("click", function() {
//     heading.textContent = "JavaScript is Powerful";
// })

// let para = document.getElementById("changeMeToo");

// function changePara(){
//     para.textContent = "What did i ask you guys to do Again🤔"
// }

// let button4 = document.getElementById("button4");

// button4.addEventListener("click", changePara);

// let heading = document.getElementById("heading");
// let btn = document.getElementById("styleButton");

// btn.addEventListener("click", function(){
//     heading.classList.toggle("highlight");
// })

// The Input event
// const nameInput = document.getElementById("nameInput");

// const namePreview = document.getElementById("namepreview");

// nameInput.addEventListener("input", function(){
//     namePreview.textContent = nameInput.value;
// ;});

// // change Event
// const courseSelect = document.getElementById("courseSelect");

// const courseMessage = document.getElementById("courseMessage");

// courseSelect.addEventListener("change", function(){
//     courseMessage.textContent = "You have selected: " + courseSelect.value;
// })


// Submit events
// let studentForm = document.getElementById("studentForm");
// let formMessage = document.getElementById("formMessage");
// let studentName = document.getElementById("StudentName");


// studentForm.addEventListener("submit", function(event){
//     event.preventDefault();
//     formMessage.textContent = "Hello " + studentName.value + ", your form has been submitted successfully!";
//     studentForm.reset();
// });

// mouseover
// let heading = document.getElementById("heading");

// heading.addEventListener("mouseover", function(){
//     heading.style.color = "red";
//     heading.style.backgroundColor = "black";
//     heading.style.fontSize = "40px";
// });

// heading.addEventListener("mouseout", function(){
//     heading.style.color = "blue";
//     heading.style.backgroundColor = "green  ";
//     heading.style.fontSize = "30px";
// });

// KeyDown

const keyboardInput = document.getElementById("keyboardInput");
const keyboardMessage = document.getElementById("keyMessage");

keyboardInput.addEventListener("keydown", function(event){
    keyboardMessage.textContent = "You pressed: " + event.key;
    console.log(keyboardMessage);
});