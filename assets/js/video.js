// Hover play and pause
document.getElementById("arithmeticArticle").addEventListener("mouseover", function() {
    document.getElementById("arithmetic").play();
});

document.getElementById("arithmeticArticle").addEventListener("mouseleave", function() {
    document.getElementById("arithmetic").pause();
});
document.getElementById("liftingRecordArticle").addEventListener("mouseover", function() {
    document.getElementById("liftingRecord").play();
});

document.getElementById("liftingRecordArticle").addEventListener("mouseleave", function() {
    document.getElementById("liftingRecord").pause();
});
document.getElementById("storeFrontArticle").addEventListener("mouseover", function() {
    document.getElementById("storeFront").play();
});

document.getElementById("storeFrontArticle").addEventListener("mouseleave", function() {
    document.getElementById("storeFront").pause();
});
document.getElementById("liftEquivalenceArticle").addEventListener("mouseover", function() {
    document.getElementById("liftEquivalence").play();
});

document.getElementById("liftEquivalenceArticle").addEventListener("mouseleave", function() {
    document.getElementById("liftEquivalence").pause();
});

// Video fullscreen button
function fullscreenArithmetic() {
    document.getElementById("arithmetic").requestFullscreen()
    document.getElementById("arithmetic").setAttribute("controls","true")
}
function fullscreenLiftingRecord() {
    document.getElementById("liftingRecord").requestFullscreen()
    document.getElementById("liftingRecord").setAttribute("controls","true")
}
function fullscreenLiftEquivalence() {
    document.getElementById("liftEquivalence").requestFullscreen()
    document.getElementById("liftEquivalence").setAttribute("controls","true")
}
function fullscreenStoreFront() {
    document.getElementById("storeFront").requestFullscreen()
    document.getElementById("storeFront").setAttribute("controls","true")
}

document.addEventListener("fullscreenchange", ()=>{
    if(!document.fullscreenEnabled) {
    document.getElementById("arithmetic").removeAttribute("controls");
    document.getElementById("liftingRecord").removeAttribute("controls");
    document.getElementById("storeFront").removeAttribute("controls");
    document.getElementById("liftEquivalence").removeAttribute("controls");
    }
    return
})