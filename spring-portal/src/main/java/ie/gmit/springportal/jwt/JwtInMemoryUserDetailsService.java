package ie.gmit.springportal.jwt;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import ie.gmit.springportal.BCryptEncoderTest;

@Service
public class JwtInMemoryUserDetailsService implements UserDetailsService {

	static List<JwtUserDetails> inMemoryUserList = new ArrayList<>();

	static {
	  inMemoryUserList.add(new JwtUserDetails(1L, "Neil",
		        "$2a$10$xlGEJ8b8x9t/H/bPME2zoOzxHHBavMklOyjFRlIVCB1Guz3IQF2fS", "ROLE_USER_2"));
    inMemoryUserList.add(new JwtUserDetails(2L, "user",
        "$2a$10$dUcUVcFVHo2nQ2HWLX3Ib.Ec4HNrys3IfrDN/ClhAuQRFNCXfKHcy", "ROLE_USER_2"));    
  }

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<JwtUserDetails> findFirst = inMemoryUserList.stream()
				.filter(user -> user.getUsername().equals(username)).findFirst();

		if (!findFirst.isPresent()) {
			throw new UsernameNotFoundException(String.format("USER_NOT_FOUND '%s'.", username));
		}

		return findFirst.get();
	}

}
