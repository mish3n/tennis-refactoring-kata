'use strict';

function getScore(player1Score, player2Score) {
    var score;
    let player1Name = "player1";
    let player2Name = "player2";
    let points = ["Love", "Fifteen", "Thirty", "Forty"];

    if(player1Score === player2Score) {
        if (player1Score < 3) {
            return points[player1Score] + "-All";
        }
        
        return "Deuce";
    }

    if ((player1Score < 4 && player2Score < 4)) {
        return  points[player1Score] + "-" + points[player2Score];
    } else {
        score = player1Score > player2Score ? player1Name : player2Name;
        if ((player1Score - player2Score) * (player1Score - player2Score) === 1) return "Advantage " + score;
        return "Win for " + score;
    }
}

module.exports = getScore;
