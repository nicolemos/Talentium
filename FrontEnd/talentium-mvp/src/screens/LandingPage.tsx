import DashboardCliente from "./DashboardCliente";import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Article from "../components/Article";
import { useAuth } from "../context/AuthContext";

import { LoginForm } from "../interfaces/LoginForm";

const LandingPage: React.FC<LoginForm> = () => {
    const { user } = useAuth();

<<<<<<< HEAD
  return (
    <div className=" bg-gradient-to-b from-royal-blue-500  to-white
    flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {!email ? (
          <section className=" body-font flex-grow">
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
=======
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
>>>>>>> cbf3fbddabcdb4bb749eb1404865e5bd9b611677
};

export default LandingPage;
