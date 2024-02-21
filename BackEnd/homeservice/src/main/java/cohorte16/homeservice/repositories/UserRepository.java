package cohorte16.homeservice.repositories;

import cohorte16.homeservice.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository <User,Long> {


   /* @Query(value = "SELECT * FROM usuarios WHERE mail = :mail AND password = :password", nativeQuery = true)
    Usuarios findByEmailAndContrasenia();*/


    User findByEmailAndContrasenia(String email, String contrasenia);
}