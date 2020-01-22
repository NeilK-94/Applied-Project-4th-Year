package ie.gmit.springportal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ie.gmit.springportal.model.Job;
import ie.gmit.springportal.repository.JobRepository;

@Service
public class JobService {
	@Autowired
	private JobRepository jobRepository;	//	Hold a reference to our repository
	
	//	Create job
	public Job create(String employer, String jobTitle, String description) {
		return jobRepository.save(new Job(employer, jobTitle, description));	//	create job object then call the save method which is
																	//	automatically implemented with the repository interface
	}
	//	Retrieve all jobs
	public List<Job> retrieveAll() {
		return jobRepository.findAll();	//	Another mongoRepository interface method
	}
	//	Return a list of all jobs offered by a company
	public List<Job> findAllByEmployer(String employer) {
		return jobRepository.findAllByEmployer(employer);
	}
	//	Update job
	public Job update(String employer, String jobTitle, String description) {
		Job j = jobRepository.findByEmployer(employer);	//	First find the job to update
		j.setJobTitle(jobTitle);
		j.setDescription(description);
		//	Not sure if call setUserName yet.
		return jobRepository.save(j);
	}
	//	Delete all jobs
	public void deleteAll() {
		jobRepository.deleteAll();
	}
	//	Delete specific job
	public void delete(String employer) {
		Job j = jobRepository.findByEmployer(employer);
		jobRepository.delete(j);
	}
}
