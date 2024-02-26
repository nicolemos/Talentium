import { Suspense } from 'react';
import { AppRouter } from './routers/AppRouter';
import LoadingPage from './screens/LoadingPage';
import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => {
    return (
        <>
            <AuthProvider>
                <Suspense fallback={<LoadingPage />}>
                    <AppRouter />
                </Suspense>
            </AuthProvider>
        </>
    );
};

export default App;
