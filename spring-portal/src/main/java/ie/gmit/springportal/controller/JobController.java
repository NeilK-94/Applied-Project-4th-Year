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
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ie.gmit.springportal.model.Job;
import ie.gmit.springportal.service.JobService;

//CrossOrigin allows requests from specific origins, in this case, our React address
@CrossOrigin(origins = { "http://localhost:3000" })
@RestController
public class JobController {
	
	private int idCounter = 100;

	@Autowired
	private JobService jobService;

	@PostMapping(path = "/{employer}/{jobTitle}/{description}", produces = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.APPLICATION_XML_VALUE })
	public String create(@PathVariable String employer, @PathVariable String jobTitle,
			@PathVariable String description) {
		Job j = jobService.create(idCounter++, employer, jobTitle, description);
		return j.toString();
	}

	@RequestMapping(method = RequestMethod.GET, path = "/{employer}/jobs", produces = {
			MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	public List<Job> getAllJobs(@PathVariable String employer, String description) {
		return jobService.findAllByEmployer(employer, description);
	}
	
	@RequestMapping(method = RequestMethod.GET, path = "/jobs/{jobId}", produces = {
			MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	public Job getById(@PathVariable int jobId) {
		return jobService.findById(jobId);
		
	}

	@RequestMapping(method = RequestMethod.GET, path = "/jobs/", produces = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.APPLICATION_XML_VALUE })
	public List<Job> getAll() {
		return jobService.retrieveAll();
	}

	@RequestMapping("/update") // use pathVariable, look into RequestBody
	public String update(@RequestParam String employer, @RequestParam String jobTitle,
			@RequestParam String description) {
		Job j = jobService.update(employer, jobTitle, description);
		return j.toString();
	}

	@DeleteMapping("/deleteAll")
	public ResponseEntity<Void> deleteAll() {
		jobService.deleteAll();
		return ResponseEntity.noContent().build();
	}

//	@DeleteMapping("/delete/{employer}") // will need to delete by id NOT employer. Employer could have two jobs up..
//	public ResponseEntity<Void> deleteJob(@PathVariable String employer) {
//		Job j = jobService.delete(employer);
//		if (j != null) {
//			return ResponseEntity.noContent().build(); // If Request is successful, return no content back.
//		}
//		return ResponseEntity.notFound().build(); // If delete failed, return error - resource not found.
//	}
	
	@DeleteMapping("/delete/{jobId}")
	  public ResponseEntity<Void> deleteJob(@PathVariable int jobId) {
	    Job j = jobService.deleteById(jobId);
	    if (j != null) {
	      return ResponseEntity.noContent().build();
	    }
	    return ResponseEntity.notFound().build();
	  }


}
