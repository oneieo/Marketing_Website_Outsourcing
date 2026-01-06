import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 text-center text-slate-500 text-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center space-x-8 mb-8">
          <a href="#" className="hover:text-white transition-colors">
            Twitter
          </a>
          <a href="#" className="hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Instagram
          </a>
        </div>
        <p>© 2024 Aura Growth Marketing Agency. All Rights Reserved.</p>
        <p className="mt-2 text-[10px] text-slate-600">
          사업자등록번호: 000-00-00000 | 대표: 아우라
        </p>
      </div>
    </footer>
  );
};

export default Footer;
