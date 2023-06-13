package com.WCY20IJ1S1.Casino.Model.API;

public class PurchaseUnit {

    //Maybe we can delete this later
    private String reference_id = "d9f80740-38f0-11e8-b467-0ed5f89f718b";
    private Amount amount = new Amount();

    public String getReferenceId() {
        return reference_id;
    }

    public void setReferenceId(String referenceId) {
        this.reference_id = referenceId;
    }

    public Amount getAmount() {
        return amount;
    }

    public void setAmount(Amount amount) {
        this.amount = amount;
    }

}
