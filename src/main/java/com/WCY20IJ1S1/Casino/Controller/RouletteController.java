package com.WCY20IJ1S1.Casino.Controller;


import com.WCY20IJ1S1.Casino.Model.DataBase.User;
import com.WCY20IJ1S1.Casino.Service.PaymentService;
import com.WCY20IJ1S1.Casino.Service.RouletteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/R")
public class RouletteController {

    @Autowired
    private RouletteService rouletteService;

    @Autowired
    private PaymentService paymentService;

    @GetMapping("/Spinning")
    public ResponseEntity<String> RouletteSpinning(){
        String winningNumber = rouletteService.RouletteSpinning();
        return new ResponseEntity<>("{\"winningNumber\" : \"" + winningNumber + "\"}", HttpStatus.CREATED);
    }

    @PostMapping("/Bets")
    public void UserBets(@RequestBody Map<String, String> payload){
        rouletteService.UserBets(payload.get("ButtonID1"), payload.get("ButtonID2"));
    }

    @PostMapping("/WinningMoney")
    public ResponseEntity<String> WinnerOrLoser(@RequestBody Map<String, Double> payload){
        double winningMoney = rouletteService.WinnerOrLoser(payload.get("BetMoney1"), payload.get("BetMoney2"));
        return new ResponseEntity<>("{\"winningMoney\" : " + winningMoney + "}", HttpStatus.CREATED);
    }
}
