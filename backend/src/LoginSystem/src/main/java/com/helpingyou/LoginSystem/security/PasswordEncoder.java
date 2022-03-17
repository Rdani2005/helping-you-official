package com.helpingyou.LoginSystem.security;

/*
 *
 * @author Danny Sequeira
 * CopyRight (C) Danny Sequeira 2022
 *
 */



import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
public class PasswordEncoder {
    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
