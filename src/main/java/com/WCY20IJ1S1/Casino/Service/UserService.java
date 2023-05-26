package com.WCY20IJ1S1.Casino.Service;

import com.WCY20IJ1S1.Casino.Model.DataBase.User;
import com.WCY20IJ1S1.Casino.Repo.UserRepository;
import com.mongodb.DuplicateKeyException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class UserService {
    //dependency injection of user repository
    @Autowired
    private UserRepository userRepository;
    public List<User> allUsers(){
        return userRepository.findAll();
    }

    public User addUser(String nickName) {
        try {
            return userRepository.insert(new User(nickName, 0.00));
        } catch (org.springframework.dao.DuplicateKeyException e){
            return findUser(nickName);
        }
    }

    public User findUser(String nickName){
        return userRepository.findUserByNickName(nickName).orElseThrow(NoSuchElementException::new);
    }

    public void deleteUser(String nickName){
        userRepository.deleteUserByNickName(nickName);
    }
}
