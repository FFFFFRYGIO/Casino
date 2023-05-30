package com.WCY20IJ1S1.Casino.Service;

import com.WCY20IJ1S1.Casino.Model.DataBase.Payment;
import com.WCY20IJ1S1.Casino.Model.DataBase.User;
import com.WCY20IJ1S1.Casino.Repo.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Optional;

@Service
public class PaymentService {
    //dependency injection of payment repository
    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private UserService userService;

    // dependency injection of mongoTemplate for more complex queries
    @Autowired
    private MongoTemplate mongoTemplate;
    public Payment createPayment(String name, String income, String nickName){
        LocalDate date = LocalDate.now();
        double oldBalance = userService.findUser(nickName).getBalance();
        double dIncome = Double.parseDouble(income);
        Payment payment = paymentRepository.insert(new Payment(name, date, dIncome, dIncome + oldBalance));
        mongoTemplate.update(User.class)
                .matching(Criteria.where("nickName").is(nickName))
                .apply(new Update().push("history").value(payment).set("balance", payment.getValue()))
                .first();
        return payment;
    }
}
