import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import Article from './Article';

const LandingPage: React.FC = () => {
    return (
        <>
            <div className='w-full min-h-screen bg-gradient-to-b from-royal-blue-500 to-royal-blue-100 '>
                <Header />
                <main>
                    <Hero />
                    <Article />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default LandingPage;
