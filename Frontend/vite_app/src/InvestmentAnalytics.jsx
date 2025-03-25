// "use client"

// import { useState, useEffect } from "react"
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

// // Sample data
// const performanceData = [
//   { month: "Jan", value: 30 },
//   { month: "Feb", value: 40 },
//   { month: "Mar", value: 35 },
//   { month: "Apr", value: 50 },
//   { month: "May", value: 45 },
//   { month: "Jun", value: 60 },
// ]

// const holdings = [
//   { asset: "AAPL", type: "Stocks", quantity: 100, price: 175.5, value: 17550, return: "+25.3%" },
//   { asset: "MSFT", type: "Stocks", quantity: 85, price: 380.25, value: 32321.25, return: "+32.8%" },
//   { asset: "VGSH", type: "Bonds", quantity: 200, price: 58.25, value: 11650, return: "+3.5%" },
//   { asset: "VNQ", type: "Real Estate", quantity: 150, price: 85.75, value: 12862.5, return: "+8.2%" },
// ]

// const assets = [
//   { name: "Stocks", value: 45, amount: "$85,400", color: "#5f1774" },
//   { name: "Bonds", value: 25, amount: "$47,200", color: "#8c28ff" },
//   { name: "Real Estate", value: 15, amount: "$28,300", color: "#bcffbf" },
//   { name: "Cash", value: 10, amount: "$18,900", color: "#e0ebf7" },
//   { name: "Commodities", value: 5, amount: "$9,400", color: "#f0e0eb" },
// ]

// const InvestmentAnalytics = () => {
//   const [isLoading, setIsLoading] = useState(true)

//   useEffect(() => {
//     // Simulate loading
//     setTimeout(() => setIsLoading(false), 1500)
//   }, [])

