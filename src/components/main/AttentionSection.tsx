import React from "react";
import { useInViewOnce } from "../../hooks/useInViewOnce";

type Item = {
    leftTitle?: React.ReactNode;
    leftDesc?: React.ReactNode;
    rightTitle?: React.ReactNode;
    rightDesc?: React.ReactNode;
};

const ITEMS: Item[] = [
    {
        leftTitle: (
            <>
                <span className="text-white text-2xl font-bold leading-8">
                    광고를 어디서부터 시작할지
                    <br />
                    막막한{" "}
                </span>
                <span className="text-red-600 text-2xl font-black leading-8">
                    초보 사장님
                </span>
            </>
        ),
        rightDesc: (
            <>
                <span className="text-white text-base font-normal leading-5">
                    복잡한 마케팅 용어 대신{" "}
                </span>
                <span className="text-red-800 text-base font-bold leading-5">
                    200건의 성공 데이터를 기반으로 한 명확한 로드맵을 제시
                </span>
                <span className="text-white text-base font-normal leading-5">
                    해 드립니다.
                    <br />
                    처음이라도 헤매지 않도록 매출로 가는 가장 빠른 길을 안내합니다.
                </span>
            </>
        ),
    },
    {
        leftDesc: (
            <>
                <span className="text-red-800 text-base font-bold leading-5">
                    98%의 고객이 재계약
                </span>
                <span className="text-white text-base font-normal leading-5">
                    을 선택하는 데에는 이유가 있습니다.
                    <br />
                    적은 예산으로도 실질적인 효과를 체감할 수 있도록 리스크는 낮추고 효율은
                    극대화한 맞춤형 플랜을 제공합니다.
                </span>
            </>
        ),
        rightTitle: (
            <>
                <span className="text-red-600 text-2xl font-black leading-8">
                    마케팅 효과
                </span>
                <span className="text-white text-2xl font-bold leading-8">
                    에 대한
                    <br />
                    의구심과 두려움이 있는 분
                </span>
            </>
        ),
    },
    {
        leftTitle: (
            <>
                <span className="text-white text-2xl font-bold leading-8">
                    전문 지식 없이도
                    <br />
                </span>
                <span className="text-red-600 text-2xl font-black leading-8">
                    완벽한 브랜딩
                </span>
                <span className="text-white text-2xl font-bold leading-8">
                    을 구축하고 싶은 분
                </span>
            </>
        ),
        rightDesc: (
            <>
                <span className="text-white text-base font-normal leading-5">
                    포스팅부터 디자인, 이웃 관리까지 저희가 알아서 다 해드립니다.
                    <br />
                    마케팅은 전문가에게 맡기고 대표님은 본업에만 집중하세요.
                    <br />
                </span>
                <span className="text-red-800 text-base font-bold leading-5">
                    업계 최대 수준의 최저가 패키지
                </span>
                <span className="text-white text-base font-normal leading-5">
                    가 든든한 지원군이 되어드립니다.
                </span>
            </>
        ),
    },
];

function animClass({
    inView,
    from,
    delayMs,
}: {
    inView: boolean;
    from: "left" | "right";
    delayMs: number;
}) {
    // Tailwind arbitrary value로 delay(ms) 적용
    const base =
        "transition-all duration-700 ease-out will-change-transform will-change-opacity";
    const delay = `delay-[${delayMs}ms]`;

    if (!inView) {
        return [
            base,
            delay,
            "opacity-0",
            from === "left" ? "-translate-x-8" : "translate-x-8",
            "blur-[2px]",
        ].join(" ");
    }

    return [base, delay, "opacity-100", "translate-x-0", "blur-0"].join(" ");
}

const AttentionSection: React.FC = () => {
    const { ref, inView } = useInViewOnce<HTMLElement>({ threshold: 0.2 });

    return (
        <section ref={ref} className="w-full bg-black py-14">
            <div className="max-w-[1200px] mx-auto px-5 flex flex-col items-center gap-14">
                {/* 타이틀 (맨 위 먼저) */}
                <div className={animClass({ inView, from: "left", delayMs: 0 }) + " w-full text-left"}>
                    <span className="text-white text-4xl font-bold leading-10">
                        이런 분들은{" "}
                    </span>
                    <span className="text-red-600 text-4xl font-black leading-10">
                        주목
                    </span>
                    <span className="text-white text-4xl font-bold leading-10">
                        하세요!
                    </span>
                </div>

                {/* 리스트 */}
                <div className="w-full flex flex-col gap-10">
                    {ITEMS.map((it, idx) => {
                        // 줄마다 방향 반전: 0번째 줄은 left→right, 1번째 줄은 right→left ...
                        const firstFrom: "left" | "right" = idx % 2 === 0 ? "left" : "right";
                        const secondFrom: "left" | "right" = idx % 2 === 0 ? "right" : "left";

                        // delay: 위에서부터 순차 (줄 단위 + 줄 안에서 좌/우)
                        const rowDelay = 200 + idx * 250; // 줄 간 간격
                        const leftDelay = rowDelay; // 먼저 나오는 쪽
                        const rightDelay = rowDelay + 150; // 다음 나오는 쪽

                        // 줄 안에서 "먼저 등장"하는 쪽이 firstFrom 방향을 가짐
                        // (즉, idx 짝수면 left 먼저, idx 홀수면 right 먼저)
                        const leftClass =
                            idx % 2 === 0
                                ? animClass({ inView, from: firstFrom, delayMs: leftDelay })
                                : animClass({ inView, from: secondFrom, delayMs: rightDelay });

                        const rightClass =
                            idx % 2 === 0
                                ? animClass({ inView, from: secondFrom, delayMs: rightDelay })
                                : animClass({ inView, from: firstFrom, delayMs: leftDelay });

                        return (
                            <div
                                key={idx}
                                className="
                                relative w-full
                                flex flex-col gap-6
                                lg:block lg:min-h-[110px]
                                "
                            >
                                {/* 왼쪽 블록: 기준 */}
                                <div className={`lg:w-[1200px] ${leftClass}`}>
                                    {it.leftTitle ? (
                                        <div className="text-left">{it.leftTitle}</div>
                                    ) : (
                                        <div className="text-left text-base">{it.leftDesc}</div>
                                    )}
                                </div>

                                {/* 오른쪽 블록: 왼쪽 위로 '겹쳐서' 들어오게 */}
                                <div
                                    className={`
                                        lg:absolute
                                        lg:top-1/2 lg:-translate-y-1/2
                                        lg:left-[560px]
                                        lg:w-[640px]
                                        ${rightClass}
                                    `}
                                >
                                    {it.rightTitle ? (
                                        <div className="text-right">{it.rightTitle}</div>
                                    ) : (
                                        <div className="text-left lg:text-right text-base">
                                            {it.rightDesc}
                                        </div>
                                    )}
                                </div>
                            </div>
                        );

                    })}
                </div>
            </div>
        </section>
    );
};

export default AttentionSection;