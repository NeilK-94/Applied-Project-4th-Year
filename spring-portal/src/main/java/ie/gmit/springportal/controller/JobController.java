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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import ie.gmit.springportal.model.Job;
import ie.gmit.springportal.service.JobService;
/**
 * The JobController exposes the REST API endpoints. 
 */
//CrossOrigin allows requests from specific origins, in this case, our React address
@CrossOrigin(origins = { "http://localhost:3000", "https://developer-job-site.herokuapp.com"})
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

//	@PostMapping("/jobs/new")
//	public ResponseEntity<Job> createJob(@RequestBody Job job) {
//		return ResponseEntity.ok().body(this.jobService.createJob(job));
//	}

	//			WORKING
//	@PostMapping("/jobs/{id}")
//	public ResponseEntity<Job> createJob(@PathVariable long id, @RequestBody Job job) {
//		Job createdJob = jobService.createJob(id, job);
//		// Location
//		// Get current resource url
//		/// {id}
//		java.net.URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdJob.getId())
//				.toUri();
//		return ResponseEntity.created(uri).build();
//	}
	
	@PostMapping("/jobs/")
	public ResponseEntity<Job> createJob(@RequestBody Job job) {
		Job createdJob = jobService.createJob(job);
		java.net.URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdJob.getId())
				.toUri();
		return ResponseEntity.created(uri).build();
	}

	@PutMapping("/jobs/{id}")
	public ResponseEntity<Job> updateJob(@PathVariable long id, @RequestBody Job job) {
		job.setId(id);
		return ResponseEntity.ok().body(this.jobService.updateJob(job));
	}
	
	@PutMapping("/jobs/apply/{id}")
	public ResponseEntity<Job> applyJob(@PathVariable long id, @RequestBody Job job) {
		job.setId(id);
		return ResponseEntity.ok().body(this.jobService.applyJob(job));
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
	
	@GetMapping("/employer")
	public List<Job> getByEmployer(@RequestParam String employer) {
		return jobService.findByEmployer(employer);	
	}
	@GetMapping("/location")
	public List<Job> getByLocation(@RequestParam String county) {
		return jobService.findByLocation(county);	
	}
	@GetMapping("/title")
	public List<Job> getByJobTitle(@RequestParam String jobTitle) {
		return jobService.findByJobTitle(jobTitle);	
	}

}
