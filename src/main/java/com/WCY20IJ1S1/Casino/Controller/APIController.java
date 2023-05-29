package com.WCY20IJ1S1.Casino.Controller;

import com.WCY20IJ1S1.Casino.Service.APIService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import javax.swing.plaf.basic.BasicInternalFrameTitlePane;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.Map;

@RestController
@Controller
@RequestMapping("/API")
public class APIController {

    @Autowired
    private APIService apiService;
    @GetMapping("/{amount}")
    //public void makePayment(@RequestBody Map<String, String> payload) throws URISyntaxException, IOException, InterruptedException {
    public RedirectView makePayment(@PathVariable ("amount") String amount) throws URISyntaxException, IOException, InterruptedException {
        //String paymentUrl = apiService.CreateOrder(Double.parseDouble(payload.get("amount")));
        String paymentUrl = apiService.CreateOrder(Double.parseDouble(amount));
        System.out.println(paymentUrl);
        return new RedirectView(paymentUrl);
//        return ResponseEntity.ok()
//                .header("Location", "/HomePage")
//                .body("pay");
        //String confirm = apiService.ConfirmOrder();
    }
    public RedirectView openPayment(String url) {
        return new RedirectView(url);
    }
}
