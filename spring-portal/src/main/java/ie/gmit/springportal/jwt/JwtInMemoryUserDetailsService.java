package ie.gmit.springportal.jwt;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import ie.gmit.springportal.BCryptEncoderTest;
/**
 * Implements spring security's UserDetailsService. This takes care of using usre details to authenticate the user.
 * I just have to provide the user details
 */
@Service
public class JwtInMemoryUserDetailsService implements UserDetailsService {

	static List<JwtUserDetails> inMemoryUserList = new ArrayList<>();

	static {
	  inMemoryUserList.add(new JwtUserDetails(1L, "Neil",
		        "$2a$10$xlGEJ8b8x9t/H/bPME2zoOzxHHBavMklOyjFRlIVCB1Guz3IQF2fS", "ROLE_USER_2"));
    inMemoryUserList.add(new JwtUserDetails(2L, "user",
        "$2a$10$dUcUVcFVHo2nQ2HWLX3Ib.Ec4HNrys3IfrDN/ClhAuQRFNCXfKHcy", "ROLE_USER_2"));
    }

	//	When spring security give username, find it in static list and return in JWTUserDetails format
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
