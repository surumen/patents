package com.patents.patentapps.api;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

import lombok.Data;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown=true)
public class Patent {

    private @Id @GeneratedValue Long id;

    @JsonProperty("applicationType")
    private String applicationType;

    @JsonProperty("documentId")
    private String documentId;

    @JsonProperty("applicationNumber")
    private String applicationNumber;

    @JsonProperty("documentType")
    private String documentType;

    @JsonProperty("publicationDate")
    private String publicationDate;

    @JsonProperty("documentDate")
    private String documentDate;

    @JsonProperty("productionDate")
    private String productionDate;

    @JsonProperty("applicationDate")
    private String applicationDate;

    @Column
    @ElementCollection(targetClass=String.class)
    @JsonProperty("applicant")
    private List<String> applicant;

    @Column
    @ElementCollection(targetClass=String.class)
    @JsonProperty("inventor")
    private List<String> inventor;

    @Column
    @ElementCollection(targetClass=String.class)
    @JsonProperty("assignee")
    private List<String> assignee;

    @JsonProperty("title")
    private String title;

    @JsonProperty("archiveUrl")
    private String archiveUrl;

    @JsonProperty("pdfPath")
    private String pdfPath;

    @JsonProperty("year")
    private String year;

    @JsonProperty("_version_")
    private long version;


    public void setApplicationType(String applicationType){
        this.applicationType = applicationType;
    }
    public String getApplicationType(){
        return this.applicationType;
    }
    public void setDocumentId(String documentId){
        this.documentId = documentId;
    }
    public String getDocumentId(){
        return this.documentId;
    }
    public void setApplicationNumber(String applicationNumber){
        this.applicationNumber = applicationNumber;
    }
    public String getApplicationNumber(){
        return this.applicationNumber;
    }
    public void setDocumentType(String documentType){
        this.documentType = documentType;
    }
    public String getDocumentType(){
        return this.documentType;
    }
    public void setPublicationDate(String publicationDate){
        this.publicationDate = publicationDate;
    }
    public String getPublicationDate(){
        return this.publicationDate;
    }
    public void setDocumentDate(String documentDate){
        this.documentDate = documentDate;
    }
    public String getDocumentDate(){
        return this.documentDate;
    }
    public void setProductionDate(String productionDate){
        this.productionDate = productionDate;
    }
    public String getProductionDate(){
        return this.productionDate;
    }
    public void setApplicationDate(String applicationDate){
        this.applicationDate = applicationDate;
    }
    public String getApplicationDate(){
        return this.applicationDate;
    }
    public void setApplicant(List<String> applicant){
        this.applicant = applicant;
    }
    public List<String> getApplicant(){
        return this.applicant;
    }
    public void setInventor(List<String> inventor){
        this.inventor = inventor;
    }
    public List<String> getInventor(){
        return this.inventor;
    }
    public void setAssignee(List<String> assignee){
        this.assignee = assignee;
    }
    public List<String> getAssignee(){
        return this.assignee;
    }
    public void setTitle(String title){
        this.title = title;
    }
    public String getTitle(){
        return this.title;
    }
    public void setArchiveUrl(String archiveUrl){
        this.archiveUrl = archiveUrl;
    }
    public String getArchiveUrl(){
        return this.archiveUrl;
    }
    public void setPdfPath(String pdfPath){
        this.pdfPath = pdfPath;
    }
    public String getPdfPath(){
        return this.pdfPath;
    }
    public void setYear(String year){
        this.year = year;
    }
    public String getYear(){
        return this.year;
    }
    public void setVersion_(long version){
        this.version = version;
    }
    public long getVersion(){
        return this.version;
    }

}
