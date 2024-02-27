import { Routes, Route, BrowserRouter } from 'react-router-dom';import Login from '../components/Login';
import PageNotFound from '../screens/PageNotFound';
import LandingPage from '../screens/LandingPage';
//import LoadingPage from "../screens/LoadingPage";
import BasicRegistrationForm from '../components/BasicRegistrationForm';
//import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashboardRouter from '../routers/DashboardRouter';

export const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/DashboardCliente' element={<DashboardRouter />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/Register' element={<BasicRegistrationForm />} />
                <Route path='/*' element={<PageNotFound />} />
                <Route
                    path='/acerca-de'
                    element={<h1>ACA VA INFO DE ACERCA DE</h1>}
                />
                <Route
                    path='/preguntas-frecuentes'
                    element={<h1>ACA VAN LAS PREGUNTAS FRECUENTES</h1>}
                />
                <Route
                    path='/terminos-y-condiciones'
                    element={<h1>ACA VAN LOS TERMINOS Y CONDICIONES</h1>}
                />
            </Routes>
        </BrowserRouter>
    );
};
