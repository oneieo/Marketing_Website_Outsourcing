import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6">
            <h3 className="text-indigo-400 font-bold uppercase tracking-widest text-sm">
              CEO Message
            </h3>
            <h2 className="text-4xl md:text-5xl font-black leading-tight text-white">
              데이터의 냉철함과
              <br />
              <span className="text-gradient">진심의 따뜻함</span>을 담습니다.
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              단순히 노출만 시키는 광고는 의미가 없습니다. <br />
              우리는 소비자의 심리를 분석하고, 브랜드의 본질을 찾아내어 지속
              가능한 성장을 만드는 '진짜 마케팅'을 추구합니다.
            </p>
            <div className="pt-4 border-t border-white/10 italic text-slate-300">
              "당신의 성공이 아우라그로스의 유일한 성적표입니다."
            </div>
          </div>
          <div className="glass-card p-1 rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
              alt="Team"
              className="w-full h-[400px] object-cover rounded-3xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "진정성 (Authenticity)",
              desc: "우리는 클라이언트의 비즈니스를 내 것처럼 생각하며, 거짓 없는 소통과 결과를 지향합니다.",
              icon: "🛡️",
            },
            {
              title: "분석 (Analysis)",
              desc: "감에 의존하지 않습니다. 철저한 데이터 트래킹과 시장 분석을 통해 최적의 효율을 찾아냅니다.",
              icon: "📊",
            },
            {
              title: "키워드 최적화 (Optimization)",
              desc: "검색 엔진의 알고리즘을 꿰뚫는 전략으로 브랜드가 가장 빛나는 위치를 선점하게 합니다.",
              icon: "🚀",
            },
          ].map((val, i) => (
            <div
              key={i}
              className="glass-card p-8 rounded-3xl border border-white/5 hover:border-indigo-500/30 transition-all"
            >
              <div className="text-4xl mb-6">{val.icon}</div>
              <h4 className="text-xl font-bold mb-3 text-white">{val.title}</h4>
              <p className="text-slate-400 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
