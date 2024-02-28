import { UserProps } from '../interfaces/RegistrationFormTypes';import { useAuth } from '../context/AuthContext';

const useCreateUser = () => {
    const auth = useAuth();

    const createUser = async (userData: UserProps): Promise<boolean> => {
        const url = 'http://localhost:8080/usuarios';

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error('Ocurrió un error:', error);
            return false;
        }
    };

    const loginUser = async (credentials: {
        email: string;
        contrasenia: string;
    }): Promise<boolean> => {
        const loginUrl = 'http://localhost:8080/usuarios/login';

        try {
            const response = await fetch(loginUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            if (response.ok) {
                const user = await response.json();
                auth.login(user);
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error('An error occurred:', error);
            return false;
        }
    };

    const updateUser = async (
        userId: string,
        userType: string,
        updatedUserData: UserProps
    ): Promise<boolean> => {
        const url = `http://localhost:8080/${userType}/${userId}`;

        try {
            const response = await fetch(url, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedUserData),
            });

            if (response.ok) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error('An error occurred:', error);
            return false;
        }
    };

    return { createUser, loginUser, updateUser };
};

export default useCreateUser;
