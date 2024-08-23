'use client';

import React, { useState, useEffect } from 'react';
import RegisterModal from '../register/page';
import login from '../api/auth/login';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const router = useRouter()
  const [modalIsOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      email: email,
      password: password
    };

    try {
      const res = await login(payload)
      if(res.status){
        setCookie("token", res.data.token)
        router.push("/home")
      }
      else{
        toast.error(res.message, {
          position: "top-center",
          autoClose: 4500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          className:" capitalize"
          // transition: Zoom,
          });
        console.log(res.message)
      }
    } catch(error) {
      console.error('An error occurred:', error);
    }
   }  
  useEffect(() => {
    // Ensure the modal sets the app element to the root element
    const Modal = require('react-modal');
    const intervalId = setInterval(() => {
      if (document.getElementById('__next')) {
        Modal.setAppElement('#__next');
        clearInterval(intervalId);
      }
    }, 100);
  }, []);

  return (
    <div className="min-h-screen flex flex-row items-center justify-center bg-gray-50">
      <div className="hidden lg:flex lg:flex-col lg:items-start lg:w-1/2 px-12">
        <h1 className="text-5xl font-bold text-purple-600">Talkspace</h1>
        <p className="mt-4 text-lg text-gray-700">Your space for mental wellness.</p>
      </div>
      <div className="w-full max-w-md lg:w-1/2 px-6 py-12 lg:px-12 lg:py-24 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">Sign in to your account</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{' '}
          <button onClick={openModal} className="font-medium text-purple-600 hover:text-purple-500">
            create a new account
          </button>
        </p>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder='example@test.com'
                required
                // className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-black focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm text-gray-900 bg-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder='password'
                required
                // className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm text-gray-900 bg-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-purple-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>

      <RegisterModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
      <ToastContainer
        position="top-center"
        autoClose={4500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        // transition: Zoom,
        />
    </div>
  );
};

export default Login;
