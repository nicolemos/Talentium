package cohorte16.homeservice.mappers;

import cohorte16.homeservice.dtos.DirectionDTO;
import cohorte16.homeservice.dtos.ProfessionalDTO;
import cohorte16.homeservice.dtos.ProfessionalResponseDTO;
import cohorte16.homeservice.dtos.UserDTO;
import cohorte16.homeservice.models.Professional;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class ProfessionalMapper {

    public ProfessionalDTO professionalToProfessionalDTO(Professional professional){
        return new ProfessionalDTO(
                professional.getId(),
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

    public ProfessionalResponseDTO professionalToProfessionalResponseDTO(Professional professional){
        return new ProfessionalResponseDTO(
                professional.getId(),
                professional.getName(),
                professional.getLastname(),
                professional.getCbu(),
                professional.getCuit(),
                professional.getRating(),
                professional.getProfession(),
                new DirectionDTO(professional.getDirection().getStreet(),
                        professional.getDirection().getNumber(),
                        professional.getDirection().getProvince(),
                        professional.getDirection().getLocation()),
                new UserDTO(
                        professional.getUser().getId(),
                        professional.getUser().getEmail(),
                        professional.getUser().getAvatar())
        );
    }
}