import '../css/asv.css';
const ASV= ()=>{
    return(
        <>
        <html>
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4b1P5z/iB4nMfSQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </head>
            <body>
                <div id="mncmaindiv">
                    <img src="https://5.imimg.com/data5/QG/TN/GLADMIN-8763594/vaishnodevi-yatra-with-exotic-kashmir-tour-500x500.jpg" class="mncimg"/>
                    <div id="innermncdiv">
                        <h1 class="mnchead"><u>Amarnath,Srinagar & Vaishnodevi - 14 Days</u></h1>
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
                        <p class="mncparatd">Beginning with one of the most sacred and most visited shrine of a goddess in Vaishn-<br></br>odevi which they say one can visit only if he wishes you to, you will then visit Amarnath<br></br> cave, the Hindu Shrine situated at a height of 3888 mts. The snow clad city of Shrinagar<br></br> housing the famous Dal Lake and the Skiing destination Gulmarg are a treat to the eyes.</p>
                        <h1 class="mnctr">Tour Route</h1>
                        <hr class="mnchr1"></hr>
                        <div class="amarlist">
                            <div class="mncicon1"><i class="fa-solid fa-location-dot">Katra</i></div>
                            <div class="mncicon2"><i class="fa-solid fa-location-dot">Vaishnodevi</i></div>
                            <div class="mncicon3"><i class="fa-solid fa-location-dot">Baltal</i></div>
                            <div class="mncicon4"><i class="fa-solid fa-location-dot">Amarnath</i></div>
                            <div class="mncicon5"><i class="fa-solid fa-location-dot">Srinagar</i></div>
                            {/*<div class="mncicon6"><i class="fa-solid fa-location-dot">Nainital</i></div>
                            <div class="mncicon7"><i class="fa-solid fa-location-dot">Bhimtal</i></div>
                            <div class="mncicon8"><i class="fa-solid fa-location-dot">Corbett</i></div> */}
                        </div>
                        <h1 class="mnctdet">Tour Details</h1>
                        <hr class="mnchr2"></hr>
                        <table id="amartable" border="1" width="550px" height="200px">
                            <tbody>
                                <tr><td>Duration</td><td>14 Days</td></tr>
                                {/* <tr><td>Info</td><td>Katra, Srinagar</td></tr> */}
                                <tr><td>Transport</td><td>By Train\Bus</td></tr>
                                {/* <tr><td>Distance</td><td>6900 kms</td></tr> */}
                                <tr><td>Best Time</td><td>June, July</td></tr>
                            </tbody>    
                        </table>
                        <div id="mncpsr">
                            <div class="mncpricediv">
                                <h2 class="mncprice">Price</h2>
                            </div>
                            <p class="mncstarting">Starting From</p>
                            <div class="mncrate1">39100/-</div>
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
export default ASV;