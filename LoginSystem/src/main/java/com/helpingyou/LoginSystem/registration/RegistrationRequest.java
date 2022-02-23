package com.helpingyou.LoginSystem.registration;

/*
 *
 * @author Danny Sequeira
 * CopyRight (C) Danny Sequeira 2022
 *
 */

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class RegistrationRequest {

    private final String firstName;
    private final String lastName;
    private final String username;
    private final String email;
    private final String password;



}
