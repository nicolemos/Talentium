import {
    BasicRegistrationFormProps,
    UserProps,
} from '../interfaces/RegistrationFormTypes';
import { useAuth } from '../context/AuthContext';

const useCreateUser = () => {
    const auth = useAuth();

    const createUser = async (
        userData: BasicRegistrationFormProps,
    ): Promise<UserProps | null> => {
        const url = 'http://localhost:8080/usuarios';
        console.log(userData);

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                const user = await response.json();
                auth.register(user);
                return user;
            } else {
                return null;
            }
        } catch (error) {
            console.error('Ocurrió un error:', error);
            return null;
        }
    };

    const loginUser = async (credentials: {
        email: string;
        password: string;
    }): Promise<UserProps | null> => {
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
                return user;
            } else {
                return null;
            }
        } catch (error) {
            console.error('An error occurred:', error);
            return null;
        }
    };

      const updateUser = async (
          userType: string,
          updatedUserData: UserProps,
      ): Promise<UserProps | number | null> => {
          const url = 'http://localhost:8080/api/client'
          try {
              const response = await fetch(url, {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(updatedUserData),
              });

              if (response.ok) {
                  const updateUser = await response.json();
                  auth.getUserFromLocalStorage();
                  return updateUser;
              } else {
                  return null;
              }
          } catch (error) {
              console.error('An error occurred:', error);
              return null;
          }
      };

    return { createUser, loginUser, updateUser };
};

export default useCreateUser;
//
