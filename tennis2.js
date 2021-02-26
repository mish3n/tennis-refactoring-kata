'use strict';

function getScore(P1point, P2point) {
    var score = "";

    if (P1point === P2point && P1point < 3) {
        if (P1point === 0) {
            score = "Love";
        }
        if (P1point === 1) {
            score = "Fifteen";
        }
        if (P1point === 2) {
            score = "Thirty";
        }
        score += "-All";
    }
    if (P1point === P2point && P1point > 2) {
        score = "Deuce";
    }

    if ((P1point > 0 && P2point === 0) || (P2point > 0 && P1point === 0) || 
        (P1point > P2point && P1point < 4) || (P2point > P1point && P2point < 4)) {
        var P1res;
        var P2res;
        
        P1res = getScoreName(P1point);
        P2res = getScoreName(P2point);

        score = P1res + "-" + P2res;
    }

    if (P1point > P2point && P2point >= 3) {
        score = "Advantage player1";
    }

    if (P2point > P1point && P1point >= 3) {
        score = "Advantage player2";
    }

    if (P1point >= 4 && P2point >= 0 && (P1point - P2point) >= 2) {
        score = "Win for player1";
    }
    if (P2point >= 4 && P1point >= 0 && (P2point - P1point) >= 2) {
        score = "Win for player2";
    }

    return score;
}


module.exports = getScore;
function getScoreName(P1point, P1res) {
    if (P1point === 0) {
        return "Love";
    }
    if (P1point === 1) {
        return "Fifteen";
    }
    if (P1point === 2) {
        return "Thirty";
    }
    if (P1point === 3) {
        return "Forty";
    }
}

