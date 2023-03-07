// SHOW NAVIGATION
function showHeader() {
    const header = document.getElementById("header");

    if (this.scrollY >= header.offsetHeight) header.classList.add("show-header");
    else header.classList.remove("show-header");
}

window.addEventListener("scroll", showHeader);


// SHOW SKILLS FULL BOX
const skillsBoxs = document.querySelectorAll(".skills--grid--title");

skillsBoxs.forEach((skillsBox) => {
    skillsBox.addEventListener("click", (event) => {
        skillsBox.classList.toggle("active");
        const skillsContent = skillsBox.nextElementSibling;
        if (skillsBox.classList.contains("active")) {
            skillsContent.style.maxHeight = skillsContent.scrollHeight + "px";
        } else {
            skillsContent.style.maxHeight = 0;
        }
    });
});


// HOVER EFFECT FOR CARDS IN ABOUT SECTION (FORMATION)
document.getElementById("formation--cards").onmousemove = e => {
    for(const card of document.getElementsByClassName("formation--card")) {
        const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
  
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    };
}

