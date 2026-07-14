import React, { useState } from 'react';
import { services, projects, techStack } from './data';
import fotoOswald from './assets/images/oswalddd.webp';

export default function Portfolio() {
  // State untuk melacak project mana yang sedang aktif di pop-up
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="bg-[#0f172a] text-slate-200 min-h-screen font-sans antialiased selection:bg-indigo-500 selection:text-white">
      
      {/* 1. NAVBAR / HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0f172a]/80 border-b border-slate-800/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold tracking-wider text-white">
            SWALDDD
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-400">
            <a href="#home" className="hover:text-indigo-400 transition-colors">Home</a>
            <a href="#services" className="hover:text-indigo-400 transition-colors">Services</a>
            <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
            <a href="#tech-stack" className="hover:text-indigo-400 transition-colors">Experience</a>
          </nav>
          <div>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/20"
            >
              Contact Me
            </a>
          </div>
        </div>
      </header>

{/* 2. HERO SECTION */}
      <section id="home" className="relative max-w-4xl mx-auto px-6 pt-24 pb-20 text-center flex flex-col items-center">
        {/* Badge Status */}
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-8 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          Available for Freelance & Full-time
        </span>

        {/* FOTO PROFIL DENGAN EFEK GLOW */}
        <div className="relative mb-8 group">
          {/* Efek pendaran latar belakang ring foto saat di-hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
          
          {/* Bingkai lingkaran foto */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-b from-indigo-500/50 to-slate-800/80 overflow-hidden shadow-2xl">
            <img 
              src={fotoOswald} 
              alt="Oswald Adrian Silalahi" 
              className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
          Hello, I'm <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Oswald!</span> 👋
        </h1>
        
        <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl mb-10">
          An IT graduate from Medan with a deep focus on software development, data science, and artificial intelligence. 
          I specialize in utilizing high-performance, cutting-edge technologies to engineer scalable systems for organizations of all sizes. 
          Have a vision you want to bring to life? Let's build something great. 💻
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
          <a 
            href="#projects" 
            className="px-6 py-3 text-sm font-semibold text-white bg-slate-800 rounded-xl hover:bg-slate-700 border border-slate-700 transition-all text-center"
          >
            See Project
          </a>
          <a 
            href="#contact" 
            className="px-6 py-3 text-sm font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-500 shadow-lg shadow-indigo-600/30 transition-all text-center"
          >
            Discuss Project
          </a>
        </div>
      </section>

      {/* 3. SERVICES & EXPERTISE SECTION */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-800/40">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Services & Expertise</h2>
          <p className="text-slate-400 text-sm md:text-base">
            Strategic tech solutions tailored to help you build, scale, and optimize your digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700/80 transition-all group">
              <div className="w-10 h-10 rounded-lg bg-indigo-600/10 text-indigo-400 flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-all text-xl">
                {service.id === 1 && "🌐"}
                {service.id === 4 && "🤖"}
                {service.id === 5 && "📊"}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

            {/* 5. TECH STACK & TOOLS SECTION */}
      <section id="tech-stack" className="py-24 bg-[#0f172a] relative overflow-hidden border-t border-slate-800/40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-12 text-left">
            <h2 className="text-4xl font-extrabold text-white tracking-tight mb-3">Tech-Stack & Tools</h2>
            <p className="text-slate-400 max-w-3xl text-base leading-relaxed">
              A showcase of the technologies and tools I utilize in my projects, ranging from programming languages to frameworks and platforms.
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4">
            {techStack.map((tech, idx) => (
              <div key={idx} className={`aspect-square rounded-2xl bg-[#1e293b]/40 border border-white/5 flex items-center justify-center p-4 transition-all duration-300 ${tech.color} hover:bg-[#1e293b]/80 group`}>
                {tech.name === "TypeScript" || tech.name === "TS" ? (
                  <span className="text-2xl font-black text-[#3178c6] tracking-tighter transition-transform duration-300 group-hover:scale-110">TS</span>
                ) : tech.name === "FastAPI" ? (
                  <svg className="w-8 h-8 text-[#009688] fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                    <path d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm-1.5 18h-3v-3h3v3zm0-4.5h-3v-3h3v3zm6 4.5h-3V9h3v9zm0-10.5h-9V4.5h9V7.5z"/>
                  </svg>
                ) : tech.name === "Tailwind CSS" ? (
                  <svg className="w-8 h-8 text-[#38bdf8] fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                    <path d="M12 6.036c-2.286 0-3.81 1.143-4.572 3.429 1.143-1.524 2.476-2.095 4-1.714.87.217 1.492.847 2.181 1.55 1.122 1.145 2.42 2.47 5.143 2.47 2.286 0 3.81-1.143 4.572-3.429-1.143 1.524-2.476 2.095-4 1.714-.87-.217-1.492-.847-2.181-1.55-1.122-1.145-2.42-2.47-5.143-2.47zM6.857 12.893c-2.286 0-3.81 1.143-4.572 3.429 1.143-1.524 2.476-2.095 4-1.714.87.217 1.492.847 2.181 1.55 1.122 1.146 2.42 2.47 5.143 2.47 2.286 0 3.81-1.143 4.572-3.429-1.143 1.524-2.476 2.095-4 1.714-.87-.217-1.492-.847-2.181-1.55-1.122-1.145-2.42-2.47-5.143-2.47z"/>
                  </svg>
                ) : tech.name === "TensorFlow" ? (
                  <svg className="w-8 h-8 text-[#ff9200] fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                    <path d="M12 1.5L2.25 7.125v11.25L12 24l9.75-5.625V7.125L12 1.5zm-1.125 4.5h2.25v3.375h-2.25V6zm0 4.875h2.25V18h-2.25v-7.125z"/>
                  </svg>
                ) : (
                  <i className={`${tech.icon} text-3xl ${tech.iconColor} transition-transform duration-300 group-hover:scale-110`}></i>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROJECTS SECTION */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-800/40">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Projects</h2>
          <p className="text-slate-400 text-sm md:text-base">
            Some of the apps and system that i've developed. Click on card to see details.
          </p>
        </div>

        {/* Container Grid Project */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group overflow-hidden rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-all cursor-pointer flex flex-col h-full"
            >
              <div className="aspect-video w-full bg-slate-800 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent z-10 opacity-60"></div>
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-semibold tracking-wider text-indigo-400 uppercase">{project.category}</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-3 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
                  {project.shortDesc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 text-xs rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

{/* POP-UP MODAL CONTAINER */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          {/* Box Modal - Menambahkan min-h untuk memastikan space teks selalu aman */}
          <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl max-h-[90vh] flex flex-col">
            
            {/* Tombol Close */}
            <button 
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-slate-950/60 text-slate-400 hover:text-white border border-white/10 transition-colors"
            >
              ✕
            </button>

            {/* Kontainer Scroll Tunggal - Membungkus Gambar & Teks bersamaan agar tidak saling memotong */}
            <div className="overflow-y-auto flex-grow text-left [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              
              {/* Gambar Pop-Up */}
              <div className="aspect-video w-full relative shrink-0 bg-slate-800">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
                <img
                  // Memanggil popupImg, jika kosong maka gunakan img thumbnail
                  src={activeProject.popupImg || activeProject.img}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Isi Detail Konten */}
              <div className="p-6">
                <span className="text-xs font-semibold tracking-wider text-indigo-400 uppercase">
                  {activeProject.category || "Project Detail"}
                </span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-4">
                  {activeProject.title}
                </h3>
                
                <h4 className="text-sm font-semibold text-slate-300 mb-2">Project Description</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 whitespace-pre-line">
                  {activeProject.desc}
                </p>

                {/* Menampilkan Badge Teknologi Terkait jika ada array tags */}
                {activeProject.tags && (
                  <>
                    <h4 className="text-sm font-semibold text-slate-300 mb-2">Tech</h4>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {activeProject.tags.map((tag, i) => (
                        <span key={i} className="px-2.5 py-1 text-xs rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Footer Aksi - Tetap berada di posisi bawah modal */}
            <div className="p-4 bg-slate-950/40 border-t border-slate-800/60 flex items-center justify-end gap-3 shrink-0">
              <button 
                onClick={() => setActiveProject(null)}
                className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                Back
              </button>
              <a 
                href={activeProject.link}
                target="_blank" 
                rel="noreferrer"
                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/20 flex items-center gap-2"
              >
                See Project <i className="fas fa-external-link-alt text-xs"></i>
              </a>
            </div>

          </div>
        </div>
      )}


{/* 6. CONTACT SECTION */}
      <section id="contact" className="py-24 bg-[#0d1322] border-t border-slate-800/40 relative overflow-hidden">
        {/* Ornamen background pendaran halus */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-extrabold mb-4 text-white tracking-tight">
            Let's Work <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-slate-400 mb-10 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Have an idea and in need of developer? Contact me through these button below.
          </p>
          
          <div className="flex justify-center gap-5">
            {/* Email */}
            <a 
              href="mailto:oswaldsllhi20@gmail.com" 
              className="w-14 h-14 bg-white/5 hover:bg-indigo-600 rounded-2xl flex items-center justify-center border border-white/5 text-xl transition-all group duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)]"
              title="Email"
            >
              <i className="fas fa-envelope text-slate-400 group-hover:text-white transition-colors"></i>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/oswaldsilalahi/" 
              target="_blank" 
              rel="noreferrer"
              className="w-14 h-14 bg-white/5 hover:bg-indigo-600 rounded-2xl flex items-center justify-center border border-white/5 text-xl transition-all group duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)]"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin-in text-slate-400 group-hover:text-white transition-colors"></i>
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/OswaldSllhi" 
              target="_blank" 
              rel="noreferrer"
              className="w-14 h-14 bg-white/5 hover:bg-indigo-600 rounded-2xl flex items-center justify-center border border-white/5 text-xl transition-all group duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)]"
              title="GitHub"
            >
              <i className="fab fa-github text-slate-400 group-hover:text-white transition-colors"></i>
            </a>

            {/* Instagram - Memperbaiki icon class & tautan placeholder jika ingin diubah nanti */}
            <a 
              href="https://instagram.com/oswaldsllhi" 
              target="_blank" 
              rel="noreferrer"
              className="w-14 h-14 bg-white/5 hover:bg-indigo-600 rounded-2xl flex items-center justify-center border border-white/5 text-xl transition-all group duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)]"
              title="Instagram"
            >
              <i className="fab fa-instagram text-slate-400 group-hover:text-white transition-colors"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}