import React, { useState } from 'react';
import FacebookIcon from './assets/Facebook.png';
import GoogleIcon from './assets/Google.png';
import LinkedInIcon from './assets/LinkedIn.png';
import Logo from './assets/Logo.png';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = (e) => {
        e.preventDefault();
        // Add sign in logic here
        console.log('Signing in with:', email, password);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#DCEFFF] to-[#B0D5FF]">
            <div className="flex rounded-lg shadow-lg overflow-hidden w-[650px] h-[500px] max-w-3xl">
                {/* Left Side - Sign In Form */}
                <div className="w-1/2 bg-gray-50 p-4 flex flex-col">
                    <h1  style={{ fontFamily: "Outfit" }} className="text-[30px] font-bold text-center mb-5">Sign In</h1>

                    {/* Social Media Sign In */}
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

                    <div className="text-center text-[13px] text-black-500 mb-4">OR</div>

                    {/* Email and Password Form */}


                    <form onSubmit={handleSignIn} className="flex flex-col items-center space-y-4">
                        {/* Email Input */}
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

                        {/* Password Input */}
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

                        {/* Forgot Password Link */}
                        <div className="text-center">
                            <a href="#" className="text-[14px] text-blue-600 hover:underline">Forgot your password?</a>
                        </div>

                        {/* Sign-In Button */}
                        <button
                            type="submit"
                            className="bg-blue-700 text-white rounded-2xl py-1 px-2 w-[110px] text-[16px] font-medium hover:bg-blue-800 transition-colors"
                        >
                            Sign in
                        </button>
                    </form>

                </div>

                {/* Right Side - Purple Gradient */}
                <div className="w-1/2 bg-gradient-to-b from-[#6A17B2] via-[#4B1B7E] to-[#1D68D9] p-8 flex flex-col items-center justify-center text-white">
                    <div className="mb-9">
                        <img src={Logo} alt="Finoptix Logo" className="ml-5 w-[190px] h-[90px]" />
                    </div>

                    <h2 className="text-[35px] font-bold mb-6">Hello, User!</h2>
                    <p className="text-center text-[15px] mb-10">Enter your personal details and start the journey with us</p>

                    <button className="bg-white text-[#003A91] hover:bg-gray-100 transition-colors rounded-2xl py-1 px-2 w-[100px] text-[17px] font-mediumhover:bg-gray-100">
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
