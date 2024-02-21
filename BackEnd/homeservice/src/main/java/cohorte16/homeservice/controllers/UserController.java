package cohorte16.homeservice.controllers;

import cohorte16.homeservice.dtos.LoginDTO;
import cohorte16.homeservice.dtos.RegistroUsuarioDTO;
import cohorte16.homeservice.models.User;
import cohorte16.homeservice.services.impl.UserSeviceImpl;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatterBuilder;

import static com.fasterxml.jackson.databind.type.LogicalType.DateTime;

@RestController
@RequestMapping("/usuarios")
public class UserController {

    @Autowired
    private UserSeviceImpl userSeviceImpl;

    @PostMapping
    public ResponseEntity<?> RegistrarUsuario(@RequestBody @Valid RegistroUsuarioDTO registroUsuarioDTO){

        User userCreated;
        try {
          userCreated =  userSeviceImpl.saveUser(registroUsuarioDTO);

        }catch (Exception ex){

            return  ResponseEntity.status(HttpStatus.CONFLICT).body("El usuario ya existe");
        }

        //devulve por convencion la url con los datos del usuario crado
        return ResponseEntity.created(URI.create("/usuarios/"+new RegistroUsuarioDTO(userCreated).id())).body(RegistroUsuarioDTO.builder()
                .avatar(userCreated
                        .getAvatar())
                .email(userCreated.getEmail())
                .id(userCreated.getId()).build());
    }


    @PostMapping( value = "/login")
    public ResponseEntity<?> login(@RequestBody @Valid LoginDTO datosLogin) {;
        User userCreated;
        HttpHeaders jwtToken = new HttpHeaders();
        LocalDate hora = LocalDate.now();
        jwtToken.set("Authorization", "Bearer " + hora + " git jwttoken");

        try {
            userCreated = userSeviceImpl.validateLogin(datosLogin);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciales incorrectas");
        }
        return ResponseEntity.created(URI.create("/usuarios/login/"+new RegistroUsuarioDTO(userCreated).id())).headers(jwtToken)
                .body(RegistroUsuarioDTO.builder()
                .avatar(userCreated
                        .getAvatar())
                .email(userCreated.getEmail())
                .id(userCreated.getId()).build());
    }
}
