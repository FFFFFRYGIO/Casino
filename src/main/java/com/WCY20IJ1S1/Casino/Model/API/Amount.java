package com.WCY20IJ1S1.Casino.Model.API;

public class Amount {
    private String currency_code = "PLN";
    private String value;

    public String getCurrencyCode() {
        return currency_code;
    }

    public void setCurrencyCode(String currencyCode) {
        this.currency_code = currencyCode;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}
