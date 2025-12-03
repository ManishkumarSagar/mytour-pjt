import '../css/ooty.css';
const Ooty= ()=>{
    return(
        <>
        <html>
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4b1P5z/iB4nMfSQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </head>
            <body>
                <div id="mncmaindiv">
                    <img src="https://wallpapercave.com/wp/wp3495639.jpg" class="mncimg"/>
                    <div id="innermncdiv">
                        <h1 class="mnchead"><u>Ooty- 5 Days</u></h1>
                        <p class="mncpara">(Karnataka)</p>
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
                        <p class="mncparatd">This is yet another short getaways to the The beautiful hills with cool temperatures.<br></br> The granite cliffs, the forested valleys, the lakes, the waterfalls and the grassy hills are<br></br> all breathtaking stunners.</p>
                        <h1 class="mnctr">Tour Route</h1>
                        <hr class="mnchr1"></hr>
                        <div class="mnclist">
                            <div class="ootyicon1"><i class="fa-solid fa-location-dot">Bangaluru</i></div>
                            <div class="ootyicon2"><i class="fa-solid fa-location-dot">Ranganathittu</i></div>
                            <div class="ootyicon3"><i class="fa-solid fa-location-dot">Ooty</i></div>
                            <div class="ootyicon4"><i class="fa-solid fa-location-dot">Kodaikanal</i></div>
                        </div>
                        <h1 class="mnctdet">Tour Details</h1>
                        <hr class="mnchr2"></hr>
                        <table id="ootytable" border="1" width="550px" height="200px">
                            <tbody>
                                <tr><td>Duration</td><td>5 Days</td></tr>
                                <tr><td>Info</td><td>Ex. Bengaluru</td></tr>
                                <tr><td>Transport</td><td>By A/C Bus</td></tr>
                                <tr><td>Distance</td><td>1400 kms</td></tr>
                                <tr><td>Best Time</td><td>All Months</td></tr>
                            </tbody>    
                        </table>
                        <div id="mncpsr">
                            <div class="mncpricediv">
                                <h2 class="mncprice">Price</h2>
                            </div>
                            <p class="mncstarting">Starting From</p>
                            <div class="mncrate">Non A/C Room 19200/-</div>
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
export default Ooty;