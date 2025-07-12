package com.RateEmployees.Rate.Employees.controller;

import com.RateEmployees.Rate.Employees.entity.Rate;
import com.RateEmployees.Rate.Employees.service.RateService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173",allowCredentials = "true")
@RequestMapping("/rate")
@RequiredArgsConstructor
public class RateControl {

    private final RateService rateService;

    @GetMapping("/getAllRates")
    public List<Rate> getAllRates(@RequestParam int empId){
        return rateService.getAllRates(empId);
    }

    @GetMapping("/getByMonthAndYear")
    public List<Rate> getByMonthAndYear(@RequestParam int empId , int year , int month){
        return rateService.getByMonthAndYear(empId ,year , month);
    }

    @PostMapping("/RegisterRate")
    public String getAllRates(@RequestBody Rate rate){
        return rateService.registerRate(rate);
    }
}
