package cohorte16.homeservice.services.impl;

import cohorte16.homeservice.dtos.ProfessionalDTO;
import cohorte16.homeservice.exceptions.EntityNotSavedException;
import cohorte16.homeservice.mappers.ProfessionalMapper;
import cohorte16.homeservice.models.Professional;
import cohorte16.homeservice.models.User;
import cohorte16.homeservice.repositories.ProfessionalRepository;
import cohorte16.homeservice.repositories.UserRepository;
import cohorte16.homeservice.services.ProfessionalService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
@Transactional
public class ProfessionalServiceImpl implements ProfessionalService {

    private final ProfessionalRepository professionalRepository;
    private final ProfessionalMapper professionalMapper;
    private final UserRepository userRepository;

    public ProfessionalServiceImpl(ProfessionalRepository professionalRepository,
                                   UserRepository userRepository,
                                   ProfessionalMapper professionalMapper){
        this.professionalRepository = professionalRepository;
        this.userRepository = userRepository;
        this.professionalMapper = professionalMapper;
    }

    @Override
    public List<ProfessionalDTO> findAll() throws Exception {
       try {
          List<Professional> professionalList = professionalRepository.findAll();
           return professionalList.stream().map(professionalMapper::professionalToProfessionalDTO
           ).collect(Collectors.toList());
       }catch (Exception e){
           throw new Exception(e.getMessage());
       }
    }

    @Override
    public ProfessionalDTO findById(Long id) throws Exception {
        try {
            Optional<Professional> professionalOptional = professionalRepository.findById(id);
            if(professionalOptional.isEmpty()){
                throw new EntityNotFoundException("User not found");
            }
            Professional professional =  professionalOptional.get();
            return professionalMapper.professionalToProfessionalDTO(professional);
        }catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public ProfessionalDTO save(ProfessionalDTO professionalDTO) throws Exception {
        try {
            User userEntity = userRepository.findById(professionalDTO.user().getId())
                    .orElseThrow(() -> new EntityNotFoundException("User not found"));
            Professional professionalEntity = professionalMapper.professionalDTOToProfessional(professionalDTO);
            professionalEntity.setUser(userEntity);
            Professional professionalSaved = professionalRepository.save(professionalEntity);
            return professionalMapper.professionalToProfessionalDTO(professionalSaved);
        }catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public ProfessionalDTO update(Long id, ProfessionalDTO professionalDTO) throws Exception {
        try {
            Optional<Professional> professionalOptional = professionalRepository.findById(id);
            if(professionalOptional.isEmpty()){
                throw new EntityNotSavedException("User not found");
            }
            Professional professionalEntity = professionalMapper.professionalDTOToProfessional(professionalDTO);
            Professional professionalUpdated = getProfessional(professionalEntity, professionalOptional);
            return professionalMapper.professionalToProfessionalDTO(professionalUpdated);
        }catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public boolean delete(Long id) throws Exception {
        try {
            if(professionalRepository.existsById(id)){
                Professional professional = professionalRepository.findById(id).get();
                professional.setActive(Boolean.FALSE);
                return true;
            }else{
                return false;
            }
        }catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    private static Professional getProfessional(Professional professional,
                                         Optional<Professional> professionalOptional) {
        Professional professionalUpdated = professionalOptional.get();
        professionalUpdated.setName(professional.getName());
        professionalUpdated.setLastname(professional.getLastname());
        professionalUpdated.setCbu(professional.getCbu());
        professionalUpdated.setCuit(professional.getCuit());
        professionalUpdated.setProfession(professional.getProfession());
        professionalUpdated.setRating(professional.getRating());
        professionalUpdated.setActive(professional.isActive());
        return professionalUpdated;
    }

}
