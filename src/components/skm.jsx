import '../css/skm.css';
const SKM= ()=>{
    return(
        <>
        <html>
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4b1P5z/iB4nMfSQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </head>
            <body>
                <div id="skmmaindiv">
                    <img src="https://media.istockphoto.com/id/1128928156/photo/village-of-wodden-house-in-himalayas-himachal-pradesh.jpg?s=612x612&w=0&k=20&c=po8IANskAmgfzwrVRHRKRvAlT88ItYDF1P_F2D3oamg=" class="skmimg"/>
                    <div id="innerskmdiv">
                        <h1 class="skmhead"><u>Shimla, Kullu & Manali- 10 Days</u></h1>
                        <p class="skmpara">By Train/Bus</p>
                        <div id="inner2skmdiv">
                            <ul class="skmul">
                                <div><li>Best Care & Service</li></div>
                                <div><li>Medical Care</li></div>
                                <div><li>Preferred Food</li></div>
                                <div><li>Guided Tour</li></div>
                                <div><li>Reading Material</li></div>
                                <div><li>Entertainment</li></div>
                            </ul>
                        </div>
                        <h1 class="skmtd">Tour Description</h1>
                        <hr class="skmhr"></hr>
                        <p class="skmparatd">No Indian Tourist misses out on visiting these cities in his lifetime. These snow clad<br></br> cities of Himachal Pradesh, set on the Himalayan foothills and on the banks of Beas<br></br> River are a dream to visit. You also have the opportunity to visit Amritsar housing the<br></br> holiest Gurudwara, and Chandigarh, the best planned Indian City, along with witnessing<br></br> the Wagah Border Ceremony at Wagah, the village between India and Pakistan.</p>
                        <h1 class="skmtr">Tour Route</h1>
                        <hr class="skmhr1"></hr>
                        <div class="skmlist">
                            <div class="skmicon1"><i class="fa-solid fa-location-dot">New Delhi</i></div>
                            <div class="skmicon2"><i class="fa-solid fa-location-dot">Chandigarh</i></div>
                            <div class="skmicon3"><i class="fa-solid fa-location-dot">Pinjore Garden</i></div>
                            <div class="skmicon4"><i class="fa-solid fa-location-dot">Simla</i></div>
                            <div class="skmicon5"><i class="fa-solid fa-location-dot">Kufri</i></div>
                            <div class="skmicon6"><i class="fa-solid fa-location-dot">Kullu</i></div>
                            <div class="skmicon7"><i class="fa-solid fa-location-dot">Manikaran</i></div>
                            <div class="skmicon8"><i class="fa-solid fa-location-dot">Manali</i></div>
                            <div class="skmicon9"><i class="fa-solid fa-location-dot">Rohtang Pass</i></div>
                            <div class="skmicon10"><i class="fa-solid fa-location-dot">Amritsar</i></div>
                            <div class="skmicon11"><i class="fa-solid fa-location-dot">Wagah Border</i></div>
                        </div>
                        <h1 class="skmtdet">Tour Details</h1>
                        <hr class="skmhr2"></hr>
                        <table id="skmtable" border="1" width="550px" height="110px">
                            <tbody>
                                <tr><td>Duration</td><td>10 Days</td></tr>
                                {/* <tr><td>Info</td><td>Jaipur</td></tr> */}
                                <tr><td>Transport</td><td>By Train/Bus</td></tr>
                                <tr><td>Distance</td><td>7500 kms</td></tr>
                                <tr><td>Best Time</td><td>All Time</td></tr>
                            </tbody>    
                        </table>
                        <div id="skmpsr">
                            <div class="skmpricediv">
                                <h2 class="skmprice">Price</h2>
                            </div>
                            <p class="skmstarting">Starting From</p>
                            <div class="skmrate">40900/-</div>
                        </div>
                        
                    </div>
                </div>
                        <div id="skmletsenjoy">
                            <p class="skmclassenjoy">LET'S ENJOY THE TRAVEL...</p>
                        </div>
            </body>
        </html>
        </>
    )
}
export default SKM;