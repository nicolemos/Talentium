import SidebarDashboard from '../components/SidebarDashboard';
import HeaderDashboard from '../components/HeaderDashboard';

const DashboardCliente: React.FC = () => {
    return (
        <>
            <div className="grid grid-cols-6 min-w-full h-screen">
                <SidebarDashboard />
                <div className="col-span-5 bg-royal-blue-400 text-center">
                    <HeaderDashboard />
                </div>
            </div>
        </>
    );
};

export default DashboardCliente;
