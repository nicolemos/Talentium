package cohorte16.homeservice.dtos;

import cohorte16.homeservice.enums.Profession;
import cohorte16.homeservice.models.Direction;
import cohorte16.homeservice.models.User;

public record ProfessionalDTO(
        String name,
        String lastname,
        String cuit,
        Profession profession,
        Integer rating,
        String cbu,
        User user,
        Direction direction
) {
}
