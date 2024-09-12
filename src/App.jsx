import './App.css'
import {  Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Header1 from './components/Header1'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Works from './pages/Works'
import WeddingMain from "./pages/WeddingMain";
import Collaborations from './pages/Collaborations'
import ContactUs from "./pages/ContactUs"
import WeddingSeparate from './pages/WeddingSeparate'
import FeaturedEvent from './pages/FeaturedEvent'
import BrandInstallations from './pages/BrandInstallations'
import ScrollToTop from './components/ScrollToTop'
import IntimateEvents from './pages/IntimateEvents'
import AlannaBridalShower from './pages/Intimate Events/AlannaBridalShower'
import DustyBlueReception from './pages/Intimate Events/DustyBlueReception'
import SahibaBabyShower from './pages/Intimate Events/SahibaBabyShower'
import GallopsTeaParty from './pages/Brand Installations/GallopsTeaParty'
import RasLuxury from './pages/Brand Installations/RasLuxury'
import SalttXmas from './pages/Brand Installations/SalttXmas'
// import SuchitaNisarg from './pages/Weddings/SuchitaNisarg'
import DelhiWedding from './pages/Weddings/DelhiWedding'
import NatashaWedding from './pages/Weddings/NatashaWedding'
import PrernaRohan from './pages/Weddings/PrernaRohan'

function App() {
  const location = useLocation();

  const getHeaderComponent = () => {
    const headerRoutes = ['/', '/weddings', '/weddingSeparate','/weddings/PrernaRohan','/weddings/DelhiWedding','/weddings/NatashaWedding', '/works'];
    const header1Routes = ['/aboutus', '/collaborations', '/contact', '/intimateEvents','/intimateEvents/AlannaBridalShower','/intimateEvents/DustyBlueReception','/intimateEvents/SahibaBabyShower','/brandInstallations','/brandInstallations/GallopsTeaParty','/brandInstallations/RasLuxury','/brandInstallations/SalttXmas', '/featuredEvent'];

    if (headerRoutes.includes(location.pathname)) {
      return <Header />;
    } else if (header1Routes.includes(location.pathname)) {
      return <Header1 />;
    }
    return null; // In case there's no matching route, return null or a default header
  };

  return (
    <div className=''>
     
        {getHeaderComponent()}
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/works" element={<Works />} />
          <Route path="/collaborations" element={<Collaborations />} />
          <Route path="/contact" element={<ContactUs />} />


          <Route path="/weddings" element={<WeddingMain />} />
          {/* <Route path="/weddings/SuchitaNisarg" element={<SuchitaNisarg />} /> */}
          <Route path="/weddings/PrernaRohan" element={<PrernaRohan />} />
          <Route path="/weddings/DelhiWedding" element={<DelhiWedding />} />
          <Route path="/weddings/NatashaWedding" element={<NatashaWedding />} />


          <Route path="/intimateEvents" element={<IntimateEvents/>} />
          <Route path="/intimateEvents/AlannaBridalShower" element={<AlannaBridalShower/>} />
          <Route path="/intimateEvents/DustyBlueReception" element={<DustyBlueReception/>} />
          <Route path="/intimateEvents/SahibaBabyShower" element={<SahibaBabyShower/>} />

          <Route path="/brandInstallations" element={<BrandInstallations />} />
          <Route path="/brandInstallations/GallopsTeaParty" element={<GallopsTeaParty />} />
          <Route path="/brandInstallations/RasLuxury" element={<RasLuxury/>} />
          <Route path="/brandInstallations/SalttXmas" element={<SalttXmas />} />


          <Route path="/weddingSeparate" element={<WeddingSeparate />} />
          <Route path="/featuredEvent" element={<FeaturedEvent />} />
        </Routes>
        <Footer />
     
    </div>
  )
}

export default App
