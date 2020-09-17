import React  from 'react'
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css"
function Register() {
      const openPopupbox = () => {
        const content = (
            <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
             
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        )
  
        PopupboxManager.open({
          content,
          config: {
            titleBar: {
              enable: true,
              text: 'REGISTER',
              closeButton:true
            },
            fadeIn: true,
            fadeInSpeed: 500
          }
        })
      }
        return (
          <div class="btn_register">
               <a className="register" onClick={openPopupbox}>Register a Free Account</a>
               <PopupboxContainer />
          </div>
          
        )
      
}
export default Register;

