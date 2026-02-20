function resizeSVG () {
    var svgs = document.getElementsByClassName("resizable");
    if(pxify(1) == 16){
        return;
    } else {
        let width = pxify(1);
        for(let i = 0; i < svgs.length; i ++){
            if(window.getComputedStyle(svgs[i]).getPropertyValue("scale") != "none" && window.getComputedStyle(svgs[i]).getPropertyValue("scale")){
                svgs[i].style.scale = parseFloat(window.getComputedStyle(svgs[i]).getPropertyValue("scale")) * (width / 16);
            } else {
                svgs[i].style.scale = width / 16;
            }
        }
    }
}
function cssVar(variable){
    var div = document.createElement("div");
    div.style.height = `var(--${variable})`;
    document.body.appendChild(div);
    var height = div.clientHeight;
    document.body.removeChild(div);
    if(height != 0){
        return height;
    } else {
        return parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue("--" + variable));
    }
}
function pxify(num){
    var div = document.createElement("div");
    div.style.height = num + "rem";
    document.body.appendChild(div);
    var height = div.clientHeight;
    document.body.removeChild(div);
    return height;
}