import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BgImage  from '../../assets/bgImage.png';
import { BiLoaderAlt } from 'react-icons/bi';
import PasswordField from '../../components/PasswordField/PasswordField';
import Axios from 'axios';
import { BASE_URL } from '../../constant';
import { SIGN_UP } from '../../constant/endPoints';

const Register = () => {
  
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

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
        const userObj = {
            email,
            password,
            phone,
            name

        }

        const userData = await Axios.post(`${BASE_URL}/${SIGN_UP}`, {
            email,
            password,
            phone,
            name
          }, {
            headers: {
              'Content-Type': 'application/json',
              // Add any other headers if required
            }
          });
          console.log(userData)  

        if(userData?.data?.message == 'User already exists'){
            setMailError('Email is already exist please login')
            setLoading(false)
        }
        else if(userData?.data?.token){
          setLoading(false)
          localStorage.setItem('token', userData?.data?.token)
          navigate('/DashboardHome')
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
    <div className="w-80 md:w-96 bg-white rounded-md text-center mx-auto shadow-lg p-3 text-black relative top-2">
      <div className="mx-auto w-28 h-10 rounded-full bg-gray-300 relative bottom-10">
       
      </div>
      <p className="font-semibold text-3xl text-black relative bottom-10">
        User Register
      </p>
      <form onSubmit={handleSubmit} className="ml-3 text-left m-3">
        <div className="mb-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className={`block border-2 border-gray-300 focus:outline-none focus-within:border-black p-2 w-full rounded-md mt-3 mb-2 
            ${mailError && 'text-red-700 font-semibold'}`}
            // ref={userRef}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
          {mailError && (
            <i className="flex p-.5 mb-1 text-red-700 text-xs">{mailError}</i>
          )}
        </div>

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

        <div className="mb-2">
          <label htmlFor="phone">Phone</label>
          <input
            type="phone"
            id="phone"
            className={`block border-2 border-gray-300 focus:outline-none focus-within:border-black p-2 w-full rounded-md mt-3 mb-2 
            ${mailError && 'text-red-700 font-semibold'}`}
            // ref={userRef}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            required
          />
          
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
         <p>Already have an account?<span className='text-primary underline'><Link to="/">Login</Link></span></p> 
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
            Register
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Register;