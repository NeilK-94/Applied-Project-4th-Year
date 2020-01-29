/**
 * A model object Job.java
 * 
 */

package ie.gmit.springportal.model;

import javax.xml.bind.annotation.XmlRootElement;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

//	The @Document annotation defines an object to be persisted to the MongoDB database
@Document
@XmlRootElement
public class Job {
	//	The @Id annotation is the identifier for every MongoDB document
	@Id
	private String id;
	private String employer;
	private String jobTitle;
	private String description;
	
	
	//	Can add salary and contract length etc.

	public Job() {
	}

	public Job(String employer, String jobTitle, String description) {
		//this.id = id;
		this.employer = employer;
		this.jobTitle = jobTitle;
		this.description = description;
		
	}


	public String getEmployer() {
		return employer;
	}

	public void setEmployer(String employer) {
		this.employer = employer;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	public String getJobTitle() {
		return jobTitle;
	}

	public void setJobTitle(String jobTitle) {
		this.jobTitle = jobTitle;
	}
	
	@Override
	public String toString() {
		return "Job [Employer=" + employer + ", Job Title=" + jobTitle + ", Description=" + description + "]";
	}

	
	


}