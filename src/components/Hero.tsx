import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="pt-40 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative">
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/20 blur-[120px] -z-10 rounded-full"></div>

        <div className="inline-block px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6">
          Next-Gen Marketing Solutions
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[1.1]">
          We Build Brands That <br />
          <span className="text-gradient">Rule the Future</span>
        </h1>

        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Leveraging cutting-edge data science and AI-driven creative strategies
          to help your business scale beyond the ordinary.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full text-lg font-bold shadow-lg shadow-indigo-600/20 transition-all">
            Scale Your Brand
          </button>
          <button className="px-8 py-4 border border-white/10 hover:bg-white/5 rounded-full text-lg font-bold transition-all">
            View Case Studies
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
