package com.patents.patentapps.api;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown=true)
public class Response {

    private int numFound;
    private int start;
    private List<Patent> docs;

    public void setNumFound(int numFound){
        this.numFound = numFound;
    }
    public int getNumFound(){
        return this.numFound;
    }
    public void setStart(int start){
        this.start = start;
    }
    public int getStart(){
        return this.start;
    }
    public void setDocs(List<Patent> docs){
        this.docs = docs;
    }
    public List<Patent> getDocs(){
        return this.docs;
    }
}
