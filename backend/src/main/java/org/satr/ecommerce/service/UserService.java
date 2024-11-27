package org.satr.ecommerce.service;

import org.satr.ecommerce.exception.UserException;
import org.satr.ecommerce.model.User;

public interface UserService {
    public User findUserById(long id) throws UserException;
    public User findUserByJwt(String jwt) throws UserException;
}
