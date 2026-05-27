import Navbar            from './components/Navbar';
import HeroSection       from './components/HeroSection';
import ProblemaSection   from './components/ProblemaSection';
import SolucionSection   from './components/SolucionSection';
import AlcancesSection   from './components/AlcancesSection';
import UsuariosSection   from './components/UsuariosSection';
import MonetizacionSection from './components/MonetizacionSection';
import DemoSection       from './components/DemoSection';
import MapaSection       from './components/MapaSection';
import Footer            from './components/Footer';

/**
 * App raíz — ensambla la Landing Page de EcoReg-AI.
 *
 * Orden de secciones:
 *  1. Navbar (fija)
 *  2. Hero
 *  3. Problema
 *  4. Solución
 *  5. Alcances
 *  6. Usuarios
 *  7. Monetización
 *  8. Demo interactivo
 *  9. Mapa de acopio
 * 10. Footer
 */
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemaSection />
        <SolucionSection />
        <AlcancesSection />
        <UsuariosSection />
        <MonetizacionSection />
        <DemoSection />
        <MapaSection />
      </main>
      <Footer />
    </>
  );
}
