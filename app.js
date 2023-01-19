
// const kartSaxlayici = document.querySelector(".cards-item")

// window.onload = yazilariGosder

// async function yazilariGosder() {

//     const unvan = "yazilar.json"

//     try {
//         const serverdenGelenMelumatlar = await fetch(unvan)
//         const frontendeGelecekForm = await serverdenGelenMelumatlar.json()

//         for (let i = 0; i < frontendeGelecekForm.length; i++) {

//             kartSaxlayici.innerHTML += `
//         <div class="card">
//         <h6>${frontendeGelecekForm[i].name}</h6>
//         <span>${frontendeGelecekForm[i].time}</span>
//         <span>${frontendeGelecekForm[i].work}</span>
//         <p> ${frontendeGelecekForm[i].about}</p>
//        </div>`

//         }

//     }
//     catch (e) {
//         console.log("Xeta bash verdi" + e.message)
//     }

//     finally {

//     }

// }




const linkler = document.getElementsByClassName('link')


for (let i = 0; i < linkler.length; i++) {

    linkler[i].addEventListener('click', function () {
        const current = document.getElementsByClassName('active')


        if (current.length > 0) {
            current[0].className = current[0].className.replace("active", " ")
        }

        this.className += "active"

    })
}


const burgerIcon = document.getElementsByClassName("fa-bars")[0]

const xmarkBtn = document.getElementsByClassName("fa-square-xmark")[0]

const mobileNavbar = document.getElementsByClassName("links-burger-icon")[0]

const mobileLinks = document.getElementsByClassName("link-mobile")[0]

const body = document.getElementsByClassName('body')[0]

burgerIcon.addEventListener('click', navLinkAc)


mobileLinks.addEventListener('click', navLinkBagla)

function navLinkAc(e) {
    mobileNavbar.classList.add("icon-active")
    burgerIcon.style.display = ('none')
    xmarkBtn.style.display = ('block')
    body.style.overflow = ('hidden')

}

function navLinkBagla(e) {

    mobileNavbar.classList.remove("icon-active")
    burgerIcon.style.display = ('block')
    xmarkBtn.style.display = ('none')
    body.style.overflow = ('auto')

}



const names = document.querySelector('h1')

const text = "Hi, I am Sahil, Front-end Developer"

const speed = 180

i = 0

function typingEffect() {
    if (i < text.length) {
        names.innerHTML += text.charAt(i)
        i++
        setTimeout(typingEffect, speed)
    }

}

window.addEventListener('DOMContentLoaded', typingEffect)



const navbar = document.querySelector('.nav-links')

window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add('sticky-navbar')
    }
    else (navbar.classList.remove('sticky-navbar'))
}
)


const wiewBtn = document.getElementsByClassName('wiew')[0]

const kartlar = document.querySelector('.card').children

wiewBtn.addEventListener('click', function(){


})




