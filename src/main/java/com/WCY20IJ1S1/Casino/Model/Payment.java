package com.WCY20IJ1S1.Casino.Model;

import java.time.LocalDate;

public class Payment {
    private String name;
    private LocalDate paymentDate;
    private Double income;
    private Double value;

    public Payment(String name, LocalDate paymentDate, Double income, Double value) {
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

    public Double getIncome() {
        return income;
    }

    public Double getValue() {
        return value;
    }
}


