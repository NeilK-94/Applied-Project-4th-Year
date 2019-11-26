package ie.gmit.springportal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ie.gmit.springportal.model.Job;
import ie.gmit.springportal.repository.JobRepository;

@Service
public class JobService {
	@Autowired
	private JobRepository jobRepository;
	
	//	Create job
	public Job create(String userName, String description) {
		return jobRepository.save(new Job(userName, description));	//	create job object then call the save method which is
																	//	automatically implemented with the repository interface
	}
	//	Retrieve all jobs
	public List<Job> retrieveAll() {
		return jobRepository.findAll();	//	Another mongoRepository interface method
	}
	//	Return specific userName
	public Job findByUserName(String userName) {
		return jobRepository.findByUserName(userName);
	}
	//	Update job
	public Job update(String userName, String description) {
		Job j = jobRepository.findByUserName(userName);	//	First find the job to update
		j.setDescription(description);
		//	Not sure if call setUserName yet.
		return jobRepository.save(j);
	}
	//	Delete all jobs
	public void deleteAll() {
		jobRepository.deleteAll();
	}
	//	Delete specific job
	public void delete(String userName) {
		Job j = jobRepository.findByUserName(userName);
		jobRepository.delete(j);
	}
}
