package com.WCY20IJ1S1.Casino.Controller;

import com.WCY20IJ1S1.Casino.Service.PaymentService;
import com.WCY20IJ1S1.Casino.Service.SlotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/S")
public class SlotsController {

    @Autowired
    private SlotService slotService;
    @Autowired
    private PaymentService paymentService;

    @GetMapping("/SymbolsGetter")
    public ResponseEntity<List<String>> GetSymbols(){
        return new ResponseEntity<>(slotService.SymbolGetter(), HttpStatus.OK);
    }

    @PostMapping("/WinningSymbolsAndBets")
    public ResponseEntity<Double> UserWinningInfo(@RequestBody Map<String, List<String>> payload){
        double winningMoney = slotService.GameStart(Double.parseDouble(
                payload.get("BetMoney").get(0)),
                payload.get("Symbols"));
        return new ResponseEntity<>(winningMoney, HttpStatus.CREATED);
    }
}
