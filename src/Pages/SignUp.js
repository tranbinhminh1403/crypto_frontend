import React from 'react'
import { useHistory } from 'react-router-dom';


function SignUp() {
  const history = useHistory();
  return (
    <div className='main'>
      <div className="box">
        <div className="left">
        {/* <iframe src="https://www.youtube.com/embed/lRTtMcx6rSM?list=PLB05CDwGRRyROW4wzx1iSOuJTGq54_j_Qcontrols=0&autoplay=1&mute=1&playsinline=1&playlist=lRTtMcx6rSM?list=PLB05CDwGRRyROW4wzx1iSOuJTGq54_j_Q&loop=1" ></iframe> */}
        </div>


        <div className="right">
        <h2>Sign in</h2>
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

            <div class="inputBox">
                <input type="password" required="required"/>
                <span>Enter password again</span>
                <i></i>
            </div>

            {/* <div class="links">
                <a href="#">Forgot password</a>
                <a href="#">Sign in</a>
            </div> */}
            <br/>
            <input type="submit" value="Create New Account"/>
            <h5> OR </h5>
            <button type='button' onClick={() => history.push(`/login`)}> Log In</button>
        </div>
      </div>
    </div>
  )
}

export default SignUp