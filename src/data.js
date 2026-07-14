export const services = [
  { id: 1, icon: "fa-code", color: "indigo", title: "Web Development", desc: "Developing fast, dynamic custom websites utilizing structured data systems for seamless performance." },
  { id: 4, icon: "fa-brain", color: "emerald", title: "AI Engineer", desc: "Specializing in building intelligent systems by leveraging computer vision, predictive analytics, and hyperparameter-tuned neural networks." },
  { id: 5, icon: "fa-chart-pie", color: "cyan", title: "Data Analysis", desc: "Specializing in data cleaning, exploratory analysis, and predictive modeling using advanced analytics tools." }
];

export const projects = [
  {
    id: 1,
    title: "Pelindo Management System Dashboard",
    category: "Web Development",
    desc: "A comprehensive web-based management system integrating AI capabilities to automate administrative workflows and optimize operational efficiency.",
    shortDesc: "Centralized Certificate Administration System",
    img: "/images/pelindo.webp", // <-- Gambar Thumbnail
    popupImg: "/images/pelindo.webp", // <-- Gambar Pop-up (Sesuaikan nama file Anda)
    link: "https://github.com/OswaldSllhi/ecommerce",
    tags: ["Website", "Pelindo", "AI"]
  },
  {
    id: 2,
    title: "Travel Savy",
    category: "Mobile App",
    desc: "A smart mobile app that leverages artificial intelligence to generate personalized travel itineraries and streamline vacation planning.",
    shortDesc: "Smart Travel Itinerary Generator",
    img: "/images/ts.webp",
    popupImg: "/images/tsavy.webp", // <-- Sesuaikan nama file
    link: "https://github.com/OswaldSllhi/TSavy",
    tags: ["Mobile", "JavaScript", "PHP", "AI"]
  },
  {
    id: 3,
    title: "Online Gambling Website Detection",
    category: "Artificial Intelligence",
    desc: "An intelligent Google Chrome extension integrated with a high-performance FastAPI backend, utilizing hyperparameter-tuned machine learning models to accurately filter and block online gambling content.",
    shortDesc: "AI-Powered Gambling Website Classification",
    img: "/images/ikewyaa.webp",
    popupImg: "/images/blocked.webp", // <-- Sesuaikan nama file
    link: "https://github.com/OswaldSllhi/Ikewya",
    tags: ["FastAPI", "Python", "Deep Learning", "Google Chrome Extension"]
  }
];

export const techStack = [
  { name: "Python", icon: "fab fa-python", color: "hover:border-[#3776ab]/50 hover:shadow-[0_0_20px_rgba(55,118,171,0.2)]", iconColor: "text-[#3776ab]" },
  { name: "JavaScript", icon: "fab fa-js", color: "hover:border-[#f7df1e]/50 hover:shadow-[0_0_20px_rgba(247,223,30,0.2)]", iconColor: "text-[#f7df1e]" },
  { name: "TypeScript", icon: "", color: "hover:border-[#3178c6]/50 hover:shadow-[0_0_20px_rgba(49,120,198,0.2)]", iconColor: "text-[#3178c6]" },
  { name: "Golang", icon: "fab fa-golang", color: "hover:border-[#00add8]/50 hover:shadow-[0_0_20px_rgba(0,173,216,0.2)]", iconColor: "text-[#00add8]" },
  { name: "PHP", icon: "fab fa-php", color: "hover:border-[#777bb4]/50 hover:shadow-[0_0_20px_rgba(119,123,180,0.2)]", iconColor: "text-[#777bb4]" },
//   { name: "C++", icon: "", color: "hover:border-[#00599c]/50 hover:shadow-[0_0_20px_rgba(0,89,156,0.2)]", iconColor: "text-[#00599c]" },
  { name: "React", icon: "fab fa-react", color: "hover:border-[#61dafb]/50 hover:shadow-[0_0_20px_rgba(97,218,251,0.2)]", iconColor: "text-[#61dafb]" },
  { name: "Vue.js", icon: "fab fa-vuejs", color: "hover:border-[#42b883]/50 hover:shadow-[0_0_20px_rgba(66,184,131,0.2)]", iconColor: "text-[#42b883]" },
  { name: "Laravel", icon: "fab fa-laravel", color: "hover:border-[#ff2d20]/50 hover:shadow-[0_0_20px_rgba(255,45,32,0.2)]", iconColor: "text-[#ff2d20]" },
  { name: "FastAPI", icon: "", color: "hover:border-[#009688]/50 hover:shadow-[0_0_20px_rgba(0,150,136,0.2)]", iconColor: "text-[#009688]" },
  { name: "Node.js", icon: "fab fa-node-js", color: "hover:border-[#339933]/50 hover:shadow-[0_0_20px_rgba(51,153,51,0.2)]", iconColor: "text-[#339933]" },
  { name: "TensorFlow", icon: "", color: "hover:border-[#ff9200]/50 hover:shadow-[0_0_20px_rgba(255,146,0,0.2)]", iconColor: "text-[#ff9200]" },
  { name: "MySQL", icon: "fas fa-database", color: "hover:border-[#00758f]/50 hover:shadow-[0_0_20px_rgba(0,117,143,0.2)]", iconColor: "text-[#00758f]" },
  { name: "PostgreSQL", icon: "fas fa-database", color: "hover:border-[#336791]/50 hover:shadow-[0_0_20px_rgba(51,103,145,0.2)]", iconColor: "text-[#336791]" },
//   { name: "Redis", icon: "fas fa-database", color: "hover:border-[#dc382d]/50 hover:shadow-[0_0_20px_rgba(220,56,45,0.2)]", iconColor: "text-[#dc382d]" },
  { name: "Git", icon: "fab fa-git-alt", color: "hover:border-[#f05032]/50 hover:shadow-[0_0_20px_rgba(240,80,50,0.2)]", iconColor: "text-[#f05032]" },
  { name: "Docker", icon: "fab fa-docker", color: "hover:border-[#2496ed]/50 hover:shadow-[0_0_20px_rgba(36,150,237,0.2)]", iconColor: "text-[#2496ed]" },
//   { name: "AWS", icon: "fab fa-aws", color: "hover:border-[#ff9900]/50 hover:shadow-[0_0_20px_rgba(255,153,0,0.2)]", iconColor: "text-[#ff9900]" },
  { name: "Postman", icon: "fas fa-space-shuttle", color: "hover:border-[#ff6c37]/50 hover:shadow-[0_0_20px_rgba(255,108,55,0.2)]", iconColor: "text-[#ff6c37]" },
  { name: "Tailwind CSS", icon: "", color: "hover:border-[#38bdf8]/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)]", iconColor: "text-[#38bdf8]" },
  { name: "Figma", icon: "fab fa-figma", color: "hover:border-[#f24e1e]/50 hover:shadow-[0_0_20px_rgba(242,78,30,0.2)]", iconColor: "text-[#f24e1e]" }
];