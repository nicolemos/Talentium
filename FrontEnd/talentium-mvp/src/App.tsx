import { Suspense } from 'react';
import { AppRouter } from './routers/AppRouter';
import LoadingPage from './screens/LoadingPage';
import { AuthProvider } from './context/AuthContext';
import { UserTypeProvider } from './context/UserTypeContext';

const App: React.FC = () => {

    return (
        <>
            <AuthProvider>
                <UserTypeProvider>
                    <Suspense fallback={<LoadingPage />}>
                        <AppRouter />
                    </Suspense>
                </UserTypeProvider>
            </AuthProvider>
        </>
    );
};

export default App;
//