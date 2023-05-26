package com.WCY20IJ1S1.Casino.Model.API;

public class PaymentSource {
    private PayPal paypal = new PayPal();

    public PayPal getPayPal() {
        return paypal;
    }

    public void setPayPal(PayPal payPal) {
        this.paypal = payPal;
    }
}
