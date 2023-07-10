const init = document.querySelector('#init')
const reboot = document.querySelector('#reboot')
const nextPlayer = document.querySelector('.next-player')
const span = document.querySelectorAll('span')

// Quadros tabuleiro
const quadro1 = document.querySelector("#quadro1")
const quadro2 = document.querySelector("#quadro2")
const quadro3 = document.querySelector("#quadro3")
const quadro4 = document.querySelector("#quadro4")
const quadro5 = document.querySelector("#quadro5")
const quadro6 = document.querySelector("#quadro6")
const quadro7 = document.querySelector("#quadro7")
const quadro8 = document.querySelector("#quadro8")
const quadro9 = document.querySelector("#quadro9")

let playersGame = []

// Reboot game
reboot.addEventListener('click', function(ev){
    ev.preventDefault()

    // Limpa Inputs/checkbox do formulário
    nextPlayer.value = ''
    document.getElementById('player-one').value = ''
    document.getElementById('player-two').value = ''
    document.querySelector('.player1 .peao-player .peao:checked').checked = false
    document.querySelector('.player2 .peao-player .peao:checked').checked = false

    // Limpa Array de Players
    playersGame.length = 0

    // Limpa Tabuleiro
    quadro1.innerText = ''
    quadro2.innerText = ''
    quadro3.innerText = ''
    quadro4.innerText = ''
    quadro5.innerText = ''
    quadro6.innerText = ''
    quadro7.innerText = ''
    quadro8.innerText = ''
    quadro9.innerText = ''

})

// formulário
init.addEventListener('click', function(ev){
    ev.preventDefault()

    // Player One
    const playerOne = document.getElementById('player-one').value
    const peao1 = document.querySelector('.player1 .peao-player .peao:checked').value

    // Player Two
    const playerTwo = document.getElementById('player-two').value
    const peao2 = document.querySelector('.player2 .peao-player .peao:checked').value

    // push array players
    playersGame.push({playerOne, peao1}, {playerTwo, peao2})

    // validação de primeiro jogador
    if (playersGame[0].peao1 == 'X') {
        nextPlayer.value = playersGame[0].playerOne
    } else {
        nextPlayer.value = playersGame[1].playerTwo
    }

});

// Tabuleiro - jogadas
span.forEach(function(quadro){
    quadro.addEventListener('click', function(){

        // validação inicio game
        if (playersGame.length < 2){
            alert("Adicione Jogadores para começar a Jogar!!")
        }

        // Sequencia de Jogadores
        if (nextPlayer.value === playersGame[0].playerOne){
            quadro.innerText = playersGame[0].peao1
            quadro.style.color = '#ff0000'
            nextPlayer.value = playersGame[1].playerTwo
        } else {
            quadro.innerText = playersGame[1].peao2
            quadro.style.color = '#0000ff'
            nextPlayer.value = playersGame[0].playerOne
        }
    })
});

