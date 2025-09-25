// step 1: change viewbox, align to center
// step 2: change viewbox, smoothly slide to left
window.onload(startLoaderAnimation())
    // smoothly translate 142.6px * 4 to the left, then change viewbox
// step 3: smoothly expand with neat colours


async function startLoaderAnimation() {
    await new Promise(r => setTimeout(r, 1000))
    const logo = document.querySelector("svg#logo")
    logo.classList.add("shifted")
    await new Promise(r => setTimeout(r, 1000))
    logo.classList.remove("shifted")
    logo.setAttribute("viewBox", "0 0 200 50")
    logo.classList.add("expanded")
}