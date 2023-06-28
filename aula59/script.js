const nicknamePlayer = document.querySelector('#nickname')
const classPlayer = document.querySelector('#class')
const newPlayers = document.querySelector('#new-players')
const button = document.querySelector('#button')

class Player{
    constructor(nicknameInput, classInput) {
        this.nickname = nicknameInput
        this.class = classInput 
    }
    
}

const players = []

button.addEventListener('click', () => {
    players.push(new Player(nicknamePlayer.value, classPlayer.value))
    console.log(players);

})