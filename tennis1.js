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
    if (player1_score === player2_score) {
        return getTiedScore(player1_score);
    } else if (player1_score >= 4 || player2_score >= 4) {
        var scoreDifference = player1_score - player2_score;

        if (scoreDifference === 1) {
            return "Advantage player1";
        } else if (scoreDifference === -1) {
            return "Advantage player2";
        } else if (scoreDifference >= 2) {
            return "Win for player1";
        } else {
            return "Win for player2";
        }
    } else {
        return `${getScoreName(player1_score)}-${getScoreName(player2_score)}`;
    }
}

module.exports = getScore;
