'use strict';

function getScoreName(tempScore, score) {
    const scores = ["Love", "Fifteen", "Thirty", "Forty"];

    score += scores[tempScore];

    return score;
}

function getScore(m_score1, m_score2) {
    var score = "";
    var tempScore = 0;

    if (m_score1 === m_score2) {
        switch (m_score1) {
            case 0:
                score = "Love-All";
                break;
            case 1:
                score = "Fifteen-All";
                break;
            case 2:
                score = "Thirty-All";
                break;
            default:
                score = "Deuce";
                break;
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
        for (var i = 1; i < 3; i++) {
            if (i === 1) {
                tempScore = m_score1;
            } else {
                score += "-";
                tempScore = m_score2;
            }

            score = getScoreName(tempScore, score);
        }
    }

    return score;
}

module.exports = getScore;