package ie.gmit.springportal.jwt.resource;
/**
 * Used for authentication exceptions
 * 
 */
public class AuthenticationException extends RuntimeException {
    public AuthenticationException(String message, Throwable cause) {
        super(message, cause);
    }
}

