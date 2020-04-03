package ie.gmit.springportal.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ie.gmit.springportal.exception.ResourceNotFoundException;
import ie.gmit.springportal.model.Job;
import ie.gmit.springportal.model.User;
import ie.gmit.springportal.repository.JobRepository;
import ie.gmit.springportal.repository.UserRepository;

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
            jobUpdate.setDescription(job.getDescription());
            //jobUpdate.setSalary(job.getSalary());
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
    
    public List<Job> getByEmployer(String employer) {
    	return jobRepository.findByEmployer(employer);
    }
    public Job getByJobTitle(String jobTitle) {
    	return jobRepository.findByJobTitle(jobTitle);
    }
//*******************************************************************************************************//

}
