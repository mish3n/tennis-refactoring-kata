'use strict';

function getScoreName(score) {
    const scores = ["Love", "Fifteen", "Thirty", "Forty"];
    return scores[score];
}

function getTiedScore(score) {
    if (score < 3) {
        return `${getScoreName(score)}-All`;
    }
    
    return "Deuce";
}

function getScore(player1_score, player2_score) {
    var score = "";

    if (player1_score === player2_score) {
        score = getTiedScore(player1_score, score);
    } else if (player1_score >= 4 || player2_score >= 4) {
        var minusResult = player1_score - player2_score;

        if (minusResult === 1) {
            score = "Advantage player1";
        } else if (minusResult === -1) {
            score = "Advantage player2";
        } else if (minusResult >= 2) {
            score = "Win for player1";
        } else {
            score = "Win for player2";
        }
    } else {
        score = `${getScoreName(player1_score)}-${getScoreName(player2_score)}`;
    }

    return score;
}

module.exports = getScore;
