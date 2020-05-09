package ie.gmit.springportal.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ie.gmit.springportal.exception.ResourceNotFoundException;
import ie.gmit.springportal.model.Job;
import ie.gmit.springportal.repository.JobRepository;
/**
 * @author neilk
 * The service class performs the business logic n a different layer from the RESTController
 */
@Service
@Transactional
public class JobService {
	int idCounter = (int)(Math.random() * 1000);
    @Autowired
    private JobRepository jobRepository;

    //	Method to add a job 
    public Job createJob(Job job) {
    	if(job.getId() == -1 || job.getId() == 0) {
    		job.setId(++idCounter);
        	jobRepository.insert(job); 
    	}
    	return jobRepository.save(job);
    }
    
    //	Method to mark a job as applied
    public Job applyJob(Job job) {
        Optional < Job > jobDb = this.jobRepository.findById(job.getId());
        
        if (jobDb.isPresent()) {
            Job jobUpdate = jobDb.get();
            jobUpdate.setApplied(true);
            jobRepository.save(jobUpdate);
            return jobUpdate;
        } else {
            throw new ResourceNotFoundException("Record not found with id : " + job.getId());
        }
    }
        
    //	method to update jobs
    public Job updateJob(Job job) {
        Optional < Job > jobDb = this.jobRepository.findById(job.getId());

        //	If job is marked as a 'create' divert to correct method
        if(job.getId() == -1) {
        	createJob(job);
        	return job;
        }
        if (jobDb.isPresent()) {
            Job jobUpdate = jobDb.get();
            jobUpdate.setId(job.getId());
            jobUpdate.setEmployer(job.getEmployer());
            jobUpdate.setJobTitle(job.getJobTitle());
            jobUpdate.setCounty(job.getCounty());
            jobUpdate.setDescription(job.getDescription());
            jobUpdate.setApplied(job.isApplied());
            jobRepository.save(jobUpdate);
            return jobUpdate;
        } else {
            throw new ResourceNotFoundException("Record not found with id : " + job.getId());
        }
    }

    //	Method to retrieve all jobs
    public List < Job > getAllJob() {
        return this.jobRepository.findAll();
    }

    //	Method to retrieve specific jobs by id
    public Job getJobById(long jobId) {
        Optional < Job > jobDb = this.jobRepository.findById(jobId);

        if (jobDb.isPresent()) {
            return jobDb.get();
        } else {
            throw new ResourceNotFoundException("Record not found with id : " + jobId);
        }
    }

    //	Method to delete a job by id
    public void deleteJob(long jobId) {
        Optional < Job > jobDb = this.jobRepository.findById(jobId);

        if (jobDb.isPresent()) {
            this.jobRepository.delete(jobDb.get());
        } else {
            throw new ResourceNotFoundException("Record not found with id : " + jobId);
        }

    }
    
    //	Method to delete all jobs, not accessible via front-end application
    public void deleteAllJobs() {
    	jobRepository.deleteAll();
    }
    
    //	Method to retrieve jobs by employer attribute
    public List<Job> findByEmployer(String employer) {
    	List<Job> jobDb = this.jobRepository.findByEmployer(employer);
    	if (jobDb.isEmpty()) {
    		throw new ResourceNotFoundException("No jobs found from: " + employer);
        } else {
        	return jobRepository.findByEmployer(employer);
        }
    	
    }
    
    //	Method to retrieve job by location attribute
    public List<Job> findByLocation(String county) {
    	List<Job> jobDb = this.jobRepository.findByLocation(county);
    	if (jobDb.isEmpty()) {
    		throw new ResourceNotFoundException("No jobs found in: " + county);
        } else {
        	return jobRepository.findByLocation(county);
        }
    }
    
    //	Method to retrieve job by jobTitle
    public List<Job> findByJobTitle(String jobTitle) {
    	List<Job> jobDb = this.jobRepository.findByJobTitle(jobTitle);
    	if (jobDb.isEmpty()) {
    		throw new ResourceNotFoundException("No jobs found with the job title: " + jobTitle);
        } else {
        	return jobRepository.findByJobTitle(jobTitle);
        }
    }
}
