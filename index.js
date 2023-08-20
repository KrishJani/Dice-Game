var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

var path1 = "images/dice" +randomNumber1+".png";
var path2 = "images/dice" +randomNumber2+".png";

if(randomNumber1===randomNumber2){
    document.querySelector("div.container h1").textContent = "It's a draw!!!";
}else if(randomNumber1>randomNumber2){
    document.querySelector("div.container h1").textContent = "Player 1 Wins!!!";
}else{
    document.querySelector("div.container h1").textContent = "Player 2 Wins!!!";
}

document.querySelector("img.img1").setAttribute("src", path1);
document.querySelector("img.img2").setAttribute("src", path2);
