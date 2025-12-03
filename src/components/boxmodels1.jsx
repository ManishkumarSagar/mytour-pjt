import '../css/boxmodels1.css';
const Boxmodels1= ()=>{
    return(
        <>
        <html>
            <head>

            </head>
            <body>
                <div id="boxmodels1">
                    <div class="boxmodelspara1"><h3>DESTINATIONS</h3></div>
                    <div class="boxmodelspara2"><h2>TOP TRAVEL DESTINATIONS IN INDIA</h2></div>
                    <div class="smallmodelsdiv1">
                        <div class="innerdiv1">
                            <div><h3>MALDIVES</h3></div>
                            <div><a href="maldives"><img src="images/maldives.webp" height="300" width="300" class="topimg"/></a></div>
                        </div>
                        <div class="innerdiv2">
                            <div><h3>INDONESIA</h3></div>
                            <div><a href="indonesia"><img src="images/indonesia.jpg" height="350px" width="300" class="topimg"/></a></div>
                        </div>
                        <div class="innerdiv2">
                            <div><h3>UNITED ARAB EMIRATES</h3></div>
                            <div><a href="uae"><img src="images/uae.jpg" height="400px" width="300" class="topimg"/></a></div>
                        </div>
                    </div>
                    <div class="viewbtn">
                        <input type='button' value="View All Destinations" class="model1input"></input>
                    </div>
                </div>
            </body>
        </html>
        </>
    )
}
export default Boxmodels1;