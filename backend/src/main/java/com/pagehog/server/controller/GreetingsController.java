package com.pagehog.server.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingsController {
	
	@GetMapping("/api/greetings")
	public String getGreetings() {
		return "Hello Docker World";
	}
}
