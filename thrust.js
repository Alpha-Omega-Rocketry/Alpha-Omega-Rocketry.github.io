let borderColor = ["arrow", "h2", "p", "h1", "icon1", "icon2", "icon3", "icon4", "icon5", "icon6", "h3", "p2", "tvc"]
let color = ["h1", "h2", "p", "nav-button1", "nav-button2", "nav-button3", "nav-button4", "change", "drop-button1", "drop-button2", "h3", "link-tvc"]
let light = function(){
    for(let i = 0; i < borderColor.length; i ++){
        document.getElementById(borderColor[i]).style.borderColor = ""
    }
    for(let i = 0; i < color.length; i ++){
        document.getElementById(color[i]).style.color = ""
    }
    
    document.getElementById("change").innerHTML = "Dark Mode";
    document.querySelector("body").style.backgroundColor = "";
}
let dark = function(){
    for(let i = 0; i < borderColor.length; i ++){
        document.getElementById(borderColor[i]).style.borderColor = "#660094"
    }
    for(let i = 0; i < color.length; i ++){
        document.getElementById(color[i]).style.color = "gray"
    }
    document.getElementById("change").innerHTML = "Regular";
    
    document.querySelector("body").style.backgroundColor = "#121212";
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
