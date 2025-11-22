
import Hero from './components/Hero';
import Story from './components/Story';
import ProductShowcase from './components/ProductShowcase';
import Bonuses from './components/Bonuses';
import Pricing from './components/Pricing';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import UrgencyBanner from './components/UrgencyBanner';

function App() {
  return (
    <div className="min-h-screen bg-brand-black text-brand-text font-sans overflow-x-hidden">
      <UrgencyBanner />
      <Hero />
      <Story />
      <ProductShowcase />
      <Testimonials />
      <Bonuses />
      <Pricing />
      <Guarantee />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
