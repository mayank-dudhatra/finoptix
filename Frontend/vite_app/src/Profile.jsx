// "use client"

// import { motion, AnimatePresence } from "framer-motion"
// import { Youtube, Facebook, Instagram, Twitter, Linkedin, Github, Globe, Check, Settings, Share2, Download, Upload, Plus, Bell } from "lucide-react"
// import { useState, useRef, useEffect } from "react" // Add useEffect import
// import { useNavigate } from "react-router-dom";
// import Logo from "./assets/Logo.png";
// import Home from "./assets/Home.png";
// import Clock from "./assets/Clock.png";
// import Wallet from "./assets/Wallet.png";
// import Goal from "./assets/Goal.png";
// import Graph from "./assets/Graph.png";
// import User from "./assets/User.png";

// const fadeInUp = {
//     initial: { opacity: 0, y: 20 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.6 },
// }

// const scaleIn = {
//     initial: { scale: 0.9, opacity: 0 },
//     animate: { scale: 1, opacity: 1 },
//     transition: { duration: 0.5 },
// }

// export default function Profile() {
//     const navigate = useNavigate();

//     // Initial user data state
//     const [userData, setUserData] = useState({
//         fullName: "Kanishka Mehulbhai Trivedi",
//         username: "@kanishkatrivedi",
//         age: "18 years",
//         email: "sarah.anderson@example.com",
//         profession: "Software Engineer",
//         location: "Ahmedabad, India",
//         currency: "USD ($)",
//         country: "India",
//         bio: "Product Designer with 5+ years of experience in creating user-centered digital experiences. Passionate about solving complex problems through simple and elegant solutions. When not designing, you'll find me hiking or experimenting with new coffee brewing methods.",
//         socialLinks: {
//             twitter: "https://twitter.com/kanishkatrivedi",
//             linkedin: "https://www.linkedin.com/in/kanishka-trivedi",
//             github: "https://github.com/kanishkatrivedi",
//             website: "https://kanishkatrivedi.com",
//         },
//     });

//     const [goals, setGoals] = useState([
//         { text: "Save $20,000 for emergency fund", progress: 75, completed: false },
//         { text: "Invest $50,000 in index funds", progress: 45, completed: false },
//         { text: "Reduce monthly expenses by 20%", progress: 90, completed: true },
//     ]);
//     const [bannerImage, setBannerImage] = useState(null);
//     const [profileImage, setProfileImage] = useState("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-24%20205524-c6DdHM0uN5lLXebnXyWcduK6YU3wIG.png");
//     const [isHoveringPhoto, setIsHoveringPhoto] = useState(false);
//     const [isHoveringBanner, setIsHoveringBanner] = useState(false);
//     const [isEditing, setIsEditing] = useState(false);

//     const profileInputRef = useRef();
//     const bannerInputRef = useRef();

//     // Fetch initial user data on component mount
//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/users/1")
//             .then((res) => res.json())
//             .then((data) => {
//                 // Map API data to your userData structure
//                 setUserData((prev) => ({
//                     ...prev,
//                     fullName: data.name || prev.fullName,
//                     username: data.username ? `@${data.username}` : prev.username,
//                     email: data.email || prev.email,
//                     location: `${data.address?.city || "Ahmedabad"}, ${data.address?.country || "India"}` || prev.location,
//                     // Add more mappings as needed based on your API response
//                 }));
//             })
//             .catch((err) => console.error("Error fetching data:", err));
//     }, []); // Empty dependency array means it runs once on mount

//     // Handle input changes
//     const handleInputChange = (field, value) => {
//         setUserData((prev) => ({ ...prev, [field]: value }));
//     };

//     // Handle social link changes
//     const handleSocialLinkChange = (platform, value) => {
//         setUserData((prev) => ({
//             ...prev,
//             socialLinks: { ...prev.socialLinks, [platform]: value },
//         }));
//     };

//     // Toggle edit mode and save data to API
//     const handleEditToggle = async () => {
//         if (isEditing) {
//             try {
//                 const response = await fetch("https://jsonplaceholder.typicode.com/users/1", {
//                     method: "PUT",
//                     headers: { "Content-Type": "application/json" },
//                     body: JSON.stringify(userData),
//                 });
//                 if (!response.ok) throw new Error("Failed to save data");
//                 console.log("Profile updated successfully:", await response.json());
//             } catch (error) {
//                 console.error("Error updating profile:", error);
//             }
//         }
//         setIsEditing(!isEditing);
//     };

//     const handleProfileUpload = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onloadend = () => setProfileImage(reader.result);
//             reader.readAsDataURL(file);
//         }
//     };

//     const handleBannerUpload = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onloadend = () => setBannerImage(reader.result);
//             reader.readAsDataURL(file);
//         }
//     };

//     const toggleGoalCompletion = (index) => {
//         const updatedGoals = [...goals];
//         updatedGoals[index].completed = !updatedGoals[index].completed;
//         setGoals(updatedGoals);
//     };

//     return (
//         <div className="w-full bg-[#F7FAFC] shadow-xl overflow-hidden font-['Inter']">
//             {/* Header */}
//             <motion.header
//                 className="bg-[#4B0082] text-white px-6 h-[83px] flex items-center shadow-[0_6px_6px_rgba(0,0,0,0.25)] mb-[35px]"
//                 initial={{ y: -100 }}
//                 animate={{ y: 0 }}
//                 transition={{ duration: 0.5, ease: "easeOut" }}
//             >
//                 <div className="flex items-center justify-between w-full">
//                     <motion.img
//                         src={Logo}
//                         alt="Finoptix Logo"
//                         className="w-[174px] h-[92px] object-contain"
//                         whileHover={{ scale: 1.05 }}
//                         transition={{ duration: 0.2 }}
//                     />

//                     <nav className="hidden md:flex items-center gap-x-[15px] flex-grow justify-center text-[20px] font-outfit font-normal tracking-[0.08em]">
//                         <motion.a
//                             href="/"
//                             className="px-4 flex items-center gap-x-[9px] py-2 rounded-md hover:bg-purple-700"
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                         >
//                             <img
//                                 src={Home}
//                                 alt="Finoptix Logo"
//                                 className="w-[22px] h-[22px] object-contain pb-1"
//                             />Home
//                         </motion.a>

//                         <motion.a
//                             href="/dashboard"
//                             className="px-4 flex items-center gap-x-[9px] py-2 rounded-md hover:bg-purple-700"
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                         >
//                             <img
//                                 src={Clock}
//                                 alt="Finoptix Logo"
//                                 className="w-[20px] h-[20px] object-contain pt-0.5"
//                             />Dashboard
//                         </motion.a>

//                         <motion.a
//                             href="/your_budget"
//                             className="px-4 flex items-center gap-x-[9px] py-2 rounded-md hover:bg-purple-700"
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                         >
//                             <img
//                                 src={Wallet}
//                                 alt="Finoptix Logo"
//                                 className="w-[20px] h-[20px] object-contain pt-0.5"
//                             />Your Budget
//                         </motion.a>

//                         <motion.a
//                             href="/goals"
//                             className="px-4 flex items-center gap-x-[9px] py-2 rounded-md hover:bg-purple-700"
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                         >
//                             <img
//                                 src={Goal}
//                                 alt="Finoptix Logo"
//                                 className="w-[20px] h-[20px] object-contain pt-0.5 text-[#4B0082]"
//                             />Goals
//                         </motion.a>

//                         <motion.a
//                             href="/analytics"
//                             className="px-4 flex items-center gap-x-[9px] py-2 rounded-md hover:bg-purple-700"
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                         >
//                             <img
//                                 src={Graph}
//                                 alt="Finoptix Logo"
//                                 className="w-[20px] h-[20px] object-contain pt-0.5"
//                             />Investment Analytics
//                         </motion.a>
//                     </nav>

//                     <div className="flex items-center gap-x-[15px] relative left-[-30px]">
//                         <motion.button
//                             className="hover:bg-purple-700 rounded-full pl-[15px]"
//                             whileHover={{ scale: 1.1 }}
//                             whileTap={{ scale: 0.95 }}
//                         >
//                             <Bell className="w-5 h-5" />
//                         </motion.button>
//                         <motion.button
//                             className="hover:bg-purple-700 rounded-full"
//                             whileHover={{ scale: 1.1 }}
//                             whileTap={{ scale: 0.95 }}
//                             onClick={() => navigate("/profile")} // Navigate to Profile Page
//                         >
//                             <div className="w-8 h-8 bg-purple-300 rounded-full" />
//                         </motion.button>
//                     </div>
//                 </div>
//             </motion.header>

