package com.RateEmployees.Rate.Employees.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Data;

@Embeddable
@Data
public class ScoreSet {
   @Column(nullable = false)
   private int behavior;
   @Column(nullable = false)
   private int dicipline;
   @Column(nullable = false)
   private int quality;
}
