package cohorte16.homeservice.repositories;

import cohorte16.homeservice.models.Client;
import cohorte16.homeservice.models.Professional;
import cohorte16.homeservice.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfessionalRepository extends JpaRepository<Professional, Long> {
    Professional findProfesionalByUser(User userCreated);
}
