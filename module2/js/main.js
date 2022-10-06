import {REGEX, URL_POST_FORM} from "../utils/constants.js";
import postForm from "../services/api_calls.js";

//Toggle menu de header
document.querySelector(".burger_btn").addEventListener("click", (e) => {
    document.querySelector(".nav_links").classList.toggle("nav_links_hidden");
    e.target.classList.toggle("close_btn")
});

//Scrollbar horizontal progresivo
const scrollbar = document.getElementById("scrollbar");
const body = document.querySelector(".body");


const scrolling = () => {  
    const scrollPercentage = Math.round((window.scrollY / (body.offsetHeight - window.innerHeight)) * 100);
    scrollbar.style.width = scrollPercentage + '%';
    modalIsActive(scrollPercentage);
};

window.addEventListener("scroll", scrolling)


//Return to top
const chevronToTop = document.querySelector(".return_top");
chevronToTop.addEventListener("click", () => {
    setTimeout(() => {
        window.scroll({
            top: 0,
            behavior: "smooth",
        })
    }, 200)
});

//Not working hide btn
const buttonToTop = document.querySelector(".return_top_container");
if (window.scrollY > 0){
    buttonToTop.classList.toggle("show")
}

//Validacion de formulario
const form = document.querySelector(".form");
const inputs = document.querySelectorAll(".input_text");
const name = document.querySelector(".name");
const email = document.querySelector(".email");
const errorName = document.querySelector(".error_message_name");
const errorEmail = document.querySelector(".error_message_email");
const checkbox = document.querySelector(".checkbox");
const policy_label = document.querySelector(".policy_label");

const validateForm = (e) => {
    if(e.target.name === "name") {
        if(REGEX.name.test(e.target.value)) {
            errorName.style.visibility = "hidden";
            name.classList.remove('error');
            name.classList.add("correct");         
        } else {
            errorName.style.visibility = "visible";
            name.classList.add('error'); 
            name.classList.remove("correct");
        }
    }
    if (e.target.name === "email") {
        if (REGEX.email.test(e.target.value)) {
            errorEmail.style.visibility = "hidden";
            email.classList.remove('error');
            email.classList.add("correct");
        } else {
            errorEmail.style.visibility = "visible";
            email.classList.add('error');
            email.classList.remove("correct");
        }
    }
};

inputs.forEach((input) => {
    input.addEventListener("keyup", validateForm);
});

//Post form data
form.addEventListener("submit", (e) => {
    const nameValue = name.value;
    const emailValue = email.value;

    e.preventDefault();

    if (checkbox.checked){
        policy_label.classList.remove("not_checked");
        (nameValue && emailValue) ? postForm(URL_POST_FORM, nameValue, emailValue) : alert('Fill the form complete.')
    } else policy_label.classList.add("not_checked");
})

//Modal 
const modalContainer = document.querySelector('.main_container_modal')

    //Active w. scroll
function modalIsActive(percentage) {
    if (percentage === 25 && !localStorage.getItem("modalState")) {
        modalContainer.style.display = "block";
        localStorage.setItem("modalState", true)
    }
}

    //Active setTimeOut
setTimeout(() => {
    if(!localStorage.getItem("modalState")){
        modalContainer.style.display = "block";
        localStorage.setItem("modalState", true)
    }
}, 5000);    

    //Function for closing modal
function modalClosed(){
    if (localStorage.getItem("modalState")){
        modalContainer.style.display =" none";
    }
}

//Close w. button
const closeBtn = document.querySelector(".close_btn_modal");
closeBtn.addEventListener("click", modalClosed);

//Close click outside
const modal = document.querySelector(".modal");
window.addEventListener("click", (e) => {
    if(modal != e.target) {
        modalClosed();
    }
})

//Close w. ESC
window.addEventListener("keyup", (e) => {
    e.key === "Escape" ? modalClosed() : null;
})