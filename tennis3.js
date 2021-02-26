'use strict';

function getScore(player1Score, player2Score) {
    var score;
    let player1Name = "player1";
    let player2Name = "player2";

    if(player1Score === player2Score) {
        if ((player1Score < 4 && player2Score < 4) && (player1Score + player2Score < 6)) {
            var points = ["Love", "Fifteen", "Thirty", "Forty"];
            if(player1Score === player2Score) {
                return points[player1Score] + "-All";
            }
            return  points[player1Score] + "-" + points[player2Score];
        } else {
            if (player1Score === player2Score) {
                return "Deuce";
            }
            score = player1Score > player2Score ? player1Name : player2Name;
            return ((player1Score - player2Score) * (player1Score - player2Score) === 1) ? "Advantage " + score : "Win for " + score;
        }
    }

    if ((player1Score < 4 && player2Score < 4) && (player1Score + player2Score < 6)) {
        var points = ["Love", "Fifteen", "Thirty", "Forty"];
        if(player1Score === player2Score) {
            return points[player1Score] + "-All";
        }
        return  points[player1Score] + "-" + points[player2Score];
    } else {
        if (player1Score === player2Score) {
            return "Deuce";
        }
        score = player1Score > player2Score ? player1Name : player2Name;
        return ((player1Score - player2Score) * (player1Score - player2Score) === 1) ? "Advantage " + score : "Win for " + score;
    }
}

module.exports = getScore;
