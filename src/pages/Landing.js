import { useState } from "react"
import axios from "axios"


import "../styles/landing.css"

import logo from "../assets/images/logo.svg"
import main from"../assets/images/main.svg"


const LandingPage = () => {
  // const [token, setToken] = useState('');
    const handleLogin = () => {
        // Send a GET request to your backend API
        window.location.href="http://localhost:5000/auth/google"
        
    }
    // const handleLogin = async() => {
    //  try {
    //   const response = await fetch("http://localhost:5000/auth/google",{
    //     method:'POST',
    //     headers:{
    //       'Content-Type': 'application/json',
    //       'Access-Control-Allow-Origin': "*"
    //     }
    //   })

    //   if(response.ok){

    //     const data =await response.json();
    //     const {token}=data.accessToken;
    //     console.log(token)

    //     localStorage.setItem('token',token);

    //     setToken(token)
    //   }

    //   else{
    //     console.log("could not get token")
    // }
    //  } catch (error) {
    //   console.error('Error loggin in ', error);
    //  }
      

    
    // }


return(
    <div className="landing-page">
      <div className="left-content">
        <img src={logo} alt="Logo" />
        <h1>Welcome to CalenBook App</h1>
        <p>Introducing our cutting-edge appointment booking application that expertly handles both individual and group scheduling. Say goodbye to the hassle of coordinating multiple calendars for meetings. Our app effortlessly finds the best time slots that suit everyone, ensuring smooth and efficient group gatherings. Enjoy seamless appointment management like never before with our user-friendly interface and innovative solutions. Simplify your scheduling process and maximize productivity with our all-in-one solution.</p>
        <button className="login-button" onClick={handleLogin}>Login with Google</button>
      </div>
      <div className="right-content">
        <img src={main} alt="main" />
      </div>
    </div>
  );
}

export default LandingPage;
