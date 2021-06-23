let vakje=document.querySelector('.grid-container');
let vakjes=document.querySelectorAll('.grid-item');

let naam=document.querySelector('.input-field-player-name')
let addPlayer = document.querySelector('.add-player-button');
playerLabel = document.querySelector('.players-label');
let ClearElement=document.querySelector('.clear-button')

let speler1= new speler("jan",true,"X");
let speler2= new speler("piet",false,"O");


//addPlayer.addEventListener("click", buttonPress);
vakje.addEventListener('click', handleClickgridcontainer)

let model= new Array(9);
for(let i=0;i<model.length; i++) {
    model[i]="leeg"
}




function handleClickgridcontainer(event){
    let vakje=event.target;
    //vakje.innerHTML="X"
    let index=vakje.id;
    if(speler1.benIkAanBeurt())
    {
        if(model[index]==="leeg") {
            model[index]=speler1.getSymbool();
            vakje.innerHTML=speler1.getSymbool();
            window.alert(speler2.naam +" is aan de beurt")
            
        }
    }
    if(speler2.benIkAanBeurt())
    {
        if(model[index]==="leeg") {
            model[index]=speler2.getSymbool();
            vakje.innerHTML=speler2.getSymbool();
            window.alert(speler1.naam + " is aan de beurt")
            
        }
        
    }
    //clearElement();
    speler1.wisselBeurt();
    speler2.wisselBeurt();
    isWinnaar();
}
    //model [index]="X";
    //console.log(model);
   // isWinnaar();

function clearElement(){
    for(let i=0;i<vakjes.length;i++) {
        vakjes[i].innerHTML="";
    }
    for(let i=0;i<model.length; i++) {
        model[i]="leeg"
    }
}

function isWinnaar()
{

        
    if (model[0]==="X"&& model[1]==="X" && model[2]==="X") {
        console.log (speler1.score=speler1.score+1)
        window.alert("Winnaar " + speler1.naam);
        clearElement();
    }
    
    else if  (model[3]==="X"&& model[4]==="X" && model[5]==="X")
    {
        console.log (speler1.score=speler1.score+1)
        window.alert("Winnaar " + speler1.naam);
        clearElement();
    }
    else if (model[6]==="X"&& model[7]==="X" && model[8]==="X")
    {
        console.log (speler1.score=speler1.score+1)
        window.alert("Winnaar " + speler1.naam);
        clearElement();
    }

    else if (model[0]==="X"&& model[3]==="X" && model[6]==="X")
    {
        console.log (speler1.score=speler1.score+1)
        window.alert("Winnaar " + speler1.naam);
        clearElement();
    }

    else if  (model[1]==="X"&& model[4]==="X" && model[7]==="X")
    {
        console.log (speler1.score=speler1.score+1)
        window.alert("Winnaar " + speler1.naam);
        clearElement();
    }
    else if (model[2]==="X"&& model[5]==="X" && model[8]==="X")
    {
        console.log (speler1.score=speler1.score+1)
        window.alert("Winnaar " + speler1.naam);
        clearElement();
    }

    else if (model[0]==="X"&& model[4]==="X" && model[8]==="X")
    {
        console.log (speler1.score=speler1.score+1)
        window.alert("Winnaar " + speler1.naam);
        clearElement();
    }
    else if (model[2]==="X"&& model[4]==="X" && model[6]==="X")
    {
        console.log (speler1.score=speler1.score+1)
        window.alert("Winnaar " + speler1.naam);
        clearElement();
    }
    else if (model[0]==="O"&& model[1]==="O" && model[2]==="O")
    {
        console.log (speler2.score=speler2.score+1)
        window.alert("Winnaar " + speler2.naam);
        clearElement();
    }
    else if  (model[3]==="O"&& model[4]==="O" && model[5]==="O")
    {
        console.log (speler2.score=speler2.score+1)
        window.alert("Winnaar " + speler2.naam);
        clearElement();
    }

    else if (model[6]==="O"&& model[7]==="O" && model[8]==="O")
    {
        console.log (speler2.score=speler2.score+1)
        window.alert("Winnaar " + speler2.naam);
        clearElement();
    }

    else if  (model[0]==="O"&& model[3]==="O" && model[6]==="O")
    {
        console.log (speler2.score=speler2.score+1)
        window.alert("Winnaar " + speler2.naam);
        clearElement();
    }
    else if (model[1]==="O"&& model[4]==="O" && model[7]==="O")
    {
        console.log (speler2.score=speler2.score+1)
        window.alert("Winnaar " + speler2.naam);
        clearElement();
    }
    else if (model[2]===")"&& model[5]==="O" && model[8]==="O")
    {
        console.log (speler2.score=speler2.score+1)
        window.alert("Winnaar " + speler2.naam);
        clearElement();
    }

    else if  (model[0]==="O"&& model[4]==="O" && model[8]==="O")
    {
        console.log (speler2.score=speler2.score+1)
        window.alert("Winnaar " + speler2.naam);
        clearElement();
    }

    else if (model[2]==="O"&& model[4]==="O" && model[6]==="O")
    {
        console.log (speler2.score=speler2.score+1)
        window.alert("Winnaar " + speler2.naam);
        clearElement();
    }
}




function buttonPress (event) {
 

    let player= speler1 (naam.value, Symbool.value, score.value);
 
    players.push(player);
    showSpelers();
    
   
}

function showSpelers()
{
    console.log(players);
    let tekst='dit is ';
     for (let i = 0; i < players.length; i++) {
        
       // tekst += i + players[i].name + " " + players[i].symbol + " " + players[i].points + '<br>';
        tekst += players[i].show();
    }
    playerLabel.innerHTML=tekst;
 
}
