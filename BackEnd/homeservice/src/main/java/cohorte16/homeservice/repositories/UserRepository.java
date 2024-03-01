package cohorte16.homeservice.repositories;

import cohorte16.homeservice.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository <User,Long> {


   /* @Query(value = "SELECT * FROM usuarios WHERE email = :email AND contrasenia = :contrasenia", nativeQuery = true)
    Usuarios findByEmailAndContrasenia();*/


    User findByEmailAndContrasenia(String email, String contrasenia);
}