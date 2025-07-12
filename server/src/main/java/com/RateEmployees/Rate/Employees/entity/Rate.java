package com.RateEmployees.Rate.Employees.entity;


import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Data
@Entity
@Table(name = "Rate")
public class Rate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id" , nullable = false , unique = true)
    private int id;

    @Column(name = "date" , nullable = false )
    private LocalDate date;

    @Column(name = "rate" , nullable = false)
    @Embedded
    private ScoreSet rate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "employeeId" , nullable = false)
    private Employee employee;

}
