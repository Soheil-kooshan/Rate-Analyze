package com.RateEmployees.Rate.Employees.service;

import com.RateEmployees.Rate.Employees.entity.Employee;
import com.RateEmployees.Rate.Employees.entity.Rate;
import com.RateEmployees.Rate.Employees.entity.ScoreSet;
import com.RateEmployees.Rate.Employees.repository.RateRepo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import static org.mockito.Mockito.*;
import org.mockito.junit.jupiter.MockitoExtension;
import static org.junit.jupiter.api.Assertions.*;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@ExtendWith(MockitoExtension.class)
public class RateServiceTest {

    @InjectMocks
    private RateService rateService;

    @Mock
    private RateRepo rateRepo;


    Employee emp1 = new Employee(1 , "soheil kooshan" , "DBA" , null);
    Employee emp2 = new Employee(2 , "ali alipoor" , "SEO" , null);

    ScoreSet s1 =  new ScoreSet(3,3,3);
    ScoreSet s2 =  new ScoreSet(1,4,4);
    ScoreSet s3 =  new ScoreSet(4,5,3);

    Rate rate1 = new Rate(1 , LocalDate.parse("2025-06-01") ,s1, emp1);
    Rate rate2 = new Rate(2 , LocalDate.parse("2025-08-01") ,s2, emp1);
    Rate rate3 = new Rate(3 , LocalDate.parse("2025-01-04") ,s3, emp2);
    Rate rate4 = new Rate(4 , LocalDate.parse("2025-06-04") ,s2, emp1);


    @Test
    void TestGetAllRates_ReturnsRateList(){

        Mockito.when(rateRepo.findByEmployee_IdOrderByDateAsc(1)).thenReturn(List.of(rate1 ,rate2));

        List<Rate> res = rateService.getAllRates(1);

        assertEquals(2 , res.size());
        assertFalse(res.isEmpty());
        assertEquals(1 , res.get(0).getId());
        assertEquals( LocalDate.parse("2025-08-01") , res.get(1).getDate());

    }

    @Test
    void TestGetByMonthAndYear_ReturnsRateList(){

        Mockito.when(rateRepo.findByMonthAndYearAndEmployee_IdOrderByDateAsc(
                1,
                LocalDate.parse("2025-06-01"),
                LocalDate.parse("2025-07-01"))).thenReturn(List.of(rate1 , rate4));


        List<Rate> res = rateService.getByMonthAndYear(1,2025 ,6);

        assertEquals(2 , res.size());
        assertEquals(emp1 , res.get(0).getEmployee());
        assertEquals(emp1 , res.get(1).getEmployee());
        assertFalse(res.isEmpty());
    }

    @Test
    void TestRateRegister_ReturnsSuccessMessage(){

        when(rateRepo.findByEmployee_IdAndDate(1, rate2.getDate()))
                .thenReturn(Optional.empty());

        String res = rateService.registerRate(rate2);

        assertEquals("Successfully added!" , res);
        verify(rateRepo).save(any(Rate.class));
    }

    @Test
    void TestRateRegister_ReturnsAlreadyExistsMessage(){

        when(rateRepo.findByEmployee_IdAndDate(1, rate2.getDate()))
                .thenReturn(Optional.of(new Rate()));

        String res = rateService.registerRate(rate2);

        assertEquals("You already rated in this date!" , res);
        verify(rateRepo,never()).save(any());

    }
}
