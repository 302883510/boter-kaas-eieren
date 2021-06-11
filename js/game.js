document.querySelector('#speelveldscherm').style.display="blok";
document.querySelector('#startscherm').style.display="none";

let vakje=document.querySelector('#grid-container');

vakje.addEventListener('click', handleClickgridcontainer)

function handleClickgridcontainer(event){
    let vakje=event.target;

    vakje.innerHTML="X"
}