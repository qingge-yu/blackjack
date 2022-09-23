--- BLACKJACK ---

This is a Blackjack browser game that includes：
    - basic functions such as "hit", "stand" and "deal new"
    - a betting feature that allows the player to place bets in $2, $5, and $10 while starting with a balance of $100
    - a "new game" feature that when the player runs out of money, the game is over, player can choose to start a new game with full balance.

Rules:
    Basic gameplay:
    - player click "hit" to draw a new card
    - player click "stand" to finish round, dealer draws card
    - J, Q, K each have a value of 10
    - A has value of 1 or 11
    - the sum of all the cards on hand cannot be greater than 21
    - while under 21, when player hand's sum is greater than dealer's sum, player wins. Vice versa
    Betting:
    - when a player bets, the bet value will be taken out of the balance left
    - if player wins, player wins double the bet value
    - if player loses, player loses the bet value
    - if there's a tie, player holds balance before the bet
    - when the player doesn't have enough money to place another bet, game is over

-- Preview --

![Screen Shot 2022-09-22 at 10 31 05 PM](https://user-images.githubusercontent.com/112015067/191898870-958a9505-9f70-4dc8-a2a9-8aa21a2420dc.png)
![Screen Shot 2022-09-22 at 10 31 36 PM](https://user-images.githubusercontent.com/112015067/191898880-409d0b7b-016d-4a96-8040-2f34d29871f1.png)
![Screen Shot 2022-09-22 at 10 32 18 PM](https://user-images.githubusercontent.com/112015067/191898889-d0260856-80d9-49b3-8f2f-5ed855b5d6ed.png)

-- Technologies Used --

    - HTML5
    - JavaScript
    - CSS

-- Getting Started --

https://qingge-yu.github.io/blackjack/

    - If player would like to place a bet on the round, player needs to choose the bet amount before clicking the "hit" button
    - For placing another bet on the following round, player would need to choose the bet amount again

-- Next Steps --

Future inhancement would include: 
    - improving UI
    - adding multiple decks in the "deck" array
    - adding a "split" feature while player hand has the same card twice
    - adding multi-player mode
    
-- Have fun playing, good luck! --
