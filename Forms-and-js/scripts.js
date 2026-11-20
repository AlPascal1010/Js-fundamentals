let form = document.getElementById("myForm");
let userName = document.getElementById("userName");
let message = document.getElementById("message");

let password = document.getElementById("userPassword");

let email = document.getElementById("userEmail");


form.addEventListener("submit", function (e) {
    e.preventDefault();
    let name = userName.value;

    if (name === "") {
        message.textContent = "Please enter your name.";
        message.classList.add("error");
        return;
    }

    let passwordValue = password.value.trim();

    if (passwordValue === "") {
        message.textContent = "Please enter your password.";
        message.classList.add("error");
        return;
    }else if(passwordValue.length < 8){
        message.textContent = "Password must be at least 8 characters long.";
        message.classList.add("error");
        return;
    }



    let emailValue = email.value.trim();

    if (emailValue === "") {
        message.textContent = "Please enter your email.";
        message.classList.add("error");
        return;
    }

    message.classList.remove("error");
    message.classList.add("success");
    message.textContent = `Hello ${name}! Welcome to our website.`;
});