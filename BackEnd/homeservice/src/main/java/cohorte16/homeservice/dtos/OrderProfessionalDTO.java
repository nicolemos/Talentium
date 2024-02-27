package cohorte16.homeservice.dtos;

import cohorte16.homeservice.enums.Orderstatus;
import cohorte16.homeservice.models.Professional;

import java.math.BigDecimal;

public record OrderProfessionalDTO(
        Long professional_Id,
        String description_Professional,
        BigDecimal price,
        Orderstatus orderStatus

) {
}
