let monster_health = 100
let my_health = 100
function Attack(){
    let value1= Math.random();
    let value2= Math.random();
    if(my_health==0 && monster_health==0){
        document.getElementById("demo").innerHTML = "It's a draw" ;
    }else{
    monster_health = monster_health - value1*100;
    monster_health = Math.max(0,monster_health)
    my_health = my_health - value2*100;
    my_health = Math.max(0,my_health);
    document.querySelector(".FilledPB1").style.width =monster_health +"%"; 
    // to print battle log
    document.getElementById("subject1").innerHTML ="Monster" ;
    document.getElementById("verb1").innerHTML = "attacks and deals";
    document.getElementById("object1").innerHTML =parseInt(monster_health +"%") ;
    //to print in battle log
    document.getElementById("subject2").innerHTML ="Player" ;
    document.getElementById("verb2").innerHTML = "attacks and deals";
    document.getElementById("object2").innerHTML =parseInt(my_health +"%") ;
    document.querySelector(".FilledPB2").style.width = my_health +"%"; 

    }
    if(my_health==0){
        document.getElementById("demo").innerHTML = "Game Over" ;
        document.getElementById("result").innerHTML = "The Monster Is The Winner :(" ;
    }
    if(monster_health == 0){
        document.getElementById("demo").innerHTML = "Game Over" ;
        document.getElementById("result").innerHTML = "You won !" ;
    }
    
}
function SpecialAttack(){
    //to read the prev health 
    let monster_health  = document.querySelector(".FilledPB1").style.width
    let my_health  = document.querySelector(".FilledPB2").style.width
    let value1= Math.random();
    let value2= Math.random();
   
    while(value2 >= 1){
        value2= value1 + Math.random();
    }
   
    
    if(my_health  < monster_health * 0.8){
        
        monster_health = monster_health - value2*100;
        monster_health = Math.max(0,monster_health) // to make all neagtive numbers zero
        my_health = my_health - value1*100;
        my_health = Math.max(0,my_health)
        console.log(value1)
        console.log(value2)
       
        document.querySelector(".FilledPB1").style.width =monster_health +"%"; 
        document.querySelector(".FilledPB2").style.width = my_health +"%"; 
        
    }else{
        alert("To MAKE A SPECIAL ATTACK YOUR HEALTH SHOULD BE LESS THAN THE MONSTERS HEALTH BY 20%");
    }
    
    }

function Heal(){
    let count = 0;
    if(my_health==100){
        alert("you can heal yourself your life is  FULL");
    }else{
        if(count < 3){
        let value1= Math.random();
        my_health = my_health + value1*100;
        my_health = Math.max(0,100);
        document.querySelector(".FilledPB2").style.width = my_health +"%"; 
        count= count + 1;
        }else{
            alert("You cant heal your life more than 3 times sequentially!")
        }
    }
    document.getElementById("subject3").innerHTML ="Player" ;
    document.getElementById("verb3").innerHTML = "heals himself for ";
    document.getElementById("object3").innerHTML =parseInt(my_health +"%") ;
    document.querySelector(".FilledPB2").style.width = my_health +"%"; 
}

function GiveUp(){
    document.getElementById("demo").innerHTML = "Game Over!" ;
     //alert();
     document.getElementById("result").innerHTML = "The Monster Is The Winner :(" ;
     document.getElementById("StartNewGame").innerHTML = "<button id = new onclick=StartNewGame()>Start New Game</button>";
     
}

function StartNewGame(){
    let monster_health = 100;
    let my_health = 100;
    document.querySelector(".FilledPB1").style.width =monster_health +"%"; 
    document.querySelector(".FilledPB2").style.width = my_health +"%"; 
    document.getElementById("demo").innerHTML = "Battle Log" ;
    document.getElementById("result").innerHTML = "" ;
}



