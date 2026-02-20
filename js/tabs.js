const root = document.documentElement;
const tabs = document.getElementsByClassName("tab");
let screens = document.getElementsByClassName("screen");
const iframes = document.getElementsByClassName("screenContent");
const main = document.getElementById("main");
const controlBars = document.getElementsByClassName("control-bar");
const scrollers = document.getElementsByClassName("scroller");
var tabBar = document.getElementById("tab-bar");
var settingsButton = document.getElementById("settings-button");
let tabWidth = tabs[0].clientWidth;

root.style.setProperty("--tab-width", tabWidth + "px");


function setScreens(){
    tabWidth = document.getElementsByClassName("tab")[0].clientWidth;
    root.style.setProperty("--tab-width", tabWidth + "px");
    for(let i = 0; i < iframes.length; i ++){
        if(i == 0){
            iframes[i].style.clipPath = `path("M0 ${cssVar("radius") * cssVar("scale")} a ${cssVar("radius") * cssVar("scale")} ${cssVar("radius") * cssVar("scale")} 0 0 1 ${cssVar("radius") * cssVar("scale")} -${cssVar("radius") * cssVar("scale")} l ${tabs[i].clientWidth - cssVar("radius") * 2 * cssVar("scale")} 0 a ${cssVar("radius") * cssVar("scale")} ${cssVar("radius") * cssVar("scale")} 0 0 1 ${cssVar("radius") * cssVar("scale")} ${cssVar("radius") * cssVar("scale")} l 0 ${pxify(3.125) - cssVar("margin") - cssVar("radius") - cssVar("radius") * cssVar("scale")} a ${cssVar("radius")} ${cssVar("radius")} 0 0 0 ${cssVar("radius")} ${cssVar("radius")} L ${window.innerWidth - cssVar("margin") * 2 - cssVar("radius")} ${pxify(3.125) - cssVar("margin")} a ${cssVar("radius")} ${cssVar("radius")} 0 0 1 ${cssVar("radius")} ${cssVar("radius")} L ${window.innerWidth - cssVar("margin") * 2} ${window.innerHeight - pxify(3.125) - cssVar("margin")}l -${window.innerWidth - cssVar("margin") * 2} 0 z")`;
        } else if(i > 0 && i < iframes.length - 1) {
            iframes[i].style.clipPath = `path("M0 ${pxify(3.125) - cssVar("margin")} l ${tabs[i].offsetLeft - cssVar("radius")} 0 a ${cssVar("radius")} ${cssVar("radius")} 0 0 0 ${cssVar("radius")} -${cssVar("radius")} l 0 ${0 - pxify(3.125) + cssVar("margin") + cssVar("radius") + cssVar("radius") * cssVar("scale")} a ${cssVar("radius") * cssVar("scale")} ${cssVar("radius") * cssVar("scale")} 0 0 1 ${cssVar("radius") * cssVar("scale")} -${cssVar("radius") * cssVar("scale")} l ${tabs[i].clientWidth - cssVar("radius") * 2 * cssVar("scale")} 0 a ${cssVar("radius") * cssVar("scale")} ${cssVar("radius") * cssVar("scale")} 0 0 1 ${cssVar("radius") * cssVar("scale")} ${cssVar("radius") * cssVar("scale")} l 0 ${pxify(3.125) - cssVar("margin") - cssVar("radius") - cssVar("radius") * cssVar("scale")} a ${cssVar("radius")} ${cssVar("radius")} 0 0 0 ${cssVar("radius")} ${cssVar("radius")} L ${window.innerWidth - cssVar("margin") * 2 - cssVar("radius")} ${pxify(3.125) - cssVar("margin")} a ${cssVar("radius")} ${cssVar("radius")} 0 0 1 ${cssVar("radius")} ${cssVar("radius")} L ${window.innerWidth - cssVar("margin") * 2} ${window.innerHeight - pxify(3.125) - cssVar("margin")}l -${window.innerWidth - cssVar("margin") * 2} 0 L 0 ${pxify(3.125) - cssVar("margin") + cssVar("radius")} a ${cssVar("radius")} ${cssVar("radius")} 0 0 1 ${cssVar("radius")} -${cssVar("radius")} z")`;
        } else {
            iframes[i].style.clipPath = `path("M0 ${pxify(3.125) - cssVar("margin")} l ${tabs[i].offsetLeft - cssVar("radius")} 0 a ${cssVar("radius")} ${cssVar("radius")} 0 0 0 ${cssVar("radius")} -${cssVar("radius")} l 0 ${0 - pxify(3.125) + cssVar("margin") + cssVar("radius") + cssVar("radius") * cssVar("scale")} a ${cssVar("radius") * cssVar("scale")} ${cssVar("radius") * cssVar("scale")} 0 0 1 ${cssVar("radius") * cssVar("scale")} -${cssVar("radius") * cssVar("scale")} L ${tabBar.clientWidth} 0 a ${cssVar("radius") * cssVar("scale")} ${cssVar("radius") * cssVar("scale")} 0 0 1 ${cssVar("radius") * cssVar("scale")} ${cssVar("radius") * cssVar("scale")} L ${window.innerWidth - cssVar("margin") * 2} ${window.innerHeight - pxify(3.125) - cssVar("margin")}l -${window.innerWidth - cssVar("margin") * 2} 0 L 0 ${pxify(3.125) - cssVar("margin") + cssVar("radius")} a ${cssVar("radius")} ${cssVar("radius")} 0 0 1 ${cssVar("radius")} -${cssVar("radius")} z")`;
        }
    }
    setScreenBorderRadius();
    console.log("screens set");
}

