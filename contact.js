let element = ["facebook", "instagram", "twitter", "discord", "contact-heading-contact", "patreon", "contact-heading-support", "youtube", "contact-heading-watch", "contact-heading-email", "email"]
let light = function(){
    for(let i = 0; i < element.length; i++){
        document.getElementById(element[i]).style.borderTopColor = "";
        document.getElementById(element[i]).style.borderLeftColor = "";
        document.getElementById(element[i]).style.borderRightColor = "";
    }
    /*
    document.getElementById("contact-heading").style.borderTopColor = ""
    document.getElementById("contact-heading").style.borderLeftColor = ""
    document.getElementById("contact-heading").style.borderRightColor = ""*//*
    document.getElementById("facebook").style.borderTopColor = ""
    document.getElementById("facebook").style.borderLeftColor = ""
    document.getElementById("facebook").style.borderRightColor = ""
    document.getElementById("instagram").style.borderTopColor = ""
    document.getElementById("instagram").style.borderLeftColor = ""
    document.getElementById("instagram").style.borderRightColor = ""
    document.getElementById("twitter").style.borderTopColor = ""
    document.getElementById("twitter").style.borderLeftColor = ""
    document.getElementById("twitter").style.borderRightColor = ""*/
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
    document.getElementById("drop-button1").style.color = "";
    document.getElementById("drop-button2").style.color = "";
}
let dark = function(){
    
    for (let i = 0; i<element.length; i++){
        document.getElementById(element[i]).style.borderLeftColor = '#660094';
        document.getElementById(element[i]).style.borderRightColor = '#660094';
        document.getElementById(element[i]).style.borderTopColor = '#660094';
    }
    /*
    document.getElementById("contact-heading").style.borderTopColor = "#660094"
    document.getElementById("contact-heading").style.borderLeftColor = "#660094"
    document.getElementById("contact-heading").style.borderRightColor = "#660094"
    document.getElementById("facebook").style.borderTopColor = "#660094"
    document.getElementById("facebook").style.borderLeftColor = "#660094"
    document.getElementById("facebook").style.borderRightColor = "#660094"
    document.getElementById("instagram").style.borderTopColor = "#660094"
    document.getElementById("instagram").style.borderLeftColor = "#660094"
    document.getElementById("instagram").style.borderRightColor = "#660094"
    document.getElementById("twitter").style.borderTopColor = "#660094"
    document.getElementById("twitter").style.borderLeftColor = "#660094"
    document.getElementById("twitter").style.borderRightColor = "#660094"*/
    document.getElementById("h1").style.color = "gray";
    document.getElementById("change").innerHTML = "regular";
    document.getElementById("h2").style.color = "gray";
    document.getElementById("p").style.color = "gray";
    document.querySelector("body").style.backgroundColor = "#121212";
    document.getElementById("arrow").style.borderColor = "#660094";
    document.getElementById("h2").style.borderColor = "#660094";
    /*document.getElementById("p").style.borderColor = "#660094";*/
    document.getElementById("nav-button1").style.color = "gray";
    document.getElementById("nav-button2").style.color = "gray";
    document.getElementById("nav-button3").style.color = "gray";
    document.getElementById("nav-button4").style.color = "gray";
    document.getElementById("change").style.color = "gray";
    document.getElementById("h1").style.borderColor = "#660094"
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



