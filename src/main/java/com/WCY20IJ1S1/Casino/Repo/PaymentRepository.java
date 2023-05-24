package com.WCY20IJ1S1.Casino.Repo;

import com.WCY20IJ1S1.Casino.Model.Payment;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentRepository extends MongoRepository<Payment, ObjectId> {

}
