package com.WCY20IJ1S1.Casino.Service;

import com.WCY20IJ1S1.Casino.Model.BlackJack.BlackJackData;
import com.WCY20IJ1S1.Casino.Model.BlackJack.Card;
import com.WCY20IJ1S1.Casino.Model.BlackJack.Deck;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BlackJackService {

    private List<List<Card>> PlayerHands;
    private List<Card> CroupierHand;
    private List<Integer> PlayerScores;
    private Deck deck = new Deck();
    private int CroupierScore;
    private boolean isGameOver;
    private boolean isPlayerWinner;
    private boolean isTie;
    private double WinningMoney;
    private int Odds = 2;
    private double BetMoneyInService;

    public void GameStart(double BetMoney){

        PlayerHands = new ArrayList<>();
        PlayerHands.add(new ArrayList<>());
        CroupierHand = new ArrayList<>();
        PlayerScores = new ArrayList<>();
        CroupierScore = 0;
        isGameOver = false;
        isPlayerWinner = false;
        isTie = false;
        WinningMoney = 0;
        BetMoneyInService = BetMoney;

        PlayerHands.get(0).add(deck.DrawCardFromDeck());
        CroupierHand.add(deck.DrawCardFromDeck());
        PlayerHands.get(0).add(deck.DrawCardFromDeck());
        CroupierHand.add(deck.DrawCardFromDeck());

        calculateScores();

        if (CroupierScore == 21)
        {
            isGameOver = true;
            if (PlayerScores.contains(21))
            {
                isTie = true;
            }
            else
            {
                isPlayerWinner = false;
            }
            calculateWinnings();
        }
    }

    public void calculateScores() {
        PlayerScores.clear();
        for (List<Card> hand : PlayerHands)
        {
            int score = 0;
            for (Card card : hand)
            {
                int cardScore = card.getValue(score);
                score += cardScore;
            }
            PlayerScores.add(score);
        }

        CroupierScore = 0;
        for (Card card : CroupierHand)
        {
            int cardScore = card.getValue(CroupierScore);
            CroupierScore += cardScore;
        }
    }

    private void checkGameOver() {
        boolean allHandsStand = true;
        boolean hasBlackjack = false;

        for (int score : PlayerScores)
        {
            if (score < 21)
            {
                allHandsStand = false;
                break;
            }
            else if (score == 21)
            {
                hasBlackjack = true;
            }
        }

        if (allHandsStand || CroupierScore > 21 || hasBlackjack)
        {
            isGameOver = true;

            if (allHandsStand || CroupierScore > 21)
            {
                isPlayerWinner = true;
                calculateWinnings();
            }
            else if (hasBlackjack)
            {
                isPlayerWinner = true;
                calculateWinnings();
            }
            else
            {
                isPlayerWinner = false;
                calculateWinnings();
            }
        }
    }

    private void calculateWinnings() {
        if (isTie)
        {
            WinningMoney = BetMoneyInService;
        }
        else if (isPlayerWinner)
        {
            WinningMoney = BetMoneyInService + BetMoneyInService * Odds;
        }
        else
        {
            WinningMoney = 0;
        }
    }

    public BlackJackData getBlackJackData(){
        BlackJackData blackJackData = new BlackJackData();
        blackJackData.setPlayerHands(PlayerHands);
        blackJackData.setCroupierHand(CroupierHand);
        blackJackData.setPlayerScores(PlayerScores);
        blackJackData.setCroupierScore(CroupierScore);
        blackJackData.setGameOver(isGameOver);
        blackJackData.setPlayerWinner(isPlayerWinner);
        blackJackData.setWinningMoney(WinningMoney);

        return blackJackData;
    }

    public void Hit(int handIndex) {
        PlayerHands.get(handIndex).add(deck.DrawCardFromDeck());
        calculateScores();
        checkGameOver();
    }

    public void Stand() {
        while (CroupierScore < 17) {
            CroupierHand.add(deck.DrawCardFromDeck());
            calculateScores();
        }
        checkGameOver();
    }

    public void split(int handIndex) {
        List<Card> currentHand = PlayerHands.get(handIndex);
        List<Card> newHand = new ArrayList<>();

        newHand.add(currentHand.remove(1));
        currentHand.add(deck.DrawCardFromDeck());
        newHand.add(deck.DrawCardFromDeck());

        PlayerHands.add(newHand);
        PlayerScores.add(0);

        calculateScores();
    }

}
