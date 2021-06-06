const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
    player: 1,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['fire', 'knife', 'chain'],
    attack: function attack() {
        console.log(`${player1.name} Fight...`);
    }
}

const player2 = {
    player: 2,
    name: 'Kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['blades', 'suriken', 'sword'],
    attack: function attack() {
        console.log(`${player2.name} Fight...`);
    }
}

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }

    return $tag;
}

function createPlayer(playerName) {
    const $player = createElement('div', 'player'+playerName.player);
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $img = createElement('img');

    $img.src = playerName.img

      $player.appendChild($progressbar);
        $progressbar.appendChild($life);
        $progressbar.appendChild($name);
    $player.appendChild($character);
        $character.appendChild($img);
    
    $life.style.width = `${playerName.hp}%`;
    $name.innerText = playerName.name;
    health = playerName.hp;

    return $player;
}

function changeHP(player) {
    const $playerLife = document.querySelector('.player'+ player.player +' .life');
    player.hp -= Math.ceil(Math.random() * 20);
    $playerLife.style.width = player.hp + '%';

    if (player.hp <= 0) {
        player.hp = 0;
        $playerLife.style.width = '0%';
        $randomButton.disabled = true
        player.player === 1 ? $arenas.appendChild(playerWin(player2.name)) : $arenas.appendChild(playerWin(player1.name));
    }

    console.log(`${player.name} : ${player.hp}hp`);
}

function playerWin(name) {
    const $winTitle = createElement('div', 'winTitle');
    $winTitle.innerText = name + ' win';

    return $winTitle;
}

$randomButton.addEventListener('click', function() {
    console.log('####: Click Random Button');
    changeHP(player1);
    changeHP(player2);
})

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

