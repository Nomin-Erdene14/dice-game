var activePlayer = 0; //idewhtei toglogch 
var scorer = [0, 0]; //2totglogchiin tsugluulsn onoo
var roundScore = 0; //idewehtei toglogchiin tsugluulj bga onoo
var diceDom = window.document.querySelector(".dice");
//togloom ehluuleh
initGame();
//togloomiig shineer ehlehd beltgene
function initGame()
{
   //Shoonii ali talara buusniig hadgalah huwicagch heregte, 1-6 gesen utgiig ene huwisagchid sanamsargui iisgej ogno
var diceNumber = Math.floor(Math.random() * 6)+1;
//Programm ehelhed beldey
window.document.getElementsByName("score-0").textContent = "0";
window.document.getElementsByName("score-1").textContent = "0";

window.document.getElementsByName("current-0").textContent = "0";
window.document.getElementsByName("current-1").textContent ="0";

//toglogchdiin ner bucaaj gargna
window.document.getElementById("name-0").textContent = "Player 1";
window.document.getElementById("name-1").textContent = "Player 2";

window.document.querySelector('.player-0-panel').classList.remove('winner');
window.document.querySelector('.player-1-panel').classList.remove('winner');

window.document.getElementById('score-0').textContent = "0";
window.document.getElementById('score-1').textContent = "0";

window.document.querySelector('.player-0-panel').classList.remove('active');
window.document.querySelector('.player-1-panel').classList.remove('active');

window.document.querySelector('.player-0-panel').classList.add('active');
window.document.querySelector('.player-1-panel').classList.add('active');

diceDom.style.display = "none";
};



// shoog shideh event
window.document.querySelector(".btn-roll").addEventListener('click',function (){
    //1-6 sanamsargui neg too gargna
    var diceNumber = Math.floor(Math.random() * 6)+1;
    //Shoonii zurgiig web deer gargaj irne
   diceDom.style.display = "block";
   //buusan sanamsargui toond hargalzah zurgiig web dr gargaj irne
   diceDom.src = "dice-" + diceNumber + ".png";
   //buusan too ni 1s ylgaatai bol idewhtei toglogchiin onoog nemne
   if(diceNumber !==1){
       //1s ylgaatai too buulaa.Buusan toog toglogchid nemj ogno.
       roundScore = roundScore+diceNumber;
       window.document.getElementById('current-'+ activePlayer).textContent=roundScore;
   }else{
       //1 buusan tul toglogchiin eeljiig neg heseg solij bolno
       switchToNextPlayer();
     }
});





//HOLD towchnii event 
window.document.querySelector('.btn-hold').addEventListener('click',function(){
    //ug toglogchiin cugluulsn eeljnii onoog global onoo dr nemj ogno

    scorer[activePlayer] = scorer[activePlayer] + roundScore;
    window.document.getElementById("score-" + activePlayer).textContent = scorer[activePlayer];
    //ug toglogch hojson esehiig (onoo 100s ih) shalgana
if (scorer[activePlayer] >=10){
    //ylagch gsn text iig nernii orond gargana
    window.document.getElementById("name-"+activePlayer).textContent = "WINNER!";
    window.document.querySelector(".player-"+ activePlayer + "-panel").classList.add("winner");
    window.document.querySelector(".player-"+ activePlayer + "-panel").classList.remove("active");
    //toglogchiih eelj solih
    switchToNextPlayer();
    }
     //delgcend onoo oorchlno
    window.document.getElementById('score-' + activePlayer).textContent = scorer[activePlayer];
    //toglogchiin eeljiig solino
  switchToNextPlayer();
    
});
// ene function ni togloh eeljiig daraachiih ruu shiljuulne. 
 function switchToNextPlayer(){
    roundScore =0;
    window.document.getElementById('current-'+ activePlayer).textContent=0;
    //toglogchiin eelijiig nogoo toglogch ruu shiljuulne
    activePlayer===0 ? (activePlayer=1) : (activePlayer=0);
    //ulaan tsegiig shiljuulne
    window.document.querySelector(".player-0-panel").classList.toggle("active");
    window.document.querySelector(".player-1-panel").classList.toggle("active");
    
   //shoonii zurag alga bolgoh
   diceDom.style.display = "none";
 }



 //new Game towch darah ym bol hiih event
 window.document.querySelector(".btn-new").addEventListener('click',initGame);

 