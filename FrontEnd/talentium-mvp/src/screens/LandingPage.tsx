import DashboardCliente from "./DashboardCliente";import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Article from "../components/Article";
import { useAuth } from "../context/AuthContext";

import { LoginForm } from "../interfaces/LoginForm";

const LandingPage: React.FC<LoginForm> = () => {
    const { user } = useAuth();

    return (
        <div
            className=' bg-gradient-to-b from-royal-blue-500  to-white
    flex flex-col min-h-screen'
        >
            <Header />
            <main className='flex-grow'>
                {!user?.email ? (
                    <section className='flex-grow'>
                        <Hero />
                        <Article />
                    </section>
                ) : (
                    <>
                        <DashboardCliente />
                    </>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default LandingPage;
