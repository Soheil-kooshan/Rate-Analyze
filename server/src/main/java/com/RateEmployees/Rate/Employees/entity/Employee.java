package com.RateEmployees.Rate.Employees.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Entity
@Table(name = "employee_tbl")
@AllArgsConstructor
@NoArgsConstructor
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id" , nullable = false , unique = true)
    private int id;

    @Column(name = "fullName" , nullable = false)
    private String fullName;

    @Column(name = "job" ,nullable = false )
    private String job;

    @OneToMany(mappedBy = "employee" ,cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Rate> rates;

}
