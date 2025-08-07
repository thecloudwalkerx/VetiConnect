import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Features from "./sections/Features.jsx";
import Pricing from "./sections/Pricing.jsx";
import Faq from "./sections/Faq.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Download from "./sections/Download.jsx";
import Footer from "./sections/Footer.jsx";
import Ribbons from './animations/Ribbons.jsx';


const App = () => {
    return (
        <>
            <main className="overflow-hidden">
                <Header />
                <Hero />
                <Features />
                <Pricing />
                <Faq />
                <Testimonials />
                <Download />
                <Footer />
            </main>

            {/* Global Ribbons overlay */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    pointerEvents: 'none', // so it doesn't block interactions
                    overflow: 'hidden',
                    zIndex: 9999,
                }}
            >
                <Ribbons
                    baseThickness={10}
                    colors={['#ffffff']}
                    speedMultiplier={0.35}
                    maxAge={300}
                    enableFade={true}
                    enableShaderEffect={false}
                />
            </div>
        </>
    );
};

export default App;