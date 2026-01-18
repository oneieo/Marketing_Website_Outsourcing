import React, { useState, useEffect, useMemo } from "react";
import type { PortfolioItem } from "../types";
import { DEFAULT_PORTFOLIO } from "../constants/portfolio";
import PortfolioGrid from "./PortfolioGrid";

interface PortfolioProps {
  items?: PortfolioItem[];
}

const Portfolio: React.FC<PortfolioProps> = ({ items }) => {

  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const columns = 3;
  const rows = 3;
  const perPage = columns * rows;

  useEffect(() => {
    if (items && items.length > 0) {
      setPortfolio(items);
    } else {
      fetchPortfolio();
    }
  }, [items]);

  // 데이터 바뀌면 첫 페이지로
  useEffect(() => {
    setPage(1);
  }, [portfolio.length]);

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

  const totalPages = Math.max(1, Math.ceil(portfolio.length / perPage));
  // 현재 페이지에 보여줄 데이터만 잘라서 전달
  const pagedPortfolio = useMemo(() => {
    const start = (page - 1) * perPage;
    return portfolio.slice(start, start + perPage);
  }, [portfolio, page, perPage]);

  const goToPage = (n: number) => {
    if (n < 1) n = 1;
    if (n > totalPages) n = totalPages;
    setPage(n);
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
    <div className="relative bg-white py-20 lg:py-20 xl:py-24 ">
      {/* animations (no CSS file) */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate_top { animation: fadeUp .45s ease both; }
        .animate_left { animation: fadeUp .45s ease both; }
        .animate_right { animation: fadeUp .45s ease both; }
      `}</style>

      {/* 상단 부분 */}
      <section className="py-20 lg:py-24 xl:py-28">
        <div className="text-center">
          <h2 className="text-[48px] font-extrabold tracking-tight text-black">
            포트폴리오
          </h2>

          <p className="mt-3 text-lg text-black/60">
            우리들의 성공 레퍼런스
          </p>
        </div>
      </section>


      {/* Blog grid */}
      {portfolio.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-slate-500 text-lg">
            아직 등록된 포트폴리오가 없습니다.
          </p>
        </div>
      ) : (
        <section >
          <PortfolioGrid
            portfolio={pagedPortfolio}
            columns={3}
            onCardClick={(item) => console.log("클릭:", item.title)}
            gapX={3}
            gapY={7}
          />

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-10 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => goToPage(page - 1)}
                disabled={page === 1}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-medium shadow-[0px_2px_10px_rgba(0,0,0,0.08)] transition hover:bg-black hover:text-white disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-black sm:h-10 sm:w-10 sm:text-base"
                aria-label="Previous page"
              >
                ←
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .slice(0, 8) // 페이지 너무 많으면 일단 8개까지만 표시 (원하면 ... 처리해줄게)
                .map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => goToPage(n)}
                    className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium shadow-[0px_2px_10px_rgba(0,0,0,0.08)] transition hover:bg-black hover:text-white sm:h-10 sm:w-10 sm:text-base ${n === page ? "bg-black text-white" : "text-black"
                      }`}
                    aria-label={`Page ${n}`}
                  >
                    {n}
                  </button>
                ))}

              <button
                type="button"
                onClick={() => goToPage(page + 1)}
                disabled={page === totalPages}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-medium shadow-[0px_2px_10px_rgba(0,0,0,0.08)] transition hover:bg-black hover:text-white disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-black sm:h-10 sm:w-10 sm:text-base"
                aria-label="Next page"
              >
                →
              </button>
            </div>
          )}
        </section>
      )}


    </div>
  );
};

export default Portfolio;
