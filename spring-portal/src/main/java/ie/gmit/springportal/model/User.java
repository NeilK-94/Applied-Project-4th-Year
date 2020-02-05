package ie.gmit.springportal.model;

import java.util.ArrayList;

import org.springframework.data.annotation.Id;

public class User {
	//	The @Id annotation is the identifier for every MongoDB document
	@Id
	private String id;
	private String name;
	private String age;
	//	private ArrayList<Job> interested;	//	Will be able to tag jobs they are interested in
	private String email;
	
	
	//	Qualifications?

}
