package ie.gmit.springportal.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import ie.gmit.springportal.model.Job;
/**
 * @author neilk
 * The JobRepository interface extends the Mongo repository.
 * Auto generates basic CRUD functions based on Job objects attributes
 */
//	Repository annotation indicates class is a repository 
@Repository
public interface JobRepository extends MongoRepository < Job, Long > {	//	extends mongo repository, specify document class and id type
	//	custom methods
	@Query(value = "{'employer': {$regex : ?0, $options: 'i'}}")	//	This annotation simply ignores casing when searching
	public List <Job> findByEmployer(String employer);

	@Query(value = "{'county': {$regex : ?0, $options: 'i'}}")
	public List <Job> findByLocation(String county);
	
	@Query(value = "{'jobTitle': {$regex : ?0, $options: 'i'}}")
	public List <Job> findByJobTitle(String jobTitle);
}