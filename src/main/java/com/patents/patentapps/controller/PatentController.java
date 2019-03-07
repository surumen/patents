package com.patents.patentapps.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class PatentController {


    @RequestMapping(value = {"", "/", "/index"})
    public String index() {
        return "index";
    }


}
