package com.patents.patentapps;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;

import java.util.Arrays;
import java.util.List;

@SpringBootApplication
public class Application {

    private static final Logger log = LoggerFactory.getLogger(Application.class);
    static final String URL_PATENTS = "https://developer.uspto.gov/ibd-api/v1/patent/application?applicationNumber=US12645077";

    public static void main(String args[]) {
        SpringApplication.run(Application.class);
    }

    @Bean
    public RestTemplate restTemplate(RestTemplateBuilder builder) {
        return builder.build();
    }

    @Bean
    public CommandLineRunner run(RestTemplate restTemplate) throws Exception {
        return args -> {

            // HttpHeaders
            HttpHeaders headers = new HttpHeaders();

            headers.setAccept(Arrays.asList(new MediaType[] { MediaType.APPLICATION_JSON }));
            // Request to return JSON format
            headers.setContentType(MediaType.APPLICATION_JSON);

            // HttpEntity<Root>: To get result as Root.
            HttpEntity<Root> entity = new HttpEntity<Root>(headers);

            // Send request with GET method, and Headers.
            ResponseEntity<Root> response = restTemplate.exchange(URL_PATENTS, HttpMethod.GET, entity, Root.class);
//            Root data = restTemplate.getForObject(
//                    "https://developer.uspto.gov/ibd-api/v1/patent/application?applicationNumber=US12645077", Root.class);
//            log.info(data.toString());

            Root result = response.getBody();

            Response response1 = new Response();
            response1 = result.getResponse();

            List<Patent> patents = response1.getDocs();

            // Print the title from the list....
            for(Patent patent : patents) {
                System.out.println(patent.getTitle());
            }
        };
    }
}
