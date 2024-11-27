package org.satr.ecommerce.service;

import org.satr.ecommerce.config.JwtProvider;
import org.satr.ecommerce.exception.UserException;
import org.satr.ecommerce.model.User;
import org.satr.ecommerce.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImplementation implements UserService {
    private UserRepository userRepository;
    private JwtProvider jwtProvider;
    public UserServiceImplementation(JwtProvider jwtProvider, UserRepository userRepository) {
        this.jwtProvider = jwtProvider;
        this.userRepository = userRepository;
    }


    @Override
    public User findUserById(long id) throws UserException {
        Optional<User> user=userRepository.findById(id);
        if (user.isPresent()) return user.get();
        throw new UserException("User is not available with id " + id);

    }

    @Override
    public User findUserByJwt(String jwt) throws UserException{
        String email=jwtProvider.getEmail(jwt);
        User user=userRepository.findByEmail(email);
        if(user!=null) return user;
        throw new UserException("No user found with the email "+email);
    }
}
