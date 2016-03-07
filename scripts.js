
var loadedDice = [];

function randomRoll() {
    return Math.floor(Math.random() * 6 + 1);
}

var Die = function (value) {
    this.value = value;

    this.roll = function () {
        this.value = randomRoll();
        $('.dice').html(this.value);
    }
   this.addDie = function () {
        $('.dice-container').append("<div class='dice'></div>");
        $('.dice').html(this.value);
    }
};

$(document).ready(function () {
    $('.adding').click(function () {
        make();
    });
    $('.rolling').click(function () {
        rollDice();
    })
});


function make() {
    var dice = new Die(randomRoll());
    dice.addDie();
    loadedDice.push(dice);
};

function rollDice() {
    for (var i = 0; i < loadedDice.length; i++) {
        loadedDice[i].roll();
    }
}
