package ie.gmit.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
/**
 * @author neilk
 * API used for basic authentication. Not in use,
 * was used to get familiar with authentication concepts
 */
//	Allow cross origin requests from specified address
@CrossOrigin(origins="http://localhost:3000")
@RestController
public class BasicAuthenticationController {

    @GetMapping(path = "/basicauth")
    public AuthenticationBean authBean() {
        //throw new RuntimeException("Some Error has Happened! Contact Support at ***-***");
        return new AuthenticationBean("You are authenticated");
    }   
}