package cohorte16.homeservice.dtos;

import cohorte16.homeservice.models.Client;
import cohorte16.homeservice.models.Direction;
import cohorte16.homeservice.models.Order;
import cohorte16.homeservice.models.User;

public record ClientDTO(
        String name,
        String lastname,
        String dni,
        String urlImage,
        Integer classification,
        User user,
        Direction direction


) {


    public ClientDTO(Client client) {
        this(client.getName(),client.getLastname(),client.getDni(),
                client.getUrlImage(), client.getClassification(),
                client.getUser(),client.getDirection());


    }
}