//             {/* Banner */}
//             <motion.div
//                 initial={{ height: 0 }}
//                 animate={{ height: 210 }}
//                 className="relative h-40 cursor-pointer group"
//                 onMouseEnter={() => setIsHoveringBanner(true)}
//                 onMouseLeave={() => setIsHoveringBanner(false)}
//                 onClick={() => bannerInputRef.current.click()}
//                 style={{
//                     background: bannerImage ? `url(${bannerImage})` : "linear-gradient(135deg, #6B46C1, #F6AD55)",
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                 }}
//             >
//                 <AnimatePresence>
//                     {isHoveringBanner && (
//                         <motion.div
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             exit={{ opacity: 0 }}
//                             className="absolute inset-0 bg-black/60 flex items-center justify-center"
//                         >
//                             <Upload className="w-8 h-8 text-white" />
//                         </motion.div>
//                     )}
//                 </AnimatePresence>
//                 <input type="file" ref={bannerInputRef} onChange={handleBannerUpload} className="hidden" accept="image/*" />

//                 <motion.div
//                     initial={{ scale: 0, y: 100 }}
//                     animate={{ scale: 1, y: 120 }}
//                     transition={{ delay: 0.2 }}
//                     className="absolute left-1/2 -translate-x-1/2"
//                     onMouseEnter={() => setIsHoveringPhoto(true)}
//                     onMouseLeave={() => setIsHoveringPhoto(false)}
//                     onClick={(e) => {
//                         e.stopPropagation()
//                         profileInputRef.current.click()
//                     }}
//                 >
//                     <div className="relative group cursor-pointer">
//                         <img
//                             src={User}
//                             alt="Profile"
//                             className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-lg"
//                         />
//                         <AnimatePresence>
//                             {isHoveringPhoto && (
//                                 <motion.div
//                                     initial={{ opacity: 0 }}
//                                     animate={{ opacity: 1 }}
//                                     exit={{ opacity: 0 }}
//                                     className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center"
//                                 >
//                                     <Upload className="w-6 h-6 text-white" />
//                                 </motion.div>
//                             )}
//                         </AnimatePresence>
//                     </div>
//                     <input type="file" ref={profileInputRef} onChange={handleProfileUpload} className="hidden" accept="image/*" />
//                 </motion.div>
//             </motion.div>

//             <div className="px-10 pt-16 pb-12">
//                 {/* Profile Info */}
//                 <motion.div {...fadeInUp} className="text-center mb-10">
//                     <h1 className="text-4xl font-['Poppins'] font-bold text-[#2D3748]">Kanishka Trivedi</h1>
//                     <p className="text-lg font-['Inter'] text-[#718096] mt-1">@kanishkatrivedi</p>
//                 </motion.div>

//                 <div className="grid md:grid-cols-2 gap-10">
//                     {/* Left Column */}
//                     <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="space-y-6">
//                         <div>
//                             <h2 className="text-xl font-['Poppins'] font-semibold text-[#6B46C1] mb-2">Full Name</h2>
//                             <p className="text-lg text-[#2D3748]">Kanishka Mehulbhai Trivedi</p>
//                         </div>
//                         <div>
//                             <h2 className="text-xl font-['Poppins'] font-semibold text-[#6B46C1] mb-2">Age</h2>
//                             <p className="text-lg text-[#2D3748]">18 years</p>
//                         </div>
//                         <div>
//                             <h2 className="text-xl font-['Poppins'] font-semibold text-[#6B46C1] mb-2">Email</h2>
//                             <p className="text-lg text-[#2D3748]">sarah.anderson@example.com</p>
//                         </div>
//                         <div>
//                             <h2 className="text-xl font-['Poppins'] font-semibold text-[#6B46C1] mb-2">Profession</h2>
//                             <p className="text-lg text-[#2D3748]">Software Engineer</p>
//                         </div>
//                         <div>
//                             <h2 className="text-xl font-['Poppins'] font-semibold text-[#6B46C1] mb-2">Location</h2>
//                             <p className="text-lg text-[#2D3748]">Ahmedabad, India</p>
//                         </div>
//                         <div>
//                             <h2 className="text-xl font-['Poppins'] font-semibold text-[#6B46C1] mb-2">Currency</h2>
//                             <select className="w-full p-3 border border-[#E2E8F0] rounded-lg text-[#2D3748] bg-white focus:ring-2 focus:ring-[#F6AD55]">
//                                 <option>USD ($)</option>
//                             </select>
//                         </div>
//                         <div>
//                             <h2 className="text-xl font-['Poppins'] font-semibold text-[#6B46C1] mb-2">Country</h2>
//                             <select className="w-full p-3 border border-[#E2E8F0] rounded-lg text-[#2D3748] bg-white focus:ring-2 focus:ring-[#F6AD55]">
//                                 <option>United States</option>
//                                 <option>India</option>
//                                 {/* Add other options as needed */}
//                             </select>
//                         </div>
//                     </motion.div>

//                     {/* Right Column */}
//                     <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
//                         <div className="mb-8">
//                             <h2 className="text-2xl font-['Poppins'] font-semibold text-[#6B46C1] mb-4">Bio</h2>
//                             <p className="text-base text-[#718096] leading-relaxed">
//                                 Product Designer with 5+ years of experience in creating user-centered digital experiences. Passionate
//                                 about solving complex problems through simple and elegant solutions. When not designing, you'll find me
//                                 hiking or experimenting with new coffee brewing methods.
//                             </p>
//                         </div>

//                         <div>
//                             <h2 className="text-2xl font-['Poppins'] font-semibold text-[#6B46C1] mb-4">Goals</h2>
//                             <div className="space-y-5">
//                                 {goals.map((goal, index) => (
//                                     <motion.div
//                                         key={index}
//                                         initial={{ x: -20, opacity: 0 }}
//                                         animate={{ x: 0, opacity: 1 }}
//                                         transition={{ delay: 0.4 + index * 0.1 }}
//                                         className="group"
//                                     >
//                                         <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
//                                             <div className="flex-1">
//                                                 <div className="flex items-center justify-between mb-2">
//                                                     <p className="font-['Poppins'] font-medium text-[#2D3748]">{goal.text}</p>
//                                                     <button
//                                                         onClick={() => toggleGoalCompletion(index)}
//                                                         className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-300 ${goal.completed
//                                                             ? "bg-[#F6AD55] text-white"
//                                                             : "border-2 border-[#E2E8F0] hover:border-[#F6AD55]"
//                                                             }`}
//                                                     >
//                                                         {goal.completed && <Check className="w-4 h-4" />}
//                                                     </button>
//                                                 </div>
//                                                 <div className="h-2 bg-[#E2E8F0] rounded-full overflow-hidden">
//                                                     <motion.div
//                                                         initial={{ width: 0 }}
//                                                         animate={{ width: `${goal.progress}%` }}
//                                                         transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
//                                                         className="h-full bg-[#F6AD55]"
//                                                     />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </motion.div>
//                                 ))}
//                                 <motion.button
//                                     whileHover={{ scale: 1.02 }}
//                                     whileTap={{ scale: 0.98 }}
//                                     className="w-full mt-4 py-3 px-4 bg-white hover:bg-[#F7FAFC] rounded-xl text-[#F6AD55] font-['Poppins'] font-medium flex items-center justify-center gap-2 transition-colors duration-300 shadow-sm"
//                                 >
//                                     <Plus className="w-5 h-5" />
//                                     Add New Goal
//                                 </motion.button>
//                             </div>
//                         </div>
//                     </motion.div>
//                 </div>

//                 {/* Social Links */}
//                 <motion.div {...fadeInUp} transition={{ delay: 0.5 }} className="flex justify-center gap-8 my-10">
//                     {isEditing ? (
//                         <>
//                             <input
//                                 type="url"
//                                 value={userData.socialLinks.twitter}
//                                 onChange={(e) => handleSocialLinkChange("twitter", e.target.value)}
//                                 className="text-sm text-[#718096] w-32 bg-transparent border-b border-[#E2E8F0] focus:outline-none focus:border-[#F6AD55]"
//                                 placeholder="Twitter URL"
//                             />
//                             <input
//                                 type="url"
//                                 value={userData.socialLinks.linkedin}
//                                 onChange={(e) => handleSocialLinkChange("linkedin", e.target.value)}
//                                 className="text-sm text-[#718096] w-32 bg-transparent border-b border-[#E2E8F0] focus:outline-none focus:border-[#F6AD55]"
//                                 placeholder="LinkedIn URL"
//                             />
//                             <input
//                                 type="url"
//                                 value={userData.socialLinks.github}
//                                 onChange={(e) => handleSocialLinkChange("github", e.target.value)}
//                                 className="text-sm text-[#718096] w-32 bg-transparent border-b border-[#E2E8F0] focus:outline-none focus:border-[#F6AD55]"
//                                 placeholder="GitHub URL"
//                             />
//                             <input
//                                 type="url"
//                                 value={userData.socialLinks.website}
//                                 onChange={(e) => handleSocialLinkChange("website", e.target.value)}
//                                 className="text-sm text-[#718096] w-32 bg-transparent border-b border-[#E2E8F0] focus:outline-none focus:border-[#F6AD55]"
//                                 placeholder="Website URL"
//                             />
//                         </>
//                     ) : (
//                         <>
//                             <a href={userData.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
//                                 <Twitter className="text-[#718096] hover:text-[#F6AD55] cursor-pointer transition-colors w-6 h-6" />
//                             </a>
//                             <a href={userData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
//                                 <Linkedin className="text-[#718096] hover:text-[#F6AD55] cursor-pointer transition-colors w-6 h-6" />
//                             </a>
//                             <a href={userData.socialLinks.github} target="_blank" rel="noopener noreferrer">
//                                 <Github className="text-[#718096] hover:text-[#F6AD55] cursor-pointer transition-colors w-6 h-6" />
//                             </a>
//                             <a href={userData.socialLinks.website} target="_blank" rel="noopener noreferrer">
//                                 <Globe className="text-[#718096] hover:text-[#F6AD55] cursor-pointer transition-colors w-6 h-6" />
//                             </a>
//                         </>
//                     )}
//                 </motion.div>

