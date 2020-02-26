package ie.gmit.springportal.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import ie.gmit.springportal.model.User;

@Repository
public interface UserRepository extends MongoRepository < User, Long > {
	//	Add custom methods here
}
