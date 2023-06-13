package com.WCY20IJ1S1.Casino.Model.API;

public class ExperienceContext {
    private String payment_method_preference = "IMMEDIATE_PAYMENT_REQUIRED";
    private String payment_method_selected = "PAYPAL";
    private String brand_name = "Casino Royal";
    private String locale = "en-US";
    private String landing_page = "LOGIN";
    private String shipping_preference = "NO_SHIPPING";
    private String user_action = "PAY_NOW";
    private String return_url = "http://localhost:8080/API/check/";
    private String cancel_url = "http://localhost:8080/API/check/";

    public String getPayment_method_preference() {
        return payment_method_preference;
    }

    public void setPayment_method_preference(String payment_method_preference) {
        this.payment_method_preference = payment_method_preference;
    }

    public String getPayment_method_selected() {
        return payment_method_selected;
    }

    public void setPayment_method_selected(String payment_method_selected) {
        this.payment_method_selected = payment_method_selected;
    }

    public String getBrand_name() {
        return brand_name;
    }

    public void setBrand_name(String brand_name) {
        this.brand_name = brand_name;
    }

    public String getLocale() {
        return locale;
    }

    public void setLocale(String locale) {
        this.locale = locale;
    }

    public String getLanding_page() {
        return landing_page;
    }

    public void setLanding_page(String landing_page) {
        this.landing_page = landing_page;
    }

    public String getShipping_preference() {
        return shipping_preference;
    }

    public void setShipping_preference(String shipping_preference) {
        this.shipping_preference = shipping_preference;
    }

    public String getUser_action() {
        return user_action;
    }

    public void setUser_action(String user_action) {
        this.user_action = user_action;
    }

    public String getReturn_url() {
        return return_url;
    }

    public void setReturn_url(String return_url) {
        this.return_url = return_url;
    }

    public String getCancel_url() {
        return cancel_url;
    }

    public void setCancel_url(String cancel_url) {
        this.cancel_url = cancel_url;
    }
}
