import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    useCallback,
} from 'react';


//import { User } from '../interfaces/UserProps';
import { UserProps } from '../interfaces/RegistrationFormTypes';

interface AuthContextType {
    user: UserProps | null;
    login: (user: UserProps) => void;
    logout: () => void;
    register: (user: UserProps) => void;
    getUserFromLocalStorage: () => UserProps | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within a AuthProvider');
    }
    return context;
};

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const login = useCallback((user: UserProps | null) => {
        setUser(user);
        user && saveUserToLocalStorage(user);
    }, []);

    const register = useCallback((user: UserProps) => {
        setUser(user);
        saveUserToLocalStorage(user);
    }, []);

    const logout = useCallback(() => {
        setUser(null);
        clearUserFromLocalStorage();
    }, []);

    const saveUserToLocalStorage = (user: UserProps) => {
        user ? localStorage.setItem('user', JSON.stringify(Number(user.id))) : null;
    };

    const clearUserFromLocalStorage = () => {
        localStorage.removeItem('user');
    };

    const getUserFromLocalStorage = (): UserProps | null => {
        const storedId = localStorage.getItem('user');
        if (storedId) {
            const parsedId = JSON.parse(storedId);
            if (!isNaN(parsedId)) {
                return { id: Number(parsedId) };
            }
        }
        return null; // Devolver null si el id no es un número o no está presente
    };

    const [user, setUser] = useState<UserProps | null>(
        getUserFromLocalStorage(),
    );

    return (
        <AuthContext.Provider
            value={{ user, login, register, logout, getUserFromLocalStorage }}
        >
            {children}
        </AuthContext.Provider>
    );
};
