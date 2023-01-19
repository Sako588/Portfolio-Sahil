
const kartSaxlayicisi = document.querySelector(".featured-works")

const kartSaxlayicisiIki = document.querySelector(".work-section")
window.onload = kartlariGosder

async function kartlariGosder() {

    const unvann = "kartlarWorks.json"

    try {
        const serverdenGelenKartlar = await fetch(unvann)
        const frontaGelenler = await serverdenGelenKartlar.json()

        for (let i = 0; i < frontaGelenler.length; i++) {

            kartSaxlayicisi.innerHTML += `
            <div class="featured-card">
                 <div class="img">
                 <img src=" ${frontaGelenler[i].img}" alt="">
                 
                </div>
            
                <div class="featured-right">
                    <h1> ${frontaGelenler[i].name}</h1>
                    <span>${frontaGelenler[i].year}</span>
               <span>${frontaGelenler[i].program}</span>
               <p>${frontaGelenler[i].about}</p>
            
            </div> 

        `
        kartSaxlayicisiIki.innerHTML += `
            <div class="work-card">
                 <div class="img">
                 <img src=" ${frontaGelenler[i].img}" alt="">
                </div>
            
                <div class="work-right">
                    <h1> ${frontaGelenler[i].name}</h1>
                    <span>${frontaGelenler[i].year}</span>
               <span>${frontaGelenler[i].program}</span>
               <p>${frontaGelenler[i].about}</p>
            
            </div> 

        `
        }

    }
    catch (e) {
        console.log("Xeta bash verdi" + e.message)
    }

    finally {

    }

}
