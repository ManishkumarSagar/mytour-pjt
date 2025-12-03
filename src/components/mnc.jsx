import '../css/mnc.css';
const MNC= ()=>{
    return(
        <>
        <html>
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4b1P5z/iB4nMfSQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </head>
            <body>
                <div id="mncmaindiv">
                    <img src="https://www.corbett-national-park.com/socialimg/jim-corbett-national-park.jpg" class="mncimg"/>
                    <div id="innermncdiv">
                        <h1 class="mnchead"><u>Mussoorie, Nainital & Corbett- 12 Days</u></h1>
                        <p class="mncpara">By Train/Bus</p>
                        <div id="inner2mncdiv">
                            <ul class="mncul">
                                <div><li>Best Care & Service</li></div>
                                <div><li>Medical Care</li></div>
                                <div><li>Preferred Food</li></div>
                                <div><li>Guided Tour</li></div>
                                <div><li>Reading Material</li></div>
                                <div><li>Entertainment</li></div>
                            </ul>
                        </div>
                        <h1 class="mnctd">Tour Description</h1>
                        <hr class="mnchr"></hr>
                        <p class="mncparatd">Unwind in the lap of nature, at the hill stations of Mussorie and Nainital, both known<br></br> for their valleys and cold weather. Experience wildlife at its best at the Jim Corbett Na<br></br>-tional Park, go rafting at Rishikesh or simply enjoy nature’s beauty. Come embark on<br></br> one with us!</p>
                        <h1 class="mnctr">Tour Route</h1>
                        <hr class="mnchr1"></hr>
                        <div class="mnclist">
                            <div class="mncicon1"><i class="fa-solid fa-location-dot">New Delhi</i></div>
                            <div class="mncicon2"><i class="fa-solid fa-location-dot">Mussoorie</i></div>
                            <div class="mncicon3"><i class="fa-solid fa-location-dot">Dehradun</i></div>
                            <div class="mncicon4"><i class="fa-solid fa-location-dot">Haridwar</i></div>
                            <div class="mncicon5"><i class="fa-solid fa-location-dot">Rishikesh</i></div>
                            <div class="mncicon6"><i class="fa-solid fa-location-dot">Nainital</i></div>
                            <div class="mncicon7"><i class="fa-solid fa-location-dot">Bhimtal</i></div>
                            <div class="mncicon8"><i class="fa-solid fa-location-dot">Corbett</i></div>
                        </div>
                        <h1 class="mnctdet">Tour Details</h1>
                        <hr class="mnchr2"></hr>
                        <table id="mnctable" border="1" width="550px" height="200px">
                            <tbody>
                                <tr><td>Duration</td><td>12 Days</td></tr>
                                <tr><td>Information</td><td>New Delhi</td></tr>
                                <tr><td>Transport</td><td>By Train/Bus</td></tr>
                                <tr><td>Distance</td><td>7000 kms</td></tr>
                                <tr><td>Best Time</td><td>February,March,April</td></tr>
                            </tbody>    
                        </table>
                        <div id="mncpsr">
                            <div class="mncpricediv">
                                <h2 class="mncprice">Price</h2>
                            </div>
                            <p class="mncstarting">Starting From</p>
                            <div class="mncrate">38000/-</div>
                        </div>
                        
                    </div>
                </div>
                        <div id="mncletsenjoy">
                            <p class="mncclassenjoy">LET'S ENJOY THE TRAVEL...</p>
                        </div>
            </body>
        </html>
        </>
    )
}
export default MNC;