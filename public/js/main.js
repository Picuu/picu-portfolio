// SHOW NAVIGATION
function showHeader() {
    const header = document.getElementById("header");

    if (this.scrollY >= header.offsetHeight) header.classList.add("show-header");
    else header.classList.remove("show-header");
}

window.addEventListener("scroll", showHeader);
