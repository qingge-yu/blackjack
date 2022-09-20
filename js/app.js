/*----- constants -----*/

const suits = ['d', 'h', 's', 'c']

const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A']

let deck = null

shuffle()

const PLAYER_LOOKUP = {
    '1': {
        name: 'Player',
    },
    '-1': {
        name: 'House',
    }
}

/*----- app's state (variables) -----*/

let turn, cardValueTotal, winner

let card = deck[Math.floor(Math.random() * 52)]

let cardValue = 0;

if (card[1] === 'J' || card[1] === 'Q' || card[1] === 'K' || card[1] === '1') {
    cardValue = 10
} else if (card[1] === 'A') {
    cardValue = 1
} else {
    cardValue = card[2]
}


/*----- cached element references -----*/

// const resetBtnEl = document.querySelector('#resetBtn')

// const hitBtnEl = document.querySelector('#hitBtn')

// const standBtnEl = document.querySelector('#standBtn')

// const cardFaceEl = document.querySelectorAll('card')


// /*----- event listeners -----*/

// resetBtnEl.addEventListener('click', handleResetClick)

// hitBtnEl.addEventListener('click', handleHitClick)

// standBtnEl.addEventListener('click', handleStandClick)


// /*----- functions -----*/

function init() {
    turn = 1
    winner = null
}

// function handleResetClick() {
//     init()
// }

// function handleStandClick() {
//     changeTurn
// }

// function changeTurn() {
//     turn *= -1
// }

function handleHitClick() {
    drawCard()
}

function drawCard() {
    let idx = 1
    deck = deck.filter(function (usedCard) {
        return usedCard !== card
    })
    card = deck[Math.floor(Math.random() * (52 - idx))]
    idx++
}

function shuffle() {
    deck = []
    for (let suitIdx = 0; suitIdx < 4; suitIdx++) {
        for (let rankIdx = 0; rankIdx < 13; rankIdx++) {
            deck.push(suits[suitIdx] + ranks[rankIdx])
        }
    }
}


// start game
init()