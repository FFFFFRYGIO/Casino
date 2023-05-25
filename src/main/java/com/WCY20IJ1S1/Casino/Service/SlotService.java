package com.WCY20IJ1S1.Casino.Service;

import com.WCY20IJ1S1.Casino.Model.SlotsSymbols;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;

@Service
public class SlotService {

    private int Odds;
    private List<String> DroppedSymbols;
    private double WinningMoney;

    public double GameStart(double BetMoney){

        WinningMoney = 0;
        DroppedSymbols = new ArrayList<>();
        for(int i = 0; i < 3; i++)
        {
            DroppedSymbols.add(SlotsSymbols.RandomSymbol().toString());
        }

        int DiamondNum = Collections.frequency(DroppedSymbols, SlotsSymbols.DIAMOND.toString());

        if(DiamondNum == 3)
        {
            Odds = 25;
            WinningMoney = BetMoney + Odds * BetMoney;
        }
        else if(DiamondNum == 2)
        {
            Odds = 5;
            WinningMoney = BetMoney + Odds * BetMoney;
        }
        else if(DiamondNum == 1)
        {
            Odds = 1;
            WinningMoney = BetMoney + Odds * BetMoney;
        }
        else if(DiamondNum == 0)
        {
            if(!DroppedSymbols.contains(SlotsSymbols.APPLE.toString()) && !DroppedSymbols.contains(SlotsSymbols.LEMON.toString()) && !DroppedSymbols.contains(SlotsSymbols.CHERRY.toString()))
            {
                Odds = 15;
                WinningMoney = BetMoney + Odds * BetMoney;
            }
        }
        System.out.println(DroppedSymbols);
        System.out.println(WinningMoney);
        return WinningMoney;
    }

}
