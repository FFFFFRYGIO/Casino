package com.WCY20IJ1S1.Casino.Controller;

import com.WCY20IJ1S1.Casino.Model.DataBase.Payment;
import com.WCY20IJ1S1.Casino.Service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/Payment")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping()
    public ResponseEntity<Payment> createPayment(@RequestBody Map<String, String> payload){
        return new ResponseEntity<>(
                paymentService.createPayment(
                payload.get("name"),
                payload.get("income"),
                payload.get("nickName")),
                HttpStatus.CREATED);
    }

}
