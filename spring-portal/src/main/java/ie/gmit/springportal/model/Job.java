/* Simple Job class
 * 
 */

package ie.gmit.springportal.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Job {
	@Id
	//private Long id;
	private String userName;
	private String description;

	public Job() {
	}

	public Job(String userName, String description) {
		//this.id = id;
		this.userName = userName;
		this.description = description;
	}

//	public Long getId() {
//		return id;
//	}
//
//	public void setId(Long id) {
//		this.id = id;
//	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "Job [userName=" + userName + ", description=" + description + "]";
	}
	


}