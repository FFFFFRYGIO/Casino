package com.WCY20IJ1S1.Casino.Service;

import com.WCY20IJ1S1.Casino.Model.Slots.SlotSymbols;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class SlotService {

    private int Odds;
    private List<String> DroppedSymbols;
    private double WinningMoney;

    public List<String> SymbolGetter(){
        List<String> symbols = new ArrayList<>(SlotSymbols.SYMBOLS);
        Collections.shuffle(symbols);
        return symbols;
    }

    public double GameStart(double BetMoney, List<String> DroppedSymbols){

        WinningMoney = 0;
        System.out.println(BetMoney);
        System.out.println(DroppedSymbols);

        int DiamondNum = Collections.frequency(DroppedSymbols, "💎");

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
          if(!DroppedSymbols.contains("🍎") && !DroppedSymbols.contains("🍋") && !DroppedSymbols.contains("🍒"))
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
