package com.datahog.server.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingsController {
	
	@GetMapping("/api/greetings")
	public String GetGreetings() {
		return "Hello Docker World!";
	}
}
