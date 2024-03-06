import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from '../components/Login';
//import PageNotFound from '../screens/PageNotFound';
import LandingPage from '../screens/LandingPage';
import BasicRegistrationForm from '../components/BasicRegistrationForm';
import 'react-toastify/dist/ReactToastify.css';
import DashboardRouter from './DashboardRouter';
import FaqSection from '../screens/FaqSection';
import TermsAndConditionsPage from '../screens/TermsAndConditionPage'
import AboutUsPage from '../screens/AboutUs'

export const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route
                    path='/DashboardCliente/*'
                    element={<DashboardRouter />}
                />
                <Route path='/Login' element={<Login />} />
                <Route path='/Register' element={<BasicRegistrationForm />} />
                {/*<Route path='/*' element={<PageNotFound />} /> */}
                <Route
                    path='/acerca-de'
                    element={<AboutUsPage/>}
                />
                <Route path='/preguntas-frecuentes' element={<FaqSection />} />
                <Route
                    path='/terminos-y-condiciones'
                    element={<TermsAndConditionsPage/>}
                />
            </Routes>
        </BrowserRouter>
    );
};
