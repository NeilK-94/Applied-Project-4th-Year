package ie.gmit.springportal;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

//	Simple class to encode a string.
public class BCryptEncoderTest {
	public static void main(String[] args) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		CharSequence rawPassword = "password";
		
		for(int i = 1; i<=10; i++) {
			String encodedString = encoder.encode(rawPassword);
			System.out.println(encodedString);
		}
	}

}