//                 {/* Stats Cards */}
//                 <motion.div {...scaleIn} transition={{ delay: 0.6 }} className="grid grid-cols-2 md:grid-cols-4 gap-6 my-10">
//                     {[
//                         { label: "Monthly Income", value: "$8,500", color: "text-[#2D3748]" },
//                         { label: "Monthly Expenses", value: "$5,200", color: "text-[#2D3748]" },
//                         { label: "Remaining", value: "$3,300", color: "text-[#F6AD55]" },
//                         { label: "Total Savings", value: "$12,500", color: "text-[#F6AD55]" },
//                     ].map((stat, index) => (
//                         <motion.div
//                             key={index}
//                             whileHover={{ scale: 1.05 }}
//                             className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
//                         >
//                             <p className="text-sm font-['Inter'] text-[#718096]">{stat.label}</p>
//                             <p className={`text-2xl font-['Poppins'] font-bold ${stat.color}`}>{stat.value}</p>
//                         </motion.div>
//                     ))}
//                 </motion.div>

//                 {/* Pro Plan */}
//                 <motion.div {...fadeInUp} transition={{ delay: 0.7 }} className="bg-white p-6 rounded-xl my-10 shadow-md">
//                     <div className="flex justify-between items-center mb-4">
//                         <h2 className="text-2xl font-['Poppins'] font-semibold text-[#6B46C1]">Pro Plan</h2>
//                         <button className="bg-[#F6AD55] text-white px-5 py-2 rounded-lg text-sm font-['Poppins'] font-medium hover:bg-[#ED8936] transition-colors">Upgrade Plan</button>
//                     </div>
//                     <p className="text-sm text-[#718096] mb-4">Renewal on Aug 15, 2024</p>
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                         {["Advanced Analytics", "Custom Reports", "Priority Support", "Multi Currency Support"].map(
//                             (feature, index) => (
//                                 <div key={index} className="flex items-center gap-2">
//                                     <Check className="text-[#F6AD55] w-5 h-5" />
//                                     <span className="text-sm text-[#2D3748] font-['Inter']">{feature}</span>
//                                 </div>
//                             ),
//                         )}
//                     </div>
//                 </motion.div>

//                 {/* Action Buttons */}
//                 <motion.div
//                     {...fadeInUp}
//                     transition={{ delay: 0.8 }}
//                     className="flex flex-wrap gap-4 justify-center pb-8 border-t border-[#E2E8F0] pt-8"
//                 >
//                     <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         className="flex items-center gap-2 px-8 py-3 bg-[#F6AD55] text-white rounded-xl font-['Poppins'] font-medium hover:bg-[#ED8936] transition-colors duration-300 shadow-md hover:shadow-xl"
//                     >
//                         <Settings className="w-5 h-5" />
//                         Edit Profile
//                     </motion.button>
//                     {[
//                         { icon: Share2, text: "Share Profile" },
//                         { icon: Download, text: "Download Report" },
//                         { icon: Settings, text: "Settings" },
//                     ].map((button, index) => (
//                         <motion.button
//                             key={index}
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             className="flex items-center gap-2 px-8 py-3 border border-[#E2E8F0] rounded-xl text-[#6B46C1] font-['Poppins'] font-medium hover:bg-[#F7FAFC] transition-all duration-300 shadow-sm"
//                         >
//                             <button.icon className="w-5 h-5" />
//                             {button.text}
//                         </motion.button>
//                     ))}
//                 </motion.div>


//             </div>

//             {/* Footer */}
//             <footer className="bg-[#4B0082] text-white mt-0 h-[466px]">
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
//                                 src={Logo}
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
//         </div>
//     )
// }









// "use client"

// import { motion, AnimatePresence } from "framer-motion"
// import { Twitter, Linkedin, Github, Globe, Check, Settings, Share2, Download, Upload, Plus, Bell, Youtube, Facebook, Instagram } from "lucide-react"
// import { useState, useRef, useEffect } from "react"
// import { useNavigate } from "react-router-dom"
// import Logo from "./assets/Logo.png"
// import Home from "./assets/Home.png"
// import Clock from "./assets/Clock.png"
// import Wallet from "./assets/Wallet.png"
// import Goal from "./assets/Goal.png"
// import Graph from "./assets/Graph.png"
// import User from "./assets/User.png"

// const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } }
// const scaleIn = { initial: { scale: 0.9, opacity: 0 }, animate: { scale: 1, opacity: 1 }, transition: { duration: 0.5 } }

// export default function Profile() {
//   const navigate = useNavigate()
//   const [userData, setUserData] = useState(null)
//   const [goals, setGoals] = useState([])
//   const [bannerImage, setBannerImage] = useState(null)
//   const [profileImage, setProfileImage] = useState(null)
//   const [isHoveringPhoto, setIsHoveringPhoto] = useState(false)
//   const [isHoveringBanner, setIsHoveringBanner] = useState(false)
//   const [isEditing, setIsEditing] = useState(false)
//   const [isAdding, setIsAdding] = useState(false)
//   const [currentUsername, setCurrentUsername] = useState(localStorage.getItem("currentUsername") || "kanishkatrivedi")
//   const profileInputRef = useRef()
//   const bannerInputRef = useRef()

//   const defaultUserData = {
//     fullName: "Kanishka Mehulbhai Trivedi",
//     username: "@kanishkatrivedi",
//     age: "18 years",
//     email: "sarah.anderson@example.com",
//     profession: "Software Engineer",
//     location: "Ahmedabad, India",
//     currency: "USD ($)",
//     country: "India",
//     bio: "Product Designer with 5+ years of experience in creating user-centered digital experiences.",
//     socialLinks: { twitter: "https://twitter.com/kanishkatrivedi", linkedin: "https://www.linkedin.com/in/kanishka-trivedi", github: "https://github.com/kanishkatrivedi", website: "https://kanishkatrivedi.com" },
//   }
//   const defaultGoals = [
//     { text: "Save $20,000 for emergency fund", progress: 75, completed: false },
//     { text: "Invest $50,000 in index funds", progress: 45, completed: false },
//     { text: "Reduce monthly expenses by 20%", progress: 90, completed: true },
//   ]

//   useEffect(() => {
//     console.log("useEffect triggered with currentUsername:", currentUsername)
//     fetchProfile(currentUsername)
//   }, [currentUsername])

//   const fetchProfile = async (username) => {
//     try {
//       console.log("Fetching profile for username:", username)
//       const response = await fetch(`http://localhost:3002/profile/${username}`)
//       const result = await response.json()
//       console.log("Fetch response:", result)
//       if (result.success && result.data) {
//         const data = result.data
//         setUserData({
//           fullName: data.fullName || defaultUserData.fullName,
//           username: data.username ? `@${data.username}` : defaultUserData.username,
//           age: data.age || defaultUserData.age,
//           email: data.email || defaultUserData.email,
//           profession: data.profession || defaultUserData.profession,
//           location: data.location || defaultUserData.location,
//           currency: data.currency || defaultUserData.currency,
//           country: data.country || defaultUserData.country,
//           bio: data.bio || defaultUserData.bio,
//           socialLinks: data.socialLinks || defaultUserData.socialLinks,
//         })
//         setGoals(data.goals || defaultGoals)
//         setProfileImage(data.profileImage || "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-24%20205524-c6DdHM0uN5lLXebnXyWcduK6YU3wIG.png")
//         setBannerImage(data.bannerImage || null)
//       } else {
//         console.warn("Profile not found for", username, "using defaults")
//         setUserData({ ...defaultUserData, username: `@${username}` }) // Keep the username
//         setGoals(defaultGoals)
//       }
//     } catch (err) {
//       console.error("Error fetching profile for", username, ":", err)
//       setUserData({ ...defaultUserData, username: `@${username}` })
//       setGoals(defaultGoals)
//     }
//   }

//   const handleInputChange = (field, value) => setUserData(prev => ({ ...prev, [field]: value }))
//   const handleSocialLinkChange = (platform, value) => setUserData(prev => ({ ...prev, socialLinks: { ...prev.socialLinks, [platform]: value } }))

//   const handleEditToggle = async () => {
//     if (isEditing) {
//       try {
//         const username = userData.username.replace("@", "")
//         const updatedData = {
//           fullName: userData.fullName,
//           username: username,
//           age: userData.age,
//           email: userData.email,
//           profession: userData.profession,
//           location: userData.location,
//           currency: userData.currency,
//           country: userData.country,
//           bio: userData.bio,
//           socialLinks: userData.socialLinks,
//           goals: goals,
//           profileImage: profileImage,
//           bannerImage: bannerImage,
//         }
//         console.log("Sending data:", updatedData)

//         const method = isAdding ? "POST" : "PATCH"
//         const url = isAdding ? `http://localhost:3002/profile` : `http://localhost:3002/profile/${username}`

//         const response = await fetch(url, {
//           method: method,
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(updatedData),
//         })
//         const result = await response.json()
//         console.log(`${method} response:`, result)

//         if ((isAdding && response.status === 201) || (!isAdding && result.success)) {
//           console.log(isAdding ? "Profile added successfully" : "Profile updated successfully")
//           setCurrentUsername(username)
//           localStorage.setItem("currentUsername", username)
//           setIsAdding(false)
//           await fetchProfile(username)
//         } else {
//           console.error(`Failed to ${isAdding ? "add" : "update"} profile:`, result.error || result)
//         }
//       } catch (err) {
//         console.error(`Error ${isAdding ? "adding" : "updating"} profile:`, err)
//       }
//     }
//     setIsEditing(!isEditing)
//   }

//   const handleAddProfile = () => {
//     console.log("Starting to add a new profile")
//     setUserData({
//       fullName: "",
//       username: "",
//       age: "",
//       email: "",
//       profession: "",
//       location: "",
//       currency: "",
//       country: "",
//       bio: "",
//       socialLinks: { twitter: "", linkedin: "", github: "", website: "" },
//     })
//     setGoals([])
//     setProfileImage(null)
//     setBannerImage(null)
//     setIsEditing(true)
//     setIsAdding(true)
//   }

//   const handleImageUpload = setImage => e => {
//     const file = e.target.files[0]
//     if (file) {
//       const reader = new FileReader()
//       reader.onloadend = () => setImage(reader.result)
//       reader.readAsDataURL(file)
//     }
//   }

//   const toggleGoalCompletion = index => setGoals(prev => {
//     const updated = [...prev]
//     updated[index].completed = !updated[index].completed
//     return updated
//   })

//   const handleDeleteProfile = async () => {
//     if (window.confirm("Are you sure you want to delete your profile?")) {
//       try {
//         const username = userData.username.replace("@", "")
//         const response = await fetch(`http://localhost:3002/profile/${username}`, {
//           method: "DELETE",
//         })
//         const result = await response.json()
//         if (result.success) {
//           console.log("Profile deleted:", result.message)
//           localStorage.removeItem("currentUsername")
//           setCurrentUsername("kanishkatrivedi") // Reset to default
//           navigate("/")
//         } else {
//           console.error("Failed to delete profile:", result.error)
//         }
//       } catch (err) {
//         console.error("Error deleting profile:", err)
//       }
//     }
//   }

//   if (!userData) {
//     return <div>Loading...</div>
//   }

//   return (
//     <div className="bg-[#F7FAFC] shadow-xl font-['Inter']">
//       {/* Header */}
//       <motion.header
//         className="bg-[#4B0082] text-white px-6 h-[83px] flex items-center shadow-[0_6px_6px_rgba(0,0,0,0.25)] mb-[35px]"
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.5, ease: "easeOut" }}
//       >
//         <div className="flex items-center justify-between w-full">
//           <motion.img src={Logo} alt="Finoptix Logo" className="w-[174px] h-[92px] object-contain" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} />
//           <nav className="hidden md:flex items-center gap-x-[15px] flex-grow justify-center text-[20px] font-outfit font-normal tracking-[0.08em]">
//             <motion.a href="/" className="px-4 flex items-center gap-x-[9px] py-2 rounded-md hover:bg-purple-700" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <img src={Home} alt="Home" className="w-[22px] h-[22px] object-contain pb-1" />Home
//             </motion.a>
//             <motion.a href="/dashboard" className="px-4 flex items-center gap-x-[9px] py-2 rounded-md hover:bg-purple-700" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <img src={Clock} alt="Dashboard" className="w-[20px] h-[20px] object-contain pt-0.5" />Dashboard
//             </motion.a>
//             <motion.a href="/your_budget" className="px-4 flex items-center gap-x-[9px] py-2 rounded-md hover:bg-purple-700" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <img src={Wallet} alt="Your Budget" className="w-[20px] h-[20px] object-contain pt-0.5" />Your Budget
//             </motion.a>
//             <motion.a href="/goals" className="px-4 flex items-center gap-x-[9px] py-2 rounded-md hover:bg-purple-700" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <img src={Goal} alt="Goals" className="w-[20px] h-[20px] object-contain pt-0.5" />Goals
//             </motion.a>
//             <motion.a href="/analytics" className="px-4 flex items-center gap-x-[9px] py-2 rounded-md hover:bg-purple-700" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <img src={Graph} alt="Analytics" className="w-[20px] h-[20px] object-contain pt-0.5" />Investment Analytics
//             </motion.a>
//           </nav>
//           <div className="flex items-center gap-x-[15px] relative left-[-30px]">
//             <motion.button className="hover:bg-purple-700 rounded-full pl-[15px]" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
//               <Bell className="w-5 h-5" />
//             </motion.button>
//             <motion.button className="hover:bg-purple-700 rounded-full" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={() => navigate("/profile")}>
//               <div className="w-8 h-8 bg-purple-300 rounded-full" />
//             </motion.button>
//           </div>
//         </div>
//       </motion.header>

