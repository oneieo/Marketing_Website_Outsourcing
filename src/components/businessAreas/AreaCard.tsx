type AreaCardProps = {
    imgSrc: string;
    alt: string;
    title: string;
    description: React.ReactNode;
    className?: string;
};

export const AreaCard: React.FC<AreaCardProps> = ({
    imgSrc,
    alt,
    title,
    description,
    className,
}) => {
    return (
        <div
            className={`
        group flex flex-col items-center text-center p-8 rounded-lg
        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:shadow-[0px_20px_60px_rgba(0,0,0,0.12)]
        hover:bg-black/[0.02]
        ${className ?? ""}
      `}

        >
            {/* icon */}
            <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
                <img src={imgSrc} alt={alt} className="w-16 h-16 object-contain" />
            </div>

            <h3 className="text-2xl font-bold mb-4">{title}</h3>

            <p className="text-sm text-black/60 leading-relaxed break-keep">
                {description}
            </p>
        </div>
    );
};
