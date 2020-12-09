// Toglogchiin eeljiig hadgalh huwisagch, 1r toglogchiig 0, 2r toglogchiig 2 gj temdegley.
var activePlayer = 0; 



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
       //ene toglogchiin  eeljin dr cugluulsn onoog noil bolgno
       roundScore =0;
       window.document.getElementById('current-'+ activePlayer).textContent=0;
       //toglogchiin eelijiig nogoo toglogch ruu shiljuulne
       activePlayer===0 ? (activePlayer=1) : (activePlayer=0);
       //ulaan tsegiig shiljuulne
       window.document.querySelector(".player-0-panel").classList.toggle("active");
       window.document.querySelector(".player-1-panel").classList.toggle("active");
       
      //shoog alga bolgoh
      diceDom.style.display = "none";
    

    
       // herew idwhtei toglogch ni  0 baiwal idewhtei toglogchiig 1 bolno.
       
       // vgvi bol  idwhtei toglogch   0 bolgono.

    
      

   }

    
});

