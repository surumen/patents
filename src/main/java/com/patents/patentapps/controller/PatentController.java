package com.patents.patentapps.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.patents.patentapps.services.PatentLookupService;

@Controller
public class PatentController {

    @Autowired
    private PatentLookupService lookupService;

    @RequestMapping(value = {"", "/", "/index"})
    public String showAllPatents(Model model) {
        return "index";
    }

    @PostMapping("/patents")
    public String postUsers(Model model) {
        model.addAttribute("patents", lookupService.getPatents());
        return "patentslist";
    }


}
