package cohorte16.homeservice.services;

import cohorte16.homeservice.dtos.ClientDTO;
import java.util.List;

public interface ClientService {
    ClientDTO save(ClientDTO clientDTO) throws Exception;
    ClientDTO findById(Long id) throws Exception;
    List<ClientDTO> findAll() throws  Exception;
    ClientDTO update(Long id,ClientDTO clientDTO) throws Exception;
    boolean delete(Long id) throws Exception;
}
