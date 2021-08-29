import React, { useState } from "react";

import "./LoginRegister.css";



const LoginRegister = () => {
  const [addclass, setaddclass] = useState("");
  return (
    <div className={`container ${addclass}`} id="container">
      <div className="form-container  sign-up-container">
        <form>
          <h1>Create Account</h1>
         
          <div class="social-container">
				<a href="#" class="social"><i class="fa fa-facebook"><img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/06-facebook-512.png"height="30px"/></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"><img src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/google.png"height="30px"/></i></a>
				<a href="#" class="social"><i class="fab fa-linkedin-in"><img src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/linkedin.png"height="30px"/> </i></a>
			</div>
      <div>or use your email for sign up</div>
          <input type="text" placeholder="NAME" />
          <input type="email" placeholder="EMAIL" />
          <input type="password" placeholder="PASSWORD" />
          <button type="submit">SIGN UP</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form>
        
          <div className="logo"><img src="https://i2.wp.com/www.mrpadhaku.in/wp-content/uploads/2019/01/logo10-new.png?fit=200%2C200&ssl=1"width="100" height="80"/></div>
          <h1>Login</h1>
          <div>or use you email account </div>
          <div class="social-container">
				<a href="#" class="social"><i class="fa fa-facebook"><img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/06-facebook-512.png"height="30px"/></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"><img src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/google.png"height="30px"/></i></a>
				<a href="#" class="social"><i class="fab fa-linkedin-in"><img src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/linkedin.png"height="30px"/> </i></a>
			</div>
          <input type="email" placeholder="EMAIL" />
          <input type="password" placeholder="PASSWORD" />
          <h5> FORGET PASSWORD? </h5>
          <button type="submit">SIGN IN</button>
          
        </form>
       
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
          <div className="logo"><img src="https://i2.wp.com/www.mrpadhaku.in/wp-content/uploads/2019/01/logo10-new.png?fit=200%2C200&ssl=1"width="100" height="80"/></div>
         
          <h1>WELCOME BACK!</h1>
  
          <div>  CONNECT WITH US  </div>

            <button
              className="ghost"
              id="signIn"
             
              onClick={() => setaddclass("")}
            >
              GO TO LOGIN
            </button>
          </div>
          <div className="overlay-panel overlay-right">
          <h1>HELLO ,FRIEND !</h1>
  
  <h6> ENTER YOUR DETAILS AND START JOURNEY WITH US! </h6>
  
            <button
              className="ghost"
              id="signUp"
              onClick={() => setaddclass("right-panel-active")}
            >
              GO TO SIGN UP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
