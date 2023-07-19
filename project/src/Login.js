import React, { useState } from 'react'
import './Login.css'
import Logo from './Logo-black.png'
import { Link, useNavigate } from 'react-router-dom'
import { useStateValue } from './StateProvider';




function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState('');
    const navigate = useNavigate();
    const [{user}, dispatch] = useStateValue();
  
    const setUser = (loginUser) => {
        dispatch({
            type: 'USER_LOGIN',
            user: loginUser
        })
    }

    const signIn = () => {

        const userData = {
            'email': email,
            'password': password
        }
        fetch('http://localhost:2000/verify', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(userData),
            
        })
            .then(response => {
                
                if (!response.ok) {
                    throw new console.error('Response was not ok')
                }      
                
                return response.json()
            })
            .then(data => {
                if (data.message === 'Valid user') {
                    setUser(data.user)
                    console.log(data.user)
                    console.log(user)
                    navigate('/')
                }
                else {
                    setAlert(data.message)
                }
            })
            .catch(error => {
            console.log('Error',error)
            })

        
    }
    const register = e => {
        
        const userData = {
            'email': email,
            'password': password
        }
        fetch('http://localhost:2000/newUser', {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => {
            if (!response.ok) {
            throw new console.error('Respone is not ok')
            }
            return response.json()
        })
        .then(data => {
            if (data.message === 'new account created') {
                setUser(data.user)
                console.log(user)
                navigate('/')
            }
            
            else {
                setAlert(data.message)
            }
        })
    }

  return (
    <div className='login'>
        <Link to='/'>
           
              <img className='login-logo' src={Logo} alt='Logo' />
              
        </Link>
        <div className='login-container'>
              <h1>Sign In</h1>
              
              <form className='login-form'>
                  <h5>E-mail</h5>
                  <input type='text' value={email} onChange=
                      { e => setEmail(e.target.value)} />
                  <h5>Password</h5>
                  <input type='password' value={password} onChange=
                      { e => setPassword(e.target.value)} />
              </form>
              <h3 className='login-alert'>{ alert }</h3>
              <button
                  className='login-signInButton' onClick={signIn}>Sign In
              </button>
              <p className='login-terms'>
                  <input type='checkbox'></input>  
                    I agree to the AMAZON FAKE CLONE Conditions of Use & Sale.
                    Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
              </p>
              <button onClick={register} className='login-registerButton'>Create Amazon Account</button>
        </div>
    </div>
     
  )
}

export default Login