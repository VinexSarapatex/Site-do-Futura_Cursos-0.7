
function showMore() {
    var button = document.querySelector(".containerShowMore")
    var lateralbar = document.querySelector(".lateralbar");
    if (lateralbar.style.left === "-350px") {
        button.style.backgroundColor = 'rgb(73, 120, 77)';
        lateralbar.style.display = "flex";
        lateralbar.style.left = '0px';
        lateralbar.style.flexDirection =  "column";
        lateralbar.style.alignIntens =  "center";
    } else {
        lateralbar.style.left = '-350px';
        button.style.background = 'none';
    }
}

var btnSaber = document.querySelector(".SaberMais").innerHTML = "Saber Mais";
var Historia = document.querySelector(".Historia");
function SaberMais(){
    if(btnSaber == "Saber Mais"){
        btnSaber = document.querySelector(".SaberMais").innerHTML = "Saber Menos";
        Historia.style.display = "flex";
    }else{
        btnSaber = document.querySelector(".SaberMais").innerHTML = "Saber Mais";
        Historia.style.display = "none";
    }
}