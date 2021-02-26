'use strict';

function getScoreName(points) {
    let scores = ["Love", "Fifteen", "Thirty", "Forty"];
    return scores[points];
}

function getPlayerInLead(player1Points, player2Points) {
    return player1Points > player2Points ? "player1" : "player2";
}

function getScore(player1Points, player2Points) {
    if (player1Points === player2Points && player1Points < 3) {
        return getScoreName(player1Points) + "-All";
    }

    if (player1Points === player2Points && player1Points > 2) {
        return "Deuce";
    }

    let playerInLead = getPlayerInLead(player1Points, player2Points);
    if ((player1Points >= 4 && player2Points >= 0 && (player1Points - player2Points) >= 2) || 
        (player2Points >= 4 && player1Points >= 0 && (player2Points - player1Points) >= 2)) {
        return "Win for " + playerInLead;
    }

    if ((player1Points > player2Points && player2Points >= 3) || 
        (player2Points > player1Points && player1Points >= 3)) {
        return "Advantage " + playerInLead;
    }

    if ((player1Points > 0 && player2Points === 0) || (player2Points > 0 && player1Points === 0) || 
        (player1Points > player2Points && player1Points < 4) || (player2Points > player1Points && player2Points < 4)) {
        let P1res = getScoreName(player1Points);
        let P2res = getScoreName(player2Points);
        return P1res + "-" + P2res;
    }
}


module.exports = getScore;
