package com.ems;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.sql.init.SqlInitializationAutoConfiguration;

//@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class,  SqlInitializationAutoConfiguration.class})
//@SpringBootApplication(exclude = SqlInitializationAutoConfiguration.class)
//@SpringBootApplication(scanBasePackages={ "com.ems","com.ems.controller","com.ems.exception","com.ems.model","com.ems.repository"},exclude = {DataSourceAutoConfiguration.class,  SqlInitializationAutoConfiguration.class})
@SpringBootApplication
public class EmsAdvance {

	public static void main(String[] args) {
		SpringApplication.run(EmsAdvance.class, args);
	}

}
