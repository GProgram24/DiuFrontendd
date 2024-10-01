import React, { Suspense } from 'react';
import './App.css'
import {  Routes, Route, useLocation } from 'react-router-dom'

import Header from './components/Header'
import Header1 from './components/Header1'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppButton from './components/WhatsAppButton';

const Home = React.lazy(() => import('./pages/Home'));
const AboutUs = React.lazy(() => import('./pages/AboutUs'));
const WeddingMain = React.lazy(() => import('./pages/WeddingMain'));
const Collaborations = React.lazy(() => import('./pages/Collaborations'));
const ContactUs = React.lazy(() => import('./pages/ContactUs'));
const WeddingSeparate = React.lazy(() => import('./pages/WeddingSeparate'));
const FeaturedEvent = React.lazy(() => import('./pages/FeaturedEvent'));
const BrandInstallations = React.lazy(() => import('./pages/BrandInstallations'));
const IntimateEvents = React.lazy(() => import('./pages/IntimateEvents'));
const AlannaBridalShower = React.lazy(() => import('./pages/Intimate Events/AlannaBridalShower'));
const DustyBlueReception = React.lazy(() => import('./pages/Intimate Events/DustyBlueReception'));
const SahibaBabyShower = React.lazy(() => import('./pages/Intimate Events/SahibaBabyShower'));
const GallopsTeaParty = React.lazy(() => import('./pages/Brand Installations/GallopsTeaParty'));
const RasLuxury = React.lazy(() => import('./pages/Brand Installations/RasLuxury'));
const SalttXmas = React.lazy(() => import('./pages/Brand Installations/SalttXmas'));
const DelhiWedding = React.lazy(() => import('./pages/Weddings/DelhiWedding'));
const NatashaWedding = React.lazy(() => import('./pages/Weddings/NatashaWedding'));
const PrernaRohan = React.lazy(() => import('./pages/Weddings/PrernaRohan'));


function App() {
  const location = useLocation();

  const getHeaderComponent = () => {
    const headerRoutes = ['/', '/weddings', '/weddingSeparate', '/weddings/PrernaRohan', '/weddings/DelhiWedding', '/weddings/NatashaWedding', '/works'];
    const header1Routes = ['/aboutus', '/collaborations', '/contact', '/intimateEvents', '/intimateEvents/AlannaBridalShower', '/intimateEvents/DustyBlueReception', '/intimateEvents/SahibaBabyShower', '/brandInstallations', '/brandInstallations/GallopsTeaParty', '/brandInstallations/RasLuxury', '/brandInstallations/SalttXmas', '/featuredEvent'];

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
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/collaborations" element={<Collaborations />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/weddings" element={<WeddingMain />} />
          <Route path="/weddings/PrernaRohan" element={<PrernaRohan />} />
          <Route path="/weddings/DelhiWedding" element={<DelhiWedding />} />
          <Route path="/weddings/NatashaWedding" element={<NatashaWedding />} />
          <Route path="/intimateEvents" element={<IntimateEvents/>} />
          <Route path="/intimateEvents/AlannaBridalShower" element={<AlannaBridalShower/>} />
          <Route path="/intimateEvents/DustyBlueReception" element={<DustyBlueReception/>} />
          <Route path="/intimateEvents/SahibaBabyShower" element={<SahibaBabyShower/>} />
          <Route path="/brandInstallations" element={<BrandInstallations />} />
          <Route path="/brandInstallations/GallopsTeaParty" element={<GallopsTeaParty />} />
          <Route path="/brandInstallations/RasLuxury" element={<RasLuxury />} />
          <Route path="/brandInstallations/SalttXmas" element={<SalttXmas />} />
          <Route path="/weddingSeparate" element={<WeddingSeparate />} />
          <Route path="/featuredEvent" element={<FeaturedEvent />} />
        </Routes>
      </Suspense>
      <Footer />
      <WhatsAppButton/>
    </div>
  );
}


export default App