// Validação do vencedor
span.forEach(function(victory){
    victory.addEventListener('click', function(){
        // timeOut para atraso no preenchimento dos campos vencedores
        setTimeout(()=> {
            if (quadro1.textContent == 'X' && quadro2.textContent == 'X' && quadro3.textContent == 'X' || quadro1.textContent == 'O' && quadro2.textContent == 'O' && quadro3.textContent == 'O') {
                quadro1.style.color = '#4ab337'
                quadro2.style.color = '#4ab337'
                quadro3.style.color = '#4ab337'
                if (quadro1.textContent == playersGame[0].peao1 ){
                    alert('Vencedor: ' + playersGame[0].playerOne)
                } else {
                    alert('Vencedor: ' + playersGame[1].playerTwo)
                }
            } else if (quadro4.textContent == 'X' && quadro5.textContent == 'X' && quadro6.textContent == 'X' || quadro4.textContent == 'O' && quadro5.textContent == 'O' && quadro6.textContent == 'O'){
                quadro4.style.color = '#4ab337'
                quadro5.style.color = '#4ab337'
                quadro6.style.color = '#4ab337'
                if (quadro4.textContent == playersGame[0].peao1){
                    alert('Vencedor: ' + playersGame[0].playerOne)
                } else {
                    alert('Vencedor: ' + playersGame[1].playerTwo)
                }
            } else if (quadro7.textContent == 'X' && quadro8.textContent == 'X' && quadro9.textContent == 'X' || quadro7.textContent == 'O' && quadro8.textContent == 'O' && quadro9.textContent == 'O') {
                quadro7.style.color = '#4ab337'
                quadro8.style.color = '#4ab337'
                quadro9.style.color = '#4ab337'
                if (quadro7.textContent == playersGame[0].peao1){
                    alert('Vencedor: ' + playersGame[0].playerOne)
                } else {
                    alert('Vencedor: ' + playersGame[1].playerTwo)
                }
            } else if (quadro1.textContent == 'X' && quadro4.textContent == 'X' && quadro7.textContent == 'X' || quadro1.textContent == 'O' && quadro4.textContent == 'O' && quadro7.textContent == 'O'){
                quadro1.style.color = '#4ab337'
                quadro4.style.color = '#4ab337'
                quadro7.style.color = '#4ab337'
                if (quadro1.textContent == playersGame[0].peao1){
                    alert('Vencedor: ' + playersGame[0].playerOne)
                } else {
                    alert('Vencedor: ' + playersGame[1].playerTwo)
                }
            } else if (quadro2.textContent == 'X' && quadro5.textContent == 'X' && quadro8.textContent == 'X' || quadro2.textContent == 'O' && quadro5.textContent == 'O' && quadro8.textContent == 'O'){
                quadro2.style.color = '#4ab337'
                quadro5.style.color = '#4ab337'
                quadro8.style.color = '#4ab337'
                if (quadro2.textContent == playersGame[0].peao1){
                    alert('Vencedor: ' + playersGame[0].playerOne)
                } else {
                    alert('Vencedor: ' + playersGame[1].playerTwo)
                }
            } else if (quadro3.textContent == 'X' && quadro6.textContent == 'X' && quadro9.textContent == 'X' || quadro3.textContent == 'O' && quadro6.textContent == 'O' && quadro9.textContent == 'O'){
                quadro3.style.color = '#4ab337'
                quadro6.style.color = '#4ab337'
                quadro9.style.color = '#4ab337'
                if (quadro3.textContent == playersGame[0].peao1){
                    alert('Vencedor: ' + playersGame[0].playerOne)
                } else {
                    alert('Vencedor: ' + playersGame[1].playerTwo)
                }
            } else if (quadro1.textContent == 'X' && quadro5.textContent == 'X' && quadro9.textContent == 'X' || quadro1.textContent == 'O' && quadro5.textContent == 'O' && quadro9.textContent == 'O'){
                quadro1.style.color = '#4ab337'
                quadro5.style.color = '#4ab337'
                quadro9.style.color = '#4ab337'
                if (quadro1.textContent == playersGame[0].peao1){
                    alert('Vencedor: ' + playersGame[0].playerOne)
                } else {
                    alert('Vencedor: ' + playersGame[1].playerTwo)
                }
            } else if (quadro3.textContent == 'X' && quadro5.textContent == 'X' && quadro7.textContent == 'X' || quadro3.textContent == 'O' && quadro5.textContent == 'O' && quadro7.textContent == 'O'){
                quadro3.style.color = '#4ab337'
                quadro5.style.color = '#4ab337'
                quadro7.style.color = '#4ab337'
                if (quadro3.textContent == playersGame[0].peao1){
                    alert('Vencedor: ' + playersGame[0].playerOne)
                } else {
                    alert('Vencedor: ' + playersGame[1].playerTwo)
                }
            }
        },200)
    })
})