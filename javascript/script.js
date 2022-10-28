// CURSOR 

var cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})


// LOADER

var loader = document.querySelector(".loading");
var textLoad = document.querySelector(".txtCitation");
var pourcentage = document.querySelector(".boxPercent");

function waitBro(time)  {
    return new Promise( resolve => {
        setTimeout(()=> {resolve('')} ,time );
    })
}

async function LoadingScreen(timeWait){
    await waitBro(timeWait);
    textLoad.classList.add("transitionText");
    pourcentage.classList.add("percent");
    for (let index = 1; index < 101; index += 3) {
        setTimeout(function(){
            pourcentage.innerHTML = index + "%";
        }, index * 10);
    }
    await waitBro(timeWait/3);
    loader.classList.add("endLoad");

    localStorage.setItem("alreayLoad", true);
}

const titreanime = document.querySelector('.txtCitation');

new Typewriter(titreanime, {
    loop : false
})

    .typeString('<span style="color:white">Good things take time...</span>')
    .start()

// LoadingScreen(4600);

// Load seulement à la première connexion 

function lookStorage(){
    if(localStorage.getItem("alreayLoad")){
        window.addEventListener('load', () => {
            // LoadingScreen(0);
            loader.classList.add("endLoad");
        })
    }
    else{
        window.addEventListener('load', () => {
            LoadingScreen(4600);
        })
    }
}

lookStorage()

// Vider le local storage quand l'utilisateur ferme la page.
// Permet à l'animation de rejouer à la prochaine ouverture

// window.onbeforeunload  = function(){ 
//     window.localStorage.clear();
// };


