
//Toggle menu de header
document.querySelector(".burger_btn").addEventListener("click", (e) => {
    document.querySelector(".nav_links").classList.toggle("nav_links_hidden");
    e.target.classList.toggle("close_btn")
});

//Scrollbar horizontal progresivo
const scrollbar = document.getElementById("scrollbar");
const body = document.querySelector("body");

const scrolling = () => {
    const scrollPercentage = Math.round((window.scrollY / (body.offsetHeight - window.innerHeight)) * 100);
    scrollbar.style.width = scrollPercentage + '%';
    if(scrollPercentage < 0) {
        scrollbar.style.width = "0%";
    }
};
window.addEventListener("scroll", scrolling)


//Return to top
const returnToTop = document.querySelector(".return_top");

returnToTop.addEventListener("click", () => {
    setTimeout(() => {
        window.scroll({
            top: 0,
            behavior: "smooth",
        })
    }, 200)
})
