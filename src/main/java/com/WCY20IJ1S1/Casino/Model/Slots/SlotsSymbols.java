package com.WCY20IJ1S1.Casino.Model.Slots;

import java.util.Random;

public enum SlotsSymbols {

    DIAMOND,
    SEVEN,
    CHERRY,
    LEMON,
    APPLE,
    BELL;

    public static SlotsSymbols RandomSymbol(){
        SlotsSymbols[] symbols = SlotsSymbols.values();
        int len = symbols.length;
        int i = new Random().nextInt(len);
        return symbols[i];
    }
}
