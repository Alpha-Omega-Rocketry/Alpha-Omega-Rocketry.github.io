let border = ["h1", "p"]
let color = ["h1", "p", "nav-button1", "nav-button2", "nav-button3"]
let font = ["p", "nav-button2", "nav-button1", "nav-button3"]

function dark(){
    for(let i = 0; i < border.length; i++){
        document.getElementById(border[i]).style.borderColor = "#660094";
    }
    for(let i = 0; i < color.length; i++){
        document.getElementById(color[i]).style.color = "gray";
    }
    for(let i = 0; i < font.length; i++){
        document.getElementById(font[i]).style.fontWeight = "600";
    }
}
function light(){
    for(let i = 0; i < border.length; i++){
        document.getElementById(border[i]).style.borderColor = "";
    }
    for(let i = 0; i < color.length; i++){
        document.getElementById(color[i]).style.color = "";
    }
}


if(localStorage.getItem("dark") === "true"){
    dark();
}

if(localStorage.getItem("dark") === "false"){
light();
window.localStorage.setItem("dark", "false");
    
}