let firstName = document.querySelector(".first-name");
let lastName = document.querySelector(".last-name");
let email = document.querySelector(".email");
let password = document.querySelector(".password");

function error(){
    if(firstName.value === "" && !firstName.classList.contains("error")){
        firstNameError();
    } else if(firstName.value !== "" && firstName.classList.contains("error")){
        firstName.classList.remove("error");
        let div = document.querySelector(".sign-up-form > .first-name-div");
        let para = document.querySelector(".sign-up-form > .first-name-div > p");
        if(para){
            div.removeChild(para);
        }
    } 
    if(lastName.value === "" && !lastName.classList.contains("error")){
        lastNameError();
    } else if(lastName.value !== "" && lastName.classList.contains("error")){
        lastName.classList.remove("error");
        let div = document.querySelector(".sign-up-form > .last-name-div");
        let para = document.querySelector(".sign-up-form > .last-name-div > p");
        if(para){
            div.removeChild(para);
        }
    }
    if(!validateEmail() && !email.classList.contains("error")){
        emailError();
    } else if(validateEmail() && email.classList.contains("error")){
        email.classList.remove("error");
        let div = document.querySelector(".sign-up-form > .email-div");
        let para = document.querySelector(".sign-up-form > .email-div > p");
        if(para){
            div.removeChild(para);
        }
    } else{
        email.value = "";
    }
    if(password.value === "" && !password.classList.contains("error")){
        passwordError();
    } else if(password.value !== "" && password.classList.contains("error")){
        password.classList.remove("error");
        let div = document.querySelector(".sign-up-form > .password-div");
        let para = document.querySelector(".sign-up-form > .password-div > p");
        if(para){
            div.removeChild(para);
        }
    }
}

function firstNameError(){
    firstName.classList.add("error");
    firstName.placeholder = "";
    let div = document.querySelector(".sign-up-form > .first-name-div");
    let para = document.createElement("p");
    para.textContent = "First Name cannot be empty"
    para.classList.add("error-para")
    div.appendChild(para);
}

function lastNameError(){
    lastName.classList.add("error");
    lastName.placeholder = "";
    let div = document.querySelector(".sign-up-form > .last-name-div");
    let para = document.createElement("p");
    para.textContent = "Last Name cannot be empty"
    para.classList.add("error-para")
    div.appendChild(para);
}

function emailError(){
    email.classList.add("error");
    email.placeholder = "email@example.com";
    let div = document.querySelector(".sign-up-form > .email-div");
    let para = document.createElement("p");
    para.textContent = "Looks like this is not an email"
    para.classList.add("error-para")
    div.appendChild(para);
}

function passwordError(){
    password.classList.add("error");
    password.placeholder = "";
    let div = document.querySelector(".sign-up-form > .password-div");
    let para = document.createElement("p");
    para.textContent = "Password cannot be empty"
    para.classList.add("error-para")
    div.appendChild(para);
}

function validateEmail(){
    const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return email.value.match(regEx);
}