import {useNavigate} from 'react-router-dom';
import '../css/header.css';
const Header= ()=>{
    const navigate= useNavigate();
    return(
        <>
        <html>
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </head>
            <body>
            <div id="maindivt">
                <div class="tourmainhead"><u>tournTravels</u></div>
                <div class="srchtggle">
                    <i class='fas fa-search srchicon'></i>
                    <input type="text" placeholder="Enter Search" class="srchinput"></input>
                </div>
                <div class="conthead">
                    <div><a href='http://localhost:3000/'>Home</a></div>
                    <div><a href="http://localhost:3000/contactus">Contact Us</a></div>
                    <div><a href='http://localhost:3000/tourinformation'>Tour Information</a></div>
                    <div><a href="http://localhost:3000/otherfacility">Other Facilities</a></div>
                </div>
                <div class="bkbtn">
                    <a onClick={()=>{navigate('/alltours')}}><input type="button" value="Book Now" class="bookbtn"></input></a>
                </div>
            </div>
            </body>
        </html>
        </>
    )
}
export default Header;