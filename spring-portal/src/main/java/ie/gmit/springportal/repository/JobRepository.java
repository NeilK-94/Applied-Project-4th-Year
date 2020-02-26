package ie.gmit.springportal.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import ie.gmit.springportal.model.Job;
import ie.gmit.springportal.model.User;

//	Spring boot will generate all the basic CRUD operations for the job class against the mongodb database
@Repository
public interface JobRepository extends MongoRepository < Job, Long > {
	//	Add custom methods here
}