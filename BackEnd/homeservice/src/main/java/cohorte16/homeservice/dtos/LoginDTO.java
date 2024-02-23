package cohorte16.homeservice.dtos;

import jakarta.validation.constraints.NotBlank;

public record LoginDTO(@NotBlank String email, @NotBlank String password) {
}
