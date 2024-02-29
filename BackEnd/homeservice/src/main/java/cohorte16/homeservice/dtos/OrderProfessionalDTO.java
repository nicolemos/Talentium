package cohorte16.homeservice.dtos;

import cohorte16.homeservice.enums.Orderstatus;
import jakarta.validation.constraints.NotNull;

import java.math.BigDecimal;

public record OrderProfessionalDTO(
        @NotNull
        Long id, //Id del professional
        String description_Professional,
        BigDecimal price,
        Orderstatus orderStatus

) {
}
