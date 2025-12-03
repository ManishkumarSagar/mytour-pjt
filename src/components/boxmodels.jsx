import '../css/boxmodels.css';
import {useNavigate} from 'react-router-dom';
const Boxmodels= ()=>{
    const navigate= useNavigate();
    return(
        <>
        <html>
            <head>

            </head>
            <body>
                <div id="parentboxdiv">
                    <div class="innerparentdiv">
                        <div class="boxpara1"><h5><u>Custom Vacations to Your Favourite Destination</u></h5></div>
                        <div class="boxpara2"><h2>Choose The <b><u>Type Of Vacation</u></b> You Want!!!</h2></div>
                        <div class="boxpara3"><h5><u>Go Explore</u></h5></div>
                    </div>
                    <div class="innerboxdiv">
                        <div class="innerbox1">
                            <div><img src="images/nature.jpg" class="innerboximg1"></img></div>
                            <div class="naturesimgs"><a href='natures'>NATURES</a></div>
                        </div>
                        <div class="innerbox2">
                            <div><img src="images/pilgrimage.webp" class="innerboximg1"></img></div>
                            <div class="pilgrimimg"><a href='pilgrimage'>PILGRIMAGES</a></div>
                        </div>
                        <div class="innerbox3">
                            <div><img src="images/heritage.webp" class="innerboximg1"></img></div>
                            <div class="heritimg"><a href='heritage'>HERITAGE</a></div>
                        </div>
                        <div class="innerbox4">
                            <div><img src="images/adventure.jpeg" class="innerboximg1"></img></div>
                            <div class="adventimg"><a href='adventure'>ADVENTURE</a></div>
                        </div>
                        <div class="innerbox5">
                            <div><img src="images/spa.jpeg" class="innerboximg1"></img></div>
                            <div class="spaimgs"><a href='spa'>SPA</a></div>
                        </div>
                        <div class="innerbox6">
                            <div><img src="images/honeymoon.jpg" class="innerboximg1"></img></div>
                            <div class="heneyimg"><a href='honeymoon'>HONEYMOON</a></div>
                        </div>
                    </div>
                </div>
            </body>
        </html>
        </>
    )
}
export default Boxmodels;