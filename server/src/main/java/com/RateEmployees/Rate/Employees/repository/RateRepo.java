package com.RateEmployees.Rate.Employees.repository;

import com.RateEmployees.Rate.Employees.entity.Rate;
import org.springframework.boot.autoconfigure.jackson.Jackson2ObjectMapperBuilderCustomizer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RateRepo extends JpaRepository<Rate , Integer> {
}
