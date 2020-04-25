package ie.gmit.springportal.jwt;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;


//CrossOrigin allows requests from specific origins, in this case, our React address
@CrossOrigin(origins = { "http://localhost:3000", "https://developer-job-site.herokuapp.com"})
@RestController
public class JwtSignUpController {
//	@PostMapping("/signup/")
//	public ResponseEntity<JwtUserDetails> addUser(@RequestBody JwtUserDetails user){
//		JwtUserDetails createdUser = jobService.createJob(job);
//		java.net.URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdJob.getId())
//				.toUri();
//		return ResponseEntity.created(uri).build();
//		
//	}

}
