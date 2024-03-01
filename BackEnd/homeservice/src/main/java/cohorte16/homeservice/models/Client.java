package cohorte16.homeservice.models;


import cohorte16.homeservice.dtos.ClientDTO;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "clientes")
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nombre")
    @NotBlank
    private String name;

    @Column(name = "apellido")
    @NotBlank
    private String lastname;

    @Column(name = "dni")
    @NotBlank
    private String dni;

    @Column(name = "imagen")
    private String urlImage;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "cliente_usuario_id")
    private User user;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "cliente_direccion_id")
    private Direction direction;

    @Column(name = "clasificacion")
    private Integer classification;


/*
    @Column(name = "compra_id")
    private Compras purchaseId;*/

    @Column(name = "activo")
    private Boolean active;


    public Client(ClientDTO clientDTO) {

        this.name = clientDTO.name();
        this.lastname = clientDTO.lastname();
        this.dni = clientDTO.dni();
        this.urlImage = clientDTO.urlImage();
        this.user = clientDTO.user();
        this.direction = clientDTO.direction();
        this.classification = clientDTO.classification();

    }
}
