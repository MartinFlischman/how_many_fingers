document.getElementById("submitGuess").onclick = function() {

    var randomNunber = Math.random();

    randomNunber = randomNunber * 6;

    randomNunber = Math.floor(randomNunber);

    if (document.getElementById("answer").value == randomNunber) {

        alert("You got it!");

    } else {

        alert("Guess again! The correct answer was " + randomNunber);

    }
}