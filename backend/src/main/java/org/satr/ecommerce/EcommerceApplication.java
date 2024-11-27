package org.satr.ecommerce;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
public class EcommerceApplication {

	public static void main(String[] args) {
		System.out.println("Main");
		SpringApplication.run(EcommerceApplication.class, args);
	}

}
