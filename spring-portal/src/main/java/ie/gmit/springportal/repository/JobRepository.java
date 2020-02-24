package ie.gmit.springportal.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import ie.gmit.springportal.model.Job;

//	Spring boot will generate all the basic CRUD operations for the job class against the mongodb database
@Repository
public interface JobRepository extends MongoRepository<Job, String>{	//	Add job class and its identifier type (String Id)
	
	//	We can also add our own operations
	public Job findByEmployer(String employer);
	public List<Job> findAllByEmployer(String employer, String description);
	public List<Job> findByJobTitle(String jobTitle);
}
