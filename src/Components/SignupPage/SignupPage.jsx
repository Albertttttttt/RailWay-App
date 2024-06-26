import React, { useState } from 'react'
import './SignupPage.css'
import Img from '../Assets/Images/railway-logo.png'
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
    const navigate = useNavigate();
    const RegisterPageClick = () => {
     navigate('/Register');
};
const HomepageClick = () => {
    navigate('/homepage');
   }


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }
    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        const userData = {
            email,
            password,
        };

        localStorage.setItem('userData', JSON.stringify(userData));

        console.log('Form data:', userData)// Log Data to console
    }

  return (
    <div className="signup-container">
        <div className="logo-title">
        <img src={Img} style={
            {
                width:"93px",
                 height: "90px"
            }
          } alt=''> 
          </img>
          <h3>Gilbert<br/>Railway Corporation</h3>
        </div>
        <h2>Signup</h2>

        <div className="block">
        <div className="cont">
       <div> 
       <form className="form-inputs">
       <div className="input-field">
       <label htmlFor="email"></label>
       <input 
       type="text"
       className="email"
       placeholder=" EMAIL "
       value={email}
       onChange={handleEmailChange}
        required/>
       </div>
       
       <div className="input-field">
       <label htmlFor="password"></label>
       <input 
       type= "password"
       className="password"
       placeholder=" PASSWORD"
       value={password}
       onChange={handlePasswordChange}
       required />
       </div>

     {/*   <div className="input-field">
       <label htmlFor="GRC ID"></label>
       <input 
       type="text"
       className="railway-id"
       placeholder=" GRC ID"
       value={railwayId}
       onChange={handleRailwayIdChange}
        required />
       </div>
    */}

       <div className='nav-buttons'>
      <button className='signup-btn' onClick={handleSubmit}>Sign Up</button>
      </div>
       </form>

       </div>

     </div>
      </div>
      <h4>Don't have an account? Click <span style={{color: "green", cursor: "pointer"}} onClick={RegisterPageClick}>Register</span></h4>
      </div>
  )
}

export default SignupPage
