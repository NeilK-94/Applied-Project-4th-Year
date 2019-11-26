package ie.gmit.springportal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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
	
	@RequestMapping("/create")	//	Not sure to use request or get
	public String create(@RequestParam String userName, @RequestParam String description) {
		Job j = jobService.create(userName, description);
		return j.toString();	
	}
	
	@RequestMapping("/get")
	public Job getJob(@RequestParam String userName) {
		return jobService.findByUserName(userName);
	}
	
	@RequestMapping("/getAll")
	public List<Job> getAll(){
		return jobService.retrieveAll();
	}
	
	@RequestMapping("/update")
	public String update(@RequestParam String userName, @RequestParam String description){
		Job j = jobService.update(userName, description);
		return j.toString();
	}
	
	@RequestMapping("/delete")
	public String delete(@RequestParam String userName){
		jobService.delete(userName);
		return "Deleted: " + userName;
	}
	
	@RequestMapping("/deleteAll")
	public String deleteAll() {
		jobService.deleteAll();
		return "Deleted all jobs";
	}
	
	
	
}
