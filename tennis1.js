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

function getPlayerInLead(player1_score, player2_score) {
    return player1_score > player2_score ? "player1" : "player2";
}

function isAnyPlayerAbove3pt(player1_score, player2_score) {
    return player1_score >= 4 || player2_score >= 4;
}

function getWinOrAdvantageScore(scoreDifference, playerInLead) {
    if (scoreDifference === 1) {
        return `Advantage ${playerInLead}`;
    }
    
    return `Win for ${playerInLead}`;
}

function getScore(player1_score, player2_score) {
    let scoreDifference = Math.abs(player1_score - player2_score);

    if (scoreDifference === 0) {
        return getTiedScore(player1_score);
    } else if (isAnyPlayerAbove3pt(player1_score, player2_score)) {
        let playerInLead = getPlayerInLead(player1_score, player2_score);
        return getWinOrAdvantageScore(scoreDifference, playerInLead);
    }
    
    return `${getScoreName(player1_score)}-${getScoreName(player2_score)}`;
}

module.exports = getScore;
