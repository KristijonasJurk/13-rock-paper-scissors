function rpsGame(choice) {
    var humanChoice, botChoice;
    humanChoice = choice.id;
    botChoice = pickRandom(random());
    results = decideWinner(humanChoice, botChoice);
    console.log(results);
    message = finalMessage(results);
    console.log(message);
    frontEnd = FinalFrontEnd(humanChoice, botChoice, message);
}
// generate random number between 0-2
function random() {
    return Math.floor(Math.random() * 3);
}
// pick a random bot choice

function pickRandom(number) {
    return ['rock', 'paper', 'scissors'][number]
}

// pick a winner
function decideWinner(humanChoice, botChoice) {
    var data = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 },
    }
    var humanScore = data[humanChoice][botChoice];
    var botScore = data[botChoice][humanChoice];

    return [humanScore, botScore];
}

// render a message depending on the result
function finalMessage([human, bot]) {
    if (human === 0) {
        return { 'message': 'You lost', 'color': 'red' }
    } else if (human === 0.5) {
        return { 'message': 'You tied', 'color': 'yellow' }
    } else if (human === 1) {
        return { 'message': 'You won', 'color': 'green' }
    }
}

// all objects must disappear and be replaced with both choices and message

function FinalFrontEnd(humanChoiceImg, botChoiceImg, finalMessage) {

    var imgData = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    document.getElementById('rock').remove()
    document.getElementById('paper').remove()
    document.getElementById('scissors').remove()

    var your = document.createElement('div');
    var text = document.createElement('div');
    var bots = document.createElement('div');


    your.innerHTML = "<img src='" + imgData[humanChoiceImg] + "' height=150px width=150px >";
    console.log(your);
    text.innerHTML = "<h1 style='color:" + finalMessage['color'] + "'>" + finalMessage['message'];
    bots.innerHTML = "<img src='" + imgData[botChoiceImg] + "' height=150 width=150px >";

    document.getElementById('flex-box').appendChild(your);
    document.getElementById('flex-box').appendChild(text);
    document.getElementById('flex-box').appendChild(bots);
}
