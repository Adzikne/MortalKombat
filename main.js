let player1 = {
    "name": 'Scorpion',
    "hp": 100,
    "img": 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    "weapon": ['fire', 'knife', 'chain'],
    "attack": function attack() {
        console.log(`${player1.name} Fight...`);
    }
}

let player2 = {
    "name": 'Kitana',
    "hp": 100,
    "img": 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    "weapon": ['blades', 'suriken', 'sword'],
    "attack": function attack() {
        console.log(`${player2.name} Fight...`);
    }
}

function createPlayer(playerClass, playerName) {
    let $player = document.createElement('div');
    let $progressbar = document.createElement('div');
    let $character = document.createElement('div');
    let $life = document.createElement('div');
    let $name = document.createElement('div');
    let $img = document.createElement('img');

    $img.src = playerName.img

    $player.classList.add(playerClass);
    $progressbar.classList.add('progressbar');
    $character.classList.add('character');
    $life.classList.add('life');
    $name.classList.add('name');

    $player.appendChild($progressbar);
        $progressbar.appendChild($life);
        $progressbar.appendChild($name);
    $player.appendChild($character);
        $character.appendChild($img);
    
    $life.style.width = `${playerName.hp}%`;
    $name.innerText = playerName.name;
    health = playerName.hp;

    let $arenas = document.querySelector('.arenas');
    $arenas.appendChild($player)
}

createPlayer('player1', player1)
createPlayer('player2', player2)
