import Header from '../components/header';
import Slider from '../components/slider';
import Body2 from '../components/body2';
import Body1 from '../components/body1';
import Boxmodels from '../components/boxmodels';
import Boxmodels1 from '../components/boxmodels1';
import Body3 from '../components/body3';
import Enquiryform from '../components/enquiryform';
import Getintouch from '../components/getintouch';
import Footer from '../components/footer';
const Homepage= ()=>{
    return(
        <>
        {<Header/>}
        {<Slider/>}
        {<Body2/>}
        {<Body1/>}
        {<Boxmodels/>}
        {<Boxmodels1/>}
        {<Body3/>}
        {<Enquiryform/>}
        {<Getintouch/>}
        {<Footer/>}
        </>
    )
}
export default Homepage;