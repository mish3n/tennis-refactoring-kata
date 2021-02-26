'use strict';

function getScoreName(points) {
    let scores = ["Love", "Fifteen", "Thirty", "Forty"];
    return scores[points];
}

function getPlayerInLead(player1Points, player2Points) {
    return player1Points > player2Points ? "player1" : "player2";
}

function getScore(player1Points, player2Points) {
    if (player1Points === player2Points) {
        if (player1Points < 3) return getScoreName(player1Points) + "-All";
        return "Deuce";
    }

    if (player1Points < 4 && player2Points < 4) {
        return `${getScoreName(player1Points)}-${getScoreName(player2Points)}`;
    }

    let playerInLead = getPlayerInLead(player1Points, player2Points);
    let pointDifference = Math.abs(player1Points - player2Points);

    if (pointDifference >= 2) {
        return "Win for " + playerInLead;
    }

    return "Advantage " + playerInLead;
}


module.exports = getScore;
