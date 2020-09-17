import React, { useState }  from 'react';
import Slider from './slider';
import Register from './Register';

function Contentindex() {
    
        return (
            <div >
              
                 <div className = "block-2">
                    <div className= "container-fluid">
                        <div className="row">
                            <div className="col-sm-4 col-md-4 col-lg-4 block-left">
                            <h1> 
                                Our Medifix Guarantee   
                            </h1>
                            </div>
                            <div className="col-sm-8 col-md-8 col-lg-8 block-right">
                            <h2>
                                Interacting with a Medifix specialist means reciving  care from a fully vetted 
                                heathycare profesional  with a Medifix specialist means reciving  care from a fully vetted 
                                heathycare profesional
                            </h2>
                            </div>
                        </div>
                    </div>
                </div> 
            <div className="block-3">
                <div className="container">
                    {/* <div className="row"> */}
                        <div className="title">
                            <h1>
                                Approving Our Pratitioner
                            </h1>
                            <h2>Medifix impleements a multi-step credingtinaling process to authenticare the  valodity</h2>
                        </div>
                    {/* </div> */}
                    <div className="row pt-4">
                        <div className="col-sm-12 col-md-6 col-lg-6 bl3-left">
                            <img src ="../images/AdobeStock_136284571n.jpg" width="100%"/>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 bl3-right">
                            <ul className="list">
                                    <li class="active"> <h3> We ensure to obitan,assess and verify the identity and background of our pracitioner</h3> </li>
                                    <li><h3> We ensure to obitan,assess and verify the identity and background of our pracitioner</h3> </li>
                                    <li> <h3> We ensure to obitan,assess and verify the identity and background of our pracitioner</h3> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="address">
                <div className="container">
                    <div className="title text-center">
                        <h1>
                            Address your health needs with a peace of mind
                        </h1>
                    </div>
                    <div className="row text-center justify-content-md-center">
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="icon"><img src="../images/5899b.png" /></div>
                            <h3>Targeting Specialists</h3>
                            <p>
                                Medifix strives to approach and onbroad only medical praticipal that are speciallist in their field
                            </p> 
                         </div>
                         <div className=" col-sm-12 col-md-6 col-lg-3">
                            <div className="icon"><img src="../images/Untitled-4.png" /></div>
                            <h3>Targeting Specialists</h3>
                            <p>
                                Medifix strives to approach and onbroad only medical praticipal that are speciallist in their field
                            </p> 
                         </div>
                         <div className=" col-sm-12 col-md-6 col-lg-3">
                            <div className="icon"><img src="../images/16711-NQRDOK.png" /></div>
                            <h3>Targeting Specialists</h3>
                            <p>
                                Medifix strives to approach and onbroad only medical praticipal that are speciallist in their field
                            </p> 
                         </div>
                         <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="icon"><img src="../images/tu.png" /></div>
                            <h3>Targeting Specialists</h3>
                            <p>
                                Medifix strives to approach and onbroad only medical praticipal that are speciallist in their field
                            </p> 
                         </div>
                    </div>
                </div>
            </div>
            {/* <div className="special">
                <div className="container">
                    <div className="row bg">
                        <div className="text" >
                            <h1>Specialist Profile Listsing</h1>
                            <p>   Medifix strives to approach and onbroad only medical praticipal that are speciallist in their field
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}
             <Slider />
            <div className="register">
                    <div className="container">
                        <div className="row justify-content-center">
                                <div className="col-sm-12 col-md-5 text-box">
                                    <h1>Readdy to speak with a trusted Specialist?</h1>
                                    <h2>Begin your Helathycare Journey Today with a Vertify Procession</h2>
                                </div>
                                <div className="col-sm-12 col-md-5 button justify-content-center pt-3"> 
                                       
                                    <Register></Register>
                                </div>
                        </div>
                    </div>
            </div>
		
            </div>
        );
}
export default Contentindex;