//       {/* Banner */}
//       <motion.div
//         initial={{ height: 0 }}
//         animate={{ height: 210 }}
//         className="relative cursor-pointer group"
//         style={{ background: bannerImage ? `url(${bannerImage})` : "linear-gradient(135deg, #6B46C1, #F6AD55)", backgroundSize: "cover", backgroundPosition: "center" }}
//         onMouseEnter={() => setIsHoveringBanner(true)}
//         onMouseLeave={() => setIsHoveringBanner(false)}
//         onClick={() => bannerInputRef.current.click()}
//       >
//         <AnimatePresence>
//           {isHoveringBanner && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/60 flex items-center justify-center"><Upload className="w-8 h-8 text-white" /></motion.div>}
//         </AnimatePresence>
//         <input type="file" ref={bannerInputRef} onChange={handleImageUpload(setBannerImage)} className="hidden" accept="image/*" />
//         <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="absolute left-1/2 -translate-x-1/2 top-[120px]" onMouseEnter={() => setIsHoveringPhoto(true)} onMouseLeave={() => setIsHoveringPhoto(false)} onClick={e => { e.stopPropagation(); profileInputRef.current.click() }}>
//           <div className="relative group cursor-pointer">
//             <img src={profileImage || User} alt="Profile" className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-lg" />
//             {isHoveringPhoto && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center"><Upload className="w-6 h-6 text-white" /></motion.div>}
//           </div>
//           <input type="file" ref={profileInputRef} onChange={handleImageUpload(setProfileImage)} className="hidden" accept="image/*" />
//         </motion.div>
//       </motion.div>

