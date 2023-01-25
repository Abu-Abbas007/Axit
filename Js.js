const sections = document.querySelectorAll('.section')
const cssRootVariables = document.querySelector(':root')
const nightModeBtnEnable = document.querySelectorAll(".enable")
const nightModeBtnDisable = document.querySelectorAll(".disable")
const subMenuOpen = document.querySelector('.sub-menu-open')
const subMenuClose = document.querySelector('.sub-menu-close')
const subMenuBtns = document.querySelector('.btn')
const subMenu = document.querySelector('.sub-menu')
const nightModeNew = document.querySelector('#nightModeCheackBox')

const options = {

}

const observer = new IntersectionObserver ((entries,observer) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            entry.target.classList.add('invisible')
            entry.target.classList.remove('visible')
        }

        if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            entry.target.classList.remove('invisible')
        }
    })
},options)

sections.forEach((entry) => {
    observer.observe(entry)
})

function nightModeEnable () {
    nightModeNew.checked = true;
    nightModeBtnEnable[0].style.display = "none"
    nightModeBtnDisable[0].style.display = "block"
    nightModeBtnEnable[1].style.display = "none"
    nightModeBtnDisable[1].style.display = "block"
    cssRootVariables.style.setProperty("--background-color", "#1A1A2E");
}

function nightModeDisable () {
    nightModeNew.checked = false;
    nightModeBtnEnable[0].style.display = "block"
    nightModeBtnDisable[0].style.display = "none"
    nightModeBtnEnable[1].style.display = "block"
    nightModeBtnDisable[1].style.display = "none"
    cssRootVariables.style.setProperty("--background-color", "white");
}

nightModeBtnEnable[0].addEventListener('click',nightModeEnable)
nightModeBtnDisable[0].addEventListener('click',nightModeDisable)
nightModeBtnEnable[1].addEventListener('click',nightModeEnable)
nightModeBtnDisable[1].addEventListener('click',nightModeDisable)

function menuOpen () {
    subMenuBtns.classList.toggle('transformRight')
    subMenu.style.pointerEvents = "all"
    subMenuOpen.style.display = "none"
}

function menuClose () {
    subMenuBtns.classList.toggle('transformRight')
    subMenu.style.pointerEvents = "none"
    subMenuOpen.style.display = "block"
}

subMenuOpen.addEventListener('click',menuOpen)
subMenuClose.addEventListener('click',menuClose)

nightModeNew.checked = false
function nightModeNewToggle () {
    if (nightModeNew.checked) {
        nightModeBtnEnable[0].style.display = "none"
        nightModeBtnDisable[0].style.display = "block"
        nightModeBtnEnable[1].style.display = "none"
        nightModeBtnDisable[1].style.display = "block"
        cssRootVariables.style.setProperty("--background-color", "#1A1A2E");
    }

    else if (!nightModeNew.checked) {
        nightModeBtnEnable[0].style.display = "block"
        nightModeBtnDisable[0].style.display = "none"
        nightModeBtnEnable[1].style.display = "block"
        nightModeBtnDisable[1].style.display = "none"
        cssRootVariables.style.setProperty("--background-color", "white");
    }
}

nightModeNew.addEventListener('click',nightModeNewToggle)