import React,{useState} from 'react'
import '../Signin/Signin.css'
// import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { baseUrl } from '../../Url';

function Signin() {
    const [error, setError] = useState('');
    
    const [user, setUser] = useState({
        name:'',
        email:'',
        password:''
    })

    const navigate = useNavigate()


    const inputHandler = (e) => {
        const {name, value} = e.target
        setUser({...user,[name]:value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
        //   const response = await axios.post('http://localhost:4000/api/user/signup', user);
          const response = await axios.post(`${baseUrl}/api/user/signup`, user);
          
          toast.success('Signup successful!');
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('name', response.data.name)
          console.log(response.data);
          window.location.reload()
        //   navigate('/home')
        } catch (error) {
          setError(error.response.data.error);
          toast.error(error.response.data.error);
        //   console.error(error);
        }
      };

  

    const handleSuccess = (response) => {
        console.log('Login Success: currentUser:', response.profileObj);
      };
    
      const handleFailure = (response) => {
        console.log('Login failed: res:', response);
      };

  
  return (
    <div className='body'>
        
        <form className='form-container' onSubmit={handleSubmit}>
        <h3>Sign in</h3>
            <div>
                <label> Name </label> <br/>
                <input type="text" placeholder='Full Name' value={user.name} onChange={inputHandler}  name='name' />
            </div>
            <div>
                <label> Email </label> <br/>
                <input type="email" placeholder='Email' value={user.email} onChange={inputHandler}  name='email' />
            </div>
            <div>
                <label> Password </label> <br/>
                <input type="password" placeholder='Password' value={user.password} onChange={inputHandler}  name='password' />
            </div>
            {error && <p>{error}</p>}
            <div>
                <input type="submit" value={"Sign in"}/>
            </div>
            <GoogleOAuthProvider >
                <div className="sign-in">
                    <h2>Sign in with Google</h2>
                    <GoogleLogin
                    onSuccess={handleSuccess}
                    onFailure={handleFailure}
                    cookiePolicy={'single_host_origin'}
                    />
                </div>
            </GoogleOAuthProvider>
        </form>
    </div>
  )
}

export default Signin
