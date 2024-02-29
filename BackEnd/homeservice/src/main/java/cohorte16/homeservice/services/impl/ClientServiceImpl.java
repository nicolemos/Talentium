package cohorte16.homeservice.services.impl;

import cohorte16.homeservice.dtos.ClientDTO;
import cohorte16.homeservice.dtos.ClientResponseDTO;
import cohorte16.homeservice.exceptions.EntityNotSavedException;
import cohorte16.homeservice.mappers.ClientMapper;
import cohorte16.homeservice.mappers.ProfessionalMapper;
import cohorte16.homeservice.models.Client;
import cohorte16.homeservice.models.User;
import cohorte16.homeservice.repositories.ClientRepository;
import cohorte16.homeservice.repositories.ProfessionalRepository;
import cohorte16.homeservice.repositories.UserRepository;
import cohorte16.homeservice.services.ClientService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ClientServiceImpl implements ClientService {

    private final ClientRepository clientRepository;
    private final ClientMapper clientMapper;

    @Autowired
    UserRepository userRepository;

    public ClientServiceImpl(ClientRepository clientRepository, ClientMapper clientMapper){
        this.clientRepository = clientRepository;
        this.clientMapper = clientMapper;
    }

    @Override
    public ClientResponseDTO save(ClientDTO clientDTO) throws Exception {
        try {
            Client clientEntity = clientMapper.clientDTOToClient(clientDTO);
            Client clientSaved = clientRepository.save(clientEntity);
            return clientMapper.clientToClientResponseDTO(clientSaved);
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public ClientResponseDTO findById(Long id) throws Exception {
        try {
            Optional<Client> clientOptional = clientRepository.findById(id);
            if (clientOptional.isEmpty()) {
                throw new EntityNotFoundException("Client not found");
            }
            Client client = clientOptional.get();
            return clientMapper.clientToClientResponseDTO(client);
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public List<ClientResponseDTO> findAll() throws Exception {
        try {
            List<Client> clientList = clientRepository.findAll();
            return clientList.stream().map(clientMapper::clientToClientResponseDTO).toList();
        }catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public ClientResponseDTO update(Long id, ClientDTO clientDTO) throws Exception {
        try {
            Optional<Client> clientOptional = clientRepository.findById(id);
            if(clientOptional.isEmpty()){
                throw new EntityNotSavedException("Client not found");
            }
            Client clientEntity = clientMapper.clientDTOToClient(clientDTO);
            Client clientUpdate = getClient(clientEntity,clientOptional);
            return clientMapper.clientToClientResponseDTO(clientUpdate);
        }catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public boolean delete(Long id) throws Exception {
        try {
            if(clientRepository.existsById(id)){
                Client client = clientRepository.findById(id).get();
                client.setActive(false);
                return true;
            }else{
                return false;
            }
        }catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }
    private static Client getClient(Client client,
                                                Optional<Client> clientOptional) {
        Client clientUpdate = clientOptional.get();
        clientUpdate.setName(client.getName());
        clientUpdate.setLastname(client.getLastname());
        clientUpdate.setDni(client.getDni());
        clientUpdate.setRating(client.getRating());
        clientUpdate.setActive(client.getActive());
        clientUpdate.setDirection(client.getDirection());
        clientUpdate.setUser(new User(client.getUser().getId(), client.getUser().getEmail(), client.getUser().getPassword(), client.getUser().getAvatar()));
        return clientUpdate;
    }
}
