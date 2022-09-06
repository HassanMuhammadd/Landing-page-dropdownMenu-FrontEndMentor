document.getElementById("firstClick").onclick = function() {
    document.getElementById("showHideOne").classList.toggle("shown");

}

document.getElementById("secondClick").onclick = function() {
    document.getElementById("showHideTwo").classList.toggle("shown");
}
document.getElementById("mennn").onclick = function() {
    console.log("Sdsa");
    document.querySelector(".sideBar").style.cssText = "opacity:1;z-index:2;";
}
document.getElementById("close").onclick = function() {
    document.querySelector(".sideBar").style.cssText = "opacity:0;z-index:-1;";
}