package com.patents.patentapps.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.patents.patentapps.api.Patent;
import com.patents.patentapps.api.Response;
import com.patents.patentapps.api.Root;

import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.web.util.UriComponentsBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;

import java.util.List;

@Service
public class PatentLookupService implements LookupService {

    @Bean
    public RestTemplate restTemplate(RestTemplateBuilder builder) {
        return builder.build();
    }

    @Autowired
    private RestTemplate restTemplate;

    @Value("${api.url}")
    private String API_URL;

    @Override
    public List<Patent> getPatents() {
        // HttpHeaders
        HttpHeaders headers = new HttpHeaders();


        // Request to return JSON format
        headers.setContentType(MediaType.APPLICATION_JSON);

        // HttpEntity<Root>: To get result as Root.
        HttpEntity<Root> entity = new HttpEntity<>(headers);

        // Send request with GET method, and Headers.
        ResponseEntity<Root> response = restTemplate.exchange(API_URL, HttpMethod.GET, entity, Root.class);

        Root result = response.getBody();

        Response response1 = result.getResponse();

        List<Patent> patents = response1.getDocs();


        return patents;
    }

}
