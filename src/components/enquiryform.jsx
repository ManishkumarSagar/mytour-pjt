import '../css/enquiryform.css';
import {useState} from 'react';
import axios from 'axios';
const Enquiryform= ()=> {
    const[form_message,getformmessage]= useState('');
    const[fullname,getfullname]= useState('');
    const[email,getemail]= useState('');
    const[mobileno,getmobileno]= useState('');
    const[country,getcountry]= useState('');
    const handlefullname= (event)=>{
        getfullname(event.target.value);
    };
    const handleemail= (event)=>{
        getemail(event.target.value);
    };
    const handlemobileno= (event)=>{
        getmobileno(event.target.value);
    };
    const handlecountry= (event)=>{
        getcountry(event.target.value);
    };
    const handlesubmit= (event)=>{
        event.preventDefault();
        if(fullname== ""){
            getformmessage('plz check fulname');
        }else
        if(email== ""){
            getformmessage('plz check email');
        }else
        if(mobileno== ""){
            getformmessage('plz check mobileno');
        }else
        if(country== ""){
            getformmessage('plz check country');
        }else{
            let datalist= {fullname:fullname,email:email,mobileno:mobileno,country:country};
           axios.post('http://localhost:3001/user/registration', datalist)
  .then(response => {
    console.log('Success:', response.data);
    getformmessage('Submitted successfully');
    // reset fields if needed
    getfullname('');
    getemail('');
    getmobileno('');
    getcountry('');
  })
  .catch(error => {
    console.error('Axios error:', error);
    if (error.response) {
      // server responded with a status
      console.error('Server status:', error.response.status, error.response.data);
      getformmessage('Server error: ' + error.response.data.message || error.response.status);
    } else if (error.request) {
      // request made but no response (CORS/preflight often shows up here)
      console.error('No response received (likely CORS or network):', error.request);
      getformmessage('Network error or CORS blocked the request');
    } else {
      console.error('Request config error', error.message);
      getformmessage('Error: ' + error.message);
    }
  });

        //console.log(fullname,email,mobileno,country);
        //getformmessage('');
        }
    };

    return(
        <>
        <html>
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </head>
            <body>
                <div id="projectenquiry">
                    <div class="enquirysemi">
                        <div class="enquirysemi1">
                            <div class="planyr">
                                <p>Plan your next dream trip.<br></br>Select your destination and<br></br> leave the rest to us.</p>
                            </div>
                        </div>
                        <div class="enquirysemi2">
                            <div>{form_message}</div>
                            <div><h2><u>Enquiry form</u></h2></div>
                            <div class="enquiryinputs">
                                <div>
                                    <input type="text" placeholder='Full name'  value={fullname} onChange={handlefullname} class="eninp1"></input>
                                </div>
                                <div>
                                    <input type="text" placeholder='Email' value={email} onChange={handleemail} class="eninp1"></input>
                                </div>
                                <div>
                                    <input type="text" placeholder='Mobileno' value={mobileno} onChange={handlemobileno} class="eninp1"></input>
                                </div>
                                <div>
                                    <input type='text' placeholder='Country' value={country} onChange={handlecountry} class="eninp1"></input>
                                </div>
                            </div>
                            <div>
                                <input type='submit' value="SUBMIT" onClick={handlesubmit} class="enquirybutton"></input>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </html>
        </>
    )
}
export default Enquiryform;