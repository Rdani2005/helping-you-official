package com.helpingyou.LoginSystem.registration.token;

/*
 *
 * @author Danny Sequeira
 * CopyRight (C) Danny Sequeira 2022
 *
 */

// ------------------- Libraries and Files -----------------------------
// Files
import com.helpingyou.LoginSystem.appuser.AppUser;
// Lombok
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
// Java Libraries
import javax.persistence.*;
import java.time.LocalDateTime;


@Getter
@Setter
@NoArgsConstructor
@Entity
public class ConfirmationToken {

    @SequenceGenerator(
            name = "confirmation_token_sequence",
            sequenceName = "confirmation_token_sequence",
            allocationSize = 1
    )
    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "confirmation_token_sequence"
    )
    private Long id;
    @Column(nullable = false)
    private String token;
    @Column(nullable = false)
    private LocalDateTime createdAt;
    @Column(nullable = false)
    private LocalDateTime expiresAt;

    private LocalDateTime confirmedAt;


    @ManyToOne
    @JoinColumn(
            nullable = false,
            name = "app_user_id"
    )
    private AppUser appUser;


    public ConfirmationToken(
            String token,
            LocalDateTime createdAt,
            LocalDateTime expiresAt,
            // LocalDateTime confirmedAt,
            AppUser appUser
    ) {
        this.token = token;
        this.createdAt = createdAt;
        this.expiresAt = expiresAt;
        // this.confirmedAt = confirmedAt;
        this.appUser = appUser;
    }
}
