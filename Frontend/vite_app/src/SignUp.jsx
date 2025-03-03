import React, { useState } from 'react';
import FacebookIcon from './assets/Facebook.png';
import GoogleIcon from './assets/Google.png';
import LinkedInIcon from './assets/LinkedIn.png';
import Logo from './assets/Logo.png';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // React Router hook for navigation


    const handleSignUp = (e) => {
        e.preventDefault();
        // Add sign up logic here
        console.log('Signing up with:', name, email, password);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#DCEFFF] to-[#B0D5FF]">
            <div className="flex rounded-lg shadow-lg overflow-hidden w-[650px] h-[530px] max-w-3xl">
                {/* Left Side - Purple Gradient */}
                <div className="w-1/2 bg-gradient-to-b from-[#6A17B2] via-[#4B1B7E] to-[#1D68D9] flex flex-col items-center justify-center text-white">
                    <div className="mb-8">
                        <img src={Logo} alt="Finoptix Logo" className="ml-5 w-[190px] h-[90px]" />
                    </div>

                    <h2 className="text-[33px] font-bold mb-6">Welcome Back!</h2>
                    <p className="text-center text-[15px] mb-10 w-[80%]">To keep connected with us please login with your personal info</p>

                    <button onClick={() => navigate('/signin')}
                        className="bg-white text-[#003A91] hover:bg-gray-100 transition-colors rounded-2xl py-1 px-2 w-[100px] text-[17px] font-mediumhover:bg-gray-100">
                        Sign In
                    </button>
                </div>

                {/* Right Side - Sign Up Form */}
                <div className="w-1/2 bg-gray-50 p-4 flex flex-col">
                    <h1 style={{ fontFamily: "Outfit" }} className="text-[30px] font-bold text-center mb-4">Create Account</h1>

                    {/* Social Media Sign Up */}
                    <div className="flex justify-center space-x-4 mb-4">
                        <button className="w-8 h-8 rounded-full flex items-center justify-center bg-white shadow">
                            <img src={FacebookIcon} alt="Facebook" className="w-[30px] h-[30px]" />
                        </button>
                        <button className="w-8 h-8 rounded-full flex items-center justify-center bg-white shadow">
                            <img src={GoogleIcon} alt="Google" className="w-[30px] h-[30px]" />
                        </button>
                        <button className="w-8 h-8 rounded-full flex items-center justify-center bg-white shadow">
                            <img src={LinkedInIcon} alt="LinkedIn" className="w-[30px] h-[30px]" />
                        </button>
                    </div>

                    <div className="text-center text-[13px] text-black-500 mb-4">or use your email for registration</div>

                    {/* Registration Form */}
                    <form onSubmit={handleSignUp} className="flex flex-col items-center space-y-4">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="mb-1 text-[14px] font-medium">Name :</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your Name"
                                className="p-2 rounded bg-blue-50 border-none focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder:text-[13px] placeholder:text-gray-500"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="email" className="mb-1 text-[14px] font-medium">E-mail :</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your Email"
                                className="p-2 rounded bg-blue-50 border-none focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder:text-[13px] placeholder:text-gray-500"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="password" className="mb-1 text-[14px] font-medium">Password :</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your Password"
                                className="p-2 rounded bg-blue-50 border-none focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder:text-[13px] placeholder:text-gray-500"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-700 text-white rounded-2xl py-1 px-2 w-[110px] text-[16px] font-medium hover:bg-blue-800 transition-colors"
                        >
                            Sign Up
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;