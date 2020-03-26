package ie.gmit.springportal.jwt.resource;

import java.io.Serializable;

public class JwtTokenRequest implements Serializable {

	private static final long serialVersionUID = -5616176897013108345L;

	private String username;
	private String password;
	
//	{
//	    "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJOZWlsIiwiZXhwIjoxNTg1ODU0NDQ0LCJpYXQiOjE1ODUyNDk2NDR9.gVjVeD0L5R0eKo4t_BI8hncsRCMZqZgBN_3qD51F2anOrnSxKJM_X1QNdA6pxwuRaIj004YVVyUbA-QoBJlErg"
//	}

	public JwtTokenRequest() {
		super();
	}

	public JwtTokenRequest(String username, String password) {
		this.setUsername(username);
		this.setPassword(password);
	}

	public String getUsername() {
		return this.username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
