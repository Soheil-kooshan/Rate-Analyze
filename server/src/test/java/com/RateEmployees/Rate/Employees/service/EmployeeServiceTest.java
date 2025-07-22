package com.RateEmployees.Rate.Employees.service;


import com.RateEmployees.Rate.Employees.entity.Employee;
import com.RateEmployees.Rate.Employees.repository.EmployeeRepo;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import static org.mockito.Mockito.*;
import org.mockito.junit.jupiter.MockitoExtension;
import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

@ExtendWith(MockitoExtension.class)
public class EmployeeServiceTest {

    @Mock
    private EmployeeRepo employeeRepo;

    @InjectMocks
    private EmployeeService employeeService;

    @Test
    void testGetAllEmployees_ReturnsEmployeesList(){

       Employee emp1 = new Employee();
       emp1.setId(1);
       emp1.setFullName("soheil kooshan");
       emp1.setJob("DBA");

       Employee emp2 = new Employee();
        emp2.setId(1);
        emp2.setFullName("ali alipoor");
        emp2.setJob("SEO");

        List<Employee> empList = List.of(emp1 ,emp2);
        Mockito.when(employeeRepo.findAll()).thenReturn(empList);

        List<Employee> res = employeeService.getEmployees();

        assertEquals(2 , res.size());
        assertEquals("soheil kooshan" , res.get(0).getFullName());
        assertEquals("ali alipoor" , res.get(1).getFullName());
        assertFalse(res.isEmpty());
    }

    @Test
    void TestDeleteEmployeeById_ReturnsNothing(){

        int id = 1;

        employeeService.DeleteEmployee(id);

        verify(employeeRepo , times(1)).deleteById(id);

    }
}
