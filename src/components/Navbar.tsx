import React from "react";

interface NavbarProps {
  onAdminClick: () => void;
  isAdmin: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onAdminClick, isAdmin }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/5 bg-[#0a0a0c]/80">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div
          className="text-2xl font-extrabold tracking-tighter cursor-pointer"
          onClick={() => (window.location.hash = "")}
        >
          <span className="text-gradient">AURA</span> GROWTH
        </div>
        {!isAdmin && (
          <div className="hidden md:flex space-x-10 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">
              회사소개
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              사업영역
            </a>
            <a href="#portfolio" className="hover:text-white transition-colors">
              포트폴리오
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              문의하기
            </a>
          </div>
        )}
        <div className="flex items-center gap-4">
          <button
            onClick={onAdminClick}
            className="text-xs text-slate-500 hover:text-white transition-colors"
          >
            {isAdmin ? "사이트로 돌아가기" : "관리자"}
          </button>
          {!isAdmin && (
            <button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full text-sm font-semibold transition-all">
              상담 예약하기
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
