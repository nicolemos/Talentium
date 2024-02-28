package cohorte16.homeservice.services;

import cohorte16.homeservice.dtos.ProfessionalDTO;
import cohorte16.homeservice.models.Professional;
import org.hibernate.service.spi.ServiceException;

import java.util.List;

public interface ProfessionalService {
    List<ProfessionalDTO> findAll() throws ServiceException;
    ProfessionalDTO findById(Long id) throws Exception;
    ProfessionalDTO save(ProfessionalDTO professionalDTO) throws Exception;
    ProfessionalDTO update(Long id, ProfessionalDTO professionalDTO) throws Exception;
    boolean delete(Long id) throws Exception;
}
