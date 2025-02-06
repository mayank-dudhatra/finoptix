"use client"

import { useEffect, useState } from "react"
import { color, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Home,
  Bell,
  User,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Wallet,
  PieChart,
  ArrowRight,
  Car,
  Utensils,
  Heart, Facebook, Twitter, Instagram, Youtube
} from "lucide-react"

// Animated counter component
const Counter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime
    let animationFrame

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = (timestamp - startTime) / (duration * 1000)

      if (progress < 1) {
        setCount(Math.min(Math.floor(value * progress), value))
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(value)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [value, duration])

  return <span>${count.toLocaleString()}</span>
}

// Progress bar component
const ProgressBar = ({ value, max, color }) => {

  const percentage = (value / max) * 100

  return (
    <motion.div
      className="h-2 rounded-full bg-gray-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className={`h-full rounded-full ${color}`}
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </motion.div>
  )
}

// Circular Progress component
const CircularProgress = ({ value, max, color, size = 127 }) => {
  const percentage = (value / max) * 100
  const circumference = size * Math.PI
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <svg className="transform -rotate-90" width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          className="stroke-current text-gray-200"
          strokeWidth="8"
          fill="transparent"
          r={size / 2 - 4}
          cx={size / 2}
          cy={size / 2}
        />
        <motion.circle
          className={`stroke-current ${color}`}
          strokeWidth="8"
          strokeLinecap="round"
          fill="transparent"
          r={size / 2 - 4}
          cx={size / 2}
          cy={size / 2}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          style={{
            strokeDasharray: circumference,
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold">{percentage.toFixed(0)}%</span>
      </div>
    </motion.div>
  )
}

// Spending Card component
const SpendingCard = ({ title, amount, trend, color, icon: Icon }) => {
  const isPositive = trend > 0

  return (
    <motion.div
      className={`p-6 rounded-xl ${color} backdrop-blur-sm`}
      whileHover={{ scale: 1.02, translateY: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 rounded-lg bg-white/20">
          <Icon className="w-6 h-6 text-gray-800" />
        </div>
        <motion.span
          className={`flex items-center ${isPositive ? "text-green-600" : "text-red-600"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
          <span className="ml-1">{Math.abs(trend)}%</span>
        </motion.span>
      </div>
      <h3 className="text-gray-700 mb-1">{title}</h3>
      <Counter value={amount} />
    </motion.div>
  )
}

export default function Your_Budget() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const dailyExpenses = [
    { category: "Fuel & Transport", amount: 100 },
    { category: "Books", amount: 87 },
    { category: "Outside Food", amount: 40 },
    { category: "Fees", amount: 1318 },
    { category: "Groceries", amount: 128 },
    { category: "Clothes", amount: 278 },
  ]
    

  
  const budgetCategories = [
    {
      icon: <Home className="w-6 h-6" />,
      name: "Housing",
      description: "Rent, Utilities and Insurance",
      amount: 2500,
      spent: 1800,
      color: "bg-[#5F7FC8]",
    },
    {
      icon: <Car className="w-6 h-6" />,
      name: "Transportation",
      description: "Car Payment, Gas, Maintenance",
      amount: 600,
      spent: 450,
      color: "bg-[#8C28FF]",
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      name: "Food & Dining",
      description: "Groceries, Restaurants & Delivery",
      amount: 800,
      spent: 450,
      color: "bg-[#FF3F9C]",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      name: "Healthcare",
      description: "Insurance, Medications & Checkups",
      amount: 400,
      spent: 200,
      color: "bg-[#0AC213]",
    },
  ]

  const summaryData = {
    totalBudget: 3900,
    totalSpent: 3350,
    remaining: 550,
    monthlyStats: [
      { title: "Monthly Income", amount: 5000, trend: 12, color: "bg-green-100/80", icon: Wallet },
      { title: "Total Expenses", amount: 3350, trend: -8, color: "bg-red-100/80", icon: DollarSign },
      { title: "Total Savings", amount: 1650, trend: 15, color: "bg-blue-100/80", icon: PieChart },
    ],
    categories: [
      { name: "Housing", percentage: 35, color: "bg-[#5F7FC8]" },
      { name: "Transportation", percentage: 15, color: "bg-[#8C28FF]" },
      { name: "Food", percentage: 25, color: "bg-[#FF3F9C]" },
      { name: "Healthcare", percentage: 10, color: "bg-[#0AC213]" },
      { name: "Entertainment", percentage: 15, color: "bg-[#E59308]" },
    ],
  }

  return (
    <div className="min-h-screen bg-[#f3f3ff]">
      {/* Navigation */}

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
              className="px-4 flex items-center gap-x-[9px] py-2 rounded-md hover:bg-purple-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src="./Home.png"
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
              className="px-4 flex items-center gap-x-[9px] p-2 bg-[#F0A6F4] text-[#4B0082] rounded-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src="./WalletP.png"
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


      <main className="p-6 space-y-6" ref={ref}>
        {/* Daily Expenses */}
        <motion.div
          className="bg-[#BBFFBE] rounded-xl p-6 mb-7"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[20] font-semibold">Daily Expenses</h2>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="text-[#4F1774] text-[16px] font-semibold">
              Add Expense
            </motion.button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dailyExpenses.map((expense, index) => (
              <motion.div
                key={expense.category}
                className="bg-gradient-to-r from-[#B7D2FC] to-[#73ABFF] rounded-lg p-4 flex justify-between items-center"                
                variants={fadeInUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <span>{expense.category}</span>
                <Counter value={expense.amount} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Monthly Budget */}
        <motion.div
          className="bg-[#e0ebf7] rounded-xl p-6"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-lg font-semibold mb-6">Monthly Budget</h2>
          <div className="space-y-6">
        
            {budgetCategories.map((category, index) => (
              <motion.div
                key={category.name}
                className="space-y-2"
                variants={fadeInUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">{category.name}</h3>
                    <p className="text-sm text-gray-600">{category.description}</p>
                  </div>
                  <Counter value={category.amount} />
                </div>
                <ProgressBar value={category.spent} max={category.amount} color={category.color} />
                </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Budget Summary Section */}
        <motion.section
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {summaryData.monthlyStats.map((stat, index) => (
              <SpendingCard key={stat.title} {...stat} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Budget Overview Card */}
            <motion.div
              className="bg-white rounded-xl p-6 shadow-lg"
              variants={fadeInUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-6">Budget Overview</h3>
              <div className="flex justify-center mb-6">
                <CircularProgress
                  value={summaryData.totalSpent}
                  max={summaryData.totalBudget}
                  color="text-purple-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Budget</p>
                  <p className="text-xl font-bold text-gray-900">
                    <Counter value={summaryData.totalBudget} />
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Remaining</p>
                  <p className="text-xl font-bold text-green-500">
                    <Counter value={summaryData.remaining} />
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Category Distribution Card */}
            <motion.div
              className="bg-white rounded-xl p-6 shadow-lg"
              variants={fadeInUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-6">Spending by Category</h3>
              <div className="space-y-4">
                {summaryData.categories.map((category, index) => (
                  <motion.div
                    key={category.name}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between text-sm">
                      <span>{category.name}</span>
                      <span>{category.percentage}%</span>
                    </div>
                    <motion.div
                      className="h-2 bg-gray-100 rounded-full overflow-hidden"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <motion.div
                        className={`h-full ${category.color}`} 
                        initial={{ width: 0 }}
                        animate={{ width: `${category.percentage}%` }}
                        transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Actions */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {["View Detailed Report", "Download Statement", "Set Budget Alerts"].map((action, index) => (
              <motion.button
                key={action}
                className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{action}</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            ))}
          </motion.div>
        </motion.section>
      </main>



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

