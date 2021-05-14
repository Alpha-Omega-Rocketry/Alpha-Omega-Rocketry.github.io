
let light = function(){
    document.getElementById("h1").style.color = "";
    document.getElementById("change").innerHTML = "Dark Mode";
    document.getElementById("h2").style.color = "";
    document.getElementById("p").style.color = "";
    document.querySelector("body").style.backgroundColor = "";
    document.getElementById("arrow").style.borderColor = "";
    document.getElementById("h2").style.borderColor = "";
    document.getElementById("p").style.borderColor = "";
    document.getElementById("nav-button1").style.color = "";
    document.getElementById("nav-button2").style.color = "";
    document.getElementById("nav-button3").style.color = "";
    document.getElementById("nav-button4").style.color = "";
    document.getElementById("change").style.color = "";
    document.getElementById("h1").style.borderColor = ""
    document.getElementById("icon1").style.borderColor = "";
    document.getElementById("icon2").style.borderColor = "";
    document.getElementById("icon3").style.borderColor = "";
    document.getElementById("icon4").style.borderColor = "";
    document.getElementById("icon5").style.borderColor = "";
    document.getElementById("icon6").style.borderColor = "";
    document.getElementById("drop-button1").style.color = "";
    document.getElementById("drop-button2").style.color = "";
}
let dark = function(){
    document.getElementById("h1").style.color = "gray";
    document.getElementById("change").innerHTML = "regular";
    document.getElementById("h2").style.color = "gray";
    document.getElementById("p").style.color = "gray";
    document.querySelector("body").style.backgroundColor = "#121212";
    document.getElementById("arrow").style.borderColor = "#660094";
    document.getElementById("h2").style.borderColor = "#660094";
    document.getElementById("p").style.borderColor = "#660094";
    document.getElementById("nav-button1").style.color = "gray";
    document.getElementById("nav-button2").style.color = "gray";
    document.getElementById("nav-button3").style.color = "gray";
    document.getElementById("nav-button4").style.color = "gray";
    document.getElementById("change").style.color = "gray";
    document.getElementById("h1").style.borderColor = "#660094"
    document.getElementById("icon1").style.borderColor = "#660094";
    document.getElementById("icon2").style.borderColor = "#660094";
    document.getElementById("icon3").style.borderColor = "#660094";
    document.getElementById("icon4").style.borderColor = "#660094";
    document.getElementById("icon5").style.borderColor = "#660094";
    document.getElementById("icon6").style.borderColor = "#660094";
    document.getElementById("drop-button1").style.color = "#660094";
    document.getElementById("drop-button2").style.color = "#660094";
   
}

let style = document.getElementById("change");
if(localStorage.getItem("dark") === "true"){
    document.getElementById("gameBox").style.display = "block";
        dark();
}
if(localStorage.getItem("dark") === "false"){
    light();
    
    document.getElementById("gameBox").style.display = "none";
    window.localStorage.setItem("dark", "false");
        document.getElementById("change").innerHTML = "Dark Mode";
}


function decision(){

    if(localStorage.getItem("dark") === "true"){
        light();
        document.getElementById("gameBox").style.display = "none";
        window.localStorage.setItem("dark", "false"); 
    }
    else{
        dark();
        document.getElementById("gameBox").style.display = "block";
        window.localStorage.setItem("dark", "true");
    }
    
}
style.onclick = decision;/*
let innerRotate = document.getElementById("insideRotate")*/
let rotate1 = document.getElementById("rotate1");
let rotate2 = document.getElementById("rotate2");
let rotate3 = document.getElementById("rotate3");
let rotate4 = document.getElementById("rotate4");
let rotate5 = document.getElementById("rotate5");
let rotate6 = document.getElementById("rotate6");
let rotate7 = document.getElementById("rotate7");
let rotate8 = document.getElementById("rotate8");
let rotate9 = document.getElementById("rotate9");
let rotate10 = document.getElementById("rotate10");

