package cohorte16.homeservice.dtos;

import cohorte16.homeservice.enums.Profession;
import cohorte16.homeservice.models.Direction;
import cohorte16.homeservice.models.Professional;
import cohorte16.homeservice.models.User;

public record ProfessionalDTO(
        Long id,
        String name,
        String lastname,
        String cuit,
        Profession profession,
        Integer rating,
        String cbu,
        User user,
        Direction direction
) {
    public ProfessionalDTO(Professional professional) {
       this( professional.getId(), professional.getName(), professional.getLastname(),null, professional.getProfession(),
               professional.getRating(), null,professional.getUser(),professional.getDirection());
    }

}
