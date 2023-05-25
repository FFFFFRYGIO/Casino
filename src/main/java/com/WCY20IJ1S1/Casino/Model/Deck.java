package com.WCY20IJ1S1.Casino.Model;

import java.util.Collections;
import java.util.LinkedList;
import java.util.List;

public class Deck {

    private LinkedList<Card> deck;
    private int DrawCardCounter = 0;

    public Deck(){
        deck = new LinkedList<>();
        for(CardSuit cardSuit : CardSuit.values())
        {
            for(CardRank cardRank : CardRank.values())
            {
                deck.add(new Card(cardRank, cardSuit));
            }
        }
        DeckShuffle();
    }

    private void DeckShuffle() {
        Collections.shuffle(deck);
    }

    public Card DrawCardFromDeck(){
        if(DrawCardCounter == 52)
        {
            DeckShuffle();
        }
        Card card = deck.pollFirst();
        DrawCardCounter++;
        return card;
    }

    public void CardReturnsToDeck(Card card){
        deck.add(card);
    }

}
