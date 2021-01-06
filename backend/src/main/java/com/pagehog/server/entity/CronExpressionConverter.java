package com.pagehog.server.entity;

import java.util.Arrays;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

import com.cronutils.model.Cron;
import com.cronutils.model.CronType;
import com.cronutils.model.definition.CronDefinitionBuilder;
import com.cronutils.parser.CronParser;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Converter
public class CronExpressionConverter implements AttributeConverter<Cron, String> {
	private static final Logger LOG = LoggerFactory.getLogger(CronExpressionConverter.class);
	
	@Override
	public String convertToDatabaseColumn(Cron expression) {
		return expression != null ? expression.toString() : null;
	}

	@Override
	public Cron convertToEntityAttribute(String string) {
		if (string == null || string.isBlank()) 
			return null;

		try {
			return new CronParser(CronDefinitionBuilder.instanceDefinitionFor(CronType.UNIX))
				.parse(string)
				.validate();

		} catch (IllegalArgumentException e) {
			LOG.error("Could not parse string " + string + " to a valid cron expression, returning null", e.getCause());
			return null;
		}
	}

}