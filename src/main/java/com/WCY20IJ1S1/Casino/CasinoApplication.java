package com.WCY20IJ1S1.Casino;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@SpringBootApplication
@RestController
public class CasinoApplication {

	public static void main(String[] args) {
		SpringApplication.run(CasinoApplication.class, args);
	}

	@GetMapping("/home")
	public ModelAndView home() {
		ModelAndView home_page = new ModelAndView("home");
		home_page.addObject("user_name", "Radek");
		return home_page;
	}
}
