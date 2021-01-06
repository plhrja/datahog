package com.pagehog.server.entity;

import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.cronutils.model.Cron;

@Entity
@Table(name = "Monitor")
public class Monitor {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	private String endpoint;

	@Convert(converter = CronExpressionConverter.class)
	private Cron schedule;

	public int getId() {
		return id;
	}

	public String getEndpoint() {
		return endpoint;
	}
	
	public Cron getSchedule() {
		return schedule;
	}
}