//       {/* Main Content */}
//       <div className="px-10 pt-16 pb-12">
//         <motion.div {...fadeInUp} className="text-center mb-10">
//           {isEditing ? (
//             <>
//               <input value={userData.fullName} onChange={e => handleInputChange("fullName", e.target.value)} className="text-4xl font-['Poppins'] font-bold text-[#2D3748] bg-transparent border-b border-[#E2E8F0] focus:outline-none focus:border-[#F6AD55] mb-1" placeholder="Full Name" />
//               <input value={userData.username} onChange={e => handleInputChange("username", e.target.value)} className="text-lg font-['Inter'] text-[#718096] bg-transparent border-b border-[#E2E8F0] focus:outline-none focus:border-[#F6AD55]" placeholder="Username" />
//             </>
//           ) : (
//             <>
//               <h1 className="text-4xl font-['Poppins'] font-bold text-[#2D3748]">{userData.fullName}</h1>
//               <p className="text-lg font-['Inter'] text-[#718096] mt-1">{userData.username}</p>
//             </>
//           )}
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-10">
//           <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="space-y-6">
//             {[
//               { label: "Full Name", field: "fullName" },
//               { label: "Age", field: "age" },
//               { label: "Email", field: "email" },
//               { label: "Profession", field: "profession" },
//               { label: "Location", field: "location" },
//               { label: "Currency", field: "currency", options: ["USD ($)", "INR (₹)"] },
//               { label: "Country", field: "country", options: ["United States", "India"] },
//             ].map(({ label, field, options }) => (
//               <div key={label}>
//                 <h2 className="text-xl font-['Poppins'] font-semibold text-[#6B46C1] mb-2">{label}</h2>
//                 {isEditing && options ? (
//                   <select value={userData[field]} onChange={e => handleInputChange(field, e.target.value)} className="w-full p-3 border border-[#E2E8F0] rounded-lg text-[#2D3748] bg-white focus:ring-2 focus:ring-[#F6AD55]">
//                     <option value="">Select {label}</option>
//                     {options.map(opt => <option key={opt}>{opt}</option>)}
//                   </select>
//                 ) : isEditing ? (
//                   <input value={userData[field]} onChange={e => handleInputChange(field, e.target.value)} className="text-lg text-[#2D3748] w-full bg-transparent border-b border-[#E2E8F0] focus:outline-none focus:border-[#F6AD55]" placeholder={label} />
//                 ) : (
//                   <p className="text-lg text-[#2D3748]">{userData[field]}</p>
//                 )}
//               </div>
//             ))}
//           </motion.div>

//           <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
//             <div className="mb-8">
//               <h2 className="text-2xl font-['Poppins'] font-semibold text-[#6B46C1] mb-4">Bio</h2>
//               {isEditing ? (
//                 <textarea
//                   value={userData.bio}
//                   onChange={e => handleInputChange("bio", e.target.value)}
//                   className="text-base text-[#718096] w-full bg-transparent border border-[#E2E8F0] rounded-lg p-3 focus:outline-none focus:border-[#F6AD55]"
//                   placeholder="Enter your bio"
//                 />
//               ) : (
//                 <p className="text-base text-[#718096] leading-relaxed">{userData.bio}</p>
//               )}
//             </div>
//             <div>
//               <h2 className="text-2xl font-['Poppins'] font-semibold text-[#6B46C1] mb-4">Goals</h2>
//               <div className="space-y-4">
//                 {goals.map((goal, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ x: -20, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ delay: 0.4 + index * 0.1 }}
//                     className="group"
//                   >
//                     <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-all duration-300">
//                       <div className="flex-1">
//                         <div className="flex items-center justify-between mb-2">
//                           <p className="font-medium">{goal.text}</p>
//                           <button
//                             onClick={() => toggleGoalCompletion(index)}
//                             className={`w-6 h-6 rounded-md flex items-center justify-center transition-colors duration-300 ${goal.completed
//                               ? "bg-[#8844FF] text-white"
//                               : "border-2 border-gray-300 hover:border-[#8844FF]"
//                               }`}
//                           >
//                             {goal.completed && <Check className="w-4 h-4" />}
//                           </button>
//                         </div>
//                         <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
//                           <motion.div
//                             initial={{ width: 0 }}
//                             animate={{ width: `${goal.progress}%` }}
//                             transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
//                             className="h-full bg-[#8844FF]"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="w-full mt-4 py-3 px-4 bg-gray-50 hover:bg-gray-100 rounded-lg text-[#8844FF] font-medium flex items-center justify-center gap-2 transition-colors duration-300"
//                 >
//                   <Plus className="w-5 h-5" />
//                   Add New Goal
//                 </motion.button>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         <motion.div {...fadeInUp} transition={{ delay: 0.5 }} className="flex justify-center gap-8 my-10">
//           {isEditing ? ["twitter", "linkedin", "github", "website"].map(p => (
//             <input key={p} type="url" value={userData.socialLinks[p]} onChange={e => handleSocialLinkChange(p, e.target.value)} className="text-sm text-[#718096] w-32 bg-transparent border-b border-[#E2E8F0] focus:outline-none focus:border-[#F6AD55]" placeholder={`${p} URL`} />
//           )) : [Twitter, Linkedin, Github, Globe].map((Icon, i) => (
//             <a key={i} href={userData.socialLinks[Object.keys(userData.socialLinks)[i]]} target="_blank" rel="noopener noreferrer"><Icon className="text-[#718096] hover:text-[#F6AD55] cursor-pointer transition-colors w-6 h-6" /></a>
//           ))}
//         </motion.div>

//         <motion.div {...scaleIn} transition={{ delay: 0.6 }} className="grid grid-cols-2 md:grid-cols-4 gap-6 my-10">
//           {[{ l: "Monthly Income", v: "$8,500", c: "text-[#2D3748]" }, { l: "Monthly Expenses", v: "$5,200", c: "text-[#2D3748]" }, { l: "Remaining", v: "$3,300", c: "text-[#F6AD55]" }, { l: "Total Savings", v: "$12,500", c: "text-[#F6AD55]" }].map((stat, i) => (
//             <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
//               <p className="text-sm font-['Inter'] text-[#718096]">{stat.l}</p>
//               <p className={`text-2xl font-['Poppins'] font-bold ${stat.c}`}>{stat.v}</p>
//             </motion.div>
//           ))}
//         </motion.div>

//         <motion.div {...fadeInUp} transition={{ delay: 0.7 }} className="bg-white p-6 rounded-xl my-10 shadow-md">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-2xl font-['Poppins'] font-semibold text-[#6B46C1]">Pro Plan</h2>
//             <button className="bg-[#F6AD55] text-white px-5 py-2 rounded-lg text-sm font-['Poppins'] font-medium hover:bg-[#ED8936] transition-colors">Upgrade Plan</button>
//           </div>
//           <p className="text-sm text-[#718096] mb-4">Renewal on Aug 15, 2024</p>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {["Advanced Analytics", "Custom Reports", "Priority Support", "Multi Currency Support"].map(f => (
//               <div key={f} className="flex items-center gap-2"><Check className="text-[#F6AD55] w-5 h-5" /><span className="text-sm text-[#2D3748] font-['Inter']">{f}</span></div>
//             ))}
//           </div>
//         </motion.div>

//         <motion.div {...fadeInUp} transition={{ delay: 0.8 }} className="flex flex-wrap gap-4 justify-center pb-8 border-t border-[#E2E8F0] pt-8">
//           <motion.button 
//             whileHover={{ scale: 1.05 }} 
//             whileTap={{ scale: 0.95 }} 
//             onClick={handleEditToggle} 
//             className="flex items-center gap-2 px-8 py-3 bg-[#F6AD55] text-white rounded-xl font-['Poppins'] font-medium hover:bg-[#ED8936] transition-colors duration-300 shadow-md hover:shadow-xl"
//           >
//             <Settings className="w-5 h-5" />
//             {isEditing ? "Save Profile" : "Edit Profile"}
//           </motion.button>
//           <motion.button 
//             whileHover={{ scale: 1.05 }} 
//             whileTap={{ scale: 0.95 }} 
//             onClick={handleDeleteProfile} 
//             className="flex items-center gap-2 px-8 py-3 border border-[#E2E8F0] rounded-xl text-[#6B46C1] font-['Poppins'] font-medium hover:bg-[#F7FAFC] transition-all duration-300 shadow-sm"
//           >
//             <Settings className="w-5 h-5" />
//             Delete Profile
//           </motion.button>
//           <motion.button 
//             whileHover={{ scale: 1.05 }} 
//             whileTap={{ scale: 0.95 }} 
//             onClick={handleAddProfile} 
//             className="flex items-center gap-2 px-8 py-3 border border-[#E2E8F0] rounded-xl text-[#6B46C1] font-['Poppins'] font-medium hover:bg-[#F7FAFC] transition-all duration-300 shadow-sm"
//           >
//             <Plus className="w-5 h-5" />
//             Add Profile
//           </motion.button>
//           {[{ i: Share2, t: "Share Profile" }, { i: Download, t: "Download Report" }, { i: Settings, t: "Settings" }].map((b, i) => (
//             <motion.button 
//               key={i} 
//               whileHover={{ scale: 1.05 }} 
//               whileTap={{ scale: 0.95 }} 
//               className="flex items-center gap-2 px-8 py-3 border border-[#E2E8F0] rounded-xl text-[#6B46C1] font-['Poppins'] font-medium hover:bg-[#F7FAFC] transition-all duration-300 shadow-sm"
//             >
//               <b.i className="w-5 h-5" />
//               {b.t}
//             </motion.button>
//           ))}
//         </motion.div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-[#4B0082] text-white mt-0 h-[466px]">
//         <div className="container mx-auto px-6 py-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:justify-between ml-18">
//             <div className="font-outfit font-normal tracking-[0.08em]">
//               <h3 className="font-semibold text-[22px] mb-4">Our Features</h3>
//               <ul className="space-y-2 text-[14px]">
//                 <li>Get Started as a Fresher</li>
//                 <li>How To Earn More</li>
//                 <li>Write Blogs Or Read</li>
//                 <li>Learn To Invest</li>
//                 <li>Manage Your Budget</li>
//                 <li>Personalize Future Plans For Your Future</li>
//               </ul>
//             </div>
//             <div className="font-outfit font-normal tracking-[0.08em]">
//               <h3 className="font-semibold text-[22px] mb-4">Our Potential Partners</h3>
//               <ul className="space-y-2 text-[14px]">
//                 <li>Banks</li>
//                 <li>Tech Companies</li>
//                 <li>Insurance Companies</li>
//                 <li>Expert Traders</li>
//               </ul>
//             </div>
//             <div className="font-outfit font-normal tracking-[0.08em]">
//               <h3 className="font-semibold text-[22px] mb-4">Help</h3>
//               <ul className="space-y-2 text-[14px]">
//                 <li>Privacy Policy</li>
//                 <li>FAQ</li>
//                 <li>How to get Started</li>
//                 <li>Video Tutorials</li>
//                 <li>Copyright</li>
//               </ul>
//             </div>
//             <div className="font-outfit font-normal tracking-[0.08em]">
//               <h3 className="font-semibold text-[22px] mb-4">About Us</h3>
//               <ul className="space-y-2 text-[14px]">
//                 <li>Location</li>
//                 <li>Security</li>
//                 <li>Our Plans</li>
//                 <li>Our Vision</li>
//               </ul>
//             </div>
//           </div>
//           <div className="mt-5 pt-5 border-t border-purple-700">
//             <div className="flex flex-col md:flex-row justify-between items-center">
//               <div className="text-[12px] font-medium">© 2015-2025 FINOPTIX All Rights Reserved</div>
//               <img src={Logo} alt="Finoptix Logo" className="w-[174px] h-[92px] object-contain" />
//               <div className="flex items-center space-x-4 mt-4 md:mt-0">
//                 <span className="text-[20px] mr-4 font-outfit font-normal">Follow Us on :</span>
//                 <a href="#" className="hover:text-purple-300"><Instagram className="w-5 h-5" /></a>
//                 <a href="#" className="hover:text-purple-300"><Youtube className="w-5 h-5" /></a>
//                 <a href="#" className="hover:text-purple-300"><Twitter className="w-5 h-5" /></a>
//                 <a href="#" className="hover:text-purple-300"><Facebook className="w-5 h-5" /></a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }







