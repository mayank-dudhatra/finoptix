// "use client"
// import React from 'react'
// import { Bell, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
// import { motion } from "framer-motion"

// function Home() {
//   return (
//     <div className="min-h-screen bg-[#E0EBF7]">
//          {/* Header */}
//          <motion.header
//         className="bg-[#4B0082] text-white px-6 h-[83px] flex items-center shadow-[0_6px_6px_rgba(0,0,0,0.25)] mb-[35px]"
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.5, ease: "easeOut" }}
//       >
//         <div className="flex items-center justify-between w-full">
//           <motion.img
//             src="./Logo.png"
//             alt="Finoptix Logo"
//             className="w-[174px] h-[92px] object-contain"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.2 }}
//           />

//           <nav className="hidden md:flex items-center gap-x-[15px] flex-grow justify-center text-[20px] font-outfit font-normal tracking-[0.08em]">
//             <motion.a
//               href="/"
//               className="px-4 flex items-center gap-x-[9px] p-2 bg-[#F0A6F4] text-[#4B0082] rounded-md"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <img
//                 src="./HomeP.png"
//                 alt="Finoptix Logo"
//                 className="w-[22px] h-[22px] object-contain pt-0.5"
//               />Home
//             </motion.a>

//             <motion.a
//               href="/dashboard"
//               className="px-4 flex items-center gap-x-[9px] py-2 rounded-md hover:bg-purple-700"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <img
//                 src="./Clock.png"
//                 alt="Finoptix Logo"
//                 className="w-[20px] h-[20px] object-contain pt-0.5"
//               />Dashboard
//             </motion.a>

//             <motion.a
//               href="/your_budget"
//               className="px-4 flex items-center gap-x-[9px] py-2 rounded-md hover:bg-purple-700"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <img
//                 src="./Wallet.png"
//                 alt="Finoptix Logo"
//                 className="w-[20px] h-[20px] object-contain pt-0.5"
//               />Your Budget
//             </motion.a>

//             <motion.a
//               href="/goals"
//               className="px-4 flex items-center gap-x-[9px] py-2 rounded-md hover:bg-purple-700"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <img
//                 src="./Goal.png"
//                 alt="Finoptix Logo"
//                 className="w-[20px] h-[20px] object-contain pt-0.5 text-[#4B0082]"
//               />Goals
//             </motion.a>

//             <motion.a
//               href="/analytics"
//               className="px-4 flex items-center gap-x-[9px] py-2 rounded-md hover:bg-purple-700"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <img
//                 src="./Graph.png"
//                 alt="Finoptix Logo"
//                 className="w-[20px] h-[20px] object-contain pt-0.5"
//               />Investment Analytics
//             </motion.a>
//           </nav>

//           <div className="flex items-center gap-x-[15px] relative left-[-30px]">
//             <motion.button
//               className="hover:bg-purple-700 rounded-full pl-[15px]"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Bell className="w-5 h-5" />
//             </motion.button>
//             <motion.button
//               className="hover:bg-purple-700 rounded-full"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <div className="w-8 h-8 bg-purple-300 rounded-full" />
//             </motion.button>
//           </div>
//         </div>
//       </motion.header>



//        {/* Footer */}
//        <footer className="bg-[#4B0082] text-white mt-7 h-[466px]">
//                 <div className="container mx-auto px-6 py-8">
//                     <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:justify-between ml-18">
//                         <div className="font-outfit font-normal tracking-[0.08em]">
//                             <h3 className="font-semibold text-[22px] mb-4">Our Features</h3>
//                             <ul className="space-y-2 text-[14px]">
//                                 <li>Get Started as a Fresher</li>
//                                 <li>How To Earn More</li>
//                                 <li>Write Blogs Or Read</li>
//                                 <li>Learn To Invest</li>
//                                 <li>Manage Your Budget</li>
//                                 <li>Personalize Future Plans For Your Future</li>
//                             </ul>
//                         </div>


//                         <div className="font-outfit font-normal tracking-[0.08em]">
//                             <h3 className="font-semibold text-[22px] mb-4">Our Potential Partners</h3>
//                             <ul className="space-y-2 text-[14px]">
//                                 <li>Banks</li>
//                                 <li>Tech Companies</li>
//                                 <li>Insurance Companies</li>
//                                 <li>Expert Traders</li>
//                             </ul>
//                         </div>


