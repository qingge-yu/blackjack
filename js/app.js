/*----- constants -----*/

let ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A']

const PLAYER_LOOKUP = {
    '1': {
        name: 'Player',
    },
    '-1': {
        name: 'House',
    }
}

/*----- app's state (variables) -----*/

let turn, cardValue, cardValueTotal, deck, winner


/*----- cached element references -----*/

const resetBtnEl = document.querySelector('#resetBtn')

const hitBtnEl = document.querySelector('#hitBtn')

const standBtnEl = document.querySelector('#standBtn')

const cardFaceEl = document.querySelectorAll('card')

// document.querySelector('div').classList.add(card.face)

/*----- event listeners -----*/

// resetBtnEl.addEventListener('click', handleResetClick)

// hitBtnEl.addEventListener('click', handleHitClick)

// standBtnEl.addEventListener('click', handleStandClick)


// /*----- functions -----*/

// function init() {
//     turn = 1
//     winner = null
// }

// function handleResetClick() {
//     init()
// }

// function handleStandClick() {
//     changeTurn
// }

// function changeTurn() {
//     turn *= -1
// }





// const card = {
//     face: 'dQ',
//     value: 10
// }

// function sortCardFace() {
//     if (cardFaceEl.textContent.includes('A')) {
//         cardValue = 1
//     } else if (cardFaceEl.textContent.includes('J') || cardFaceEl.textContent.includes('Q') || cardFaceEl.textContent.includes('K')) {
//         cardValue = 10
//     } else {
//         cardValue = cardFaceEl.textContent.replace(/\D/g, '')
//     }
// }

for (let rankCounter = 0; rankCounter < 13; rankCounter++) {
    console.log(ranks[rankCounter])
}