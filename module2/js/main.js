
//Toggle menu de header
document.querySelector(".burger_btn").addEventListener("click", (e) => {
    document.querySelector(".nav_links").classList.toggle("nav_links_hidden");
    e.target.classList.toggle("close_btn")
})