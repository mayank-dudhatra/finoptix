import React from 'react'
import { Bell, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { motion } from "framer-motion"

function Home() {
  return (
    <div className="min-h-screen bg-[#E0EBF7]">
         {/* Header */}
         <motion.header
        className="bg-[#4B0082] text-white px-6 h-[83px] flex items-center shadow-[0_6px_6px_rgba(0,0,0,0.25)] mb-[35px]"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between w-full">
          <motion.img
            src="./Logo.png"
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
                src="./HomeP.png"
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
                src="./Clock.png"
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
                src="./Wallet.png"
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
                src="./Goal.png"
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
                src="./Graph.png"
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



       {/* Footer */}
       <footer className="bg-[#4B0082] text-white mt-7 h-[466px]">
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
                                src="./Logo.png"
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

export default Home



