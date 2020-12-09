// Toglogchiin eeljiig hadgalh huwisagch, 1r toglogchiig 0, 2r toglogchiig 2 gj temdegley.
var activePlayer = 1; 



//Toglogchiin cugluulsn onoog hadgalah  huwicagch
var scorer = [0, 0];

// Tlogchiin eeljindee cugluulj bga onoog hadgalah huwisagch
var roundScore = 0;


//Shoonii ali talara buusniig hadgalah huwicagch heregte, 1-6 gesen utgiig ene huwisagchid sanamsargui iisgej ogno
var diceNumber = Math.floor(Math.random() * 6)+1;
//Programm ehelhed beldey
window.document.getElementsByName("score-0").textContent = "0";
window.document.getElementsByName("score-1").textContent = "0";

window.document.getElementsByName("current-0").textContent = "0";
window.document.getElementsByName("current-1").textContent ="0";


var diceDom = window.document.querySelector(".dice");
diceDom.style.display = "none"

window.document.querySelector(".btn-roll").addEventListener('click',function (){
    var diceNumber = Math.floor(Math.random() * 6)+1;
 


   diceDom.style.display = "block";
   diceDom.src = "dice-" + diceNumber + ".png";
});

