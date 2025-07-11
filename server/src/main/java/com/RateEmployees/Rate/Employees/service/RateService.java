package com.RateEmployees.Rate.Employees.service;


import com.RateEmployees.Rate.Employees.entity.Rate;
import com.RateEmployees.Rate.Employees.repository.RateRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor

public class RateService {

    private final RateRepo rateRepo;
    
}
