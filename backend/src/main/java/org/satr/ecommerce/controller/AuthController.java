package org.satr.ecommerce.controller;

import org.satr.ecommerce.config.JwtProvider;
import org.satr.ecommerce.exception.UserException;
import org.satr.ecommerce.model.User;
import org.satr.ecommerce.repository.UserRepository;
import org.satr.ecommerce.request.LoginRequest;
import org.satr.ecommerce.response.AuthResponse;
import org.satr.ecommerce.service.CustomUserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/auth")
public class AuthController{

    private UserRepository userRepository;
    private JwtProvider jwtProvider;
    private PasswordEncoder passwordEncoder;
    private CustomUserService customUserService;
    public AuthController(UserRepository userRepository, JwtProvider jwtProvider, PasswordEncoder passwordEncoder, CustomUserService customUserService) {
        this.userRepository = userRepository;
        this.jwtProvider = jwtProvider;
        this.passwordEncoder = passwordEncoder;
        this.customUserService = customUserService;
        System.out.println("AuthController");
    }
    @PostMapping("/signup")
    public ResponseEntity<AuthResponse> createUserHandler(@RequestBody User user) throws UserException {
              System.out.println("hi");
              String firstName=user.getFirstName();
              String lastName=user.getLastName();
              String email=user.getEmail();
              String password=user.getPassword();
              String phone =user.getPhone();

              User IsUserEmailExists= userRepository.findByEmail(email);

          if(IsUserEmailExists != null) {
              throw new UserException("The email address already registered.");
          }

              User createNewUser=new User();
              createNewUser.setFirstName(firstName);
              createNewUser.setLastName(lastName);
              createNewUser.setEmail(email);
              createNewUser.setPassword(passwordEncoder.encode(password));
              createNewUser.setPhone(phone);
              createNewUser.setCreationDate(LocalDateTime.now());
              User savedUser=userRepository.save(createNewUser);

              Authentication authentication = new UsernamePasswordAuthenticationToken(email,password);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token=jwtProvider.generateToken(authentication);
        AuthResponse authResponse= new AuthResponse(token,"Signup Successful.");
        return new ResponseEntity<AuthResponse>(authResponse, HttpStatus.CREATED);
    }
@PostMapping("/login")
    public ResponseEntity<AuthResponse> loginUserHandler(@RequestBody LoginRequest loginRequest) {
           String email=loginRequest.getEmail();
           String password=loginRequest.getPassword();
           User user=userRepository.findByEmail(email);
    UserDetails user1=customUserService.loadUserByUsername(email);
           if(user == null) {
               throw new BadCredentialsException("User not found.");
           }
           if(!passwordEncoder.matches(password,user.getPassword())) {
               throw new BadCredentialsException("Wrong password.");
           }
           Authentication authentication = new UsernamePasswordAuthenticationToken(email,password);
           SecurityContextHolder.getContext().setAuthentication(authentication);
           String token=jwtProvider.generateToken(authentication);
           AuthResponse authResponse= new AuthResponse(token,"Login Successful.");
           return new ResponseEntity<AuthResponse>(authResponse, HttpStatus.OK);

    }
}
