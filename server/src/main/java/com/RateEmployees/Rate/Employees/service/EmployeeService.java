package com.RateEmployees.Rate.Employees.service;


import com.RateEmployees.Rate.Employees.entity.Employee;
import com.RateEmployees.Rate.Employees.repository.EmployeeRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class EmployeeService {

    public final EmployeeRepo employeeRepo;

    public List<Employee> getEmployees(){
        return employeeRepo.findAll();
    }

    public Employee addEmployee(Employee employee){
        return employeeRepo.save(employee);
    }
}
