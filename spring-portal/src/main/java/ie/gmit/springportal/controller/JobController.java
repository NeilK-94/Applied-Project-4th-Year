package ie.gmit.springportal.controller;
/**
 * The JobController exposes the REST API endpoints. 
 */
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ie.gmit.springportal.model.Job;
import ie.gmit.springportal.service.JobService;

//CrossOrigin allows requests from specific origins, in this case, our React address
@CrossOrigin(origins = { "http://localhost:3000"})
@RestController
public class JobController {

	@Autowired
	private JobService jobService;
	
	@RequestMapping("/create")	//	Not sure to use RequestMapping or GetMapping
	public String create(@RequestParam String employer, @RequestParam String jobTitle, @RequestParam String description) {
		Job j = jobService.create(employer, jobTitle, description);
		return j.toString();	
	}
	
	@GetMapping(path="/get", 
			produces = {MediaType.APPLICATION_XML_VALUE,
						MediaType.APPLICATION_JSON_VALUE})	
	public List<Job> getJob(@RequestParam String employer) {	//	get all jobs offered by a specific employer
		return jobService.findAllByEmployer(employer);
	}
	
	@RequestMapping("/getAll")
	public List<Job> getAll(){
		return jobService.retrieveAll();
	}
	
	@RequestMapping("/update")
	public String update(@RequestParam String employer, @RequestParam String jobTitle, @RequestParam String description){
		Job j = jobService.update(employer, jobTitle, description);
		return j.toString();
	}
	
	@RequestMapping("/delete")
	public String delete(@RequestParam String employer){
		jobService.delete(employer);
		return "Deleted: " + employer;
	}
	
	@RequestMapping("/deleteAll")
	public String deleteAll() {
		jobService.deleteAll();
		return "Deleted all jobs";
	}
	
	
	
}
