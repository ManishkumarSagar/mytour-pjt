import '../css/slider.css';
const Slider= ()=>{
        var count= 0;
        let allimages= ['images/tour1.jpg','images/tour2.png','images/tour3.jpg','images/tour4.jpg','images/tour5.jpeg'];
    const sliderfunc= ()=>{
        document.getElementById("sliderimg").src= allimages[count];
        if(count>= 4){
            count= 0;
        }else{
            count++;
        }
        //console.log(count);
    }
    let myinterval= setInterval(()=>{
        sliderfunc();
    },2000);
    
    const previousbutton= ()=>{
        console.log("hello")
        clearInterval(myinterval)
    }
    const nextbutton= ()=>{
        console.log("hello1")
        clearInterval(myinterval);
    }
    return(
        <>
       
                <div id="slidert">
                    <img id="sliderimg"/>
                </div>
                <input type="button" value="<" class="button1" onClick={()=>{previousbutton()}}/>
                <input type="button" value=">" class="button2" onClick={()=>{nextbutton()}}/>
          
        </>
    )
}
export default Slider;