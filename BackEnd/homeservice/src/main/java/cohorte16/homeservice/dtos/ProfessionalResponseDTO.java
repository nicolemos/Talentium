package cohorte16.homeservice.dtos;

import cohorte16.homeservice.enums.Profession;

public record ProfessionalResponseDTO(
        String name,
        String lastname,
        String cuit,
        String cbu,
        Integer rating,
        Profession profession,
        DirectionDTO directionDTO,
        UserDTO userDTO
) {
}