window.addEventListener("resize", setScreens);


function setScreenBorderRadius(){
    if(window.outerWidth == screen.width && window.outerHeight == screen.height){
        for(let i = 0; i < iframes.length; i ++){
            iframes[i].style.borderBottomLeftRadius = "var(--radius)";
            iframes[i].style.borderBottomRightRadius = "var(--radius)";
        }
    } else if(navigator.userAgentData){
        navigator.userAgentData.getHighEntropyValues(['platformVersion'])
            .then(ua => {
                if(ua.platform == "macOS" && parseFloat(ua.platformVersion) >= 26){
                    for(let i = 0; i < iframes.length; i ++){
                        iframes[i].style.borderBottomLeftRadius = 20 * cssVar("scale") + "px";
                        iframes[i].style.borderBottomRightRadius = 20 * cssVar("scale") + "px";
                    }
                }
            });
    }
}


window.addEventListener("DOMContentLoaded", function(){
    setScreens();
    setScreenBorderRadius();
    this.requestAnimationFrame(() => {
        for(var i = 0; i < screens.length; i ++){
            screens[i].style.transform = "translateZ(0)";
        }
    });
});


function setTabClicks(){
    for(var i = 0; i < tabs.length; i ++){
        tabs[i].addEventListener("click", function(){
            screens[Array.from(tabs).indexOf(this)].scrollIntoView();
            document.querySelectorAll(".selected.tab")[0].classList.remove("selected");
            this.classList.add("selected");
        });
        tabs[i].addEventListener("keydown", function(e){
            if(e.key == "Enter"){
                screens[Array.from(tabs).indexOf(this)].scrollIntoView();
                document.querySelectorAll(".selected.tab")[0].classList.remove("selected");
                this.classList.add("selected");
            }
        });
    }
}

setTabClicks();


main.addEventListener("scroll", function(){
    if(!tabs[Math.max(Math.floor(main.scrollLeft / window.innerWidth), 0)].classList.contains("selected") || !tabs[Math.ceil(main.scrollLeft / window.innerWidth)].classList.contains("futureSelected")){
        for(var i = 0; i < tabs.length; i ++){
            tabs[i].classList.remove("selected");
            tabs[i].classList.remove("futureSelected");
        }
        tabs[Math.ceil(main.scrollLeft / window.innerWidth)].classList.add("futureSelected");
        tabs[Math.max(Math.floor(main.scrollLeft / window.innerWidth), 0)].classList.add("selected");  
    }
    root.style.setProperty("--percent", (main.scrollLeft / window.innerWidth - Math.floor(main.scrollLeft / window.innerWidth)) * 100 + "%");
    console.log((main.scrollLeft / window.innerWidth - Math.floor(main.scrollLeft / window.innerWidth)) * 100 + "%");
});


function setScroll(){
    console.log(controlBars);
    for(var i = 0; i < controlBars.length; i ++){
        console.log(controlBars[i]);
        console.log("Yay!");
        controlBars[i].number = i;
        controlBars[i].addEventListener("wheel", function(e){
            if(Math.abs(e.deltaX) < Math.abs(e.deltaY)){
                e.preventDefault();
                scrollers[this.number].scrollTop += e.deltaY;
            }
        });
    }
}


async function loadTab(num, url, info = NaN){
    const container = iframes[num];
    console.log(container);
    
    if(tabs[num].getElementsByClassName("favicon")[0].getElementsByTagName("div")[0]){
        tabs[num].getElementsByClassName("favicon")[0].getElementsByTagName("div")[0].classList.add("spinner");
    } else {
        tabs[num].getElementsByClassName("favicon")[0].getElementsByTagName("svg")[0].classList.add("spinner");
    }
    const response = await fetch(url);
    const html = await response.text();
    container.innerHTML = html;
    if(tabs[num].getElementsByClassName("favicon")[0].getElementsByTagName("div")[0]){
        tabs[num].getElementsByClassName("favicon")[0].getElementsByTagName("div")[0].classList.remove("spinner");
    } else {
        tabs[num].getElementsByClassName("favicon")[0].getElementsByTagName("svg")[0].classList.remove("spinner");
    }
    setScroll();
}


