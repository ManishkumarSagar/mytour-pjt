import '../css/bangalore.css';
const Bangalore= ()=>{
    return(
        <>
        <html>
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4b1P5z/iB4nMfSQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </head>
            <body>
                <div id="bangmaindiv">
                    <img src="https://t3.ftcdn.net/jpg/02/43/24/76/360_F_243247620_Clg6rXsX4K0lhPWip3oo9Oee28J30L23.jpg" class="bangimg"/>
                    <div id="innerbangdiv">
                        <h1 class="banghead"><u>Bangalore- 3 Days</u></h1>
                        {/* <p class="bangpara">(Karnataka, Goa)</p> */}
                        <div id="inner2bangdiv">
                            <ul class="bangul">
                                <div><li>Best Care & Service</li></div>
                                <div><li>Medical Care</li></div>
                                <div><li>Preferred Food</li></div>
                                <div><li>Guided Tour</li></div>
                                <div><li>Reading Material</li></div>
                                <div><li>Entertainment</li></div>
                            </ul>
                        </div>
                        <h1 class="bangtd">Tour Description</h1>
                        <hr class="banghr"></hr>
                        <p class="bangparatd">Bangalore boasts a variety of spas offering relaxation and rejuvenation through<br></br> massages, facials, and other treatments. These spas often incorporate traditional<br></br> healing methods like Ayurveda and aromatherapy, creating a tranquil environment<br></br> for guests to unwind and escape the city's energy.</p>
                        <h1 class="bangtr">Tour Route</h1>
                        <hr class="banghr1"></hr>
                        <div class="banglist">
                            <div class="bangicon1"><i class="fa-solid fa-location-dot">Coorg</i></div>
                            <div class="bangicon2"><i class="fa-solid fa-location-dot">Chikmagalur</i></div>
                            <div class="bangicon3"><i class="fa-solid fa-location-dot">Mysore</i></div>
                            <div class="bangicon4"><i class="fa-solid fa-location-dot">Nandi Hills</i></div>
                        </div>
                        <h1 class="bangtdet">Tour Details</h1>
                        <hr class="banghr2"></hr>
                        <table id="bangtable" border="1" width="550px" height="200px">
                            <tbody>
                                <tr><td>Duration</td><td>3 Days</td></tr>
                                <tr><td>Info</td><td>Ex. Bangalore</td></tr>
                                <tr><td>Transport</td><td>By A/C Bus</td></tr>
                                <tr><td>Distance</td><td>2129 kms</td></tr>
                                <tr><td>Best Time</td><td>All Months</td></tr>
                            </tbody>    
                        </table>
                        <div id="bangpsr">
                            <div class="bangpricediv">
                                <h2 class="bangprice">Price</h2>
                            </div>
                            <p class="bangstarting">Starting From</p>
                            <div class="bangrate">Non A/C Room 18900/-</div>
                            <div class="bangrate">A/C Room 20900/-</div>
                        </div>
                        
                    </div>
                </div>
                        <div id="bangletsenjoy">
                            <p class="bangclassenjoy">LET'S ENJOY THE TRAVEL...</p>
                        </div>
            </body>
        </html>
        </>
    )
}
export default Bangalore;