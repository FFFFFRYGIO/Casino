package com.WCY20IJ1S1.Casino.Model.BlackJack;

import java.util.List;

public class BlackJackData {

    private List<List<Card>> PlayerHands;
    private List<Card> CroupierHand;
    private List<Integer> PlayerScores;
    private int CroupierScore;
    private boolean isGameOver;
    private boolean isPlayerWinner;
    private double WinningMoney;

    public List<List<Card>> getPlayerHands() {
        return PlayerHands;
    }

    public void setPlayerHands(List<List<Card>> playerHands) {
        this.PlayerHands = playerHands;
    }

    public List<Card> getCroupierHand() {
        return CroupierHand;
    }

    public void setCroupierHand(List<Card> croupierHand) {
        this.CroupierHand = croupierHand;
    }

    public List<Integer> getPlayerScores() {
        return PlayerScores;
    }

    public void setPlayerScores(List<Integer> playerScores) {
        this.PlayerScores = playerScores;
    }

    public int getCroupierScore() {
        return CroupierScore;
    }

    public void setCroupierScore(int croupierScore) {
        this.CroupierScore = croupierScore;
    }

    public boolean isGameOver() {
        return isGameOver;
    }

    public void setGameOver(boolean gameOver) {
        isGameOver = gameOver;
    }

    public boolean isPlayerWinner() {
        return isPlayerWinner;
    }

    public void setPlayerWinner(boolean playerWinner) {
        isPlayerWinner = playerWinner;
    }

    public double getWinningMoney() {
        return WinningMoney;
    }

    public void setWinningMoney(double winningMoney) {
        this.WinningMoney = winningMoney;
    }
}
