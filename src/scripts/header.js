const menuIcon = document.querySelector("div.menu-icon")
const menuDropdown = document.querySelector("div.menu-dropdown")

startMenuListener()

function startMenuListener() {
    menuDropdown.style.display = "none"

    menuIcon.addEventListener("click", () => {
        toggleMenuDropdown()
    })
}

function toggleMenuDropdown() {
    menuDropdown.style.display = 
        menuDropdown.style.display == "none" ?  "flex" : "none"
}