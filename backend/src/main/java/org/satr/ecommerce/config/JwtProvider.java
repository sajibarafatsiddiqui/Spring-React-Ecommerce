package org.satr.ecommerce.config;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;
@Service
public class JwtProvider {

    SecretKey key = Keys.hmacShaKeyFor(JwtConfig.JSON_KEY.getBytes());

    public String generateToken(Authentication authentication) {
        System.out.println(Jwts.builder()
                .setIssuedAt(new Date())
                .setExpiration(new Date(new Date().getTime() + 360000))
                .claim("email", authentication.getName())
                .signWith(key)
                .compact());
        return Jwts.builder()
                .setIssuedAt(new Date())
                .setExpiration(new Date(new Date().getTime() + 360000))
                .claim("email", authentication.getName())
                .signWith(key)
                .compact();
    }
    public String getEmail(String jwt) {
        jwt=jwt.replace("Bearer ", "");
        return String.valueOf(Jwts.parser().verifyWith(key).build().parseSignedClaims(jwt)
                .getPayload().get("email"));

    }
}
