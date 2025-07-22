package com.RateEmployees.Rate.Employees.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDate;

@Data
@Entity
@Table(name = "Rate")
@AllArgsConstructor
public class Rate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id" , nullable = false , unique = true)
    private int id;

    @Column(name = "date" , nullable = false )
    private LocalDate date;

    @Embedded
    private ScoreSet rate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "employeeId" , nullable = false)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Employee employee;

}
