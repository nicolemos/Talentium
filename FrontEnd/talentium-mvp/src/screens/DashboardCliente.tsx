//import SidebarDashboard from '../components/SidebarDashboard';
//import HeaderDashboard from '../components/HeaderDashboard';
import { Outlet } from 'react-router-dom'
// import RegistrationForm from '../components/RegistrationForm';
// import { UserType } from '../interfaces/RegistrationFormTypes';

const DashboardCliente: React.FC = () => {
    return (
        <>
            <Outlet />
        </>
    );
};

export default DashboardCliente;
