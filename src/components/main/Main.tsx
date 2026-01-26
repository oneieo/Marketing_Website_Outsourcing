import React from "react";
import Hero from "./Hero";
import Contact from "../Contact";
import type { PortfolioItem } from "../../types";
import PortfolioGrid from "../portfolio/PortfolioGrid";
import StatsSection from "./StatsSection";
import PricingSection from "./PricingSection ";
import AttentionSection from "./AttentionSection";
import { useInViewOnce } from "../../hooks/useInViewOnce";
import ClientsAutoSlider from "./ClientsAutoSlider";

function animClass({
  inView,
  delayMs,
  from = "up",
}: {
  inView: boolean;
  delayMs: number;
  from?: "up" | "left" | "right";
}) {
  const base =
    "transition-all duration-700 ease-out will-change-transform will-change-opacity";
  const delay = `delay-[${delayMs}ms]`;

  if (!inView) {
    const translate =
      from === "up"
        ? "translate-y-8"
        : from === "left"
          ? "-translate-x-8"
          : "translate-x-8";
    return [base, delay, "opacity-0", translate, "blur-[2px]"].join(" ");
  }

  return [base, delay, "opacity-100", "translate-y-0", "translate-x-0", "blur-0"].join(" ");
}

interface MainProps {
  portfolio: PortfolioItem[];
}

const Main: React.FC<MainProps> = ({ portfolio }) => {
  // 포트폴리오 섹션만 따로 감지
  const { ref: portfolioRef, inView: portfolioInView } =
    useInViewOnce<HTMLDivElement>({ threshold: 0.2 });

  return (
    <main>
      <div
        className="
          bg-[url('/images/bg.png')]
          bg-cover
          bg-center
          bg-no-repeat
        "
      >
        <section id="Hero">
          <Hero />
        </section>

        <section id="stateSection">
          <StatsSection />
        </section>

        <section id="PricingSection">
          <PricingSection />
        </section>
      </div>

      <section id="AttentionSection">
        <AttentionSection />
      </section>

      <div
        className="
          bg-[url('/images/bg.png')] bg-[length:100%_100%]
        "
      >
        <section id="OurClient" className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center space-y-3">
              <div>our client</div>
              <div>우리의 클라이언트들</div>
            </div>
            <div className="mt-10">
              <ClientsAutoSlider />
            </div>
          </div>
        </section>

        {/* Portfolio 섹션 */}
        <section id="portfolio" ref={portfolioRef} className="">
          <div className={animClass({ inView: portfolioInView, delayMs: 0 }) + " text-center pt-10"}>
            Profile

          </div>

          <PortfolioGrid
            portfolio={portfolio}
            columns={4}
            onCardClick={(item) => console.log("클릭:", item.title)}
            gapX={3}
            gapY={7}
            // grid 전체가 먼저 등장
            className={animClass({ inView: portfolioInView, delayMs: 20 })}
            // 카드가 순차적으로 등장 (0~)
            getItemClassName={(index) =>
              animClass({
                inView: portfolioInView,
                delayMs: 200 + index * 80,
                from: "up",
              })
            }
          />

          {/* 더보기 버튼도 마지막에 등장 */}
          <div className={animClass({ inView: portfolioInView, delayMs: 520 }) + " flex justify-center mt-12"}>
            <button
              className="
              bg-transparent border-2 border-[#a62118] text-[#a62118]
              px-8 py-1 rounded-full font-bold text-s
              inline-flex items-center justify-center
              transition-all duration-300 ease-in-out
              hover:bg-[#a62118] hover:text-white
              hover:scale-105 hover:shadow-lg hover:-translate-y-1
              active:scale-95
            "
            >
              더보기
            </button>
          </div>
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>
    </main>
  );
};

export default Main;
