
const card = [
    {
        nome : 'Wayne Barnett',
        ruolo : 'Founder & CEO',
        immagine : 'wayne-barnett-founder-ceo.jpg',
    },
    {
        nome : 'Angela Caroll',
        ruolo : 'Chief Editor',
        immagine : 'angela-caroll-chief-editor.jpg',
    },
    {
        nome : 'Walter Gordon',
        ruolo : 'Office Manager',
        immagine : 'walter-gordon-office-manager.jpg',
    },
    {
        nome : 'Angela Lopez',
        ruolo : 'Social Media Manager',
        immagine : 'angela-lopez-social-media-manager.jpg',
    },
    {
        nome : 'Scott Estrada',
        ruolo : 'Developer',
        immagine : 'scott-estrada-developer.jpg',
    },
    {
        nome : 'Barbara Ramos',
        ruolo : 'Graphic Designer',
        immagine : 'barbara-ramos-graphic-designer.jpg',
    },
]

// for(let key in card) {
//     console.log(card[key])
// }

const UlElement = document.querySelector('.container_card')

function creazioneLi (card) {
    UlElement.innerHTML += `<li>  ${card.nome} - ${card.ruolo}  <img src="${card.immagine}"> </li>`
    
}

for (i = 0; i < card.length; i++) {
    creazioneLi(card[i])        
}