//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#f6f9ff]">
//         <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin" />
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-[#f6f9ff]">
//       <Header />
//       <main className="max-w-7xl mx-auto p-6 space-y-6">
//         <KPICards />
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <PerformanceChart />
//           <AssetAllocation />
//         </div>
//         <RiskAnalysis />
//         <PortfolioHoldings />
//       </main>
//       <Footer />
//     </div>
//   )
// }

// const Header = () => (
//   <header className="bg-[#5f1774] text-white p-4 sticky top-0 z-50">
//     <div className="max-w-7xl mx-auto flex items-center justify-between">
//       <div className="flex items-center space-x-8">
//         <img
//           src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/finoptix-WNkXp208Yjrylq24eOP6DfDKWnweZ2.png"
//           alt="Finoptix Logo"
//           className="h-8"
//         />
//         <nav className="hidden md:flex items-center space-x-6">
//           {["Home", "Dashboard", "Your Budget", "Goals"].map((item) => (
//             <button key={item} className="text-white hover:text-purple-200">
//               {item}
//             </button>
//           ))}
//           <button className="bg-[#8c28ff] text-white px-4 py-2 rounded">Investment Analytics</button>
//         </nav>
//       </div>
//       <div className="flex items-center space-x-4">
//         <span>🔔</span>
//         <div className="w-8 h-8 bg-purple-300 rounded-full"></div>
//       </div>
//     </div>
//   </header>
// )

// const KPICards = () => {
//   const kpis = [
//     { title: "Total Portfolio", value: "$189,200", change: "+3.2% today" },
//     { title: "Total Return", value: "$45,800", change: "+22.5% all time" },
//     { title: "Dividends", value: "$2,450", change: "Last 12 months" },
//   ]

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//       {kpis.map((kpi, index) => (
//         <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
//           <p className="text-sm text-gray-600">{kpi.title}</p>
//           <h3 className="text-2xl font-bold mt-1">{kpi.value}</h3>
//           <p className="text-sm text-green-600 mt-2">{kpi.change}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

// const PerformanceChart = () => (
//   <div className="bg-white p-6 rounded-xl shadow-lg">
//     <h3 className="text-lg font-semibold mb-4">Portfolio Performance</h3>
//     <div className="h-64">
//       <ResponsiveContainer width="100%" height="100%">
//         <LineChart data={performanceData}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="month" />
//           <YAxis />
//           <Tooltip />
//           <Line type="monotone" dataKey="value" stroke="#5f1774" strokeWidth={2} dot={{ fill: "#5f1774" }} />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   </div>
// )

// const AssetAllocation = () => (
//   <div className="bg-white p-6 rounded-xl shadow-lg">
//     <h3 className="text-lg font-semibold mb-6">Asset Allocation</h3>
//     <div className="space-y-4">
//       {assets.map((asset) => (
//         <div key={asset.name}>
//           <div className="flex justify-between text-sm mb-1">
//             <span>{asset.name}</span>
//             <span className="text-gray-600">{asset.amount}</span>
//           </div>
//           <div className="h-2 bg-gray-200 rounded">
//             <div className="h-full rounded" style={{ width: `${asset.value}%`, backgroundColor: asset.color }}></div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// )

// const RiskAnalysis = () => {
//   const metrics = [
//     { title: "Risk Score", value: "65/100" },
//     { title: "Volatility", value: "12.5%" },
//     { title: "Max Drawdown", value: "-15.4%" },
//     { title: "Sharpe Ratio", value: "1.8" },
//   ]

//   return (
//     <div className="bg-[#e0ebf7] p-6 rounded-xl">
//       <h3 className="text-lg font-semibold mb-6">Risk Analysis</h3>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         {metrics.map((metric) => (
//           <div key={metric.title} className="bg-white p-4 rounded-lg">
//             <p className="text-sm text-gray-600">{metric.title}</p>
//             <p className="text-xl font-semibold mt-1">{metric.value}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// const PortfolioHoldings = () => (
//   <div className="bg-white p-6 rounded-xl shadow-lg">
//     <div className="flex justify-between items-center mb-6">
//       <h3 className="text-lg font-semibold">Portfolio Holdings</h3>
//       <div className="space-x-2">
//         <button className="px-4 py-2 text-sm border rounded">Export CSV</button>
//         <button className="px-4 py-2 text-sm bg-purple-600 text-white rounded">Add Investment</button>
//       </div>
//     </div>
//     <div className="overflow-x-auto">
//       <table className="w-full">
//         <thead>
//           <tr className="text-left">
//             <th className="pb-4">Asset</th>
//             <th className="pb-4">Type</th>
//             <th className="pb-4">Quantity</th>
//             <th className="pb-4">Price</th>
//             <th className="pb-4">Value</th>
//             <th className="pb-4">Return</th>
//           </tr>
//         </thead>
//         <tbody>
//           {holdings.map((holding) => (
//             <tr key={holding.asset} className="border-t">
//               <td className="py-4">{holding.asset}</td>
//               <td>{holding.type}</td>
//               <td>{holding.quantity}</td>
//               <td>${holding.price.toFixed(2)}</td>
//               <td>${holding.value.toFixed(2)}</td>
//               <td className="text-green-600">{holding.return}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   </div>
// )

// const Footer = () => (
//   <footer className="bg-[#5f1774] text-white mt-12 py-8">
//     <div className="max-w-7xl mx-auto px-6">
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//         {[
//           {
//             title: "Our Features",
//             items: ["Get Started", "How To Earn More", "Write Blogs", "Learn To Invest", "Manage Budget"],
//           },
//           {
//             title: "Potential Partners",
//             items: ["Banks", "Tech Companies", "Insurance", "Expert Traders"],
//           },
//           {
//             title: "Help",
//             items: ["Privacy Policy", "FAQ", "Get Started", "Tutorials", "Copyright"],
//           },
//           {
//             title: "About Us",
//             items: ["Location", "Security", "Our Plans", "Our Vision"],
//           },
//         ].map((section) => (
//           <div key={section.title}>
//             <h4 className="font-semibold mb-4">{section.title}</h4>
//             <ul className="space-y-2 text-sm">
//               {section.items.map((item) => (
//                 <li key={item}>{item}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//       <div className="mt-8 pt-8 border-t border-purple-700 text-center text-sm">
//         © 2015-2025 FINOPTIX All Rights Reserved
//       </div>
//     </div>
//   </footer>
// )

// export default InvestmentAnalytics






"use client";

import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Bell, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import Logo from "./assets/Logo.png";
import Home from "./assets/Home.png";
import Clock from "./assets/Clock.png";
import ClockP from "./assets/ClockP.png";
import Wallet from "./assets/Wallet.png";
import Goal from "./assets/Goal.png";
import GoalP from "./assets/GoalP.png";
import GraphP from "./assets/GraphP.png";
import Badge from "./assets/Badge.png";
import Stats from "./assets/Stats.png";
import Alert from "./assets/Alert.png";
import Loader from "./Components/Loader";

// Sample data
const performanceData = [
  { month: "Jan", value: 30 },
  { month: "Feb", value: 40 },
  { month: "Mar", value: 35 },
  { month: "Apr", value: 50 },
  { month: "May", value: 45 },
  { month: "Jun", value: 60 },
];

const holdings = [
  { asset: "AAPL", discription: "Apple Inc.", type: "Stocks", quantity: 100, price: 175.5, value: 17550, return: "+25.3%" },
  { asset: "MSFT", discription: "Microsoft Corp.", type: "Stocks", quantity: 85, price: 380.25, value: 32321.25, return: "+32.8%" },
  { asset: "VGSH", discription: "Vanguard Short-Term Treasury ETF", type: "Bonds", quantity: 200, price: 58.25, value: 11650, return: "+3.5%" },
  { asset: "VNQ", discription: "Vanguard Real Estate ETF", type: "Real Estate", quantity: 150, price: 85.75, value: 12862.5, return: "+8.2%" },
];

const assets = [
  { name: "Stocks", value: 45, amount: "₹1,20,400", color: "#5f1774" },
  { name: "Bonds", value: 25, amount: "₹50,900", color: "#8c28ff" },
  { name: "Real Estate", value: 15, amount: "₹3,90,300", color: "#5F7FC8" },
  { name: "Cash", value: 10, amount: "₹80,900", color: "#E46262" },
  { name: "Commodities", value: 5, amount: "₹23,400", color: "#9A9A0E" },
];

// Calculator Components with Tabbed Interface
const Calculators = () => {
  const [activeTab, setActiveTab] = useState("sip");

  const SIPCalculator = () => {
    const [monthlyInvestment, setMonthlyInvestment] = useState(50000);
    const [interestRate, setInterestRate] = useState(12);
    const [years, setYears] = useState(15);

    const calculateSIP = () => {
      const n = years * 12;
      const r = interestRate / 100 / 12;
      const futureValue = (monthlyInvestment * ((Math.pow(1 + r, n) - 1) / r)) * (1 + r);
      return futureValue.toFixed(0);
    };

    const investedAmount = monthlyInvestment * 12 * years;
    const totalReturns = calculateSIP() - investedAmount;

    return (
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-3/5 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Investment (₹)</label>
            <input
              type="number"
              value={monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-md text-gray-800 focus:ring-2 focus:ring-purple-500"
              min="100"
              max="1000000"
            />
            <input
              type="range"
              min="100"
              max="1000000"
              value={monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2 accent-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Expected Return Rate (p.a) (%)</label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-md text-gray-800 focus:ring-2 focus:ring-purple-500"
              min="1"
              max="30"
              step="0.1"
            />
            <input
              type="range"
              min="1"
              max="30"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2 accent-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Time Period (Years)</label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-md text-gray-800 focus:ring-2 focus:ring-purple-500"
              min="1"
              max="30"
            />
            <input
              type="range"
              min="1"
              max="30"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2 accent-purple-500"
            />
          </div>
        </div>
        <div className="w-full md:w-2/5 flex flex-col items-center">
          <div className="flex justify-between w-full mb-4 text-sm font-medium text-gray-800">
            <p>Invested: <span className="text-purple-600">₹{investedAmount.toLocaleString("en-IN")}</span></p>
            <p>Returns: <span className="text-green-600">₹{totalReturns.toLocaleString("en-IN")}</span></p>
          </div>
          <div className="w-[250px] h-[250px] relative">
            <Doughnut
              data={{
                labels: ["Returns", "Invested"],
                datasets: [{ data: [totalReturns, investedAmount], backgroundColor: ["#a855f7", "#6366f1"], borderWidth: 0 }],
              }}
              options={{
                cutout: "70%",
                plugins: { legend: { position: "bottom", labels: { usePointStyle: true, pointStyle: "circle", padding: 10, font: { size: 12 } } } },
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-xs text-gray-500">Total Value</span>
              <span className="text-lg font-semibold text-gray-800">₹{Number(calculateSIP()).toLocaleString("en-IN")}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const SavingsCalculator = () => {
    const [initialAmount, setInitialAmount] = useState(50000);
    const [interestRate, setInterestRate] = useState(6);
    const [years, setYears] = useState(10);

    const futureValue = initialAmount * Math.pow(1 + interestRate / 100, years);
    const interestEarned = futureValue - initialAmount;

    return (
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-3/5 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Initial Deposit (₹)</label>
            <input
              type="number"
              value={initialAmount}
              onChange={(e) => setInitialAmount(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-md text-gray-800 focus:ring-2 focus:ring-green-500"
              min="1000"
              max="1000000"
            />
            <input
              type="range"
              min="1000"
              max="1000000"
              value={initialAmount}
              onChange={(e) => setInitialAmount(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2 accent-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Expected Return Rate (p.a) (%)</label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-md text-gray-800 focus:ring-2 focus:ring-green-500"
              min="1"
              max="15"
              step="0.1"
            />
            <input
              type="range"
              min="1"
              max="15"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2 accent-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Time Period (Years)</label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-md text-gray-800 focus:ring-2 focus:ring-green-500"
              min="1"
              max="30"
            />
            <input
              type="range"
              min="1"
              max="30"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2 accent-green-500"
            />
          </div>
        </div>
        <div className="w-full md:w-2/5 flex flex-col items-center">
          <div className="flex justify-between w-full mb-4 text-sm font-medium text-gray-800">
            <p>Invested: <span className="text-teal-600">₹{initialAmount.toLocaleString("en-IN")}</span></p>
            <p>Returns: <span className="text-green-600">₹{interestEarned.toLocaleString("en-IN")}</span></p>
          </div>
          <div className="w-[250px] h-[250px] relative">
            <Doughnut
              data={{
                labels: ["Returns", "Invested"],
                datasets: [{ data: [interestEarned, initialAmount], backgroundColor: ["#84cc16", "#2dd4bf"], borderWidth: 0 }],
              }}
              options={{
                cutout: "70%",
                plugins: { legend: { position: "bottom", labels: { usePointStyle: true, pointStyle: "circle", padding: 10, font: { size: 12 } } } },
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-xs text-gray-500">Total Value</span>
              <span className="text-lg font-semibold text-gray-800">₹{futureValue.toLocaleString("en-IN")}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const StockInvestmentCalculator = () => {
    const [investment, setInvestment] = useState(100000);
    const [annualReturn, setAnnualReturn] = useState(15);
    const [years, setYears] = useState(10);

    const futureValue = investment * Math.pow(1 + annualReturn / 100, years);
    const profit = futureValue - investment;

    return (
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-3/5 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Initial Investment (₹)</label>
            <input
              type="number"
              value={investment}
              onChange={(e) => setInvestment(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-md text-gray-800 focus:ring-2 focus:ring-purple-500"
              min="1000"
              max="1000000"
            />
            <input
              type="range"
              min="1000"
              max="1000000"
              value={investment}
              onChange={(e) => setInvestment(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2 accent-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Expected Annual Return (p.a) (%)</label>
            <input
              type="number"
              value={annualReturn}
              onChange={(e) => setAnnualReturn(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-md text-gray-800 focus:ring-2 focus:ring-purple-500"
              min="1"
              max="30"
              step="0.1"
            />
            <input
              type="range"
              min="1"
              max="30"
              step="0.1"
              value={annualReturn}
              onChange={(e) => setAnnualReturn(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2 accent-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Time Period (Years)</label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-md text-gray-800 focus:ring-2 focus:ring-purple-500"
              min="1"
              max="30"
            />
            <input
              type="range"
              min="1"
              max="30"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2 accent-purple-500"
            />
          </div>
        </div>
        <div className="w-full md:w-2/5 flex flex-col items-center">
          <div className="flex justify-between w-full mb-4 text-sm font-medium text-gray-800">
            <p>Invested: <span className="text-purple-600">₹{investment.toLocaleString("en-IN")}</span></p>
            <p>Returns: <span className="text-green-600">₹{profit.toLocaleString("en-IN")}</span></p>
          </div>
          <div className="w-[250px] h-[250px] relative">
            <Doughnut
              data={{
                labels: ["Returns", "Invested"],
                datasets: [{ data: [profit, investment], backgroundColor: ["#a855f7", "#6366f1"], borderWidth: 0 }],
              }}
              options={{
                cutout: "70%",
                plugins: { legend: { position: "bottom", labels: { usePointStyle: true, pointStyle: "circle", padding: 10, font: { size: 12 } } } },
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-xs text-gray-500">Total Value</span>
              <span className="text-lg font-semibold text-gray-800">₹{futureValue.toLocaleString("en-IN")}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Investment Calculators</h2>
        <div className="flex gap-2">
          <motion.button
            className={`px-4 py-2 rounded-md text-sm font-medium ${activeTab === "sip" ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-700"}`}
            onClick={() => setActiveTab("sip")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            SIP
          </motion.button>
          <motion.button
            className={`px-4 py-2 rounded-md text-sm font-medium ${activeTab === "savings" ? "bg-green-600 text-white" : "bg-gray-200 text-gray-700"}`}
            onClick={() => setActiveTab("savings")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Savings
          </motion.button>
          <motion.button
            className={`px-4 py-2 rounded-md text-sm font-medium ${activeTab === "stock" ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-700"}`}
            onClick={() => setActiveTab("stock")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Stock
          </motion.button>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {activeTab === "sip" && (
          <motion.div key="sip" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <SIPCalculator />
          </motion.div>
        )}
        {activeTab === "savings" && (
          <motion.div key="savings" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <SavingsCalculator />
          </motion.div>
        )}
        {activeTab === "stock" && (
          <motion.div key="stock" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <StockInvestmentCalculator />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Main InvestmentAnalytics Component
const InvestmentAnalytics = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulated loading delay (2 seconds)
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <motion.div
      className="min-h-screen bg-[#f6f9ff]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />
      <main className="max-w-7xl mx-auto p-6 space-y-6">
        <KPICards />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PerformanceChart />
          <AssetAllocation />
        </div>
        <RiskAnalysis />
        <PortfolioHoldings />
        <Calculators />
      </main>
      <Footer />
    </motion.div>
  );
};

// Header, KPICards, PerformanceChart, AssetAllocation, RiskAnalysis, PortfolioHoldings, Footer remain unchanged
const Header = () => {
  const navigate = useNavigate();
  return (
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
          <motion.a href="/" className="px-4 flex items-center gap-x-[9px] py-2 rounded-md hover:bg-purple-700" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <img src={Home} alt="Home Icon" className="w-[22px] h-[22px] object-contain pb-1" />Home
          </motion.a>
          <motion.a href="/dashboard" className="px-4 flex items-center gap-x-[9px] py-2 rounded-md hover:bg-purple-700" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <img src={Clock} alt="Dashboard Icon" className="w-[20px] h-[20px] object-contain pt-0.5" />Dashboard
          </motion.a>
          <motion.a href="/your_budget" className="px-4 flex items-center gap-x-[9px] py-2 rounded-md hover:bg-purple-700" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <img src={Wallet} alt="Budget Icon" className="w-[20px] h-[20px] object-contain pt-0.5" />Your Budget
          </motion.a>
          <motion.a href="/goals" className="px-4 flex items-center gap-x-[9px] py-2 rounded-md hover:bg-purple-700" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <img src={Goal} alt="Goals Icon" className="w-[20px] h-[20px] object-contain pt-0.5" />Goals
          </motion.a>
          <motion.a href="/analytics" className="px-4 flex items-center gap-x-[9px] p-2 bg-[#F0A6F4] text-[#4B0082] rounded-md" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <img src={GraphP} alt="Analytics Icon" className="w-[20px] h-[20px] object-contain pt-0.5" />Investment Analytics
          </motion.a>
        </nav>
        <div className="flex items-center gap-x-[15px] relative left-[-30px]">
          <motion.button className="hover:bg-purple-700 rounded-full pl-[15px]" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Bell className="w-5 h-5" />
          </motion.button>
          <motion.button className="hover:bg-purple-700 rounded-full" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={() => navigate("/profile")}>
            <div className="w-8 h-8 bg-purple-300 rounded-full" />
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

const KPICards = () => {
  const kpis = [
    { title: "Total Portfolio", value: "₹1,57,23,60", change: "+3.2% today", color: "bg-[#C3D9F7]", img: ClockP },
    { title: "Total Return", value: "₹38,01,40", change: "+22.5% all time", color: "bg-[#E9E1F6]", img: GraphP },
    { title: "Dividends", value: "₹2,03,35", change: "Last 12 months", color: "bg-[#F0E0EB]", img: GoalP },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-9">
      {kpis.map((kpi, index) => (
        <motion.div
          key={index}
          className={`p-6 rounded-xl shadow-lg ${kpi.color}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
        >
          <p className="text-[16px] font-medium text-gray-600">{kpi.title}</p>
          <div className="flex items-center justify-between gap-x-2">
            <h3 className="text-2xl font-semibold mt-1">{kpi.value}</h3>
            <img src={kpi.img} alt="Portfolio Icon" className="w-6 h-6 mr-2" />
          </div>
          <p className="text-[16px] font-semibold text-green-600 mt-2">{kpi.change}</p>
        </motion.div>
      ))}
    </div>
  );
};

const PerformanceChart = () => (
  <motion.div
    className="bg-[#BCFFBF] p-6 rounded-xl shadow-lg"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex justify-between items-center mb-4">
      <div>
        <h3 className="text-xl font-semibold text-gray-900">Portfolio Performance</h3>
        <p className="text-sm text-gray-700">Track your investment returns over time</p>
      </div>
      <button className="px-3 py-1 bg-white text-gray-800 font-medium text-sm rounded-md shadow-sm border border-gray-300 hover:bg-gray-100 transition">1D</button>
    </div>
    <div className="flex justify-between items-center mb-6 mt-6">
      <div className="text-[32px] font-semibold text-gray-900 mb-1">+45.8%</div>
      <div className="text-md text-green-800 font-semibold mb-0">+2.5% today</div>
    </div>
    <div className="h-52">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={performanceData}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
          <XAxis dataKey="month" tick={{ fill: "#374151", fontSize: 13 }} tickLine={false} />
          <YAxis tick={{ fill: "#374151", fontSize: 13 }} tickLine={false} />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#5f1774" strokeWidth={3} dot={{ fill: "#5f1774", strokeWidth: 2, r: 6 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
    <div className="mt-6 grid grid-cols-3 gap-3">
      {["1D", "1W", "1M", "3M", "1Y", "All"].map((range, index) => (
        <button key={index} className="text-sm font-medium px-3 py-2 bg-white border rounded-lg text-gray-800 shadow-md hover:bg-gray-200 transition">
          {range} <span className="text-green-700 font-semibold">+{Math.floor(Math.random() * 10)}%</span>
        </button>
      ))}
    </div>
  </motion.div>
);

const AssetAllocation = () => (
  <motion.div
    className="bg-[#BCFFBF] p-6 rounded-xl shadow-lg"
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="text-lg font-semibold mb-6">Asset Allocation</h3>
    <div className="space-y-4">
      {assets.map((asset) => (
        <motion.div key={asset.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex justify-between text-sm mb-1">
            <span>{asset.name}</span>
            <span className="text-gray-600">{asset.amount}</span>
          </div>
          <div className="h-2 bg-gray-200 rounded">
            <div className="h-full rounded" style={{ width: `${asset.value}%`, backgroundColor: asset.color }}></div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const RiskAnalysis = () => {
  const metrics = [
    { title: "Risk Score", value: "65/100", img: Badge },
    { title: "Volatility", value: "12.5%", img: Stats },
    { title: "Max Drawdown", value: "-15.4%", img: Alert },
    { title: "Sharpe Ratio", value: "1.8", img: GraphP },
  ];
  return (
    <motion.div
      className="bg-[#D1D6EA] p-6 rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-lg font-semibold mb-6">Risk Analysis</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.title}
            className="bg-white p-4 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <div className="flex items-center">
              <img src={metric.img} alt="Metric Icon" className="w-4 h-4 mr-2" />
              <p className="text-sm text-gray-600">{metric.title}</p>
            </div>
            <p className="text-xl font-semibold mt-1">{metric.value}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const PortfolioHoldings = () => (
  <motion.div
    className="bg-[#FFFBD4] p-6 rounded-xl shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-lg font-semibold">Portfolio Holdings</h3>
      <div className="space-x-2">
        <motion.button className="px-4 py-2 text-[17px] text-[#6E07C8] font-semibold" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          Export CSV
        </motion.button>
        <motion.button
          className="px-4 py-2 bg-gradient-to-r from-[#6535F6] to-[#800BBE] text-white rounded-lg text-[17px] font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Add Investment
        </motion.button>
      </div>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-left">
            <th className="pb-4">Asset</th>
            <th className="pb-4">Type</th>
            <th className="pb-4">Quantity</th>
            <th className="pb-4">Price</th>
            <th className="pb-4">Value</th>
            <th className="pb-4">Return</th>
          </tr>
        </thead>
        <tbody>
          {holdings.map((holding) => (
            <motion.tr
              key={holding.asset}
              className="border-t"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col">
                <td className="pt-2">{holding.asset}</td>
                <td className="pb-3 pt-0 text-[14px] font-medium text-[#424242]">{holding.discription}</td>
              </div>
              <td>{holding.type}</td>
              <td>{holding.quantity}</td>
              <td>₹{holding.price.toFixed(2)}</td>
              <td>₹{holding.value.toFixed(2)}</td>
              <td className="text-green-600">{holding.return}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  </motion.div>
);

const Footer = () => (
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
          <img src={Logo} alt="Finoptix Logo" className="w-[174px] h-[92px] object-contain" />
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-[20px] mr-4 font-outfit font-normal">Follow Us on :</span>
            <a href="#" className="hover:text-purple-300"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-purple-300"><Youtube className="w-5 h-5" /></a>
            <a href="#" className="hover:text-purple-300"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-purple-300"><Facebook className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default InvestmentAnalytics;