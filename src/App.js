import logo from './logo.svg';
import './App.css';
// import Header from './components/header';
// import Slider from './components/slider';
// import Body2 from './components/body2';
// import Body1 from './components/body1';
// import Boxmodels1 from './components/boxmodels1';
// import Boxmodels from './components/boxmodels';
// import Body3 from './components/body3';
// import Enquiryform from './components/enquiryform';
// import Footer from './components/footer';
import Homepage from './pages/homepage';
import Naturespage from './pages/naturespage';
import Pilgrimagepage from './pages/pilgrimagepage';
import Heritagespage from './pages/heritagespage';
import Adventurespage from './pages/adventurespage';
import Spaspage from './pages/spaspage';
import Honeymoonspage from './pages/honeymoonspage';
import Aboutuspage from './pages/aboutuspage';
import Contactuspage from './pages/contactuspage';
import Otherfacilitypage from './pages/otherfacilitypage';
import MNCpage from './pages/mncpage';
import Amarnathpage from './pages/amarnathpage';
import Kashmirpage from './pages/kashmirpage';
import Rajasthanpage from './pages/rajasthanpage';
import Ootypage from './pages/ootypage';
import Assampage from './pages/assampage';
import Whyuspage from './pages/whyuspage';
import Geninfopage from './pages/geninfopage';
import Impinfopage from './pages/impinfopage';
import Tourinfopage from './pages/tourinfopage';
import ASVpage from './pages/asvpage';
import Gujrajpage from './pages/gujrajpage';
import Sunsandspage from './pages/sunsandspage';
import Maldivespage from './pages/maldivespage';
import Indonesiapage from './pages/indonesiapage';
import UAEpage from './pages/uaepage';
import Goapage from './pages/goapage';
import Bangalorespapage from './pages/bangalorespapage';
import SKMpage from './pages/skmpage';
import Keralatamilpage from './pages/keralatamilpage';
import Coorgpage from './pages/coorgpage';
import Goacoorgpage from './pages/goacoorgpage';
import Mysticeastpage from './pages/mysticeastpage';
import Alltours from './pages/alltourspage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <>
    {/* {<Header/>}
    {<Slider/>}
    {<Body2/>}
    {<Body1/>}
    {<Boxmodels/>}
    {<Boxmodels1/>}
    {<Body3/>}
    {<Enquiryform/>}
    {<Footer/>} */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/natures' element={<Naturespage/>}/>
        <Route path='/pilgrimage' element={<Pilgrimagepage/>}/>
        <Route path='heritage' element={<Heritagespage/>}/>
        <Route path='/adventure' element={<Adventurespage/>}/>
        <Route path='/spa' element={<Spaspage/>}/>
        <Route path='/honeymoon' element={<Honeymoonspage/>}/>
        <Route path='/aboutus' element={<Aboutuspage/>}/>
        <Route path='/contactus' element={<Contactuspage/>}/>
        <Route path='/otherfacility' element={<Otherfacilitypage/>}/>
        <Route path='/mnc' element={<MNCpage/>}/>
        <Route path='/amarnath' element={<Amarnathpage/>}/>
        <Route path='/kashmir' element={<Kashmirpage/>}/>
        <Route path='/rajasthan' element={<Rajasthanpage/>}/>
        <Route path='/ooty' element={<Ootypage/>}/>
        <Route path='/assam' element={<Assampage/>}/>
        <Route path='/whyus' element={<Whyuspage/>}/>
        <Route path='/generalinformation' element={<Geninfopage/>}/>
        <Route path='/impinformation' element={<Impinfopage/>}/>
        <Route path='/tourinformation' element={<Tourinfopage/>}/>
        <Route path='/asv' element={<ASVpage/>}/>
        <Route path='/gujratr' element={<Gujrajpage/>}/>
        <Route path='/sunsands' element={<Sunsandspage/>}/>
        <Route path='/maldives' element={<Maldivespage/>}/>
        <Route path='/indonesia' element={<Indonesiapage/>}/>
        <Route path='/uae' element={<UAEpage/>}/>
        <Route path='/goa' element={<Goapage/>}/>
        <Route path='/bangalore' element={<Bangalorespapage/>}/>
        <Route path='/skm' element={<SKMpage/>}/>
        <Route path='/keralatamil' element={<Keralatamilpage/>}/>
        <Route path='/coorg' element={<Coorgpage/>}/>
        <Route path='/goacoorg' element={<Goacoorgpage/>}/>
        <Route path='/mysticeast' element={<Mysticeastpage/>}/>
        <Route path='/alltours' element={<Alltours/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
