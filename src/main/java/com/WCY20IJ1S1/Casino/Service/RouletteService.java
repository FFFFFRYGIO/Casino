package com.WCY20IJ1S1.Casino.Service;

import com.WCY20IJ1S1.Casino.Model.Roulette.RouletteNumbers;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Stream;

@Service
public class RouletteService {

    private RouletteNumbers rouletteNumbers = new RouletteNumbers();
    private List<String> UserBetNumbersCat1;
    private List<String> UserBetNumbersCat2;
    private String WinningNumber;
    private int Odds;

    public String RouletteSpinning(){

        Random random = new Random();
        List<String> AllNumbers = Stream.of(rouletteNumbers.GREEN, rouletteNumbers.BLACK, rouletteNumbers.RED).flatMap(Collection::stream).toList();
        WinningNumber = AllNumbers.get(random.nextInt(AllNumbers.size()));
        System.out.println(WinningNumber);
        return WinningNumber;
    }

    public void UserBets(String ButtonID1, String ButtonID2){

        UserBetNumbersCat1 = new ArrayList<>();
        UserBetNumbersCat2 = new ArrayList<>();

        if(ButtonID1 != null)
        {
            String[] ButtonID1Num = ButtonID1.substring(2).split("\\.");
            UserBetNumbersCat1.addAll(Arrays.asList(ButtonID1Num));
        }

        if(ButtonID2 != null)
        {
            String[] ButtonID2Num = ButtonID2.substring(2).split("\\.");
            UserBetNumbersCat2.addAll(Arrays.asList(ButtonID2Num));
        }
    }

    public double WinnerOrLoser(double BetMoney1, double BetMoney2){

        double WinningMoney = 0;

        if(UserBetNumbersCat1.contains(WinningNumber))
        {
            int size = UserBetNumbersCat1.size();

            switch(size) {
                case 1: Odds = 35; break;
            }
            WinningMoney += BetMoney1 + Odds * BetMoney1;
        }

        if(UserBetNumbersCat2.contains(WinningNumber))
        {
            int size = UserBetNumbersCat2.size();

            switch(size) {
                case 12: Odds = 2; break;
                case 18: Odds = 1; break;
            }
            WinningMoney += BetMoney2 + Odds * BetMoney2;
        }

        System.out.println(WinningMoney);

        return WinningMoney;
    }

}
