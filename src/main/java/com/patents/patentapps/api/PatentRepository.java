package com.patents.patentapps.api;

import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
public interface PatentRepository extends CrudRepository<Patent, Long> {

}