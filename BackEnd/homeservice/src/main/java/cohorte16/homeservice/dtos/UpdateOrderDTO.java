package cohorte16.homeservice.dtos;

import cohorte16.homeservice.enums.Orderstatus;
import cohorte16.homeservice.models.Professional;

import java.math.BigDecimal;

public record UpdateOrderDTO(Long cliente_id,
                             String description,
                             Professional professional,
                             BigDecimal price,
                             Orderstatus orderstatus
                             ) {

}
