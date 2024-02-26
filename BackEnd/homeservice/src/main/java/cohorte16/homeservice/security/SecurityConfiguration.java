package cohorte16.homeservice.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration {

    @Autowired
    TokenService tokenService;
    @Bean
    public HttpSecurity securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        return httpSecurity
                .authorizeHttpRequests((authorize) -> authorize
                        .requestMatchers(HttpMethod.POST, "/usuarios/login").hasAuthority("SCOPE_message:write")
                        .anyRequest().authenticated()
                );






        /*csrf().disable().sessionManagement()
        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        .disable().build()
        .requestMatcher(HttpMethod.POST,"/usuarios/login")
        .permitAll()
        .anyRequest()
        .authenticated()
        .and()
        .addFilterBefore(securityFilter, UsernamePasswordAuthenticationFilter.class)
        .build();*/
    }

    @Bean
    public AuthenticationManager AathenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception{
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
}
