//blackJack game

let player = {
	name: "Irina",
	chips: 200
}
console.log(player.name)
let cards = []
let sum = 0
let isAlive = false
let message = ""
let hasBlackJack = false
let messageEl = document.getElementById('message-el')
let sumEl = document.querySelector('#sum-el')//js query to grab by selector
let cardsEl = document.querySelector('#cards-el')

let playerEl = document.getElementById('player-el')

playerEl.textContent = player.name + " $" + player.chips

function getRandomCard() {
	randNum = Math.floor(Math.random()*13)+1 //returns nums 1 through 13
	if (randNum === 1) {
		return 11
	} else if (randNum >10) {
		return 10
	} else {
		return randNum
	}
}

function startGame() {
	
		isAlive = true
		let firstCard = getRandomCard()
		let secondCard = getRandomCard()
		sum = firstCard + secondCard
		cards = [firstCard, secondCard]
		renderGame()

}

function renderGame() {
	
	cardsEl.textContent = "Cards: "
	for (i = 0; i < cards.length; i++) {
		cardsEl.textContent += cards[i] + " "
	}
	
	sumEl.textContent += sum + " "
	if(sum <= 20) {
		message = "Do you want to draw a new card?"
	} 	
		else if (sum === 21) {
			message = "whohoo! You got BlackJack!!"
			hasBlackJack = true
		}
			else {  //sum > 21 -> the only remaining option
				message = "You're out of the game!"
				isAlive = false
			}
	messageEl.textContent = message
}

//keep track if won or out of the game 
console.log(hasBlackJack)
console.log(isAlive)

function newCard() {
	if (hasBlackJack === false && isAlive === true){
		console.log("Drawing a new card from the deck!")
		let newCard = getRandomCard()
		sum += newCard
		cards.push(newCard)
		renderGame()
	} else {
		console.log("Game Over")
	}
}