package cohorte16.homeservice.services;

import cohorte16.homeservice.dtos.ProfessionalDTO;
import cohorte16.homeservice.dtos.ProfessionalResponseDTO;
import cohorte16.homeservice.models.Professional;
import org.hibernate.service.spi.ServiceException;

import java.util.List;

public interface ProfessionalService {
    List<ProfessionalResponseDTO> findAll() throws ServiceException;
    ProfessionalResponseDTO findById(Long id) throws Exception;
    ProfessionalResponseDTO findByUser(Long id);
    ProfessionalResponseDTO save(ProfessionalDTO professionalDTO) throws Exception;
    ProfessionalResponseDTO update(Long id, ProfessionalDTO professionalDTO) throws Exception;
    boolean delete(Long id) throws Exception;
}