"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Twitter, Linkedin, Github, Globe, Check, Settings, Share2, Download, Upload, Plus, Bell, Youtube, Facebook, Instagram } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Logo from "./assets/Logo.png"
import Home from "./assets/Home.png"
import Clock from "./assets/Clock.png"
import Wallet from "./assets/Wallet.png"
import Goal from "./assets/Goal.png"
import Graph from "./assets/Graph.png"
import User from "./assets/User.png"
import { jsPDF } from "jspdf";

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } }
const scaleIn = { initial: { scale: 0.9, opacity: 0 }, animate: { scale: 1, opacity: 1 }, transition: { duration: 0.5 } }

export default function Profile() {
  const navigate = useNavigate()
  const [userData, setUserData] = useState(null)
  const [goals, setGoals] = useState([])
  const [bannerImage, setBannerImage] = useState(null)
  const [profileImage, setProfileImage] = useState(null)
  const [isHoveringPhoto, setIsHoveringPhoto] = useState(false)
  const [isHoveringBanner, setIsHoveringBanner] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [isAdding, setIsAdding] = useState(false)
  const [currentUsername, setCurrentUsername] = useState(localStorage.getItem("currentUsername") || "kanishkatrivedi")
  const profileInputRef = useRef()
  const bannerInputRef = useRef()

  const defaultUserData = {
    fullName: "Kanishka Mehulbhai Trivedi",
    username: "@kanishkatrivedi",
    age: "18 years",
    email: "sarah.anderson@example.com",
    profession: "Software Engineer",
    location: "Ahmedabad, India",
    currency: "USD ($)",
    country: "India",
    bio: "Product Designer with 5+ years of experience in creating user-centered digital experiences.",
    socialLinks: { twitter: "https://twitter.com/kanishkatrivedi", linkedin: "https://www.linkedin.com/in/kanishka-trivedi", github: "https://github.com/kanishkatrivedi", website: "https://kanishkatrivedi.com" },
  }
  const defaultGoals = [
    { text: "Save $20,000 for emergency fund", progress: 75, completed: false },
    { text: "Invest $50,000 in index funds", progress: 45, completed: false },
    { text: "Reduce monthly expenses by 20%", progress: 90, completed: true },
  ]

  useEffect(() => {
    console.log("useEffect triggered with currentUsername:", currentUsername)
    fetchProfile(currentUsername)
  }, [currentUsername])

  const fetchProfile = async (username) => {
    try {
      console.log("Fetching profile for username:", username)
      const response = await fetch(`http://localhost:3002/profile/${username}`)
      const result = await response.json()
      console.log("Fetch response:", result)
      if (result.success && result.data) {
        const data = result.data
        setUserData({
          fullName: data.fullName || defaultUserData.fullName,
          username: data.username ? `@${data.username}` : defaultUserData.username,
          age: data.age || defaultUserData.age,
          email: data.email || defaultUserData.email,
          profession: data.profession || defaultUserData.profession,
          location: data.location || defaultUserData.location,
          currency: data.currency || defaultUserData.currency,
          country: data.country || defaultUserData.country,
          bio: data.bio || defaultUserData.bio,
          socialLinks: data.socialLinks || defaultUserData.socialLinks,
        })
        setGoals(data.goals || defaultGoals)
        setProfileImage(data.profileImage || "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-24%20205524-c6DdHM0uN5lLXebnXyWcduK6YU3wIG.png")
        setBannerImage(data.bannerImage || null)
      } else {
        console.warn("Profile not found for", username, "using defaults")
        setUserData({ ...defaultUserData, username: `@${username}` }) // Keep the username
        setGoals(defaultGoals)
      }
    } catch (err) {
      console.error("Error fetching profile for", username, ":", err)
      setUserData({ ...defaultUserData, username: `@${username}` })
      setGoals(defaultGoals)
    }
  }

  const handleInputChange = (field, value) => setUserData(prev => ({ ...prev, [field]: value }))
  const handleSocialLinkChange = (platform, value) => setUserData(prev => ({ ...prev, socialLinks: { ...prev.socialLinks, [platform]: value } }))

  const handleEditToggle = async () => {
    if (isEditing) {
      try {
        const username = userData.username.replace("@", "")
        const updatedData = {
          fullName: userData.fullName,
          username: username,
          age: userData.age,
          email: userData.email,
          profession: userData.profession,
          location: userData.location,
          currency: userData.currency,
          country: userData.country,
          bio: userData.bio,
          socialLinks: userData.socialLinks,
          goals: goals,
          profileImage: profileImage,
          bannerImage: bannerImage,
        }
        console.log("Sending data:", updatedData)

        const method = isAdding ? "POST" : "PATCH"
        const url = isAdding ? `http://localhost:3002/profile` : `http://localhost:3002/profile/${username}`

        const response = await fetch(url, {
          method: method,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedData),
        })
        const result = await response.json()
        console.log(`${method} response:`, result)

        if ((isAdding && response.status === 201) || (!isAdding && result.success)) {
          console.log(isAdding ? "Profile added successfully" : "Profile updated successfully")
          setCurrentUsername(username)
          localStorage.setItem("currentUsername", username)
          setIsAdding(false)
          await fetchProfile(username)
        } else {
          console.error(`Failed to ${isAdding ? "add" : "update"} profile:`, result.error || result)
        }
      } catch (err) {
        console.error(`Error ${isAdding ? "adding" : "updating"} profile:`, err)
      }
    }
    setIsEditing(!isEditing)
  }

  const handleAddProfile = () => {
    console.log("Starting to add a new profile")
    setUserData({
      fullName: "",
      username: "",
      age: "",
      email: "",
      profession: "",
      location: "",
      currency: "",
      country: "",
      bio: "",
      socialLinks: { twitter: "", linkedin: "", github: "", website: "" },
    })
    setGoals([])
    setProfileImage(null)
    setBannerImage(null)
    setIsEditing(true)
    setIsAdding(true)
  }

  const handleImageUpload = setImage => e => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => setImage(reader.result)
      reader.readAsDataURL(file)
    }
  }

  const toggleGoalCompletion = index => setGoals(prev => {
    const updated = [...prev]
    updated[index].completed = !updated[index].completed
    return updated
  })

  const handleDeleteProfile = async () => {
    if (window.confirm("Are you sure you want to delete your profile?")) {
      try {
        const username = userData.username.replace("@", "")
        const response = await fetch(`http://localhost:3002/profile/${username}`, {
          method: "DELETE",
        })
        const result = await response.json()
        if (result.success) {
          console.log("Profile deleted:", result.message)
          localStorage.removeItem("currentUsername")
          setCurrentUsername("kanishkatrivedi") // Reset to default
          navigate("/")
        } else {
          console.error("Failed to delete profile:", result.error)
        }
      } catch (err) {
        console.error("Error deleting profile:", err)
      }
    }
  }

  const handleShareProfile = async () => {
    const username = userData.username.replace("@", "");
    const shareUrl = `${window.location.origin}/profile/${username}`; // Construct the profile URL
    const shareData = {
      title: `${userData.fullName}'s Profile`,
      text: `Check out my profile on Finoptix!`,
      url: shareUrl,
    };

    console.log("Sharing profile URL:", shareUrl);

    // Check if Web Share API is supported
    if (navigator.share) {
      try {
        await navigator.share(shareData);
        console.log("Profile shared successfully");
      } catch (err) {
        console.error("Error sharing profile:", err);
      }
    } else {
      // Fallback: Open a Twitter share window (or copy to clipboard)
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareData.text)}&url=${encodeURIComponent(shareUrl)}`;
      window.open(twitterUrl, "_blank", "width=600,height=400");
      console.log("Web Share not supported, opened Twitter share window");

      // Optional: Copy to clipboard as an additional fallback
      try {
        await navigator.clipboard.writeText(shareUrl);
        alert("Profile URL copied to clipboard!");
      } catch (err) {
        console.error("Failed to copy URL to clipboard:", err);
        alert("Please copy this URL manually: " + shareUrl);
      }
    }
  };


  const handleDownloadReport = () => {
    const doc = new jsPDF();

    // Define colors
    const primaryColor = [0, 102, 204]; // Blue for section titles
    const accentColor = [255, 140, 0]; // Orange for highlights
    const textColor = [33, 37, 41]; // Dark gray for readability

    const img = new Image();
    img.src = Logo;

    img.onload = () => {
      doc.addImage(img, "PNG", 15, 10, 40, 20); // Logo placement
      renderPDFContent(doc);
    };

    img.onerror = () => {
      console.error("Failed to load logo image");
      renderPDFContent(doc); // Proceed without logo if it fails
    };

    function renderPDFContent(doc) {
      let startY = 35; // Dynamic Y position for spacing

      // Report Title
      doc.setFont("helvetica", "bold");
      doc.setFontSize(18);
      doc.setTextColor(...primaryColor);
      doc.text(`${userData.fullName}'s Profile Report`, 105, startY, { align: "center" });

      startY += 6; // Space under title

      // Title underline
      doc.setLineWidth(1);
      doc.setDrawColor(...accentColor);
      doc.line(45, startY, 165, startY);

      startY += 10; // Extra spacing after title

      // Profile Details Section
      doc.setFontSize(14);
      doc.setTextColor(...textColor);
      doc.text("Profile Details", 15, startY);

      // Section underline
      doc.setLineWidth(0.5);
      doc.setDrawColor(...primaryColor);
      doc.line(15, startY + 2, 50, startY + 2);

      startY += 8; // Move down

      doc.setFontSize(11);
      const columnX1 = 15; // Left column start
      const columnX2 = 105; // Right column start
      const lineHeight = 8; // Spacing between rows

      doc.text(`Username: ${userData.username}`, columnX1, startY);
      doc.text(`Age: ${userData.age}`, columnX2, startY);
      startY += lineHeight;

      doc.text(`Email: ${userData.email}`, columnX1, startY);
      doc.text(`Profession: ${userData.profession}`, columnX2, startY);
      startY += lineHeight;

      doc.text(`Location: ${userData.location}`, columnX1, startY);
      doc.text(`Currency: ${userData.currency}`, columnX2, startY);
      startY += lineHeight;

      doc.text(`Country: ${userData.country}`, columnX1, startY);
      startY += lineHeight + 5; // Extra spacing after profile details

      // Bio Section
      doc.setFontSize(14);
      doc.setTextColor(...primaryColor);
      doc.text("Bio", 15, startY);
      doc.line(15, startY + 2, 30, startY + 2);

      startY += 8; // Move down

      doc.setFontSize(11);
      doc.setTextColor(...textColor);
      const bioLines = doc.splitTextToSize(userData.bio, 180);
      doc.text(bioLines, 15, startY);

      const bioHeight = bioLines.length * 6;
      startY += bioHeight + 10; // Adjust startY based on text height

      // Goals Section
      doc.setFontSize(14);
      doc.setTextColor(...primaryColor);
      doc.text("Goals", 15, startY);
      doc.line(15, startY + 2, 30, startY + 2);

      startY += 10; // Move down

      doc.setFontSize(11);
      goals.forEach((goal, index) => {
        doc.setTextColor(...accentColor);
        doc.text(`${index + 1}. ${goal.text}`, 15, startY);
        doc.setTextColor(...textColor);
        doc.text(`Progress: ${goal.progress}% - ${goal.completed ? "Completed" : "In Progress"}`, 20, startY + 5);
        startY += 12; // Space between goals
      });

      // Footer
      const pageHeight = doc.internal.pageSize.height;
      doc.setFontSize(9);
      doc.setTextColor(120, 120, 120);

      doc.text("Generated by Finoptix", 15, pageHeight - 12);
      doc.text("© 2025 Finoptix", 160, pageHeight - 12);

      // Save file
      const username = userData.username.replace("@", "");
      doc.save(`${username}_profile_report.pdf`);
      console.log("PDF report downloaded for", username);
    }
  };


  if (!userData) {
    return <div>Loading...</div>
  }

  return (
    <div className="bg-[#F7FAFC] shadow-xl font-['Inter']">
      {/* Header */}
      <motion.header
        className="bg-[#4B0082] text-white px-6 h-[83px] flex items-center shadow-[0_6px_6px_rgba(0,0,0,0.25)] mb-[35px]"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between w-full">
          <motion.img src={Logo} alt="Finoptix Logo" className="w-[174px] h-[92px] object-contain" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} />
          <nav className="hidden md:flex items-center gap-x-[15px] flex-grow justify-center text-[20px] font-outfit font-normal tracking-[0.08em]">
            <motion.a href="/" className="px-4 flex items-center gap-x-[9px] py-2 rounded-md hover:bg-purple-700" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <img src={Home} alt="Home" className="w-[22px] h-[22px] object-contain pb-1" />Home
            </motion.a>
            <motion.a href="/dashboard" className="px-4 flex items-center gap-x-[9px] py-2 rounded-md hover:bg-purple-700" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <img src={Clock} alt="Dashboard" className="w-[20px] h-[20px] object-contain pt-0.5" />Dashboard
            </motion.a>
            <motion.a href="/your_budget" className="px-4 flex items-center gap-x-[9px] py-2 rounded-md hover:bg-purple-700" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <img src={Wallet} alt="Your Budget" className="w-[20px] h-[20px] object-contain pt-0.5" />Your Budget
            </motion.a>
            <motion.a href="/goals" className="px-4 flex items-center gap-x-[9px] py-2 rounded-md hover:bg-purple-700" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <img src={Goal} alt="Goals" className="w-[20px] h-[20px] object-contain pt-0.5" />Goals
            </motion.a>
            <motion.a href="/analytics" className="px-4 flex items-center gap-x-[9px] py-2 rounded-md hover:bg-purple-700" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <img src={Graph} alt="Analytics" className="w-[20px] h-[20px] object-contain pt-0.5" />Investment Analytics
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

      {/* Banner */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 210 }}
        className="relative cursor-pointer group"
        style={{ background: bannerImage ? `url(${bannerImage})` : "linear-gradient(135deg, #6B46C1, #F6AD55)", backgroundSize: "cover", backgroundPosition: "center" }}
        onMouseEnter={() => setIsHoveringBanner(true)}
        onMouseLeave={() => setIsHoveringBanner(false)}
        onClick={() => bannerInputRef.current.click()}
      >
        <AnimatePresence>
          {isHoveringBanner && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/60 flex items-center justify-center"><Upload className="w-8 h-8 text-white" /></motion.div>}
        </AnimatePresence>
        <input type="file" ref={bannerInputRef} onChange={handleImageUpload(setBannerImage)} className="hidden" accept="image/*" />
        <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="absolute left-1/2 -translate-x-1/2 top-[120px]" onMouseEnter={() => setIsHoveringPhoto(true)} onMouseLeave={() => setIsHoveringPhoto(false)} onClick={e => { e.stopPropagation(); profileInputRef.current.click() }}>
          <div className="relative group cursor-pointer">
            <img src={profileImage || User} alt="Profile" className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-lg" />
            {isHoveringPhoto && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center"><Upload className="w-6 h-6 text-white" /></motion.div>}
          </div>
          <input type="file" ref={profileInputRef} onChange={handleImageUpload(setProfileImage)} className="hidden" accept="image/*" />
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="px-10 pt-16 pb-12">
        <motion.div {...fadeInUp} className="text-center mb-10">
          {isEditing ? (
            <>
              <input value={userData.fullName} onChange={e => handleInputChange("fullName", e.target.value)} className="text-3xl font-['Poppins'] font-bold text-[#2D3748] bg-transparent border-b border-[#E2E8F0] focus:outline-none focus:border-[#F6AD55] mb-1" placeholder="Full Name" />
              <input value={userData.username} onChange={e => handleInputChange("username", e.target.value)} className="text-lg font-['Inter'] text-[#718096] bg-transparent border-b border-[#E2E8F0] focus:outline-none focus:border-[#F6AD55]" placeholder="Username" />
            </>
          ) : (
            <>
              <h1 className="text-4xl font-['Poppins'] font-bold text-[#2D3748]">{userData.fullName}</h1>
              <p className="text-lg font-['Inter'] text-[#718096] mt-1">{userData.username}</p>
            </>
          )}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="space-y-6">
            {[
              { label: "Full Name", field: "fullName" },
              { label: "Age", field: "age" },
              { label: "Email", field: "email" },
              { label: "Profession", field: "profession" },
              { label: "Location", field: "location" },
              { label: "Currency", field: "currency", options: ["USD ($)", "INR (₹)"] },
              { label: "Country", field: "country", options: ["United States", "India"] },
            ].map(({ label, field, options }) => (
              <div key={label}>
                <h2 className="text-xl font-['Poppins'] font-semibold text-[#6B46C1] mb-2">{label}</h2>
                {isEditing && options ? (
                  <select value={userData[field]} onChange={e => handleInputChange(field, e.target.value)} className="w-full p-3 border border-[#E2E8F0] rounded-lg text-[#2D3748] bg-white focus:ring-2 focus:ring-[#F6AD55]">
                    <option value="">Select {label}</option>
                    {options.map(opt => <option key={opt}>{opt}</option>)}
                  </select>
                ) : isEditing ? (
                  <input value={userData[field]} onChange={e => handleInputChange(field, e.target.value)} className="text-lg text-[#2D3748] w-full bg-transparent border-b border-[#E2E8F0] focus:outline-none focus:border-[#F6AD55]" placeholder={label} />
                ) : (
                  <p className="text-lg text-[#2D3748]">{userData[field]}</p>
                )}
              </div>
            ))}
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
            <div className="mb-8">
              <h2 className="text-2xl font-['Poppins'] font-semibold text-[#6B46C1] mb-4">Bio</h2>
              {isEditing ? (
                <textarea
                  value={userData.bio}
                  onChange={e => handleInputChange("bio", e.target.value)}
                  className="text-base text-[#718096] w-full bg-transparent border border-[#E2E8F0] rounded-lg p-3 focus:outline-none focus:border-[#F6AD55]"
                  placeholder="Enter your bio"
                />
              ) : (
                <p className="text-base text-[#718096] leading-relaxed">{userData.bio}</p>
              )}
            </div>
            <div>
              <h2 className="text-2xl font-['Poppins'] font-semibold text-[#6B46C1] mb-4">Goals</h2>
              <div className="space-y-4">
                {goals.map((goal, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-all duration-300">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-medium">{goal.text}</p>
                          <button
                            onClick={() => toggleGoalCompletion(index)}
                            className={`w-6 h-6 rounded-md flex items-center justify-center transition-colors duration-300 ${goal.completed
                              ? "bg-[#8844FF] text-white"
                              : "border-2 border-gray-300 hover:border-[#8844FF]"
                              }`}
                          >
                            {goal.completed && <Check className="w-4 h-4" />}
                          </button>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${goal.progress}%` }}
                            transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                            className="h-full bg-[#8844FF]"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-4 py-3 px-4 bg-gray-50 hover:bg-gray-100 rounded-lg text-[#8844FF] font-medium flex items-center justify-center gap-2 transition-colors duration-300"
                >
                  <Plus className="w-5 h-5" />
                  Add New Goal
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div {...fadeInUp} transition={{ delay: 0.5 }} className="flex justify-center gap-8 my-10">
          {isEditing ? ["twitter", "linkedin", "github", "website"].map(p => (
            <input key={p} type="url" value={userData.socialLinks[p]} onChange={e => handleSocialLinkChange(p, e.target.value)} className="text-sm text-[#718096] w-32 bg-transparent border-b border-[#E2E8F0] focus:outline-none focus:border-[#F6AD55]" placeholder={`${p} URL`} />
          )) : [Twitter, Linkedin, Github, Globe].map((Icon, i) => (
            <a key={i} href={userData.socialLinks[Object.keys(userData.socialLinks)[i]]} target="_blank" rel="noopener noreferrer"><Icon className="text-[#718096] hover:text-[#F6AD55] cursor-pointer transition-colors w-6 h-6" /></a>
          ))}
        </motion.div>

        <motion.div {...scaleIn} transition={{ delay: 0.6 }} className="grid grid-cols-2 md:grid-cols-4 gap-6 my-10">
          {[{ l: "Monthly Income", v: "$8,500", c: "text-[#2D3748]" }, { l: "Monthly Expenses", v: "$5,200", c: "text-[#2D3748]" }, { l: "Remaining", v: "$3,300", c: "text-[#F6AD55]" }, { l: "Total Savings", v: "$12,500", c: "text-[#F6AD55]" }].map((stat, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
              <p className="text-sm font-['Inter'] text-[#718096]">{stat.l}</p>
              <p className={`text-2xl font-['Poppins'] font-bold ${stat.c}`}>{stat.v}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div {...fadeInUp} transition={{ delay: 0.7 }} className="bg-white p-6 rounded-xl my-10 shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-['Poppins'] font-semibold text-[#6B46C1]">Pro Plan</h2>
            <button className="bg-[#F6AD55] text-white px-5 py-2 rounded-lg text-sm font-['Poppins'] font-medium hover:bg-[#ED8936] transition-colors">Upgrade Plan</button>
          </div>
          <p className="text-sm text-[#718096] mb-4">Renewal on Aug 15, 2024</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Advanced Analytics", "Custom Reports", "Priority Support", "Multi Currency Support"].map(f => (
              <div key={f} className="flex items-center gap-2"><Check className="text-[#F6AD55] w-5 h-5" /><span className="text-sm text-[#2D3748] font-['Inter']">{f}</span></div>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeInUp} transition={{ delay: 0.8 }} className="flex flex-wrap gap-4 justify-center pb-8 border-t border-[#E2E8F0] pt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleEditToggle}
            className="flex items-center gap-2 px-8 py-3 bg-[#F6AD55] text-white rounded-xl font-['Poppins'] font-medium hover:bg-[#ED8936] transition-colors duration-300 shadow-md hover:shadow-xl"
          >
            <Settings className="w-5 h-5" />
            {isEditing ? "Save Profile" : "Edit Profile"}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#F0E7FF", color: "#4A148C" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDeleteProfile}
            className="flex items-center gap-2 px-8 py-3 border border-[#E2E8F0] rounded-xl text-[#6B46C1] font-['Poppins'] font-medium bg-white transition-all duration-300 shadow-sm"
          >
            <Settings className="w-5 h-5" />
            Delete Profile
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#E0F2F1", color: "#00796B" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddProfile}
            className="flex items-center gap-2 px-8 py-3 border border-[#E2E8F0] rounded-xl text-[#6B46C1] font-['Poppins'] font-medium bg-white transition-all duration-300 shadow-sm"
          >
            <Plus className="w-5 h-5" />
            Add Profile
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#FFF3E0", color: "#E65100" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleShareProfile}
            className="flex items-center gap-2 px-8 py-3 border border-[#E2E8F0] rounded-xl text-[#6B46C1] font-['Poppins'] font-medium bg-white transition-all duration-300 shadow-sm"
          >
            <Share2 className="w-5 h-5" />
            Share Profile
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#E3F2FD", color: "#1565C0" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownloadReport}
            className="flex items-center gap-2 px-8 py-3 border border-[#E2E8F0] rounded-xl text-[#6B46C1] font-['Poppins'] font-medium bg-white transition-all duration-300 shadow-sm"
          >
            <Download className="w-5 h-5" />
            Download Report
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#FCE4EC", color: "#AD1457" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-3 border border-[#E2E8F0] rounded-xl text-[#6B46C1] font-['Poppins'] font-medium bg-white transition-all duration-300 shadow-sm"
          >
            <Settings className="w-5 h-5" />
            Settings
          </motion.button>

        </motion.div>
      </div>

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
    </div>
  )
}