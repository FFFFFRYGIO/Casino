package com.WCY20IJ1S1.Casino.Controller;

import com.WCY20IJ1S1.Casino.Model.DataBase.User;
import com.WCY20IJ1S1.Casino.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.parser.Entity;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("DB/user")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers(){
        return new ResponseEntity<>(userService.allUsers(), HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<User> addUser(@RequestBody Map<String, String> payload){
        return new ResponseEntity<>(userService.addUser(payload.get("nickName")), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{nickName}")
    public ResponseEntity<String> deleteUser(@PathVariable("nickName") String nickName){
        userService.deleteUser(nickName);
        return ResponseEntity.ok()
                .header("Location", "")
                .body("Delete");
    }

    @GetMapping("/get/{nickName}")
    public ResponseEntity<User> findUserByNickName(@PathVariable("nickName") String nickName){
        User user = userService.findUser(nickName);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
}
