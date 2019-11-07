package ie.gmit.springportal.job;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

//	CrossOrigin allows requests from specific origins
@CrossOrigin(origins = { "http://localhost:3000"})
@RestController	//	Combination of @Controller and @ResponseBody
public class JobResource {
	@Autowired	//	Autowire the JobsHardcodedService so that we can retrieve details from business service.
	private JobsHardcodedService jobManagementService;

	@GetMapping("/users/{username}/jobs")	//	Address
	public List<Job> getAllJobs(@PathVariable String username) {
		return jobManagementService.findAll();
	}
}