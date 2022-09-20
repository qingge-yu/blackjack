/*----- constants -----*/

const suits = ['d', 'h', 's', 'c']

const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A']

let deck = []

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

let turn, cardValue, cardValueTotal, winner

let card = deck[Math.floor(Math.random() * 52)]





/*----- cached element references -----*/

const resetBtnEl = document.getElementById('reset-btn')

const hitBtnEl = document.getElementById('hit-btn')

const standBtnEl = document.getElementById('stand-btn')

const houseCardsEl = document.querySelector('.house-cards')

const playerCardsEl = document.querySelector('.player-cards')

const messageEl = document.querySelector('h2')


// /*----- event listeners -----*/

resetBtnEl.addEventListener('click', handleResetClick)

hitBtnEl.addEventListener('click', handleHitClick)

standBtnEl.addEventListener('click', handleStandClick)


// /*----- functions -----*/

function init() {
    shuffle()
    turn = 1
    winner = null
    playerCardCount = 0
    houseCardCount = 0
    cardValueTotal = 0
}

function handleResetClick() {
    init()

    console.log(deck)

}

function handleStandClick() {
    changeTurn()
    houseTurn()
    console.log(deck)
}

function changeTurn() {
    turn *= -1
}

function handleHitClick() {
    drawCard()

    console.log(deck)

}

function houseTurn() {
    drawCard()
    houseAddCardToHand()
}

function drawCard() {
    let idx = 1
    deck = deck.filter(function (usedCard) {
        return usedCard !== card
    })
    card = deck[Math.floor(Math.random() * (52 - idx))]
    idx++
    playerAddCardToHand()
}

function playerAddCardToHand() {
    const playerNewCard = document.createElement('div')
    playerNewCard.classList.add('card')
    playerNewCard.classList.add(`${card}`)
    playerCardsEl.appendChild(playerNewCard)
}

function houseAddCardToHand() {
    const houseNewCard = document.createElement('div')
    houseNewCard.classList.add('card')
    houseNewCard.classList.add('back')
    houseCardsEl.appendChild(houseNewCard)
}

function handValue() {
    cardValueTotal += `${card}`
    if (card[1] === 'J' || card[1] === 'Q' || card[1] === 'K' || card[1] === '1') {
        cardValue = 10
    } else if (card[1] === 'A') {
        cardValue = 1
    } else {
        cardValue = card[2]
    }
}

function shuffle() {
    deck = []
    for (let suitIdx = 0; suitIdx < 4; suitIdx++) {
        for (let rankIdx = 0; rankIdx < 13; rankIdx++) {
            deck.push(suits[suitIdx] + ranks[rankIdx])
        }
    }
}

// function checkWin() {
// }

// function render() {
//     if ()
// }


// start game
init()