//                         <div className="font-outfit font-normal tracking-[0.08em]">
//                             <h3 className="font-semibold text-[22px] mb-4">Help</h3>
//                             <ul className="space-y-2 text-[14px]">
//                                 <li>Privacy Policy</li>
//                                 <li>FAQ</li>
//                                 <li>How to get Started</li>
//                                 <li>Video Tutorials</li>
//                                 <li>Copyright</li>
//                             </ul>
//                         </div>


//                         <div className="font-outfit font-normal tracking-[0.08em]">
//                             <h3 className="font-semibold text-[22px] mb-4">About Us</h3>
//                             <ul className="space-y-2 text-[14px]">
//                                 <li>Location</li>
//                                 <li>Security</li>
//                                 <li>Our Plans</li>
//                                 <li>Our Vision</li>
//                             </ul>
//                         </div>
//                     </div>

//                     <div className="mt-5 pt-5 border-t border-purple-700">
//                         <div className="flex flex-col md:flex-row justify-between items-center">
//                             <div className="text-[12px] font-medium">© 2015-2025 FINOPTIX All Rights Reserved</div>
//                             <img
//                                 src="./Logo.png"
//                                 alt="Finoptix Logo"
//                                 className="w-[174px] h-[92px] object-contain"
//                             />
//                             <div className="flex items-center space-x-4 mt-4 md:mt-0">
//                                 <span className="text-[20px] mr-4font-outfit font-normal">Follow Us on :</span>
//                                 <a href="#" className="hover:text-purple-300">
//                                     <Instagram className="w-5 h-5" />
//                                 </a>
//                                 <a href="#" className="hover:text-purple-300">
//                                     <Youtube className="w-5 h-5" />
//                                 </a>
//                                 <a href="#" className="hover:text-purple-300">
//                                     <Twitter className="w-5 h-5" />
//                                 </a>
//                                 <a href="#" className="hover:text-purple-300">
//                                     <Facebook className="w-5 h-5" />
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </footer>

//     </div>
//   )
// }

// export default Home





