package com.WCY20IJ1S1.Casino.Model.API;

public class Transcript {

    private String status;
    private String intent = "CAPTURE";
    //private List<PurchaseUnit> purchaseUnits = List.of(new PurchaseUnit());
    private PurchaseUnit[] purchase_units = {new PurchaseUnit()};
    private PaymentSource payment_source = new PaymentSource();

    public String getIntent() {
        return intent;
    }

    public void setIntent(String intent) {
        this.intent = intent;
    }

    public PurchaseUnit[] getPurchaseUnits() {
        return purchase_units;
    }

    public void setPurchaseUnits(PurchaseUnit[] purchaseUnits) {
        this.purchase_units = purchaseUnits;
    }

    public PaymentSource getPaymentSource() {
        return payment_source;
    }

    public void setPaymentSource(PaymentSource paymentSource) {
        this.payment_source = paymentSource;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
