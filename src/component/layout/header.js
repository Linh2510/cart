import React, { Component } from 'react'

export default class header extends Component {
    render() {
        return (
            <React.Fragment>
               <section className="header">
                    <div className="menu">
                            <div className="container">
                                {/* <nav className="navbar navbar-expand-md navbar-light">
                                    <a className="navbar-brand">MEDIFIX</a>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                                        <ul className="navbar-nav ">
                                        <li className="nav-item">
                                                <a className="nav-link" >Home <span className="sr-only">(current)</span></a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" >Home its works</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" >Hospital</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" > For Specialist</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" >Service</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" >Blog</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link btn btn-danger text-white" >Get Started</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" >Sign In</a>
                                            </li>
                                        </ul>   
                                    </div> 
                            </nav> */}
                            <nav class="navbar navbar-expand-md  navbar-light">
  <a class="navbar-brand" href="#"> MEDIFIX</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
    <ul class="navbar-nav ">
      <li className="nav-item">
                                                <a className="nav-link" >Home <span className="sr-only">(current)</span></a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" >Home its works</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" >Hospital</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" > For Specialist</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" >Service</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" >Blog</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link btn btn-danger text-white" >Get Started</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" >Sign In</a>
                                            </li>
    </ul>
  </div>  
</nav>
                    </div>
                </div>   
                <div className="banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-6 context">
                                <h1>Bringing You Verified,  <br />
                                        Accredited Specialist
                                </h1>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6 image">
                                <img src="./images/AdobeStock_94182273.jpeg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
            </React.Fragment>
                 
        )
    }
}
