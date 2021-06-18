//window.location.href = "http://stackoverflow.com";

window.addEventListener('load', (event) => {
    let questions = document.querySelector(".questions");
    questions.style.display = 'none';
  });


console.info("LALA");
let button = document.querySelectorAll(".button");
console.warn("LALA");
button.forEach(element => {
    element.addEventListener("click", function() {
        console.warn(element.value); // 1 = html 2 = css 
        let questions = document.querySelector(".questions");
        questions.style.display = 'block';
        let allButtons = document.querySelector(".allButtons");
        allButtons.style.display = 'none';

        // hier een functie aanroepen : function setAllQuestion(element.value)



    })
});


// functie pak alle vragen van de class
// zet alle vragen met het element.value in een array. 
// let arrayQuestion => vraag alle objecten op met de question.taal === element.value. 

// zet het in de vragenlijst. foreach array (element)
// => queryseletor question => element.question 

/*
<p class="question"> <p>

forloop element.anwers[2010, 2011, 2012 ] 
<input radiobutton class="antwoord1" > => queryseletor antwoord1 => array0
<input radiobutton class="antwoord2" > => queryseletor antwoord2 => array1
<input radiobutton class="antwoord3" > => queryseletor antwoord3 => array2


Knop volgende => welke is goed ? => is juisteantwoord aangevinkt?? Zo ja (if) => punten +10, anders punten + 0 (of je doet niks)
*/

