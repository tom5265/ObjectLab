
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
    
    $('.summing').click(function () {
        sumDice();
    })
    $('div').dblclick(function () {
        deleteDie(e);
    });
});  

function deleteDie (e) {
    console.log('hello');
    console.log(e.target);
    var element = e.target;
    element.remove();
        
}

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

function sumDice() {
    var total = 0;
    for (var i = 0; i < loadedDice.length; i++) {
     total += loadedDice[i].value;   
}
alert('The sum of the dice is ' + total);
}

