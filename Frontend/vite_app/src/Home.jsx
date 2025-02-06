import React from 'react'
import { Bell } from 'lucide-react'

function Home() {
  return (
    <div className="min-h-screen bg-[#E0EBF7]">
         {/* Header */}
         <header className="bg-[#4B0082] text-white px-6 h-[83px] flex items-center shadow-[0_6px_6px_rgba(0,0,0,0.25)] mb-[35px]">
                <div className="flex items-center justify-between w-full">
                    <img
                        src="./Logo.png"
                        alt="Finoptix Logo"
                        className="w-[174px] h-[92px] object-contain"
                    />


                    <nav className="hidden md:flex items-center gap-x-[15px] flex-grow justify-center text-[20px] font-outfit font-normal tracking-[0.08em]">
                        <a href="/" className="px-4 flex items-center gap-x-[9px] p-2 bg-[#F0A6F4] text-[#4B0082] rounded-md"> <img
                            src="./HomeP.png"
                            alt="Finoptix Logo"
                            className="w-[22px] h-[22px] object-contain pt-0.5"
                        />Home</a>

                        <a href="/dashboard" className="px-4 flex items-center gap-x-[9px] py-2 rounded-md hover:bg-purple-700"> <img
                            src="./Clock.png"
                            alt="Finoptix Logo"
                            className="w-[20px] h-[20px] object-contain pt-0.5"
                        />Dashboard</a>

                        <a href="/your_budget" className="px-4 flex items-center gap-x-[9px] py-2 rounded-md hover:bg-purple-700"> <img
                            src="./Wallet.png"
                            alt="Finoptix Logo"
                            className="w-[20px] h-[20px] object-contain pt-0.5"
                        />Your Budget</a>

                        <a href="/goals" className="px-4 flex items-center gap-x-[9px] py-2 rounded-md hover:bg-purple-700"> <img
                            src="./Goal.png"
                            alt="Finoptix Logo"
                            className="w-[20px] h-[20px] object-contain pt-0.5 text-[#4B0082]"
                        />Goals</a>

                        <a href="/analytics" className="px-4 flex items-center gap-x-[9px] py-2 rounded-md hover:bg-purple-700"> <img
                            src="./Graph.png"
                            alt="Finoptix Logo"
                            className="w-[20px] h-[20px] object-contain pt-0.5"
                        />Investment Analytics</a>
                    </nav>



                    <div className="flex items-center gap-x-[15px] relative left-[-30px]">
                        <button className="hover:bg-purple-700 rounded-full pl-[15px]">
                            <Bell className="w-5 h-5" />
                        </button>
                        <button className="hover:bg-purple-700 rounded-full">
                            <div className="w-8 h-8 bg-purple-300 rounded-full" />
                        </button>
                    </div>

                </div>
            </header>
      
    </div>
  )
}

export default Home



