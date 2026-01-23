import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative">

        <img
          src="images/icon-mainp-logo.png"
          alt="화경 로고"
          className="
            absolute
            right-0
            top-0
            w-40 md:w-56
            pointer-events-none
          "
        />

        <div className="h-32"></div>

        <div className="inline-block px-4 py-1.5 rounded-full text-black text-xl font-bold tracking-widest mb-6">
          당신의 브랜드에 꽃을 피우다
        </div>

        <h1 className="text-2xl md:text-6xl font-black mb-8 leading-[1.1]">
          "
          <span className="text-[#A11D18]">내 브랜드</span>
          처럼,
          <span className="text-[#A11D18]">내 마음</span>
          처럼"
        </h1>

        <p className="text-xl text-black max-w-2xl mx-auto mb-10">
          고객의 브랜드를 가장 효율적으로 성장시키는 마케팅 파트너 '화경'입니다
        </p>

        <div className="flex justify-center mt-12">
          <button className="bg-transparent border-2 border-[#a62118] text-[#a62118] px-8 py-1 rounded-full font-bold transition-all hover:bg-[#a62118] hover:text-white">
            신청하기
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
