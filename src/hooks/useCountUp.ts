// 숫자 올라가는 애니메이션
import { useEffect, useState } from "react";

type CountUpOptions = {
    from?: number;
    to: number;
    durationMs?: number;
};

function easeOutCubic(t: number) {
    return 1 - Math.pow(1 - t, 3);
}

export function useCountUp(
    enabled: boolean,
    { from = 0, to, durationMs = 1200 }: CountUpOptions
) {
    const [value, setValue] = useState(from);

    useEffect(() => {
        if (!enabled) return;

        let raf = 0;
        const start = performance.now();

        const tick = (now: number) => {
            const progress = Math.min(1, (now - start) / durationMs);
            const eased = easeOutCubic(progress);
            setValue(Math.round(from + (to - from) * eased));

            if (progress < 1) raf = requestAnimationFrame(tick);
        };

        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [enabled, from, to, durationMs]);

    return value;
}
