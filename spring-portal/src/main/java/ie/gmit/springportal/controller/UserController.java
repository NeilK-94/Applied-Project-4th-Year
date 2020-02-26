package ie.gmit.springportal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import ie.gmit.springportal.model.User;
import ie.gmit.springportal.service.UserService;

//CrossOrigin allows requests from specific origins, in this case, our React address
@CrossOrigin(origins = { "http://localhost:3000" })
@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public ResponseEntity < List < User >> getAllUser() {
        return ResponseEntity.ok().body(userService.getAllUser());
    }

    @GetMapping("/users/{id}")
    public ResponseEntity < User > getUserById(@PathVariable long id) {
        return ResponseEntity.ok().body(userService.getUserById(id));
    }

    @PostMapping("/users")
    public ResponseEntity < User > createUser(@RequestBody User user) {
        return ResponseEntity.ok().body(this.userService.createUser(user));
    }

    @PutMapping("/users/{id}")
    public ResponseEntity < User > updateUser(@PathVariable long id, @RequestBody User user) {
        user.setId(id);
        return ResponseEntity.ok().body(this.userService.updateUser(user));
    }

    @DeleteMapping("/users/{id}")
    public HttpStatus deleteUser(@PathVariable long id) {
        this.userService.deleteUser(id);
        return HttpStatus.OK;
    }
}
