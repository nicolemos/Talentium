package cohorte16.homeservice.mappers;

import cohorte16.homeservice.dtos.ProfessionalDTO;
import cohorte16.homeservice.models.Professional;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class ProfessionalMapper {

    public ProfessionalDTO professionalToProfessionalDTO(Professional professional){
        return new ProfessionalDTO(
                professional.getName(),
                professional.getLastname(),
                professional.getCuit(),
                professional.getProfession(),
                professional.getRating(),
                professional.getCbu(),
                professional.getUser(),
                professional.getDirection()
        );
    }

    public Professional professionalDTOToProfessional(ProfessionalDTO professionalDTO){
        return new Professional(
                null,
                professionalDTO.name(),
                professionalDTO.lastname(),
                professionalDTO.cuit(),
                professionalDTO.cbu(),
                professionalDTO.rating(),
                professionalDTO.profession(),
                professionalDTO.direction(),
                professionalDTO.user(),
                Collections.emptyList(),
                Boolean.TRUE
        );
    }
}
