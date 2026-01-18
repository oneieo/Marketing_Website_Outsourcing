import React from "react";
import type { PortfolioGridProps } from "../types";

type Columns = 3 | 4;

const getResponsiveCols = (cols: Columns) => {
    return cols === 3
        ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        : "grid-cols-2 sm:grid-cols-2 lg:grid-cols-4";
};

const PortfolioGrid: React.FC<PortfolioGridProps> = ({
    portfolio,
    columns = 3,
    onCardClick,
    gapX = 3,
    gapY = 7,
    showReadMore = true,
    readMoreText = "Read More",
    className,
}) => {
    const gapStyle: React.CSSProperties = {
        columnGap: `${gapX * 0.25}rem`,
        rowGap: `${gapY * 0.25}rem`,
    };

    return (
        <section className={className}>
            <div className="mx-auto max-w-7xl px-4 xl:px-0">
                <div className={`grid ${getResponsiveCols(columns)}`} style={gapStyle}>
                    {portfolio.map((p) => (
                        <article
                            key={p.id}
                            className="animate_top cursor-pointer overflow-hidden rounded-xl bg-white shadow-[0px_8px_70px_rgba(0,0,0,0.05)]"
                            onClick={() => onCardClick?.(p)}
                        >
                            {/* image */}
                            <div className="group relative overflow-hidden">
                                <img src={p.imageUrl} alt={p.title} className="block h-auto w-full" />

                                {/* hover overlay */}
                                {showReadMore && (
                                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/20 opacity-0 backdrop-blur-sm transition duration-300 group-hover:opacity-100">
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.stopPropagation(); // 카드 클릭과 분리
                                                onCardClick?.(p);
                                            }}
                                            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3 text-white font-medium transition hover:bg-pink-500"
                                        >
                                            {readMoreText}
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* body */}
                            <div className="p-7">
                                <div className="flex flex-wrap items-center gap-2">
                                    {Array.isArray(p.category)
                                        ? p.category.map((t, i) => (
                                            <span key={i} className="text-xs font-medium text-[#A11D18]">
                                                {t}
                                                {i !== p.category.length - 1 ? "," : ""}
                                            </span>
                                        ))
                                        : (
                                            <span className="text-xs font-medium text-[#A11D18]">
                                                {String(p.category)}
                                            </span>
                                        )}
                                </div>

                                <h3 className="mt-3 w-[95%] text-[20px] leading-snug text-slate-900">
                                    <span className="transition hover:text-blue-600">{p.title}</span>
                                </h3>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioGrid;
