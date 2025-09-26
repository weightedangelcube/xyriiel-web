let logo
let loader

window.onload = () => {
    const referrerHostname = new URL(document.referrer).hostname
    logo = document.querySelector("svg#logo")
    loader = document.querySelector("div.loader")

    if (referrerHostname != "xyriiel.com" && referrerHostname != "localhost" && referrerHostname != "xyriiel-dev.angelcube.dev") {
        startLoaderAnimation()
    } else {
        startQuickLoaderAnimation()   
    }
}

async function startLoaderAnimation() {
    logo.style.display = "unset"

    await new Promise(r => setTimeout(r, 1000))
    logo.classList.add("shifted")
    await new Promise(r => setTimeout(r, 1000))
    logo.classList.remove("shifted")
    logo.setAttribute("viewBox", "0 0 200 50")
    logo.classList.add("expanded")
    await new Promise(r => setTimeout(r, 1200))

    loader.classList.add("raise-curtain")
    logo.style.display = "none"

    await new Promise(r => setTimeout(r, 1000))

    loader.style.display = "none"
}

async function startQuickLoaderAnimation() {
    loader.classList.add("raise-curtain-fast")
    await new Promise(r => setTimeout(r, 400))

    loader.style.display = "none"
}
