import React from 'react'
import { useHistory } from "react-router-dom";
import './login.css'
import background from "./video.mp4"
function LogIn() {
  const history = useHistory();
  return (
    <div>
      {/* <video autoPlay loop muted>
        <source src={background} type = "video/mp4"/>
      </video> */}
    <div className='main'>
      <div className="box">

        <div className="left1">
          
        </div>


        <div className="right">
          <h2>Log In</h2>
            <div class="inputBox">
                <input type="text" required="required"/>
                <span>Username</span>
                <i></i>
            </div>

            <div class="inputBox">
                <input type="password" required="required"/>
                <span>Password</span>
                <i></i>
            </div>
            <br/>
            <br/>
            {/* <div class="inputBox">
                <input type="password" required="required"/>
                <span>Enter password again</span>
                <i></i>
            </div> */}

            <div class="links">
                
                <a href="#">Forgot password</a>
                <a href="#" id="sign" onClick={() => history.push(`/signup`)}>Sign Up</a>
            </div>
            <br/>
            <br/>
            <input type="submit" value="Log In"/>
            {/* <h5> OR </h5> */}
            {/* <button type='button' onClick={() => history.push(`/login`)}> Log In</button> */}
        </div>

      </div>
    </div>
    </div>
  )
}

export default LogIn