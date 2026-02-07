import {cssVar, pxify} from "https://theCodingPanda1.github.io/assets/script.js";
var tabRoundSvg = document.getElementById("tabRoundSvg");
var tabWidth = document.getElementsByClassName("tab")[0].clientWidth;
var screens = document.getElementsByClassName("screen");
var iframes = document.getElementsByClassName("screenContent");
var root = document.documentElement;
root.style.setProperty("--tab-width", tabWidth + "px");
function setScreens(){
    tabWidth = document.getElementsByClassName("tab")[0].clientWidth;
    root.style.setProperty("--tab-width", tabWidth + "px");
    for(var i = 0; i < iframes.length; i ++){
        if(i == 0){
            iframes[i].style.clipPath = `path("M0 ${cssVar("radius") * cssVar("scale")} a ${cssVar("radius") * cssVar("scale")} ${cssVar("radius") * cssVar("scale")} 0 0 1 ${cssVar("radius") * cssVar("scale")} -${cssVar("radius") * cssVar("scale")} l ${tabWidth - cssVar("radius") * 2 * cssVar("scale")} 0 a ${cssVar("radius") * cssVar("scale")} ${cssVar("radius") * cssVar("scale")} 0 0 1 ${cssVar("radius") * cssVar("scale")} ${cssVar("radius") * cssVar("scale")} l 0 ${pxify(3.125) - cssVar("margin") - cssVar("radius") - cssVar("radius") * cssVar("scale")} a ${cssVar("radius")} ${cssVar("radius")} 0 0 0 ${cssVar("radius")} ${cssVar("radius")} L ${window.innerWidth - cssVar("margin") * 2 - cssVar("radius")} ${pxify(3.125) - cssVar("margin")} a ${cssVar("radius")} ${cssVar("radius")} 0 0 1 ${cssVar("radius")} ${cssVar("radius")} L ${window.innerWidth - cssVar("margin") * 2} ${window.innerHeight - pxify(3.125) - cssVar("margin")}l -${window.innerWidth - cssVar("margin") * 2} 0 z")`;
        } else if(i > 0 && i < iframes.length - 1) {
            iframes[i].style.clipPath = `path("M0 ${pxify(3.125) - cssVar("margin")} l ${(tabWidth + cssVar("margin")) * i - cssVar("radius")} 0 a ${cssVar("radius")} ${cssVar("radius")} 0 0 0 ${cssVar("radius")} -${cssVar("radius")} l 0 ${0 - pxify(3.125) + cssVar("margin") + cssVar("radius") + cssVar("radius") * cssVar("scale")} a ${cssVar("radius") * cssVar("scale")} ${cssVar("radius") * cssVar("scale")} 0 0 1 ${cssVar("radius") * cssVar("scale")} -${cssVar("radius") * cssVar("scale")} l ${tabWidth - cssVar("radius") * 2 * cssVar("scale")} 0 a ${cssVar("radius") * cssVar("scale")} ${cssVar("radius") * cssVar("scale")} 0 0 1 ${cssVar("radius") * cssVar("scale")} ${cssVar("radius") * cssVar("scale")} l 0 ${pxify(3.125) - cssVar("margin") - cssVar("radius") - cssVar("radius") * cssVar("scale")} a ${cssVar("radius")} ${cssVar("radius")} 0 0 0 ${cssVar("radius")} ${cssVar("radius")} L ${window.innerWidth - cssVar("margin") * 2 - cssVar("radius")} ${pxify(3.125) - cssVar("margin")} a ${cssVar("radius")} ${cssVar("radius")} 0 0 1 ${cssVar("radius")} ${cssVar("radius")} L ${window.innerWidth - cssVar("margin") * 2} ${window.innerHeight - pxify(3.125) - cssVar("margin")}l -${window.innerWidth - cssVar("margin") * 2} 0 L 0 ${pxify(3.125) - cssVar("margin") + cssVar("radius")} a ${cssVar("radius")} ${cssVar("radius")} 0 0 1 ${cssVar("radius")} -${cssVar("radius")} z")`;
        } else {
            iframes[i].style.clipPath = `path("M0 ${pxify(3.125) - cssVar("margin")} l ${(tabWidth + cssVar("margin")) * i - cssVar("radius")} 0 a ${cssVar("radius")} ${cssVar("radius")} 0 0 0 ${cssVar("radius")} -${cssVar("radius")} l 0 ${0 - pxify(3.125) + cssVar("margin") + cssVar("radius") + cssVar("radius") * cssVar("scale")} a ${cssVar("radius") * cssVar("scale")} ${cssVar("radius") * cssVar("scale")} 0 0 1 ${cssVar("radius") * cssVar("scale")} -${cssVar("radius") * cssVar("scale")} l ${tabWidth - cssVar("radius") * 2 * cssVar("scale")} 0 a ${cssVar("radius") * cssVar("scale")} ${cssVar("radius") * cssVar("scale")} 0 0 1 ${cssVar("radius") * cssVar("scale")} ${cssVar("radius") * cssVar("scale")} L ${window.innerWidth - cssVar("margin") * 2} ${window.innerHeight - pxify(3.125) - cssVar("margin")}l -${window.innerWidth - cssVar("margin") * 2} 0 L 0 ${pxify(3.125) - cssVar("margin") + cssVar("radius")} a ${cssVar("radius")} ${cssVar("radius")} 0 0 1 ${cssVar("radius")} -${cssVar("radius")} z")`;
        }
        
        console.log(0 - pxify(3.125) + cssVar("margin") + cssVar("radius"));

    }
}
setScreens();