var getNumber1 = Math.floor(Math.random() * 6) + 1;
var getImage1 = "./images/dice"+getNumber1+".png";
document.querySelector(".img1").setAttribute("src", getImage1);
var getNumber2 = Math.floor(Math.random() * 6) + 1;
var getImage2 = "./images/dice"+getNumber2+".png";;
document.querySelector(".img2").setAttribute("src", getImage2);
if(getNumber1 > getNumber2){
    document.querySelector("h1").innerHTML = "Player1 wins🎲";
}
else if(getNumber1 < getNumber2){
    document.querySelector("h1").innerHTML = "Player2 wins🎲";
}
else{
    document.querySelector("h1").innerHTML = "Draw!!!";
}

