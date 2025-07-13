package com.RateEmployees.Rate.Employees.controller;


import com.RateEmployees.Rate.Employees.entity.Employee;
import com.RateEmployees.Rate.Employees.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5174")
@RequestMapping("/employee")
@RequiredArgsConstructor
public class EmployeeControl{

    private final EmployeeService employeeService;

    @GetMapping("/getEmployees")
    public List<Employee> getEmployees(){
          return employeeService.getEmployees();
    }

    @PostMapping("/AddEmployee")
    public Employee addEmployee(@RequestBody Employee employee){
         return employeeService.addEmployee(employee);
    }
}
