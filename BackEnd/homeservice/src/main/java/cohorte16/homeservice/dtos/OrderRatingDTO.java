package cohorte16.homeservice.dtos;

public record OrderRatingDTO(
        Long id,
        Integer ratingClient,
        Integer ratingProfessional
) {
}
