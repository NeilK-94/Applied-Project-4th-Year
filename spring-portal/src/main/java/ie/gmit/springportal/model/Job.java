package ie.gmit.springportal.model;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
/**
 * @author neilk
 * The Job object model. This is the object we perform requests on
 */
//	The @Document annotation defines an object to be persisted to the MongoDB database
//@XmlRootElement
@Document(collection = "jobs")
public class Job {
	protected Job() {
		
	}
	
	@Id	//	The @Id annotation is the identifier for every MongoDB document
    private long id;
	private String employer;
	@NotBlank	//	Ensures the attribute can't be empty
    @Size(max = 100)	//	Ensures the length of the attribute isn't over 100 characters
	private String jobTitle;
	private String county;
	private String description;
	private boolean applied = false;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getEmployer() {
		return employer;
	}
	public void setEmployer(String employer) {
		this.employer = employer;
	}
	public String getJobTitle() {
		return jobTitle;
	}
	public void setJobTitle(String jobTitle) {
		this.jobTitle = jobTitle;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public boolean isApplied() {
		return applied;
	}
	public void setApplied(boolean applied) {
		this.applied = applied;
	}
	public String getCounty() {
		return county;
	}
	public void setCounty(String county) {
		this.county = county;
	}

	
	






	

	
	


}