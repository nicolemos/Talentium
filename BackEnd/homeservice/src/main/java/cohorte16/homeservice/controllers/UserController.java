package cohorte16.homeservice.controllers;

import cohorte16.homeservice.dtos.LoginDTO;
import cohorte16.homeservice.dtos.RegistroUsuarioDTO;
import cohorte16.homeservice.models.Client;
import cohorte16.homeservice.models.User;
import cohorte16.homeservice.repositories.ClientRepository;
import cohorte16.homeservice.services.impl.UserServiceImpl;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.time.LocalDate;
import java.util.function.Consumer;

import static java.net.URI.*;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserServiceImpl userServiceImpl;

    @Autowired
    private ClientRepository clientRepository;

    @PostMapping
    public ResponseEntity<?> RegistrarUsuario(@RequestBody @Valid RegistroUsuarioDTO registroUsuarioDTO){

        User userCreated;
        try {
          userCreated =  userServiceImpl.saveUser(registroUsuarioDTO);

        }catch (Exception ex){

            return  ResponseEntity.status(HttpStatus.CONFLICT).body("El usuario ya existe");
        }

        //devulve por convencion la url con los datos del usuario crado
        return ResponseEntity.created(create("/usuarios/"+new RegistroUsuarioDTO(userCreated).id())).body(RegistroUsuarioDTO.builder()
                .avatar(userCreated
                        .getAvatar())
                .email(userCreated.getEmail())
                .id(userCreated.getId()).build());
    }


    @PostMapping( value = "/login")
    public ResponseEntity <?> login(@RequestBody @Valid LoginDTO datosLogin) {;
        User userCreated;
        HttpHeaders jwtToken = new HttpHeaders();
        LocalDate hora = LocalDate.now();
        jwtToken.set("Authorization", "Bearer " + hora + " git jwttoken");
        Client client;

        try {
            userCreated = userServiceImpl.validateLogin(datosLogin);
            client = clientRepository.findClienteByUser(userCreated);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciales incorrectas");
        }
        if(client != null) {
            return new ResponseEntity<>(client, jwtToken, HttpStatus.OK);
            
             
        }

        return ResponseEntity.created(create("/usuarios/login/"+new RegistroUsuarioDTO(userCreated).id())).headers(jwtToken)
                .body(RegistroUsuarioDTO.builder()
                .avatar(userCreated
                        .getAvatar())
                .email(userCreated.getEmail())
                .id(userCreated.getId()).build());
    }
}
