package com.WCY20IJ1S1.Casino.Controller;

import com.WCY20IJ1S1.Casino.Service.APIService;
import com.WCY20IJ1S1.Casino.Service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import javax.swing.plaf.basic.BasicInternalFrameTitlePane;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.Map;
import java.util.Objects;

@RestController
@Controller
@RequestMapping("/API")
public class APIController {

    @Autowired
    private APIService apiService;
    @Autowired
    private PaymentService paymentService;
    @PostMapping()
    public ResponseEntity<String> makePayment(@RequestBody Map<String, String> payload) throws URISyntaxException, IOException, InterruptedException {
        String paymentUrl = apiService.CreateOrder(Double.parseDouble(payload.get("amount")), payload.get("nickName"));
        return new ResponseEntity<>("{\"paymentUrl\" : \"" + paymentUrl + "\"}", HttpStatus.CREATED);
    }
    @GetMapping("/{amount}")
    public RedirectView makePayment(@PathVariable ("amount") String amount) throws URISyntaxException, IOException, InterruptedException {
        String paymentUrl = apiService.CreateOrder(Double.parseDouble(amount), "Mateusz");
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        return new RedirectView(paymentUrl);
    }

    @GetMapping("/check/{nickName}")
    public ResponseEntity<String> controlPayment(@PathVariable ("nickName") String nickName) throws URISyntaxException, IOException, InterruptedException {
        String[] paymentStatus = apiService.ConfirmOrder();
        if(Objects.equals(paymentStatus[1], "APPROVED")){
            paymentService.createPayment("PayPal", paymentStatus[0], nickName);
        }
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Location", "/StartPage?ResponseNickName=" + nickName);
        return new ResponseEntity<>(headers, HttpStatus.FOUND);
    }
}
