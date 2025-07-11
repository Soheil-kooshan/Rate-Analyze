package com.RateEmployees.Rate.Employees.repository;

import com.RateEmployees.Rate.Employees.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepo extends JpaRepository<Employee,Integer> {
}
