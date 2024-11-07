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

    // localStorage.setItem("alreayLoad", true);
}

const titreanime = document.querySelector('.txtCitation');

new Typewriter(titreanime, {
    loop : false
})

    .typeString('<span style="color:white">Good things take time...</span>')
    .start()

LoadingScreen(3800);