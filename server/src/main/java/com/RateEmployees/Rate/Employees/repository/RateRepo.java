package com.RateEmployees.Rate.Employees.repository;

import com.RateEmployees.Rate.Employees.entity.Rate;
import org.springframework.boot.autoconfigure.jackson.Jackson2ObjectMapperBuilderCustomizer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface RateRepo extends JpaRepository<Rate , Integer> {

    List<Rate> findByEmployee_Id(int employeeId);

    @Query("SELECT r FROM Rate r WHERE r.date >= :start AND r.date < :end")
    List<Rate> findByMonthAndYear(@Param("start") LocalDate start , @Param("end")LocalDate end);

    Optional<Rate> findByEmployee_IdAndDate(int employeeId, LocalDate date);
}
