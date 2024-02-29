package cohorte16.homeservice.dtos;

import cohorte16.homeservice.models.Direction;
import cohorte16.homeservice.models.User;

public record ClientResponseDTO(

        String name,
        String lastname,
        String dni,
        Integer rating,
        UserDTO user,
        DirectionDTO direction
) {

}
