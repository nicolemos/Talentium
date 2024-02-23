import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import Article from '../components/Article';

const LandingPage: React.FC = () => {
    return (
        <div
            className='bg-gradient-to-b from-royal-blue-500  to-white
    flex flex-col min-h-screen'
        >
            <Header />
            <main className='flex-grow'>
                <section className='flex-grow'>
                    <Hero />
                    <Article />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;
