var randomNumber1=Math.random();
randomNumber1=Math.floor(randomNumber1*6)+1;
console.log(randomNumber1);

var selectDiceImg='dice'+randomNumber1+'.png';

document.querySelectorAll("img")[0].setAttribute("src", './images/'  + selectDiceImg);

var randomNumber2=Math.random();
var randomNumber2=Math.floor(randomNumber2*6)+1;
var selectDiceImg='dice'+randomNumber2+'.png';
document.querySelectorAll("img")[1].setAttribute("src", './images/'+selectDiceImg);

function heading(){
if(randomNumber1>randomNumber2){
    return "Player 1 Wins";
}
else if(randomNumber1==randomNumber2){
    return "Draw!";
}
else{
    return "Player 2 Wins";
}
}

document.querySelector("h1").innerHTML=heading();

/*var randomNumber2=Math.random();
randomNumber2=Math.floor(randomNumber2*6)+1;
console.log(randomNumber1);

var selectDiceImg='dice'+randomNumber2+'.png';

document.querySelectorAll("img")[1].setAttribute("src", './images/'  + selectDiceImg);*/