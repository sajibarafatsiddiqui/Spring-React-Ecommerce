package org.satr.ecommerce.config;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.crypto.SecretKey;
import java.io.IOException;
import java.util.List;

@Service
public class JwtValidator extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        System.out.println("JwtValidator filter invoked");
        String jwt= request.getHeader("Authorization");
        request.getSession(true).setMaxInactiveInterval(0);
        if (jwt != null) {
            jwt= jwt.replace("Bearer", "");
            try {
                SecretKey key= Keys.hmacShaKeyFor(JwtConfig.JSON_KEY.getBytes());
                Claims claims= Jwts.parser().verifyWith(key).build()
                        .parseSignedClaims(jwt)
                        .getPayload();
                String email= String.valueOf(claims.get("email"));
                String authorities= String.valueOf(claims.get("authorities"));
                List<GrantedAuthority> authoritiesList= AuthorityUtils.commaSeparatedStringToAuthorityList(authorities);
                Authentication auth= new UsernamePasswordAuthenticationToken(email,null, authoritiesList);
                SecurityContextHolder.getContext().setAuthentication(auth);

                }catch (Exception e){
                throw new BadCredentialsException("Invalid JWT");
            }

        } else {
            System.out.println("JwtValidator filter invoked without JWT");
        }
        filterChain.doFilter(request, response);
    }
}
