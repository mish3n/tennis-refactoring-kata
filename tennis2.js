'use strict';

function getScoreName(points) {
    if (points === 0) {
        return "Love";
    }
    if (points === 1) {
        return "Fifteen";
    }
    if (points === 2) {
        return "Thirty";
    }
    if (points === 3) {
        return "Forty";
    }
}

function getScore(player1Points, player2Points) {
    var score = "";

    if (player1Points === player2Points && player1Points < 3) {
        score = getScoreName(player1Points);
        score += "-All";
    }

    if (player1Points === player2Points && player1Points > 2) {
        score = "Deuce";
    }

    if ((player1Points > 0 && player2Points === 0) || (player2Points > 0 && player1Points === 0) || 
        (player1Points > player2Points && player1Points < 4) || (player2Points > player1Points && player2Points < 4)) {
        let P1res = getScoreName(player1Points);
        let P2res = getScoreName(player2Points);

        score = P1res + "-" + P2res;
    }

    if (player1Points > player2Points && player2Points >= 3) {
        score = "Advantage player1";
    }

    if (player2Points > player1Points && player1Points >= 3) {
        score = "Advantage player2";
    }

    if (player1Points >= 4 && player2Points >= 0 && (player1Points - player2Points) >= 2) {
        score = "Win for player1";
    }
    if (player2Points >= 4 && player1Points >= 0 && (player2Points - player1Points) >= 2) {
        score = "Win for player2";
    }

    return score;
}


module.exports = getScore;
