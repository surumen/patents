package com.patents.patentapps;

import com.patents.patentapps.api.Patent;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.patents.patentapps.services.PatentLookupService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;

import java.util.List;

@SpringBootApplication
public class Application {
//    @Autowired
//    private PatentLookupService lookupService;

    public static void main(String args[]) {
        SpringApplication.run(Application.class, args);
    }

//    @Bean
//    public CommandLineRunner run() throws Exception {
//        return args -> {
//
//            List<Patent> patents = lookupService.getPatents();
//
//            // Print the titles from the list of patents
//            for(Patent patent : patents) {
//                System.out.println(patent.getTitle());
//            }
//        };
//    }

}
