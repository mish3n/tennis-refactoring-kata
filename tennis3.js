'use strict';

function getLeadingPLayer(player1Score, player2Score) {
    let player1Name = "player1";
    let player2Name = "player2";
    return player1Score > player2Score ? player1Name : player2Name;
}

function getScore(player1Score, player2Score) {
    let points = ["Love", "Fifteen", "Thirty", "Forty"];

    if(player1Score === player2Score) {
        if (player1Score < 3) {
            return points[player1Score] + "-All";
        }
        
        return "Deuce";
    }

    if ((player1Score < 4 && player2Score < 4)) {
        return  points[player1Score] + "-" + points[player2Score];
    }

    let leadingPlayer = getLeadingPLayer(player1Score, player2Score);
    if ((player1Score - player2Score) * (player1Score - player2Score) === 1) { 
        return "Advantage " + leadingPlayer;
    }

    return "Win for " + leadingPlayer;
}

module.exports = getScore;
