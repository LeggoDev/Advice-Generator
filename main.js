// Create variables
const number = document.querySelector('#number span')
const advice = document.querySelector('#advice')
const pastille = document.querySelector('section article')

const array = [
    {id: 1, content: `"Le Javascript c'est génial !"`},
    {id: 2, content: `"Il fait beau ajourd'hui"`},
    {id: 3, content: `"Il fait froid demain"`},
    {id: 4, content: `"Il fait chaud au Canada"`},
    {id: 5, content: `"Il fait froid au Québec"`},
    {id: 6, content: `"J'ai toujours envie de faire du Javascript"`},
    {id: 7, content: `"Maintenant je maitrise les boucles"`},
    {id: 8, content: `"Maintenant je maitrise les objets"`},
    {id: 9, content: `"Maintenant je maitrise les fonctions"`},
    {id: 10, content: `"Maintenant je maitrise les tableaux"`},
];

// Create a function to get a random number between a min and a max
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

pastille.addEventListener('click', () => {
    let randomNumber = getRandomInt(0, array.length - 1);
    advice.textContent = array[randomNumber].content;
    number.textContent = array[randomNumber].id;
})
