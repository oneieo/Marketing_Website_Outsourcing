type ServiceListSection = {
    iconSrc: string;
    iconAlt: string;
    title: string;
    items: string[];
};

type ServiceBoxProps = {
    boxTitle: string;
    left: ServiceListSection;
    right: ServiceListSection;
    className?: string;
};

export const ServiceBox: React.FC<ServiceBoxProps> = ({
    boxTitle,
    left,
    right,
    className,
}) => {
    return (
        <div className={`max-w-4xl mx-auto p-12 relative ${className ?? ""}`}>
            <h3 className="text-[32px] font-bold text-center mb-16">{boxTitle}</h3>

            <div className="grid md:grid-cols-2 gap-16">
                <ServiceColumn {...left} />
                <ServiceColumn {...right} />
            </div>
        </div>
    );
};

const ServiceColumn: React.FC<ServiceListSection> = ({ iconSrc, iconAlt, title, items }) => {
    return (
        <div
            className="
        group flex flex-col items-center text-center p-8 rounded-lg
        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:shadow-[0px_20px_60px_rgba(0,0,0,0.12)]
        hover:bg-black/[0.02]
            "
        >
            <div className="flex flex-col items-center mb-6">
                <img src={iconSrc} alt={iconAlt} className="w-14 h-14 mb-4" />
                <h4 className="text-xl font-bold">{title}</h4>
            </div>

            <ul className="space-y-4">
                {items.map((text, idx) => (
                    <ServiceItem key={idx} text={text} />
                ))}
            </ul>
        </div>
    );
};

// 체크박스 아이템 컴포넌트
const ServiceItem: React.FC<{ text: string }> = ({ text }) => (
    <li className="flex items-start gap-3 pl-4">
        <div className="mt-1">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="19" height="19" rx="1.5" stroke="#A11D18" />
                <path d="M5 10L8.5 13.5L15 7" stroke="#A11D18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
        <span className="text-[15px] font-medium text-black/80">{text}</span>
    </li>
);
