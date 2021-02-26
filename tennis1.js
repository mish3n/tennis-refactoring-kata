'use strict';

function getScoreName(score) {
    const scores = ["Love", "Fifteen", "Thirty", "Forty"];
    return scores[score];
}

function getScore(m_score1, m_score2) {
    var score = "";

    if (m_score1 === m_score2) {
        if(m_score1 < 3) {
            score = `${getScoreName(m_score1)}-All`;
        } else {
            score = "Deuce";
        }
    } else if (m_score1 >= 4 || m_score2 >= 4) {
        var minusResult = m_score1 - m_score2;

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
        score = `${getScoreName(m_score1)}-${getScoreName(m_score2)}`;
    }

    return score;
}

module.exports = getScore;