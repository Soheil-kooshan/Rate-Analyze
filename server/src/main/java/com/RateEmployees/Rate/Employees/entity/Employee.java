package com.RateEmployees.Rate.Employees.entity;


import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name = "employee_tbl")

public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id" , nullable = false , unique = true)
    private int id;

    @Column(name = "fullName" , nullable = false)
    private String fullName;

    @Column(name = "job" ,nullable = false )
    private String job;

    @OneToMany(mappedBy = "employee")
    private List<Rate> rates;

}
