package com.WCY20IJ1S1.Casino.Service;

import com.WCY20IJ1S1.Casino.Model.DataBase.User;
import com.WCY20IJ1S1.Casino.Repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    //dependency injection of user repository
    @Autowired
    private UserRepository userRepository;
    public List<User> allUsers(){
        return userRepository.findAll();
    }

    public User addUser(User user) {
        return userRepository.insert(user);
    }

    public User findUser(String nickName){
        return userRepository.findUserByNickName(nickName).orElseThrow(RuntimeException::new);
    }

    public void deleteUser(String nickName){
        userRepository.deleteUserByNickName(nickName);
    }
}
