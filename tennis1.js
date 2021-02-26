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

function getScore(player1_score, player2_score) {
    if (player1_score === player2_score) {
        return getTiedScore(player1_score);
    } else if (player1_score >= 4 || player2_score >= 4) {
        var scoreDifference = Math.abs(player1_score - player2_score);
        let playerInLead = getPlayerInLead(player1_score, player2_score);

        if (scoreDifference === 1) {
            return `Advantage ${playerInLead}`;
        }  
        
        return `Win for ${playerInLead}`;
    } else {
        return `${getScoreName(player1_score)}-${getScoreName(player2_score)}`;
    }
}

module.exports = getScore;
