import REGEX from "../utils/constants.js";

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

