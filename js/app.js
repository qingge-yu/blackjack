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
    resetBtnEl.style.display = "none"
}

function handleResetClick() {
    init()
}

function handleHitClick() {
    playerTurn()
}

function handleStandClick() {
    turn *= -1
    dealerTurn()
}

function dealerTurn() {
    drawCard(dealerHand)
    while (handValue(dealerHand) < 17 && handValue(playerHand) <= 21) {
        drawCard(dealerHand)
        handValue(dealerHand)
    }
    checkWin()
    messageDealerEl.textContent = "Dealer hand now: " + handValue(dealerHand)
}

function playerTurn() {
    drawCard(playerHand)
    messagePlayerEl.textContent = "Your hand now: " + handValue(playerHand)
}

function drawCard(array) {
    let randomCard = deck[Math.floor(Math.random() * (52 - cardCount))]
    if (!playedCards.includes(randomCard)) {
        playedCards.push(randomCard)
        array.push(randomCard)
        deck = deck.filter(function (usedCard) {
            return usedCard !== randomCard
        })
        addCardToHand()
        cardCount++
    }
}


function addCardToHand() {
    if (turn === 1) {
        let playerNewCard = document.createElement('div')
        playerNewCard.classList.add('card', `${playerHand[playerHand.length - 1]}`, 'large')
        playerCardsEl.appendChild(playerNewCard)
    } else if (turn === -1) {
        let dealerNewCard = document.createElement('div')
        dealerNewCard.classList.add('card', `${dealerHand[dealerHand.length - 1]}`, 'large')
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
    } else if (dealerTotal === 21) {/*----- constants -----*/

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
        let balance = 100
        let bet = 0


        /*----- cached element references -----*/

        const resetBtnEl = document.getElementById('reset-btn')
        const hitBtnEl = document.getElementById('hit-btn')
        const standBtnEl = document.getElementById('stand-btn')
        const playerCardsEl = document.querySelector('.player-cards')
        const dealerCardsEl = document.querySelector('.dealer-cards')
        const messageEl = document.querySelector('h2')
        const messageDealerEl = document.getElementById('dealer-score')
        const messagePlayerEl = document.getElementById('player-score')
        const betEl = document.querySelector('.bet')
        const betTwoEl = document.getElementById('two')
        const betFiveEl = document.getElementById('five')
        const betTenEl = document.getElementById('ten')
        const balanceEl = document.getElementById('balance')
        const betAmountEl = document.getElementById('bet-amount')
        const newGameEl = document.getElementById('new-game')



        /*----- event listeners -----*/

        resetBtnEl.addEventListener('click', handleResetClick)
        hitBtnEl.addEventListener('click', handleHitClick)
        standBtnEl.addEventListener('click', handleStandClick)
        betTwoEl.addEventListener('click', handleBetTwoClick)
        betFiveEl.addEventListener('click', handleBetFiveClick)
        betTenEl.addEventListener('click', handleBetTenClick)


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
            standBtnEl.disabled = false
            hitBtnEl.disabled = false
            balanceEl.textContent = `Your balance: $${calBalance(balance)}`
            betAmountEl.textContent = ''
            betTwoEl.disabled = false
            betFiveEl.disabled = false
            betTenEl.disabled = false
        }



        function handleResetClick() {
            init()
        }

        function handleHitClick() {
            playerTurn()
        }

        function handleStandClick() {
            turn *= -1
            dealerTurn()
            standBtnEl.disabled = true
            hitBtnEl.disabled = true
            betResult()
        }

        function dealerTurn() {
            drawCard(dealerHand)
            while (handValue(dealerHand) < 17 && handValue(playerHand) <= 21) {
                drawCard(dealerHand)
                handValue(dealerHand)
            }
            checkWin()
            messageDealerEl.textContent = "Dealer hand now: " + handValue(dealerHand)
        }

        function playerTurn() {
            drawCard(playerHand)
            messagePlayerEl.textContent = "Your hand now: " + handValue(playerHand)
        }

        function drawCard(array) {
            let randomCard = deck[Math.floor(Math.random() * (52 - cardCount))]
            if (!playedCards.includes(randomCard)) {
                playedCards.push(randomCard)
                array.push(randomCard)
                deck = deck.filter(function (usedCard) {
                    return usedCard !== randomCard
                })
                addCardToHand()
                cardCount++
            }
        }


        function addCardToHand() {
            if (turn === 1) {
                let playerNewCard = document.createElement('div')
                playerNewCard.classList.add('card', `${playerHand[playerHand.length - 1]}`, 'large')
                playerCardsEl.appendChild(playerNewCard)
            } else if (turn === -1) {
                let dealerNewCard = document.createElement('div')
                dealerNewCard.classList.add('card', `${dealerHand[dealerHand.length - 1]}`, 'large')
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
                hitBtnEl.disabled = true
            }
            return cardValue
        }


        function checkWin() {
            const playerTotal = handValue(playerHand)
            const dealerTotal = handValue(dealerHand)
            if (dealerTotal === playerTotal && dealerTotal <= 21) {
                messageEl.textContent = "It's a tie!"
            } else if (playerTotal === 21) {
                messageEl.textContent = "You win!"
            } else if (dealerTotal === 21) {
                messageEl.textContent = "Dealer wins!"
            } else if (playerTotal > 21) {
                messageEl.textContent = "Dealer wins!"
            } else if (playerTotal > dealerTotal && dealerTotal >= 17) {
                messageEl.textContent = "You win!"
            } else if (playerTotal < dealerTotal && dealerTotal < 21) {
                messageEl.textContent = "Dealer wins!"
            } else if (playerTotal < dealerTotal && dealerTotal > 21) {
                messageEl.textContent = "You win!"
            }
            resetBtnEl.style.display = "inline-block"
        }


        //--Icebox: Betting features--

        function checkBetBtn(bet) {
            if (handleBetTwoClick) {
                bet += 2
            } else if (handleBetFiveClick) {
                bet += 5
            } else if (handleBetTenClick) {
                bet += 10
            }
            return bet
        }

        function calBalance(balance) {
            balance = balance - checkBetBtn(bet)
            if (balance < 2) {
                messageEl.textContent = "GAME OVER"
                newGameEl.style.display = "inline-block"
                resetBtnEl.style.display = "none"
            }
            return balance
        }

        function handleBetTwoClick() {
            betFiveEl.disabled = true
            betTenEl.disabled = true
            balanceEl.textContent = `Your balance: $${calBalance(balance)}`
            betAmountEl.textContent = `Current bet: $${checkBetBtn(bet)}`
        }

        function handleBetFiveClick() {
            betTwoEl.disabled = true
            betTenEl.disabled = true
            balanceEl.textContent = `Your balance: $${calBalance(balance)}`
            betAmountEl.textContent = `Current bet: $${checkBetBtn(bet)}`
        }

        function handleBetTenClick() {
            betTwoEl.disabled = true
            betTenEl.disabled = true
            balanceEl.textContent = `Your balance: $${calBalance(balance)}`
            betAmountEl.textContent = `Current bet: $${checkBetBtn(bet)}`
        }

        function betResult() {
            let newBalance = calBalance(balance)
            let betAmt = checkBetBtn(bet)
            if (messageEl.textContent = "You win!") {
                newBalance = newBalance + betAmt * 2
            } else if (messageEl.textContent = "Dealer wins!") {
                newBalance = newBalance - betAmt
            } else if (messageEl.textContent = "It's a tie!") {
                newBalance = newBalance
            }
            balanceEl.textContent = `Your balance: $${newBalance}`
        }


        function newGame() {
            init()
            calBalance(balance) = 100
            bet = 0
            newGameEl.style.display = 'none'
        }

        // start game
        init()
        messageEl.textContent = "Dealer wins!"
    } else if (dealerTotal === playerTotal && dealerTotal <= 21) {
        messageEl.textContent = "It's a tie!"
    } else if (playerTotal > 21) {
        messageEl.textContent = "Dealer wins!"
    } else if (playerTotal > dealerTotal && dealerTotal >= 17) {
        messageEl.textContent = "You win!"
    } else if (playerTotal < dealerTotal && dealerTotal < 21) {
        messageEl.textContent = "Dealer wins!"
    } else if (playerTotal < dealerTotal && dealerTotal > 21) {
        messageEl.textContent = "You win!"
    }
    resetBtnEl.style.display = "inline-block"
}

// start game
init()