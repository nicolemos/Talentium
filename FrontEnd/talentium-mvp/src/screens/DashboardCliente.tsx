import SidebarDashboard from '../components/SidebarDashboard';import HeaderDashboard from '../components/HeaderDashboard';
import RegistrationForm from '../components/RegistrationForm';
import { UserType } from '../interfaces/RegistrationFormTypes';

const DashboardCliente: React.FC = () => {
    return (
        <>
            <div className='grid grid-cols-6 min-w-full h-screen'>
                <SidebarDashboard />
                <div className='col-span-5 bg-royal-blue-400 text-center'>
                    <HeaderDashboard />
                    <RegistrationForm user={{}} userType={UserType.Client} />
                </div>
            </div>
        </>
    );
};

export default DashboardCliente;
