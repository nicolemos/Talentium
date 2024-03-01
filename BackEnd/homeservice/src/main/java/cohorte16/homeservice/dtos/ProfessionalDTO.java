package cohorte16.homeservice.dtos;

import cohorte16.homeservice.enums.Profession;
import cohorte16.homeservice.models.Direction;
import cohorte16.homeservice.models.Order;
import cohorte16.homeservice.models.Professional;
import cohorte16.homeservice.models.User;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public record ProfessionalDTO(
        String name,
        String lastname,
        String cuit,
        Profession profession,
        Integer classification,
        String urlImage,
        String cbu,
        User userApp,
        Direction direction,
        List<Order> orderList) {
}
