package com.RateEmployees.Rate.Employees.service;


import com.RateEmployees.Rate.Employees.entity.Rate;
import com.RateEmployees.Rate.Employees.repository.RateRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor

public class RateService {

    private final RateRepo rateRepo;

    public List<Rate> getAllRates(int emp_id){
        return rateRepo.findByEmployee_IdOrderByDateAsc(emp_id);
    }

    public List<Rate> getByMonthAndYear(int empId , int year ,int month) {
        LocalDate start = LocalDate.of(year, month, 1);
        LocalDate end = start.plusMonths(1);
        return rateRepo.findByMonthAndYearAndEmployee_IdOrderByDateAsc(empId ,start, end);
    }

    public String registerRate(Rate r){

        LocalDate date = r.getDate();
        System.out.println(r);
        int empId = r.getEmployee().getId();
        Optional<Rate> existing = rateRepo.findByEmployee_IdAndDate(empId , date);

        if(existing.isPresent()){
            return "You already rated in this date!";
        }

        Rate rate = new Rate();
        rate.setRate(r.getRate());
        rate.setEmployee(r.getEmployee());
        rate.setDate(r.getDate());

        rateRepo.save(rate);
        return "Successfully added!";

    }

}
