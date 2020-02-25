package ie.gmit.springportal.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import ie.gmit.springportal.model.User;

public interface UserRepository extends MongoRepository < User, Long > {

}
