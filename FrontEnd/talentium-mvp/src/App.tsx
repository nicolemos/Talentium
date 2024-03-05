import { AppRouter } from './routers/AppRouter';
import { AuthProvider } from './context/AuthContext';
import { UserTypeProvider } from './context/UserTypeContext';
import { UserDataProvider } from './context/UserDataContext';

const App: React.FC = () => {
    return (
        <>
            <AuthProvider>
                <UserTypeProvider>
                    <UserDataProvider>
                        <AppRouter />
                    </UserDataProvider>
                </UserTypeProvider>
            </AuthProvider>
        </>
    );
};

export default App;
//
