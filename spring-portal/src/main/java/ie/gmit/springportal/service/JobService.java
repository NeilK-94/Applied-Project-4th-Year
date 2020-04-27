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

@Service
@Transactional
public class JobService {
	int idCounter = (int)(Math.random() * 1000);
    @Autowired
    private JobRepository jobRepository;

//*******************************************************************************************************//
//			WORKING
//    public Job createJob(long id, Job job) {
//    	job.setId(id);
//    	job.getId();
//        return jobRepository.save(job);
//    }
    public Job createJob(Job job) {
    	if(job.getId() == -1 || job.getId() == 0) {
    		job.setId(++idCounter);
        	jobRepository.insert(job); 
    	}
    	return jobRepository.save(job);
    	
    }
    
    public Job applyJob(Job job) {
        Optional < Job > jobDb = this.jobRepository.findById(job.getId());
        
        if (jobDb.isPresent()) {
            Job jobUpdate = jobDb.get();
            jobUpdate.setApplied(job.isApplied());
            jobRepository.save(jobUpdate);
            return jobUpdate;
        } else {
            throw new ResourceNotFoundException("Record not found with id : " + job.getId());
        }
    }
        
    public Job updateJob(Job job) {
        Optional < Job > jobDb = this.jobRepository.findById(job.getId());

        if(job.getId() == -1) {	//	Bad practice but can't get it to use POST controller method
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
            //jobUpdate.setApplied(job.isApplied());
            jobRepository.save(jobUpdate);
            return jobUpdate;
        } else {
            throw new ResourceNotFoundException("Record not found with id : " + job.getId());
        }
    }

    public List < Job > getAllJob() {
        return this.jobRepository.findAll();
    }

    public Job getJobById(long jobId) {
        Optional < Job > jobDb = this.jobRepository.findById(jobId);

        if (jobDb.isPresent()) {
            return jobDb.get();
        } else {
            throw new ResourceNotFoundException("Record not found with id : " + jobId);
        }
    }

    public void deleteJob(long jobId) {
        Optional < Job > jobDb = this.jobRepository.findById(jobId);

        if (jobDb.isPresent()) {
            this.jobRepository.delete(jobDb.get());
        } else {
            throw new ResourceNotFoundException("Record not found with id : " + jobId);
        }

    }
    
    public void deleteAllJobs() {
    	jobRepository.deleteAll();
    }
    
    public List<Job> findByEmployer(String employer) {
    	List<Job> jobDb = this.jobRepository.findByEmployer(employer);
    	if (jobDb.isEmpty()) {
    		throw new ResourceNotFoundException("No jobs found from: " + employer);
        } else {
        	return jobRepository.findByEmployer(employer);
        }
    	
    }
    public List<Job> findByLocation(String county) {
    	List<Job> jobDb = this.jobRepository.findByLocation(county);
    	if (jobDb.isEmpty()) {
    		throw new ResourceNotFoundException("No jobs found in: " + county);
        } else {
        	return jobRepository.findByLocation(county);
        }
    }
    public List<Job> findByJobTitle(String jobTitle) {
    	List<Job> jobDb = this.jobRepository.findByJobTitle(jobTitle);
    	if (jobDb.isEmpty()) {
    		throw new ResourceNotFoundException("No jobs found with the job title: " + jobTitle);
        } else {
        	return jobRepository.findByJobTitle(jobTitle);
        }
    }
    //	isApplied..
//*******************************************************************************************************//

}
