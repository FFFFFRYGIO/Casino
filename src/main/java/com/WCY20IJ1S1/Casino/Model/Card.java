package com.WCY20IJ1S1.Casino.Model;

public class Card {
    private CardRank cardRank;
    private CardSuit cardSuit;

    public Card(CardRank cardRank, CardSuit cardSuit){
        this.cardRank = cardRank;
        this.cardSuit = cardSuit;
    }

    public CardRank getCardRank() {
        return cardRank;
    }

    public CardSuit getCardSuit() {
        return cardSuit;
    }

    public int getValue(int currentScore){
        if (cardRank == CardRank.ACE) {
            if (currentScore + 11 > 21) {
                return 1;
            } else {
                return 11;
            }
        }
        return cardRank.getValue();
    }
}
