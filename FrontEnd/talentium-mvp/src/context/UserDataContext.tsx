import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    useCallback,
} from 'react';
import { RegistrationFormProps } from '../interfaces/RegistrationFormTypes';

interface UserDataContextType {
    userData: RegistrationFormProps | null;
    updateUserData: (userData: RegistrationFormProps) => void;
}

const UserDataContext = createContext<UserDataContextType | undefined>(
    undefined,
);

// eslint-disable-next-line react-refresh/only-export-components
export const useUserData = () => {
    const context = useContext(UserDataContext);
    if (!context) {
        throw new Error('useUserData must be used within a UserDataProvider');
    }
    return context;
};

interface UserDataProviderProps {
    children: ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const getUserDataFromLocalStorage = (): RegistrationFormProps | null => {
    const storedUserData = localStorage.getItem('userData');
    return storedUserData ? JSON.parse(storedUserData) : null;
};

export const UserDataProvider: React.FC<UserDataProviderProps> = ({
    children,
}) => {
    const [userData, setUserData] = useState<RegistrationFormProps | null>(
        getUserDataFromLocalStorage(),
    );

    const updateUserData = useCallback((userData: RegistrationFormProps) => {
        setUserData(userData);
        saveUserDataToLocalStorage(userData);
    }, []);

    const saveUserDataToLocalStorage = (userData: RegistrationFormProps) => {
        localStorage.setItem('userData', JSON.stringify(userData));
    };

    return (
        <UserDataContext.Provider value={{ userData, updateUserData }}>
            {children}
        </UserDataContext.Provider>
    );
};
