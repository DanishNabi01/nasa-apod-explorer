package com.danish.apod.nasa_apod_backend;

import org.springframework.cache.annotation.EnableCaching;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
@EnableCaching
@SpringBootApplication
public class NasaApodBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(NasaApodBackendApplication.class, args);
	}

}
