function toggleMenu() {
    const menuItems = document.querySelector(".links-container")
    const menuExit = document.querySelector("#menu-exit")

    if (window.innerWidth < 768 && menuItems.style.display === "none") {
        menuItems.style.display = "flex"
        menuExit.style.display = "block"
        menuItems.classList.add("active")

    } else {
        menuItems.style.display = "none"
        menuExit.style.display = "none"
        menuItems.classList.remove("active")
    }
}
