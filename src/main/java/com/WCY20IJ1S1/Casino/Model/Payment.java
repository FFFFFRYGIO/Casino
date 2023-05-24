package com.WCY20IJ1S1.Casino.Model;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

import java.time.LocalDate;

//payment entity for DB
@AllArgsConstructor
@NoArgsConstructor
public class Payment {
    @Id
    private ObjectId id;
    private String name;
    private LocalDate paymentDate;
    private double income;
    private double value;

    public Payment(String name, LocalDate paymentDate, double income, double value) {
        this.name = name;
        this.paymentDate = paymentDate;
        this.income = income;
        this.value = value;
    }

    public String getName() {
        return name;
    }

    public LocalDate getPaymentDate() {
        return paymentDate;
    }

    public double getIncome() {
        return income;
    }

    public double getValue() {
        return value;
    }
}


