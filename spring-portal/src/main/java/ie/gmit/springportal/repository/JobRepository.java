package ie.gmit.springportal.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import ie.gmit.springportal.model.Job;
import ie.gmit.springportal.model.User;

//	Spring boot will generate all the basic CRUD operations for the job class against the mongodb database
@Repository
public interface JobRepository extends MongoRepository < Job, Long > {
	//	custom methods
	public List <Job> findByEmployer(String employer);
	public List <Job> findByCounty(String county);
	
	//public Job findByJobTitle(String jobTitle);
}