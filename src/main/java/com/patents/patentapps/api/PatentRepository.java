package com.patents.patentapps.api;

import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMethod;

@CrossOrigin(origins = "https://github.com/surumen/patents",
        methods = { RequestMethod.GET },
        maxAge = 3600)
public interface PatentRepository extends CrudRepository<Patent, Long> {

}