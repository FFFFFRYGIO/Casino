package com.WCY20IJ1S1.Casino.Repo;

import com.WCY20IJ1S1.Casino.Model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface UserRepository extends MongoRepository<User, String> {
    // Contains all necessary functions for DB operations
    Optional<User> findUserByNickName(String nickName);
    void deleteUserByNickName(String nickName);

}
