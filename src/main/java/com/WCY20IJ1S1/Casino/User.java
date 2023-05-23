package com.WCY20IJ1S1.Casino;

import java.lang.annotation.Documented;
// user entity for DB
public class User {
    private String nickName;
    private Double balance;

    public User(String nickName){
        this.nickName = nickName;
    }

    public User(String nickName, Double balance){
        this.nickName = nickName;
        this.balance = balance;
    }
}
