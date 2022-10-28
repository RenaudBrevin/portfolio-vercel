// // SNAP SCROLL

const sections = [...document.querySelectorAll(".sectionAllContent > div")]

content = document.querySelector(".sectionAllContent");

var pageHeight = window.innerHeight;
var isAnimating = false;
content.style.transform = 'translate3d(0px,0px,0px)';

document.addEventListener('scroll', function(e){
    content.scrollTop = 0;
});
document.addEventListener('wheel', wheelListener);

function wheelListener(e) {
    if((e.path.slice(-7)[0].id == sections.slice(-1)[0].id && e.deltaY > 0)
    ||
    (e.path.slice(-7)[0].id == sections[0].id && e.deltaY < 0)){
        return
    }
    if(!e.deltaY || e.deltaY >= 0) {
        scrollPage(-pageHeight);
    } else {
        scrollPage(+pageHeight);
    }
}

function scrollPage(scrollSize) {
    if(isAnimating){
        return;
    }
    scrollTransition();
    isAnimating = true;
    var yPos = getNewYPos(scrollSize);
    content.style.transform = 'translate3d(0px,'+ yPos + ',0px)';
}

function getNewYPos(add){
    var oldYPos = content.style.transform.split(',')[1];
    oldYPos = parseInt(oldYPos.replace(/px/,''));
    var newYPos = oldYPos + add;
    if(newYPos > 0){
        isAnimating = false;
    }
    return Math.min(0, newYPos) + 'px';
}

content.addEventListener('transitionend', function(){
    setTimeout(function(){ isAnimating = false; }, 500);
    document.addEventListener('wheel', wheelListener);
})


// Animation NavBar

async function scrollTransition(){
    header = document.querySelector("header");
    header.style.transform = 'translate(-50%, -150px)';
    header.style.transition = ' 0.5s cubic-bezier(0.55, 0.09, 0.38, 0.94)';
    await waitBro(300);
    header.style.transform = 'translate(-50%, 0)';
    header.style.transition = ' 0.5s cubic-bezier(0.55, 0.09, 0.38, 0.94)';
}
