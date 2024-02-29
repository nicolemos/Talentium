import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    useCallback,
} from 'react';

import { User } from '../interfaces/User';

interface AuthContextType {
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
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

const getUserFromLocalStorage = (): User | null => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(getUserFromLocalStorage());

    const login = useCallback((user: User) => {
        setUser(user);
        saveUserToLocalStorage(user);
    }, []);

    const logout = useCallback(() => {
        setUser(null);
        clearUserFromLocalStorage();
    }, []);

    const saveUserToLocalStorage = (user: User) => {
        localStorage.setItem('user', JSON.stringify(user));
    };

    const clearUserFromLocalStorage = () => {
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
