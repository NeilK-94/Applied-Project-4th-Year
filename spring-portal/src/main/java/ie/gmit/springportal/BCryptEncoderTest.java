package ie.gmit.springportal;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

//	Simple class to encode a string.
public class BCryptEncoderTest {
	private static String encodedString;
	
	public static void main(String[] args) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		CharSequence rawPassword = "password";
		
		for(int i = 1; i<=10; i++) {
			encodedString = encoder.encode(rawPassword);
			System.out.println(encodedString);
		}
	}
	public String getPassword(){
		return encodedString;
	}

}
