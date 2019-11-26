package ie.gmit.springportal.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import ie.gmit.springportal.model.Job;

//	Spring boot will generate all the basic CRUD operations for the job class against the mongodb database
@Repository
public interface JobRepository extends MongoRepository<Job, String>{	//	Add job class and its identifier type
	//	We can also add our own operations
	public Job findByUserName(String userName);
	//	Perhaps a list found by username also
}
