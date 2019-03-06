package com.patents.patentapps.services;

import com.patents.patentapps.api.Patent;

import java.util.List;

public interface LookupService {

    List<Patent> getPatents();
}
