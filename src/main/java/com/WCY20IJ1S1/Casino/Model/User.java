package com.WCY20IJ1S1.Casino.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

// user entity for DB
@AllArgsConstructor
@NoArgsConstructor
@Data
@Document(collection = "User")
public class User {

    //define DB id of user object
    @Id
    //private ObjectId _id;
    private String nickName;
    private Double balance;
    //define reference for another table in DB (table of payment history)
    @DocumentReference
    private List<Payment> history;

    public User(String nickName, Double balance){
        this.nickName = nickName;
        this.balance = balance;
    }

    public String getNickName() {
        return nickName;
    }

    public Double getBalance() {
        return balance;
    }

    public List<Payment> getHistory() {
        return history;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public void setBalance(Double balance) {
        this.balance = balance;
    }

    public void setHistory(List<Payment> history) {
        this.history = history;
    }
}