function createTab(title, url, favicon, id = NaN){
    if(document.getElementById(id) && id){
        document.getElementById(id).scrollIntoView();
        return;
    }
    var tab = document.createElement("div");
    tab.setAttribute("class", "tab");
    tab.setAttribute("tabindex", 0);
    tab.innerHTML = /*html*/ `
    <div class = "tabContent">
        <div class = "title">
            ${favicon}
            ${title}
        </div>
    </div>
    <div class="closetab"></div>
    `;
    tab.style.animation = "tabGrow 0.25s cubic-bezier( 0.75, 1.5, 0.75, 1 ) forwards";
    tabBar.appendChild(tab);
    let interval = setInterval(setScreens);
    setTimeout(function(){
        clearInterval(interval);
        console.log("Yay!");
    }, parseFloat(cssVar("transition")) * 10000);
    setTabClicks();
    let tabScreen = document.createElement("div");
    tabScreen.setAttribute("class", "screen");
    tabScreen.setAttribute("id", id);
    tabScreen.innerHTML = "<div class = 'screenContent'></div>";
    main.appendChild(tabScreen);
    loadTab(screens.length - 1, url);
    tabScreen.scrollIntoView();
}   


loadTab(0, "tabContent/main.html");
loadTab(1, "tabContent/calendar.html");
loadTab(2, "tabContent/todo.html");
settingsButton.addEventListener("click", function(){
    createTab("Settings", "tabContent/settings.html", /*html*/ `<div class="favicon""><svg width="16" height="16" viewBox="0 0 16 16" style="position: absolute; left: 0px; top: 0px;" fill="none" xmlns="http://www.w3.org/2000/svg" class="resizable">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.16871 0.484512C8.85958 0.174719 8.44005 0.000407335 8.00253 5.54748e-07C7.56496 -0.000358097 7.14501 0.173201 6.83533 0.482489C6.71712 0.600572 6.61886 0.734951 6.54215 0.880011C6.5053 0.949821 6.47359 1.02217 6.44711 1.09647C6.41453 1.18778 6.3899 1.28199 6.37382 1.37818C6.35892 1.4672 6.35115 1.55782 6.35107 1.64926V1.72664L6.38039 1.79795C6.46883 2.01219 6.46876 2.253 6.37988 2.46706C6.29102 2.68103 6.12076 2.85094 5.90674 2.93944C5.69263 3.02791 5.45189 3.02782 5.23796 2.93893C5.02401 2.85 4.85427 2.67928 4.76583 2.46504L4.736 2.39373L4.68141 2.33911C4.37239 2.02937 3.95315 1.85508 3.51573 1.8546C3.07824 1.85415 2.65823 2.02741 2.34854 2.33658C2.03886 2.64579 1.86474 3.06562 1.86428 3.50335C1.86383 3.94108 2.03698 4.36129 2.34601 4.67113L2.40061 4.72575L2.47188 4.75509C2.68577 4.84409 2.85568 5.01473 2.94402 5.22898C3.0323 5.44316 3.0319 5.68365 2.94301 5.89758C2.85405 6.11158 2.6835 6.28157 2.46936 6.36996C2.25526 6.45826 2.01491 6.45792 1.80109 6.36895L1.72981 6.33961L1.65247 6.33911C1.21503 6.33844 0.795151 6.51166 0.485279 6.82058C0.175348 7.12966 0.000720255 7.54954 2.15519e-06 7.98735C-0.000704599 8.42507 0.17244 8.84508 0.481235 9.15514C0.790152 9.46523 1.20983 9.63994 1.64742 9.64066L1.72425 9.64117L1.79553 9.61133C1.90157 9.56761 2.01547 9.54536 2.13017 9.54558C2.24485 9.5458 2.35843 9.56874 2.4643 9.61284C2.57014 9.65695 2.66646 9.72124 2.74738 9.8025C2.82833 9.8838 2.89224 9.98064 2.93593 10.0867C2.97959 10.1928 3.00185 10.3063 3.00164 10.421C3.00143 10.5358 2.97899 10.6494 2.93492 10.7553C2.89083 10.8613 2.8261 10.9576 2.74485 11.0386C2.66364 11.1195 2.56724 11.1835 2.46127 11.2272L2.38999 11.257L2.3354 11.3112C2.02539 11.6201 1.85054 12.0397 1.84962 12.4774C1.84873 12.9152 2.0216 13.3355 2.33034 13.6457C2.63912 13.9559 3.05847 14.1308 3.49602 14.1317C3.9336 14.1326 4.35368 13.9592 4.66372 13.6503L4.71831 13.5962L4.74814 13.5248C4.83724 13.3109 5.00757 13.1407 5.22179 13.0525C5.43599 12.9642 5.67673 12.9648 5.89056 13.054C6.10431 13.1431 6.27398 13.3137 6.36219 13.5279C6.4504 13.7422 6.44977 13.983 6.36067 14.197L6.33085 14.2683V14.3452C6.32977 14.783 6.50243 15.2036 6.81107 15.514C7.11973 15.8243 7.53916 15.9989 7.97675 16C8.41431 16.0011 8.83426 15.8283 9.14445 15.5195C9.45457 15.2108 9.62959 14.7915 9.63073 14.3538V14.2764L9.60141 14.2051C9.5578 14.0989 9.53592 13.985 9.53621 13.8703C9.5365 13.7555 9.55926 13.6419 9.60344 13.536C9.64761 13.43 9.71217 13.3337 9.7935 13.2527C9.87477 13.1719 9.97111 13.1077 10.0771 13.0641C10.1832 13.0205 10.297 12.9981 10.4117 12.9984C10.5264 12.9987 10.64 13.0215 10.7459 13.0656C10.8517 13.1098 10.948 13.1749 11.0289 13.2563C11.1098 13.3376 11.1739 13.434 11.2175 13.54L11.2468 13.6113L11.3014 13.6665C11.6099 13.9767 12.0291 14.1518 12.4666 14.153C12.6831 14.1536 12.8976 14.1114 13.0979 14.0291C13.2983 13.9467 13.4807 13.8254 13.6343 13.6725C13.9444 13.3638 14.1194 12.9445 14.1206 12.5068C14.1217 12.0691 13.9493 11.6488 13.6408 11.3385L13.5862 11.2839L13.515 11.254L13.4371 11.2166C13.2603 11.1212 13.1209 10.9672 13.0439 10.7796C12.9558 10.5652 12.9561 10.3244 13.0454 10.1105C13.1347 9.89659 13.3057 9.72673 13.52 9.63864C13.7342 9.5507 13.9746 9.55144 14.1883 9.64066L14.2601 9.6705L14.3374 9.67101C14.7775 9.67172 15.1999 9.49732 15.5117 9.18649C15.8234 8.87563 15.9992 8.45349 16 8.01315C16.0007 7.57272 15.8265 7.14971 15.5157 6.83778C15.205 6.5259 14.7831 6.35048 14.343 6.34973H14.2651L14.1939 6.37906C13.9798 6.46773 13.7391 6.46779 13.5251 6.37906C13.311 6.2903 13.1411 6.11988 13.0524 5.90568C12.9638 5.69149 12.9637 5.45071 13.0524 5.23656C13.1412 5.02255 13.3111 4.85235 13.5251 4.76369L13.5969 4.73435L13.6515 4.67973C13.8047 4.52655 13.9259 4.34431 14.0088 4.14414C14.0918 3.94401 14.1346 3.72961 14.1347 3.51296C14.1348 3.29629 14.0926 3.0815 14.0099 2.88127C13.9271 2.68108 13.8055 2.49897 13.6525 2.34568C13.4993 2.19235 13.3173 2.07064 13.1171 1.98761C12.917 1.90458 12.7024 1.86177 12.4858 1.86168C12.2692 1.8616 12.0546 1.90426 11.8544 1.9871C11.6543 2.06996 11.4723 2.19152 11.3191 2.34467L11.2645 2.39929L11.2347 2.4706C11.1456 2.68596 10.9747 2.85727 10.7595 2.94652C10.5443 3.03573 10.3024 3.03566 10.0872 2.94652C9.87196 2.85736 9.70072 2.68642 9.61152 2.47111C9.52234 2.25582 9.52247 2.0138 9.61152 1.79846L9.64135 1.72715V1.65179L9.65095 1.6523C9.65131 1.21451 9.47784 0.794341 9.16871 0.484512ZM12.1371 8.00012C12.1371 10.2883 10.2831 12.1433 7.99608 12.1433C5.70905 12.1433 3.85505 10.2883 3.85505 8.00012C3.85505 5.71194 5.70905 3.857 7.99608 3.857C10.2831 3.857 12.1371 5.71194 12.1371 8.00012Z" fill="#FF4040"/>
    <path d="M11.1019 8.00012C11.1019 9.71626 9.71135 11.1075 7.99608 11.1075C6.28081 11.1075 4.89031 9.71626 4.89031 8.00012C4.89031 6.28398 6.28081 4.89278 7.99608 4.89278C9.71135 4.89278 11.1019 6.28398 11.1019 8.00012Z" fill="#FF964B"/>
    </svg></div>`, "settings-screen");
});

