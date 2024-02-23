package cohorte16.homeservice.models;

import cohorte16.homeservice.enums.Profession;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.util.Collections;
import java.util.List;

@Entity
@Table(name="Profesionales")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Professional {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nombre")
    @NotBlank
    private String name;

    @Column(name = "apellido")
    @NotBlank
    private String lastname;

    @Column(name = "cuit")
    @NotBlank
    private String cuit;

    @Column(name = "cbu")
    private String cbu;

    @Column(name = "clasificacion")
    @NotNull
    private Integer rating;

    @Column(name = "PROFESION")
    @Enumerated(value = EnumType.STRING)
    private Profession profession;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "profesional_direccion_id")
    private Direction direction;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "profesional_usuario_id")
    private User user;

    @OneToMany(mappedBy = "professional", cascade = CascadeType.ALL)
    private List<Order> orderList = Collections.emptyList();

    @Column(name = "activo")
    private boolean active = Boolean.TRUE;
}
