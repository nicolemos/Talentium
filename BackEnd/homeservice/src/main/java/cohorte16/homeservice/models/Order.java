package cohorte16.homeservice.models;

import cohorte16.homeservice.dtos.OrderDTO;
import cohorte16.homeservice.enums.Orderstatus;
import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.math.BigDecimal;
import java.util.Date;


@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "ordenes")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "descripcion")
    private String description;

    @Column(name = "precio")
    @DecimalMin(value = "0.01")
    private BigDecimal price;

    @Column(name = "fecha")
    @Temporal(TemporalType.DATE)
    private Date date =  new Date();

    @Column(name = "ESTADO")
    @Enumerated(value = EnumType.STRING)
    private Orderstatus orderstatus;

    @ManyToOne
    @JoinColumn(name = "profesional_id", referencedColumnName = "id")
    private Professional professional;

    @ManyToOne
    @JoinColumn(name = "cliente_id", referencedColumnName = "id")
    private Client client;

    public Order(OrderDTO orderDTO){
        this.client.setId(orderDTO.cliente_id());
        this.description = orderDTO.description();
    }
}
