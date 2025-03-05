import React, { useState, useEffect } from 'react';
import Logo from './assets/Logo.png'
import { useNavigate } from 'react-router-dom';
import Loader from "./Components/Loader";



function Landing() {
    const navigate = useNavigate(); // React Router hook for navigation
    const [loading, setLoading] = useState(true); // <-- Initialize loading state
    


    useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 2000); // Simulated loading delay (2 seconds)
      }, []);
    
      if (loading) {
        return <Loader />; // Show loader while loading
      }

    return (
        <div className='bg-gradient-to-r from-[#DCEFFF] to-[#B0D5FF] flex justify-center items-center h-screen'>
            <div className='flex flex-col justify-center items-center w-[500px] h-[440px] shadow-lg rounded-lg bg-gradient-to-b from-[#6A17B2] via-[#4B1B7E] to-[#1D68D9]'>
                <img src={Logo} width="170px" height="150px" className='mb-4' alt="" />
                <p style={{ fontFamily: "Outfit" }} className="text-[25px] font-light mb-3 text-white">
                    Welcome to FINOPTIX
                </p>
                <p style={{ fontFamily: "Outfit" }} className='text-white text-[27px] font-medium mb-2'>A step forward to financial security</p>


                <div className='flex justify-around items-center mb-3'>
                    <hr className="border-t border-white w-[130px]" />
                    <p style={{ color: "rgba(245, 245, 245, 0.71)" }} className="text-[15px] font-light w[100%] p-4">Get Started</p>
                    <hr className="border-t border-white w-[130px]" />
                </div>

                <div className="flex gap-6 mt-2">
                    <button
                        style={{ fontFamily: "Outfit" }}
                        onClick={() => navigate('/signup')} 
                        className="bg-white text-[#4B1B7E] w-[120px] h-[40px] rounded-[20px] text-[16px] font-medium shadow-md 
              transition-all duration-300 hover:bg-gradient-to-r hover:from-[#6A17B2] hover:to-[#1D68D9] hover:text-white hover:shadow-lg hover:scale-105"
                    >
                        Sign Up
                    </button>
                    <button
                        style={{ fontFamily: "Outfit" }}
                        onClick={() => navigate('/signin')} 
                        className="bg-white text-[#4B1B7E] w-[120px] h-[40px] rounded-[20px] text-[16px] font-medium shadow-md 
              transition-all duration-300 hover:bg-gradient-to-r hover:from-[#6A17B2] hover:to-[#1D68D9] hover:text-white hover:shadow-lg hover:scale-105"
                    >
                        Sign In
                    </button>
                </div>


            </div>
        </div>
    )
}

export default Landing
