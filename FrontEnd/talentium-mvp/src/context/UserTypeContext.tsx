import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    useCallback,
} from 'react';
import { UserType } from '../interfaces/RegistrationFormTypes';

interface UserTypeContextType {
    userType: UserType | null;
    updateUserType: (userType: UserType) => void;
}

const UserTypeContext = createContext<UserTypeContextType | undefined>(
    undefined,
);

// eslint-disable-next-line react-refresh/only-export-components
export const useUserType = () => {
    const context = useContext(UserTypeContext);
    if (context === undefined) {
        throw new Error('useUserType must be used within a UserTypeProvider');
    }
    return context;
};

interface UserTypeProviderProps {
    children: ReactNode;
}

const getUserTypeFromLocalStorage = (): UserType | null => {
    const storedUserType = localStorage.getItem('userType');
    return storedUserType ? JSON.parse(storedUserType) : null;
};

export const UserTypeProvider: React.FC<UserTypeProviderProps> = ({
    children,
}) => {
    const [userType, setUserType] = useState<UserType | null>(
        getUserTypeFromLocalStorage(),
    );

    const updateUserType = useCallback((userType: UserType) => {
        setUserType(userType);
        saveUserTypeToLocalStorage(userType);
    }, []);

    const saveUserTypeToLocalStorage = (userType: UserType) => {
      localStorage.setItem('userType', JSON.stringify(userType));
    };

    return (
        <UserTypeContext.Provider value={{ userType, updateUserType }}>
            {children}
        </UserTypeContext.Provider>
    );
};
