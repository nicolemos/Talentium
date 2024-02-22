package cohorte16.homeservice.mappers;

import cohorte16.homeservice.dtos.ClientDTO;
import cohorte16.homeservice.models.Client;
import org.springframework.stereotype.Service;

@Service
public class ClientMapper {

    public ClientDTO clientToClientDTO(Client client) {
        return new ClientDTO(client);
    }

    public Client clientDTOToClient(ClientDTO clientDTO){
        return  new Client(clientDTO);

            /*    null,
                clientDTO.name(),
                clientDTO.lastname(),
                clientDTO.dni(),
                clientDTO.rating(),
                clientDTO.user(),
                clientDTO.direction(),
                clientDTO.order()*/

    }
}
