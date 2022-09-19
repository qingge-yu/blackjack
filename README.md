~~B~L~A~C~K~J~A~C~K~~


>-- App's Functionality --<

** Most Viable Product **
- As a user, I want to see what my hand is like
- As a user, I want to click a "hit" button to draw a card
- As a user, I want to see a new card added to my hand after clicking "hit" button
- As a user, I want to click a "stand" button to pass the round
- As a user, I want to see a card added to the dealer's hand when dealer draws
- As a user, after every move, I want to see whether I won, lost, or the game is still going
- As a user, after every move, I want to see the total value of my cards
- As a user, after every game, I want to click a "reset" button to restart the game

** Icebox Features **
- As a user, I want to click on a "split" button when I have a pair
- As a user, I want to see the same amount of bet placed on each card
- As a user, I want to see a new card added to each side
- As a user, I want to click a button to add new player ( 2 players max)
- As a user, I want to see how much I won in the last game

- As a user, I want to see I initially have $100 when entering the game
- As a user, I want to click a "bet" button to select how much money I want to bet before game starts ($2, $5, $10)
- As a user, I want to see my balance updated after each game
- As a user, when I have less than $2 left, I want to see a game over message
- As a user, when I see game over message, I want to click a "change table" button to restart the game with $100 again
- As a user, if my balance is less than $10, I want to see "$10" button disabled
- As a user, if my balance is less than $5, I want to see both "$10" and "$5" buttons disabled

>-- Pseudocode --<

When we start a game of Blackjack:
- initialize the table state to be empty [ initNew() ]
- player goes first, house goes second [ playerTurn() ]

- shuffle deck [ shuffle() ]

When it's a player's turn:
- when the player clicks the "hit" button, a card is added to the player's hand [ newCard() ]
- update cards on hand value total [ handTotal() ]
- when the player clicks the "stand" button, change turn [ noNewCard() ]
- the dealer draws a card after player clicks "stand" button [ newCard() ]
- add the card's numbers up and compare with 21 [ mathCard() ]
- check the state of the game to see if win, lose or keep playing [ checkWin() ]
- each time player or dealer draws, deck number minus 1 [ deckNum() ]
- check how many cards are left in the deck. if less than 2 then shuffle deck [ shuffle() ]
- render the game state to the DOM [ render() ]

When the game is over:
- render a win/lose message to the DOM [ render() ]
- reinitialize the state of the game if the player clicks the "reset" button [ init() ]
- after game over message, player can click "change table" button to restart completely [ initNew() ]


** Icebox pseudocode **
When game starts:
- player's balance is set to $100 [ balance() ]
- player chooses how much to bet on [ betChoice() ]

When game is over:
- update the player's balance [ balance() ]
- if the player's balance is less than $2, render a game over message to the DOM [ gameOver() ]




>--Application State Data --<
- turn ( int 1 , -1 )
- hand ( int  > 0 ) 
- card value ( in > 0 )
- card value total ( int > 0 )
- deck ( integers ( int 0 - 52 )
- win ( int 1 , -1 )

- balance ( int  > 0 ) - icebox

>-- Application Constant Data --<
- player (player or house)
- bet ( int 2 , 5 , 10 ) - icebox
 























