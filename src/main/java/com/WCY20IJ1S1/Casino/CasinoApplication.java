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
import org.springframework.web.servlet.view.RedirectView;

import java.io.IOException;
import java.net.URISyntaxException;

@SpringBootApplication
@RestController
public class CasinoApplication {

	public static void main(String[] args) {
		SpringApplication.run(CasinoApplication.class, args);
	}
	@Autowired
	APIService apiService;

	@GetMapping("/")
	public RedirectView redirectToHomePage() {
		return new RedirectView("/HomePage");
	}
	@GetMapping("/HomePage")
	public ModelAndView home() {
		ModelAndView home_page = new ModelAndView("../static/index");
		home_page.addObject("user_name", "Radek");
		return home_page;
	}
	@GetMapping("/StartPage")
	public ModelAndView start() {
		return new ModelAndView("../static/index");
	}
	@GetMapping("/payment")
	public ModelAndView pay(){
		return new ModelAndView("../static/index");
	}

	@GetMapping("/Roulette")
	public ModelAndView roulette() {
		return new ModelAndView("../static/index");
	}

	@GetMapping("/BlackJack")
	public ModelAndView blackjack() {
		return new ModelAndView("../static/index");
	}

	@GetMapping("/Slot")
	public ModelAndView slot() {
		return new ModelAndView("../static/index");
	}

	@GetMapping("/paypal")
	public void paypal() throws URISyntaxException, IOException, InterruptedException {
		apiService.ConfirmOrder();
	}

	@GetMapping("/Profile")
	public ModelAndView profile(){
		return new ModelAndView("../static/index");
	}
}
