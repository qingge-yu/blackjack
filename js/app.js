/*----- constants -----*/

const suits = ['d', 'h', 's', 'c']
const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A']
let deck = null

const PLAYER_LOOKUP = {
    '1': {
        name: 'Player',
    },
    '-1': {
        name: 'Dealer',
    }
}

/*----- app's state (variables) -----*/

let turn

let playerHand = []
let dealerHand = []
let playedCards = []
let cardCount = 0


/*----- cached element references -----*/

const resetBtnEl = document.getElementById('reset-btn')
const hitBtnEl = document.getElementById('hit-btn')
const standBtnEl = document.getElementById('stand-btn')
const playerCardsEl = document.querySelector('.player-cards')
const dealerCardsEl = document.querySelector('.dealer-cards')
const messageEl = document.querySelector('h2')
const messageDealerEl = document.getElementById('dealer-score')
const messagePlayerEl = document.getElementById('player-score')


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
    document.querySelector(".dealer-cards").innerHTML = ""
    document.querySelector(".player-cards").innerHTML = ""
    messageEl.innerText = "Blackjack"
    messageDealerEl.innerText = ""
    messagePlayerEl.innerText = ""
    playerHand = []
    dealerHand = []
    playedCards = []
    cardCount = 0
    hitBtnEl.style.display = "inline-block"
}

function handleResetClick() {
    init()
    // console.log(deck)
}

function handleHitClick() {
    playerTurn()
    // console.log(deck)
    // messageEl.textContent = "your hand now: " + playerTotal
}

function handleStandClick() {
    turn *= -1
    dealerTurn()
    // console.log(deck)
}

function dealerTurn() {
    drawCard(dealerHand)
    while (handValue(dealerHand) < 17 && handValue(playerHand) <= 21) {
        drawCard(dealerHand)
        handValue(dealerHand)
        messageDealerEl.textContent = "Dealer hand now: " + handValue(dealerHand)
    }
    // console.log("dealer hand: " + handValue(dealerHand))
    checkWin()
}

function playerTurn() {
    drawCard(playerHand)
    // console.log("player hand: " + playerHand)


    messagePlayerEl.textContent = "Your hand now: " + handValue(playerHand)

}

function drawCard(array) {
    let randomCard = deck[Math.floor(Math.random() * (52 - cardCount))]
    // console.log("card: " + randomCard)
    if (!playedCards.includes(randomCard)) {
        playedCards.push(randomCard)
        array.push(randomCard)
        deck = deck.filter(function (usedCard) {
            return usedCard !== randomCard
        })
        // console.log("played cards:" + playedCards)
        addCardToHand()
        cardCount++
    }
    // console.log("turn: " + turn)
}


function addCardToHand() {
    if (turn === 1) {
        let playerNewCard = document.createElement('div')
        playerNewCard.classList.add('card', `${playerHand[playerHand.length - 1]}`)
        playerCardsEl.appendChild(playerNewCard)
    } else if (turn === -1) {
        let dealerNewCard = document.createElement('div')
        dealerNewCard.classList.add('card', `${dealerHand[dealerHand.length - 1]}`)
        dealerCardsEl.appendChild(dealerNewCard)
    }
}

function handValue(array) {
    let cardValue = 0
    array.forEach(function (card) {
        let arr = card.split('')
        let cardIdx = arr[arr.length - 1]
        if (cardIdx === 'J' || cardIdx === 'Q' || cardIdx === 'K' || cardIdx === '0') {
            cardValue += 10
        } else if (cardIdx === 'A') {
            cardValue += 11
        } else {
            cardValue += parseInt(cardIdx, 10)
        }
    })

    let aceArray = []
    array.forEach(function (name) {
        name = name.split('')
        if (name.includes('A')) {
            aceArray.push(name.filter(function (char) {
                return char === 'A'
            }))
        }

    })
    let aceCount = aceArray.length
    if (aceCount && cardValue > 21) {
        while (cardValue > 21 && aceCount) {
            cardValue -= 10
            aceCount--
        }
    }

    if (cardValue > 21 && turn === 1) {
        hitBtnEl.style.display = "none"
    }
    return cardValue

}


function checkWin(cb) {
    const playerTotal = handValue(playerHand)
    const dealerTotal = handValue(dealerHand)


    if (playerTotal === 21) {
        messageEl.textContent = "You win!"
    } else if (dealerTotal === 21) {
        messageEl.textContent = "Dealer wins!"
    } else if (playerTotal > 21) {
        messageEl.textContent = "Dealer wins!"
    } else if (playerTotal > dealerTotal && dealerTotal > 17) {
        messageEl.textContent = "You win!"
    } else if (playerTotal < dealerTotal && dealerTotal < 21) {
        messageEl.textContent = "Dealer wins!"
    } else if (playerTotal < dealerTotal && dealerTotal > 21) {
        messageEl.textContent = "You win!"
    }



}

// start game
init()