package ie.gmit.springportal.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ie.gmit.springportal.model.Job;
import ie.gmit.springportal.repository.JobRepository;

@Service
public class JobService {
	@Autowired
	private JobRepository jobRepository; // Hold a reference to our repository
	private static List<Job> jobs = new ArrayList<>();

//*****************************************************************************************************************************//
	// Create job
	public Job create(int jobId, String employer, String jobTitle, String description) {
		jobs.add(new Job(jobId, employer, jobTitle, description));
		return jobRepository.save(new Job(jobId, employer, jobTitle, description));
	}

	// Retrieve all jobs
	public List<Job> retrieveAll() {
		return jobRepository.findAll();
	}

	// Retrieve by Id
	public Job findById(int jobId) {
		return jobRepository.findById(jobId);

	}

	// Return a list of all jobs offered by a company
	public List<Job> findAllByEmployer(String employer, String description) {
		return jobRepository.findAllByEmployer(employer, description);
	}

	// Update job
	public Job update(String employer, String jobTitle, String description) {
		Job j = jobRepository.findByEmployer(employer); // First find the job to update
		j.setJobTitle(jobTitle);
		j.setDescription(description);
		// Not sure if call setUserName yet.
		return jobRepository.save(j);
	}

	// Delete all jobs
	public void deleteAll() {
		jobRepository.deleteAll();
	}

	// Delete specific job
	public Job delete(String employer) { // replace with delete by id
		Job j = jobRepository.findByEmployer(employer);
		jobRepository.delete(j);
		return j;
	}

	public Job deleteById(int jobId) {
		Job j = findById(jobId);
		if (j == null)
			return null;
		if (jobs.remove(j)) {
			return j;
		}
		return null;
	}
	// *****************************************************************************************************************************//

}
