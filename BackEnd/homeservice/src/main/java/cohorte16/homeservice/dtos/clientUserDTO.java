package cohorte16.homeservice.dtos;

import cohorte16.homeservice.models.Client;
import cohorte16.homeservice.models.Direction;
import cohorte16.homeservice.models.User;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.NotBlank;

public record clientUserDTO(Long id, String name, String lastname,

                            LoginDTO user, Direction direction, Integer rating,

                            Boolean active) {
    public clientUserDTO(Client client) {
        this(client.getId(),client.getName(),client.getLastname(),new LoginDTO(client.getUser()),client.getDirection(),client.getRating(),client.getActive());
    }


}
