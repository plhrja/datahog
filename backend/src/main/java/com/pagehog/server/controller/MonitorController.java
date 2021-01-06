package com.pagehog.server.controller;

import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import com.pagehog.server.entity.Monitor;
import com.pagehog.server.repository.IMonitorRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MonitorController {

	@Autowired
	private IMonitorRepository monitorRepository;

	@GetMapping("/monitor")
	public Iterable<MonitorResponse> getMonitors() {
		return StreamSupport.stream(monitorRepository.findAll().spliterator(), false)
			.map(monitor -> new MonitorResponse(monitor))
			.collect(Collectors.toList());
	}
}

class MonitorResponse {
	private String endpoint;
	private String schedule;

	public MonitorResponse(Monitor monitor) {
		this.endpoint = monitor.getEndpoint();
		this.schedule = monitor.getSchedule().asString();
	}

	public String getSchedule() {
		return schedule;
	}

	public String getEndpoint() {
		return endpoint;
	}
}
