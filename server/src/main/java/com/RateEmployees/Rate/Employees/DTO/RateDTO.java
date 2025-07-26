package com.RateEmployees.Rate.Employees.DTO;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RateRequestDTO {

    @NotNull(message = "Date cannot be null")
    private LocalDate date;

    @NotNull(message = "Rate cannot be null")
    private com.RateEmployees.Rate.Employees.dto.ScoreSetDTO rate;

    @NotNull(message = "Employee ID cannot be null")
    @Min(1)
    private Integer employeeId;
}