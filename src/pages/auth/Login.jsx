import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BgImage  from '../../assets/bgImage.png';
import { BiLoaderAlt } from 'react-icons/bi';
import PasswordField from '../../components/PasswordField/PasswordField';
import Axios from 'axios';
import { BASE_URL } from '../../constant';
import { SIGN_IN } from '../../constant/endPoints';

const Login = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [mailError, setMailError] = useState('');
  const [passError, setPassError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMailError('');
    setPassError('');
    try{
      const userData = await Axios.post(`${BASE_URL}/${SIGN_IN}`, {email, password}, {
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers if required
        }
      });

      console.log(userData)  
      if(userData?.data?.token){
        setLoading(false)
        localStorage.setItem('token', userData?.data?.token)
        navigate('/DashboardHome')
      }
      else if(userData?.data?.message == 'User does not exist'){
        setMailError('User does not exist')
        setLoading(false)
      }
      else if(userData?.data?.message == 'Invalid Password'){
        setPassError('Invalid Password')
        setLoading(false)
      }
    }
    catch(err){
      setLoading(false)
    }
  };

  useEffect(() => {
    setIsFocused(true);
  }, [password]);
  
  
  useEffect(() => {
		const token = localStorage.getItem('token')
		if(token){
			navigate('/DashboardHome')
		}
	  }, []);

  return (
    <div
    className="h-screen flex items-center bg-fixed bg-cover bg-repeat-space"
    style={{ backgroundImage: `url(${BgImage})` }}
  >
    <div className="w-80 md:w-96 bg-white rounded-md text-center mx-auto shadow-lg p-3 text-black relative top-16">
      <div className="mx-auto w-28 h-28 rounded-full bg-gray-300 relative bottom-16">
       
      </div>
      <p className="font-semibold text-3xl text-black relative bottom-10">
        User Login
      </p>
      <form onSubmit={handleSubmit} className="ml-3 text-left m-3">
        <div className="mb-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className={`block border-2 border-gray-300 focus:outline-none focus-within:border-black p-2 w-full rounded-md mt-3 mb-2 
            ${mailError && 'text-red-700 font-semibold'}`}
            // ref={userRef}
            onChange={(e) => {
              setEmail(e.target.value);
              setMailError('');
            }}
            required
          />
          {mailError && (
            <i className="flex p-.5 mb-1 text-red-700 text-xs">{mailError}</i>
          )}
        </div>
        <div className="">
          <label htmlFor="password">Password</label>
          <PasswordField
            isFocused={isFocused}
            setPassword={setPassword}
            setPassError={setPassError}
            passError={passError}
          />
          {passError && (
            <i className="flex p-.5 mb-1 text-red-700 text-xs">{passError}</i>
          )}
        </div>
        <div className="my-6 text-center mx-auto text-black ">
         <p>Don’t have an account yet?<span className='text-primary underline'><Link to="/Register">Register now</Link></span></p> 
        </div>

        <div className="text-center">
          <button
            type="submit"
            // onClick={handleLogin}
            className={`w-32 py-2 text-white mx-auto bg-primary text-slate-200 hover:bg-primary active:bg-black hover:text-white flex items-center justify-center rounded-md ${loading && 'opacity-50 cursor-wait'
              }`}
          >
            {loading && (
              <span>
                <BiLoaderAlt className="mx-2 ml-auto animate-spin" />
              </span>
            )}
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Login;