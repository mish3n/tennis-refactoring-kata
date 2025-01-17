'use strict';

function getScoreName(points) {
    let scores = ["Love", "Fifteen", "Thirty", "Forty"];
    return scores[points];
}

function getPlayerInLead(player1Points, player2Points) {
    return player1Points > player2Points ? "player1" : "player2";
}

function getPointDifference(player1Points, player2Points) {
    return Math.abs(player1Points - player2Points);
}

function getTiedScore(player1Points, player2Points) {
    if (player1Points < 3) {
        return getScoreName(player1Points) + "-All";
    }

    return "Deuce";
}

function getWinOrAdvantageScore(player1Points, player2Points, pointDifference) {
    let playerInLead = getPlayerInLead(player1Points, player2Points);
    if (pointDifference >= 2) {
        return "Win for " + playerInLead;
    }

    return "Advantage " + playerInLead;
}

function getScore(player1Points, player2Points) {
    let pointDifference = getPointDifference(player1Points, player2Points);

    if (pointDifference === 0) {
        return getTiedScore(player1Points, player2Points);
    }

    if (player1Points < 4 && player2Points < 4) {
        return `${getScoreName(player1Points)}-${getScoreName(player2Points)}`;
    }

    return getWinOrAdvantageScore(player1Points, player2Points, pointDifference);
}


module.exports = getScore;
