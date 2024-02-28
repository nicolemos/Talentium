package cohorte16.homeservice.dtos;

import cohorte16.homeservice.enums.Profession;

public record ProfessionalDTOShort(
        String name,
        String lastname,
        String cuit,
        String cbu,
        Integer classification,
        String urlImage,
        Profession profession
) {
}
