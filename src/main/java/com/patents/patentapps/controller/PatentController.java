package com.patents.patentapps.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;


@Controller
public class PatentController {

    @CrossOrigin
    @RequestMapping(value = {"", "/", "/index"})
    public String index() {
        return "index";
    }


}
