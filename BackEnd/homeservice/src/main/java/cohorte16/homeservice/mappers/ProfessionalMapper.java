package cohorte16.homeservice.mappers;

import cohorte16.homeservice.dtos.ProfessionalDTO;
import cohorte16.homeservice.models.Professional;
import org.springframework.stereotype.Service;

@Service
public class ProfessionalMapper {

    public ProfessionalDTO professionalToProfessionalDTO(Professional professional){
        return new ProfessionalDTO(
                professional.getName(),
                professional.getLastname(),
                professional.getCuit(),
                professional.getProfession(),
                professional.getClassification(),
                professional.getUrlImage(),
                professional.getCbu(),
                professional.getUserApp(),
                professional.getDirection(),
                professional.getOrderList()
        );
    }

    public Professional professionalDTOToProfessional(ProfessionalDTO professionalDTO){
        return new Professional(
                null,
                professionalDTO.name(),
                professionalDTO.lastname(),
                professionalDTO.cuit(),
                professionalDTO.profession(),
                professionalDTO.cbu(),
                professionalDTO.classification(),
                professionalDTO.urlImage(),
                Boolean.TRUE,
                professionalDTO.direction(),
                professionalDTO.userApp(),
                professionalDTO.orderList()
        );
    }

}
