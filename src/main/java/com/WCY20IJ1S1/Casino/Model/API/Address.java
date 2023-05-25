package com.WCY20IJ1S1.Casino.Model.API;

public class Address {
    private String address_line_1 = "123 Shipping St.";
    private String admin_area_2 = "City";
    private String admin_area_1 = "State";
    private String postal_code = "12345";
    private String country_code = "US";

    public String getAddress_line_1() {
        return address_line_1;
    }

    public void setAddress_line_1(String address_line_1) {
        this.address_line_1 = address_line_1;
    }

    public String getAdmin_area_2() {
        return admin_area_2;
    }

    public void setAdmin_area_2(String admin_area_2) {
        this.admin_area_2 = admin_area_2;
    }

    public String getAdmin_area_1() {
        return admin_area_1;
    }

    public void setAdmin_area_1(String admin_area_1) {
        this.admin_area_1 = admin_area_1;
    }

    public String getPostal_code() {
        return postal_code;
    }

    public void setPostal_code(String postal_code) {
        this.postal_code = postal_code;
    }

    public String getCountry_code() {
        return country_code;
    }

    public void setCountry_code(String country_code) {
        this.country_code = country_code;
    }
}
