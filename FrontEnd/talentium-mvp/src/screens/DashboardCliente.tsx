import SidebarDashboard from '../components/SidebarDashboard';
import HeaderDashboard from '../components/HeaderDashboard';
// import RegistrationForm from '../components/RegistrationForm';
// import { UserType } from '../interfaces/RegistrationFormTypes';

const DashboardCliente: React.FC = () => {
    return (
        <>
            <div className='overflow:hidden grid h-screen grid-cols-6 '>
                <SidebarDashboard />
                <div className='col-span-6 bg-royal-blue-400 text-center lg:col-span-5 '>
                    <HeaderDashboard />
                </div>
                {/* 
                    <RegistrationForm user={{}} userType={UserType.Client} />
                 */}
            </div>
        </>
    );
};

export default DashboardCliente;
