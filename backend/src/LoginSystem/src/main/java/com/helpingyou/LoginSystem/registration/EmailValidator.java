package com.helpingyou.LoginSystem.registration;

/*
 *
 * @author Danny Sequeira
 * CopyRight (C) Danny Sequeira 2022
 *
 */


import org.springframework.stereotype.Service;

import java.util.function.Predicate;

@Service
public class EmailValidator implements Predicate<String> {
    @Override
    public boolean test(String s) {
        // TODO: Regex to validate the email
        return true;
    }
}