/*
innerRotate.style.borderColor = "#660094"*/
let deg10 = true;
let deg9 = true;
let deg8 = true;
let deg7 = true;
let deg6 = true;
let deg5 = true;
let deg4 = true;
let deg2 = true;
let deg1 = true;
let deg3 = true;
function rotateDecision1(){
    if(deg1 === true){
        rotate1.style.transform = 'rotate(90deg)';  
        rotate1.style.borderColor = "#660094";
        deg1 = false;
    }
    else if(deg1 === false){
        rotate1.style.transform = 'rotate(0deg)';
        rotate1.style.borderColor = "";
        deg1 = true;
    }
}
function rotateDecision2(){
    if(deg2 === true){
        rotate2.style.transform = 'rotate(-90deg)';  
        rotate2.style.borderColor = "#660094";
        deg2 = false;
    }
    else if(deg2 === false){
        rotate2.style.transform = 'rotate(0deg)';
        rotate2.style.borderColor = "";
        deg2 = true;
    }
}
function rotateDecision3(){
    if(deg3 === true){
        rotate3.style.transform = 'rotate(90deg)';  
        rotate3.style.borderColor = "#660094";
        deg3 = false;
    }
    else if(deg3 === false){
        rotate3.style.transform = 'rotate(0deg)';
        rotate3.style.borderColor = "";
        deg3 = true;
    }
}
function rotateDecision4(){
    if(deg4 === true){
        rotate4.style.transform = 'rotate(-90deg)';  
        rotate4.style.borderColor = "#660094";
        deg4 = false;
    }
    else if(deg4 === false){
        rotate4.style.transform = 'rotate(0deg)';
        rotate4.style.borderColor = "";
        deg4 = true;
    }
}
function rotateDecision5(){
    if(deg5 === true){
        rotate5.style.transform = 'rotate(90deg)';  
        rotate5.style.borderColor = "#660094";
        deg5 = false;
    }
    else if(deg5 === false){
        rotate5.style.transform = 'rotate(0deg)';
        rotate5.style.borderColor = "";
        deg5 = true;
    }
}
function rotateDecision6(){
    if(deg6 === true){
        rotate6.style.transform = 'rotate(90deg)';  
        rotate6.style.borderColor = "#660094";
        deg6 = false;
    }
    else if(deg6 === false){
        rotate6.style.transform = 'rotate(0deg)';
        rotate6.style.borderColor = "";
        deg6 = true;
    }
}
function rotateDecision7(){
    if(deg7 === true){
        rotate7.style.transform = 'rotate(-90deg)';  
        rotate7.style.borderColor = "#660094";
        deg7 = false;
    }
    else if(deg7 === false){
        rotate7.style.transform = 'rotate(0deg)';
        rotate7.style.borderColor = "";
        deg7 = true;
    }
}
function rotateDecision8(){
    if(deg8 === true){
        rotate8.style.transform = 'rotate(90deg)';  
        rotate8.style.borderColor = "#660094";
        deg8 = false;
    }
    else if(deg8 === false){
        rotate8.style.transform = 'rotate(0deg)';
        rotate8.style.borderColor = "";
        deg8 = true;
    }
}
function rotateDecision9(){
    if(deg9 === true){
        rotate9.style.transform = 'rotate(-90deg)';  
        rotate9.style.borderColor = "#660094";
        deg9 = false;
    }
    else if(deg9 === false){
        rotate9.style.transform = 'rotate(0deg)';
        rotate9.style.borderColor = "";
        deg9 = true;
    }
}
function rotateDecision10(){
    if(deg10 === true){
        rotate10.style.transform = 'rotate(90deg)';  
        rotate10.style.borderColor = "#660094";
        deg10 = false;
    }
    else if(deg10 === false){
        rotate10.style.transform = 'rotate(0deg)';
        rotate10.style.borderColor = "";
        deg10 = true;
    }
}
rotate10.addEventListener("mouseover", rotateDecision10);
rotate9.addEventListener("mouseover", rotateDecision9);
rotate8.addEventListener("mouseover", rotateDecision8);
rotate7.addEventListener("mouseover", rotateDecision7);
rotate6.addEventListener("mouseover", rotateDecision6);
rotate5.addEventListener("mouseover", rotateDecision5)
rotate4.addEventListener("mouseover", rotateDecision4);
rotate3.addEventListener("mouseover", rotateDecision3);
rotate1.addEventListener("mouseover", rotateDecision1);
rotate2.addEventListener("mouseover", rotateDecision2);/*
innerRotate.addEventListener("mouseover", innerRotateDecision);*/

