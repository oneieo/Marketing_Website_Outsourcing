import React from "react";
import { Link, useNavigate } from "react-router-dom";

interface NavbarProps {
  onAdminClick: () => void;
  isAdmin: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onAdminClick, isAdmin }) => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/5 bg-[#0a0a0c]/80">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div
          className="text-2xl font-extrabold tracking-tighter cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span className="text-gradient">AURA</span> GROWTH
        </div>

        {!isAdmin && (
          <div className="hidden md:flex space-x-10 text-sm font-medium text-slate-400">
            <Link to="/about" className="hover:text-white transition-colors">
              회사소개
            </Link>
            <Link to="/services" className="hover:text-white transition-colors">
              사업영역
            </Link>
            <Link
              to="/portfolio"
              className="hover:text-white transition-colors"
            >
              포트폴리오
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              문의하기
            </Link>
          </div>
        )}

        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              onAdminClick();
              navigate(isAdmin ? "/" : "/admin");
            }}
            className="text-xs text-slate-500 hover:text-white transition-colors"
          >
            {isAdmin ? "사이트로 돌아가기" : "관리자"}
          </button>

          {!isAdmin && (
            <button
              onClick={() => navigate("/contact")}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full text-sm font-semibold transition-all"
            >
              상담 예약하기
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
