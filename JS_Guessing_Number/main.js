let heart = 3;
let randomNum = 0;

function guessNum() {
    var num = document.getElementById('number').value;
    if (heart === 3) {
        randomNum = Math.floor(Math.random() * 10) + 1;
        window.alert(randomNum);
    }

    if (num === randomNum) {
        document.getElementById('result').innerText = "Congratulations! Your answer is correct!";
        showButton('btn-again');
        hideButton('btn-guess');
    }
    else {
        var element = document.querySelectorAll('#hearts > i')[heart - 1];
        element.classList.remove('heart-red');
        element.classList.add('heart-grey');

        heart--;

        if (heart > 0) {
            document.getElementById('result').innerText = "Sorry, your answer is wrong...";
        } else {
            showButton('btn-again');
            hideButton('btn-guess');

            document.getElementById('result').innerText('Wrong!!. Correct answer:' + randomNum);
        }

    }

}

function playAgain() {
    heart = 3;

    for (var i = 0; i < 3; i++) {
        var element = document.querySelectorAll('#hearts > i')[i];
        element.classList.remove('heart-grey');
        element.classList.add('heart-red');
    }

    hideButton('btn-again');
    showButton('btn-guess');

    document.getElementById('result').innerText = '';
}

function showButton(id) {

    document.getElementById(id).classList.add('btn-show');
    document.getElementById(id).classList.remove('btn-hide');
}

function hideButton(id) {

    document.getElementById(id).classList.add('btn-hide');
    document.getElementById(id).classList.remove('btn-show');
}