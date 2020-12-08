// Toglogchiin eeljiig hadgalh huwisagch, 1r toglogchiig 0, 2r toglogchiig 2 gj temdegley.
var activePlayer = 1; 



//Toglogchiin cugluulsn onoog hadgalah  huwicagch
var scorer = [0, 0];

// Tlogchiin eeljindee cugluulj bga onoog hadgalah huwisagch
var roundScore = 0;


//Shoonii ali talara buusniig hadgalah huwicagch heregte, 1-6 gesen utgiig ene huwisagchid sanamsargui iisgej ogno
var dice = Math.floor(Math.random() * 6)+1;
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;

document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

document.querySelector(".dice").getElementsByClassName.display = "none";
console.log("Шоо:" +dice);