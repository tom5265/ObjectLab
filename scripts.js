
var loadedDice = [];

function randomRoll() {
    return Math.floor(Math.random() * 6 + 1);
}

var Die = function () {
    this.value = null;
    this.div = null;
    this.insert = function () {
        this.div = document.createElement('div');
        this.div.className = 'die';
        this.roll();
        document.getElementById('dice-container').appendChild(this.div);
    }
    
    this.roll = function () {
        var num = randomRoll();
        this.value = num;       
       this.div.innerHTML = num;
    }
    
}

$(document).ready(function () {
    $('.adding').click(function () {
        make();
    });
    $('.rolling').click(function () {
        rollDice();
    })
})


function make() {
    var dice = new Die();
    dice.insert();
    loadedDice.push(dice);
}

function rollDice() {
    for (var i = 0; i < loadedDice.length; i++) {
        loadedDice[i].roll();
    }
}
