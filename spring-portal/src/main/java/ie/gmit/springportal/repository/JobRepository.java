package ie.gmit.springportal.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import ie.gmit.springportal.model.Job;

//	Spring boot will generate all the basic CRUD operations for the job class against the mongodb database
@Repository
public interface JobRepository extends MongoRepository < Job, Long > {
	//	custom methods
	@Query(value = "{'employer': {$regex : ?0, $options: 'i'}}")
	public List <Job> findByEmployer(String employer);

	@Query(value = "{'county': {$regex : ?0, $options: 'i'}}")
	public List <Job> findByLocationIgnoreCase(String county);
	
	@Query(value = "{'jobTitle': {$regex : ?0, $options: 'i'}}")
	public Job findByJobTitle(String jobTitle);
}