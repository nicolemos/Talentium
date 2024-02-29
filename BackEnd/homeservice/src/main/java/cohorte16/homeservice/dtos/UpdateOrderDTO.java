package cohorte16.homeservice.dtos;

import cohorte16.homeservice.enums.Orderstatus;
import cohorte16.homeservice.models.Professional;

import java.math.BigDecimal;

<<<<<<< HEAD
public record UpdateOrderDTO(Long cliente_id,
                             String description,
                             Professional professional,
                             BigDecimal price,
                             Orderstatus orderstatus
=======
public record UpdateOrderDTO(Long order_id,
                             String description
>>>>>>> ab2bbe3ebe55158d19b7b89c3fb9f9c9cc578148
                             ) {
}
