package com.RateEmployees.Rate.Employees.entity;

import jakarta.persistence.Embeddable;

@Embeddable
public class ScoreSet {
   private int behavior;
   private int dicipline;
   private int quality;
}
