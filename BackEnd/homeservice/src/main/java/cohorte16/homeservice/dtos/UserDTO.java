package cohorte16.homeservice.dtos;

import cohorte16.homeservice.models.User;

public record UserDTO (Long id,
                       String email,
                       String avatar){


    public UserDTO(User user) {

        this(   user.getId(),
                user.getEmail(),
                null
    );
    }
}