"use client"
import React from 'react'
import { Bell, CircleDollarSign, LineChart, Target, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { motion } from "framer-motion"
import Logo from "./assets/Logo.png";
import HomeP from "./assets/HomeP.png";
import Clock from "./assets/Clock.png";
import Wallet from "./assets/Wallet.png";
import Goal from "./assets/Goal.png";
import Graph from "./assets/Graph.png";
import Pie from "./assets/Pie.png";
import Savings from "./assets/Savings.png";
import Timer from "./assets/Timer.png";
import Spendings from "./assets/Spendings.jpg";
import Goals from "./assets/Goals.jpg";
import Benefits_Section from "./assets/Benefits Section.jpg";
import Background from "./assets/Background.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a0f2e] text-white">

      {/* Header */}
      <motion.header
        className="bg-[#4B0082] text-white px-6 h-[83px] flex items-center shadow-[0_6px_6px_rgba(0,0,0,0.25)] mb-[35px]"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between w-full">
          <motion.img
            src={Logo}
            alt="Finoptix Logo"
            className="w-[174px] h-[92px] object-contain"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />

          <nav className="hidden md:flex items-center gap-x-[15px] flex-grow justify-center text-[20px] font-outfit font-normal tracking-[0.08em]">
            <motion.a
              href="/"
              className="px-4 flex items-center gap-x-[9px] p-2 bg-[#F0A6F4] text-[#4B0082] rounded-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={HomeP}
                alt="Finoptix Logo"
                className="w-[22px] h-[22px] object-contain pt-0.5"
              />Home
            </motion.a>

            <motion.a
              href="/dashboard"
              className="px-4 flex items-center gap-x-[9px] py-2 rounded-md hover:bg-purple-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={Clock}
                alt="Finoptix Logo"
                className="w-[20px] h-[20px] object-contain pt-0.5"
              />Dashboard
            </motion.a>

            <motion.a
              href="/your_budget"
              className="px-4 flex items-center gap-x-[9px] py-2 rounded-md hover:bg-purple-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={Wallet}
                alt="Finoptix Logo"
                className="w-[20px] h-[20px] object-contain pt-0.5"
              />Your Budget
            </motion.a>

            <motion.a
              href="/goals"
              className="px-4 flex items-center gap-x-[9px] py-2 rounded-md hover:bg-purple-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={Goal}
                alt="Finoptix Logo"
                className="w-[20px] h-[20px] object-contain pt-0.5 text-[#4B0082]"
              />Goals
            </motion.a>

            <motion.a
              href="/analytics"
              className="px-4 flex items-center gap-x-[9px] py-2 rounded-md hover:bg-purple-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={Graph}
                alt="Finoptix Logo"
                className="w-[20px] h-[20px] object-contain pt-0.5"
              />Investment Analytics
            </motion.a>
          </nav>

          <div className="flex items-center gap-x-[15px] relative left-[-30px]">
            <motion.button
              className="hover:bg-purple-700 rounded-full pl-[15px]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Bell className="w-5 h-5" />
            </motion.button>
            <motion.button
              className="hover:bg-purple-700 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-8 h-8 bg-purple-300 rounded-full" />
            </motion.button>
          </div>
        </div>
      </motion.header>




      {/* Hero Section */}
      <section className="relative grid md:grid-cols-2 gap-8 p-8 md:p-16 overflow-hidden">
        <div className="space-y-4 z-10">
          <hr className="w-[132px] border-4 border-purple-700" />
          <h1 style={{ fontFamily: 'Source Serif Pro', fontWeight: 'bold', fontSize: '46px', width: '70%' }}>
            Break <span className="bg-gradient-to-r from-[#6535F6] to-[#800BBE] text-transparent bg-clip-text">
              Free</span> From the Cycle of <span className="bg-gradient-to-r from-[#6535F6] to-[#800BBE] text-transparent bg-clip-text">
              Financial</span> Slavery
          </h1>
          <p style={{ fontFamily: 'Pacifico', color: '#ffffff', fontSize: '24px', paddingBottom: '15px' }}>Your financial freedom awaits</p>
          <button className="bg-purple-700 text-white px-6 py-2 rounded-full">Join Now</button>
        </div>
        <div className="relative">
          <div className="absolute right-10 top-0">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 bg-green-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-4 bg-green-500 rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute inset-8 bg-green-500 rounded-full opacity-40"></div>
              <div className="absolute inset-12 bg-green-500 rounded-full opacity-50"></div>
              <div className="absolute inset-16 bg-green-500 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </section>





      {/* Spending Section */}
      <section className="relative bg-gray-100 p-8 md:p-16 mt-9">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -left-20 -top-20 w-40 h-40 bg-purple-500 rounded-full opacity-20"></div>
            <img
              src={Spendings}
              alt="App Screenshot"
              className="z-10 rounded-lg overflow-hidden bg-cover bg-center" />
          </div>
          <div className="space-y-4 w-[90%]">
            <h2 className="text-[36px] font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>Stay On Top Of Your Spendings</h2>
            <p className="text-gray-600 font-semibold text-[20px]">
              FINOPTIX supports tracking everything seamlessly. From your daily coffee to monthly investments, we've got
              you covered. Take control of your finances through our easy to use interface.
            </p>
            <button className="text-[#000000eb] font-normal text-[17px] border-2 border-gray-800 rounded-lg px-3 py-1 hover:bg-gradient-to-r from-[#6535F6] to-[#800BBE] hover:text-white transition-all duration-300">
              Learn More</button>
          </div>
        </div>
      </section>





      {/* Goals Section */}
      <section className="p-8 md:p-16 mb-0 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 w-[85%] pl-3">
            <h2 className="text-[36px] font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>Achieve Your Goals Easily and fulfill your dreams</h2>
            <p className="text-gray-600 font-semibold text-[20px]">The Goal feature in FINOPTIX helps you turn financial dreams into reality. From saving for a house to planning a vacation, it analyzes your spending patterns and guides you towards achieving your financial goals faster and more effectively.
            </p>
            <button className="text-[#000000eb] font-normal text-[17px] border-2 border-gray-800 rounded-lg px-3 py-1 hover:bg-gradient-to-r from-[#6535F6] to-[#800BBE] hover:text-white transition-all duration-300">Learn More</button>
          </div>
          <div className="relative">
            <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-purple-500 rounded-full opacity-20"></div>
            <img
              src={Goals}
              alt="Goals Screenshot"
              className="z-10 rounded-lg overflow-hidden bg-cover bg-center pl-40"
            />
          </div>
        </div>
      </section>



      {/* Benefits Section */}
      {/* <section className="bg-[#1a0f2e] p-8 md:p-16 relative overflow-hidden object-cover">
       <img src="/Benefits Section.jpg" alt="" />
      </section> */}

      <section className="relative w-screen min-h-[600px] flex justify-center items-center">
        <img
          src={Benefits_Section}
          alt="Benefits Section"
          className="w-screen h-auto"
        />
      </section>




      {/* Features Grid */}
      <section
        className="relative w-screen min-h-[700px] md:min-h-[800px] flex items-center justify-center p-8 md:p-16 overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 w-screen h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${Background})` }}

        />

        {/* Content */}
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-3 gap-8 p-6 pt-49">
          <div className="p-6 rounded-lg border border-gray-200 shadow-[0_0_17px_10px_rgba(0,0,0,0.09)]">
            <img src={Pie} alt="" />
            <h3 className="text-[20px] font-normal text-black mb-2">Get Full Analysis</h3>
            <p className="text-gray-600 text-[17px] font-normal w-[86%]">Get full analysis of your income, expenses and your investments at one place.</p>
          </div>

          <div className="p-6 rounded-lg border border-gray-200 shadow-[0_0_17px_10px_rgba(0,0,0,0.09)]">
          <img src={Savings} alt="" />
            <h3 className="text-[20px] font-normal text-black mb-2">Set Smart Goals</h3>
            <p className="text-gray-600 text-[17px] font-normal">Set budget goals for your future, get a new car, go to a dream vacay or study in dream collage.</p>
          </div>

          <div className="p-6 rounded-lg border border-gray-200 shadow-[0_0_17px_10px_rgba(0,0,0,0.09)]">
          <img src={Timer} alt="" />
            <h3 className="text-[20px] font-normal text-black mb-2">Get Hold Over Your Expenses</h3>
            <p className="text-gray-600 text-[17px] font-normal">Track your cash expenses, bank accounts, credits and cryptos.</p>
          </div>

        </div>
      </section>






      {/* Footer */}
      <footer className="bg-[#4B0082] text-white mt-0 h-[466px]">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:justify-between ml-18">
            <div className="font-outfit font-normal tracking-[0.08em]">
              <h3 className="font-semibold text-[22px] mb-4">Our Features</h3>
              <ul className="space-y-2 text-[14px]">
                <li>Get Started as a Fresher</li>
                <li>How To Earn More</li>
                <li>Write Blogs Or Read</li>
                <li>Learn To Invest</li>
                <li>Manage Your Budget</li>
                <li>Personalize Future Plans For Your Future</li>
              </ul>
            </div>


            <div className="font-outfit font-normal tracking-[0.08em]">
              <h3 className="font-semibold text-[22px] mb-4">Our Potential Partners</h3>
              <ul className="space-y-2 text-[14px]">
                <li>Banks</li>
                <li>Tech Companies</li>
                <li>Insurance Companies</li>
                <li>Expert Traders</li>
              </ul>
            </div>


            <div className="font-outfit font-normal tracking-[0.08em]">
              <h3 className="font-semibold text-[22px] mb-4">Help</h3>
              <ul className="space-y-2 text-[14px]">
                <li>Privacy Policy</li>
                <li>FAQ</li>
                <li>How to get Started</li>
                <li>Video Tutorials</li>
                <li>Copyright</li>
              </ul>
            </div>


            <div className="font-outfit font-normal tracking-[0.08em]">
              <h3 className="font-semibold text-[22px] mb-4">About Us</h3>
              <ul className="space-y-2 text-[14px]">
                <li>Location</li>
                <li>Security</li>
                <li>Our Plans</li>
                <li>Our Vision</li>
              </ul>
            </div>
          </div>

          <div className="mt-5 pt-5 border-t border-purple-700">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-[12px] font-medium">© 2015-2025 FINOPTIX All Rights Reserved</div>
              <img
                src={Logo}
                alt="Finoptix Logo"
                className="w-[174px] h-[92px] object-contain"
              />
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <span className="text-[20px] mr-4font-outfit font-normal">Follow Us on :</span>
                <a href="#" className="hover:text-purple-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-purple-300">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-purple-300">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-purple-300">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

