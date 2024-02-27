package cohorte16.homeservice.enums;

public enum Profession {
    OTHERS("OTHERS");

    private final String description;

    Profession(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }

    public static Profession fromString(String text) {
        for (Profession profesion : Profession.values()) {
            if (profesion.description.equalsIgnoreCase(text)) {
                return profesion;
            }
        }
        Profession p = null;
        return p;
    }
}
