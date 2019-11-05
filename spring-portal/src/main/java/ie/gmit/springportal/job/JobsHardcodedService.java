package ie.gmit.springportal.job;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class JobsHardcodedService {
	private static List<Job> jobs = new ArrayList<>();
	  private static long idCounter = 0;
	  static {
		  jobs.add(new Job(++idCounter, "Obsidian", "Unity 3D game development"));
		  jobs.add(new Job(++idCounter, "Facebook", "Full stack web development"));
		  jobs.add(new Job(++idCounter, "EA", "Software engineer (front end)"));
		  jobs.add(new Job(++idCounter, "Cisco",
	        "Object Oriented java programmer"));
	  }
	  public List<Job> findAll() {	//	return complete list of jobs
	    return jobs;
	  }
	}
