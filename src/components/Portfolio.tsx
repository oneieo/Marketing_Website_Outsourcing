import React, { useState, useEffect } from "react";
import type { PortfolioItem } from "../types";
import { DEFAULT_PORTFOLIO } from "../constants/portfolio";

interface PortfolioProps {
  items?: PortfolioItem[];
}

const Portfolio: React.FC<PortfolioProps> = ({ items }) => {
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (items && items.length > 0) {
      setPortfolio(items);
    } else {
      fetchPortfolio();
    }
  }, [items]);

  const fetchPortfolio = () => {
    setLoading(true);
    try {
      const saved = localStorage.getItem("aura_portfolio");
      if (saved) {
        setPortfolio(JSON.parse(saved));
      } else {
        setPortfolio(DEFAULT_PORTFOLIO);
      }
    } catch (error) {
      console.error("Portfolio 로드 실패:", error);
      setPortfolio(DEFAULT_PORTFOLIO);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="portfolio" className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mx-auto"></div>
          <p className="text-slate-400 mt-4">포트폴리오를 불러오는 중...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="portfolio" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h3 className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-4">
            Case Studies
          </h3>
          <h2 className="text-4xl font-bold mb-4">우리의 성공 레퍼런스</h2>
          <p className="text-slate-400">
            업종별 맞춤 전략으로 증명된 놀라운 성장 수치들입니다.
          </p>
        </div>

        {portfolio.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">
              아직 등록된 포트폴리오가 없습니다.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-3xl overflow-hidden cursor-pointer glass-card border-white/10"
              >
                <div className="h-[300px] overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-indigo-500/10 text-indigo-400 text-[10px] font-bold uppercase tracking-tighter rounded-full mb-3">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
                    <span>📈 매출/트래픽 성장 성공</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
