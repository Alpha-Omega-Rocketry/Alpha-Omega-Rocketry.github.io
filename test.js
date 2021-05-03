
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
        dark();
}
if(localStorage.getItem("dark") === "false"){
    light();
    window.localStorage.setItem("dark", "false");
        document.getElementById("change").innerHTML = "Dark Mode";
}


function decision(){

    if(localStorage.getItem("dark") === "true"){
        light();
        window.localStorage.setItem("dark", "false"); 
    }
    else{
        dark();
        window.localStorage.setItem("dark", "true");
    }
    
}
style.onclick = decision;



