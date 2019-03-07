package com.patents.patentapps.api;

import org.springframework.data.repository.CrudRepository;


public interface PatentRepository extends CrudRepository<Patent, Long> {

}