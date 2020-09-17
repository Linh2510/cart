import React, { useState }  from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Sliderr() {
  const [slider, setSlider] = useState(null)
        const settings = {
            arrows:false,
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            // autoplay:true
          };
       
          const next = () => slider.slickNext();
          return (
            <div className="special">
            <div className="container">
                {/* <div className="row "> */}
                <Slider ref={c => setSlider(c)} {...settings}>
                    <div className="text" >
                        <h1>Vertification Badge</h1>
                        <p> Firt-time speccialists have the option of registering under limited free trial membership. When searching for
                  the right speccialists to address your needs, look for the <b>verified badge</b> on their profile listing. Verified badges
                  indicate the specialist has undergone and been approved by our vetting agency.</p>
                    </div>
                    <div className="text" >
                        <h1>Specialist Profile Listsing</h1>
                        <p>   Patients benefit from our global listing of verified, professional speccialist. Our online specialist profiles include
                  important information to help you find the right practitioner for you. Browse throught different specialties, and view
                  their biographies, clinic addresses, available hours, reviews and more. Robust verification.
                        </p>
                    </div>
                    <div className="text" >
                    <h1>Robust Verification</h1>
              <p>
                  Our vitual health platform is based on exhaustive measures of safety and authenticity of care. Our unique
                  approach maintains up-to-date accuracy of details by verifying each time specialist infomation is updated.
                  This rigorous multi-step verification also tracks expiry dates of medical licensure.
              </p>
                    </div>
                    
                </Slider>
                </div>
                 <button className="btn btn__next" onClick={next}> <img src="../images/arrow.png" />  </button>
            {/* </div> */}
           </div>
          );   
}
export default  Sliderr;