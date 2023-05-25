package com.WCY20IJ1S1.Casino;

import com.WCY20IJ1S1.Casino.Service.APIService;
import com.WCY20IJ1S1.Casino.Service.RouletteService;
import com.WCY20IJ1S1.Casino.Service.SlotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import java.io.IOException;
import java.net.URISyntaxException;

@SpringBootApplication
@RestController
public class CasinoApplication {

	public static void main(String[] args) {
		SpringApplication.run(CasinoApplication.class, args);
	}

	@Autowired
	RouletteService rouletteService;
	@Autowired
	APIService apiService;

	@GetMapping("/home")
	public ModelAndView home() {
		// ModelAndView home_page = new ModelAndView("../../../../casino-react-app/src/components/home");
		ModelAndView home_page = new ModelAndView("../static/home");
		home_page.addObject("user_name", "Radek");
		return home_page;
	}

	@GetMapping("/roulette")
	public void roulette() {
		rouletteService.RouletteSpinning();
		rouletteService.UserBets("C-1.14.2.5.6.00", null);
		rouletteService.WinnerOrLoser(15, 0);
	}

	@GetMapping("/blackjack")
	public void blackjack() {

	}

	@GetMapping("/slot")
	public void slot() throws URISyntaxException, IOException, InterruptedException {
		SlotService slotService = new SlotService();
		slotService.GameStart(15);
	}

	@GetMapping("/paypal")
	public void paypal() throws URISyntaxException, IOException, InterruptedException {
		apiService.CreateOrder(15);
		apiService.ConfirmOrder();
	}
}
