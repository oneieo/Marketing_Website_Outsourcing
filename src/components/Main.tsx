import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar.tsx";
import Hero from "../components/Hero.tsx";
import About from "../components/About.tsx";
import Portfolio from "../components/Portfolio.tsx";
import Contact from "../components/Contact.tsx";
import Admin from "../components/Admin.tsx";
import type { PortfolioItem } from "../types.ts";
import Footer from "./Footer.tsx";

const DEFAULT_PORTFOLIO: PortfolioItem[] = [
  {
    id: 1,
    title: "세명대학교 홍보 캠페인",
    category: "대학교",
    imageUrl:
      "https://images.unsplash.com/photo-1541339907198-e08756ebafe1?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "올바른 치과의원 블로그",
    category: "병원",
    imageUrl:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "클린 마스터 공식 블로그",
    category: "청소업체",
    imageUrl:
      "https://images.unsplash.com/photo-1581578731522-745d05cb9724?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "서울 메디컬 센터",
    category: "병원",
    imageUrl:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
  },
];

const Main: React.FC = () => {
  const [isAdminView, setIsAdminView] = useState(false);
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>(() => {
    const saved = localStorage.getItem("aura_portfolio");
    return saved ? JSON.parse(saved) : DEFAULT_PORTFOLIO;
  });

  useEffect(() => {
    localStorage.setItem("aura_portfolio", JSON.stringify(portfolio));
  }, [portfolio]);

  const addPortfolio = (item: PortfolioItem) => {
    setPortfolio([item, ...portfolio]);
  };

  const deletePortfolio = (id: number) => {
    setPortfolio(portfolio.filter((p) => p.id !== id));
  };

  return (
    <div className="min-h-screen selection:bg-indigo-500 selection:text-white">
      <Navbar
        onAdminClick={() => setIsAdminView(!isAdminView)}
        isAdmin={isAdminView}
      />

      {isAdminView ? (
        <Admin
          onAddPortfolio={addPortfolio}
          portfolio={portfolio}
          onDeletePortfolio={deletePortfolio}
        />
      ) : (
        <main>
          <Hero />

          <section className="py-20 px-6 border-y border-white/5 bg-white/[0.01]">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "누적 캠페인 수", val: "2,400+" },
                { label: "평균 매출 상승률", val: "185%" },
                { label: "함께하는 전문가", val: "45명" },
                { label: "관리 브랜드 수", val: "320+" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl font-black text-white mb-1">
                    {stat.val}
                  </div>
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <About />

          <section id="services" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h3 className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-4">
                  Our Services
                </h3>
                <h2 className="text-4xl font-bold mb-4">
                  비즈니스 성공을 위한 올인원 솔루션
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                  각 분야 최고의 전문가들이 당신의 브랜드에 맞는 최적화된 옷을
                  입혀드립니다.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "브랜드 블로그 대행",
                    desc: "기업의 가치를 담은 고퀄리티 포스팅으로 잠재 고객의 신뢰를 확보하고 검색 상위 노출을 실현합니다.",
                    icon: "✍️",
                  },
                  {
                    title: "통합 광고 컨설팅",
                    desc: "구글, 페이스북, 카카오 등 채널별 타겟 분석을 통해 최소 비용으로 최대 효율의 성과를 이끌어냅니다.",
                    icon: "🎯",
                  },
                  {
                    title: "홈페이지/랜딩페이지 제작",
                    desc: "고객이 머무르고 싶은 웹사이트를 만듭니다. 전환율(CVR) 극대화를 최우선으로 기획하고 디자인합니다.",
                    icon: "💻",
                  },
                ].map((service, i) => (
                  <div
                    key={i}
                    className="glass-card p-10 rounded-3xl border border-white/5 hover:border-indigo-500/30 transition-all hover:-translate-y-2 group"
                  >
                    <div className="text-5xl mb-8 group-hover:scale-110 transition-transform inline-block">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-5 text-white">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Portfolio items={portfolio} />

          <Contact />
        </main>
      )}

      <Footer />
    </div>
  );
};

export default Main;
