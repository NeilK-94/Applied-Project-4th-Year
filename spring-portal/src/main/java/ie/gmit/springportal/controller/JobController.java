package ie.gmit.springportal.controller;

/**
 * The JobController exposes the REST API endpoints. 
 */
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ie.gmit.springportal.model.Job;
import ie.gmit.springportal.model.User;
import ie.gmit.springportal.service.JobService;
import ie.gmit.springportal.service.UserService;

//CrossOrigin allows requests from specific origins, in this case, our React address
@CrossOrigin(origins = { "http://localhost:3000" })
@RestController
public class JobController {

	@Autowired
	private JobService jobService;

	@GetMapping("/jobs")
	public ResponseEntity<List<Job>> getAllJob() {
		return ResponseEntity.ok().body(jobService.getAllJob());
	}

	@GetMapping("/jobs/{id}")
	public ResponseEntity<Job> getJobById(@PathVariable long id) {
		return ResponseEntity.ok().body(jobService.getJobById(id));
	}

	@PostMapping("/jobs")
	public ResponseEntity<Job> createJob(@RequestBody Job job) {
		return ResponseEntity.ok().body(this.jobService.createJob(job));
	}

	@PutMapping("/jobs/{id}")
	public ResponseEntity<Job> updateJob(@PathVariable long id, @RequestBody Job job) {
		job.setId(id);
		return ResponseEntity.ok().body(this.jobService.updateJob(job));
	}

	@DeleteMapping("/jobs/{id}")
	public HttpStatus deleteJob(@PathVariable long id) {
		this.jobService.deleteJob(id);
		return HttpStatus.OK;
	}
	
	@DeleteMapping("/jobs")
	public HttpStatus deleteAllJobs() {
		this.jobService.deleteAllJobs();
		return HttpStatus.OK;
	}
	

}
