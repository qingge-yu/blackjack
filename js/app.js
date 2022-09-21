/*----- constants -----*/

const suits = ['d', 'h', 's', 'c']
const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A']
let deck = null
newDeck()

const PLAYER_LOOKUP = {
    '1': {
        name: 'Player',
    },
    '-1': {
        name: 'Dealer',
    }
}

/*----- app's state (variables) -----*/

let turn, cardValue, playerCardValueTotal, dealerCardValueTotal, winner

const playerHand = []
const dealerHand = []
const playedCards = []
let cardCount = 0


/*----- cached element references -----*/

const resetBtnEl = document.getElementById('reset-btn')
const hitBtnEl = document.getElementById('hit-btn')
const standBtnEl = document.getElementById('stand-btn')
const playerCardsEl = document.querySelector('.player-cards')
const dealerCardsEl = document.querySelector('.house-cards')
const messageEl = document.querySelector('h2')


/*----- event listeners -----*/

resetBtnEl.addEventListener('click', handleResetClick)

hitBtnEl.addEventListener('click', handleHitClick)

standBtnEl.addEventListener('click', handleStandClick)


/*----- functions -----*/

function newDeck() {
    deck = []
    for (let suitIdx = 0; suitIdx < 4; suitIdx++) {
        for (let rankIdx = 0; rankIdx < 13; rankIdx++) {
            deck.push(suits[suitIdx] + ranks[rankIdx])
        }
    }
}

function init() {
    newDeck()
    turn = 1
    winner = null
    playerCardValueTotal = 0
    dealerCardValueTotal = 0
}

function handleResetClick() {
    init()
    console.log(deck)
}

function handleHitClick() {
    playerTurn()
    console.log(deck)
}

function handleStandClick() {
    changeTurn()
    dealerTurn()
    console.log(deck)
}

function changeTurn() {
    turn *= -1
}

function dealerTurn() {
    drawCard(dealerHand)

}

function playerTurn() {
    drawCard(playerHand)
    console.log("player hand: " + playerHand)

}

function drawCard(array) {
    let randomCard = deck[Math.floor(Math.random() * (52 - cardCount))]
    console.log("card: " + randomCard)
    if (!playedCards.includes(randomCard)) {
        playedCards.push(randomCard)
        array.push(randomCard)
        deck = deck.filter(function (usedCard) {
            return usedCard !== randomCard
        })
        console.log("played cards:" + playedCards)
        addCardToHand()
        cardCount++
    }
    console.log("turn: " + turn)
}


function addCardToHand() {
    if (turn == '1') {
        let playerNewCard = document.createElement('div')
        playerNewCard.classList.add('card', `${playerHand[playerHand.length - 1]}`)
        playerCardsEl.appendChild(playerNewCard)
    } else if (turn == '-1') {
        let dealerNewCard = document.createElement('div')
        dealerNewCard.classList.add('card', 'back')
        dealerCardsEl.appendChild(dealerNewCard)
    }
}

function handValue(array) {
    cardValue = 0
    array.forEach(function (idx) {
        let arr = idx.split('')
        let cardIdx = arr[arr.length - 1]
        if (cardIdx === 'J' || cardIdx === 'Q' || cardIdx === 'K' || cardIdx === '0') {
            cardValue = 10
        } else if (cardIdx === 'A') {
            cardValue = 1
        } else {
            cardValue = cardIdx
        }
    })
    console.log(cardValue)
}

// function playerHandValueTotal() {
//     if (playerAddCardToHand) {
//         playerCardValueTotal += cardValue
//     }
// }



// // function checkWin() {
// // }

// // function render() {
// //     if ()
// // }


// start game
init()