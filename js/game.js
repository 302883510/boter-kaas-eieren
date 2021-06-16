let vakje=document.querySelector('.grid-container');

let speler1= new speler("Jan",true,"X");
let speler2= new speler("Piet",false,"O");
alert (speler1.getName())


vakje.addEventListener('click', handleClickgridcontainer)

let model= new Array(9);
for(let i=0;i<model.length; i++) {
    model[i]="leeg"
}


function handleClickgridcontainer(event){
    let vakje=event.target;
    vakje.innerHTML="X"
    let index=vakje.id;
    if (speler1.ikBenAanBeurt())
    {
        if (model[index]==="Leeg"){

            model[index]=speler1.getSymbool();
            vakje.innerHTML=speler1.getSymbool();
        }

    }
    if (speler2.ikBenAanBeurt())
    {
        if (model[index]==="Leeg"){

            model[index]=speler2.getSymbool();
            vakje.innerHTML=speler2.getSymbool();
        }

    }
    speler1.wisselBeurt();
    speler2.wisselBeurt();

    //model [index]="X";
    //console.log(model);
   // isWinnaar();
}


function isWinnaar()
{
    {
     if (model[0]==="X"&& model[1]==="X" && model[2]==="X")
    alert('Winnaar')}

{
    if  (model[3]==="X"&& model[4]==="X" && model[5]==="X")
   alert('Winnaar')
}
{
    if (model[6]==="X"&& model[7]==="X" && model[8]==="X")
   alert('Winnaar')
}
if (model[0]==="X"&& model[3]==="X" && model[6]==="X")
alert('Winnaar')}

{
if  (model[1]==="X"&& model[4]==="X" && model[7]==="X")
alert('Winnaar')
}
{
if (model[2]==="X"&& model[5]==="X" && model[8]==="X")
alert('Winnaar')
}
if (model[0]==="O"&& model[4]==="O" && model[8]==="O")
alert('Winnaar')

{
if  (model[2]==="O"&& model[4]==="O" && model[6]==="O")
alert('Winnaar')
}

{
    if (model[0]==="O"&& model[1]==="O" && model[2]==="O")
   alert('Winnaar')}

{
   if  (model[3]==="O"&& model[4]==="O" && model[5]==="O")
  alert('Winnaar')
}
{
   if (model[6]==="O"&& model[7]==="O" && model[8]==="O")
  alert('Winnaar')
}
if (model[0]===")"&& model[3]==="O" && model[6]==="O")
alert('Winnaar')

{
if  (model[1]==="O"&& model[4]==="O" && model[7]==="O")
alert('Winnaar')
}
{
if (model[2]==="O"&& model[5]==="O" && model[8]==="O")
alert('Winnaar')
}
if (model[0]==="O"&& model[4]==="O" && model[8]==="O")
alert('Winnaar')

{
if  (model[2]==="O"&& model[4]==="O" && model[6]==="O")
alert('Winnaar')
}
