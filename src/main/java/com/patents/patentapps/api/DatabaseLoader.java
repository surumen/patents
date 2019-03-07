package com.patents.patentapps.api;
import com.patents.patentapps.services.PatentLookupService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

import javax.persistence.AttributeOverride;
import javax.persistence.AttributeOverrides;
import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Table;
import com.google.gson.Gson;

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final PatentRepository repository;
    @Autowired
    private PatentLookupService lookupService;

    @Column
    @ElementCollection(targetClass=Patent.class)
    private List<Patent> patents;

    @Autowired
    public DatabaseLoader(PatentRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {
        patents = lookupService.getPatents();

        String json = new Gson().toJson(patents);

        for(Patent patent : patents) {
            this.repository.save(patent);
        }

    }
}