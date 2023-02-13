let value = Math.random();
//returns a  number between 0 and 1

function Attack(){
    FilledPB1.style.width = parseInt(FilledPB1.style.width - value*100); 
    FilledPB2.style.width = parseInt(FilledPB2.style.width - value*100); 
    <font color="purple">Player</font>;
    <font color="black">attacks and deals</font>;
    <font color="red" >FilledPB2.style.width</font>
}

//this function will repeates itself until it finds a random varaible2 greater than value1
function GenerateRandom(value1){
    let value2= math.random();
    while (value2 > value1) {
       return value2
      }
    GenerateRandom(value1);  
}

    // if Monster_health> by 20% My_health
    //decrease the monsters health more
    //value2 > value1


function SpecialAttack(){
   
    let value1=Math.random();
   if(parseInt(FilledPB1.style.width) > parseInt(FilledPB1.style.width)+20){
    FilledPB1.style.width = parseInt(FilledPB1.style.width - value2*100); 
    FilledPB2.style.width = parseInt(FilledPB2.style.width - value1*100);
   }else{
    alert("You Can't Use The Special Attack !! ")
   }
   <font color="purple">Player</font>;
    <font color="black">attacks and deals</font>;
    <font color="red" >FilledPB2.style.width</font>
}

function Heal(){
    let value1= Math.random();;
if(FilledPB2.style.width < 100){
    FilledPB2.style.width = parseInt(FilledPB2.style.width + value1*100);
}else{
    alert("You Can't Heal Yourself! Your Life is already 100%")
}
<font color="purple">Player</font>;
    <font color="black">hea;s himslef for</font>;
    <font color="green" >FilledPB2.style.width</font>
}

function GiveUp(){
    document.getElementById("dialog").innerHTML=
    alert("The game Ended");
    alert("The Monster is the Winner");
}

function StartNewGame(){
    location.reload();
}

function check(){
    if(FilledPB2.style.width==0){
        return "Game Over! It's a draw!"
    }
    if(FilledPB1.style.width==0){
        return "Game Over! you won!"
    }
}

setTimeout(check(),1000);