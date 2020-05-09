package ie.gmit.springportal.exception;

import org.springframework.web.bind.annotation.ResponseStatus;
/**
 * @author neilk
 * Exception class to handle errors/exceptions
 */
@ResponseStatus
public class ResourceNotFoundException extends RuntimeException {
    private static final long serialVersionUID = 1;

    public ResourceNotFoundException(String message) {
        super(message);
    }

    public ResourceNotFoundException(String message, Throwable throwable) {
        super(message, throwable);
    }
}