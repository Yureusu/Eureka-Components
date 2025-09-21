import React, { useRef, useEffect } from 'react';

type ShowcaseInfo = {
  image1: React.ImgHTMLAttributes<HTMLImageElement>;
  image2: React.ImgHTMLAttributes<HTMLImageElement>;
  description1: string;
  description2: string;
  isDark: boolean;
};

const Showcase: React.FC<ShowcaseInfo> = ({ image1, image2, description1, description2, isDark }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      container.scrollBy({
        left: event.deltaY < 0 ? -180 : 180,
      });
    };

    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      className={`show-case ${isDark ? "bg-[var(--text-color)] text-[var(--bg-color)]" : "bg-[var(--bg-color)] text-[var(--text-color)]"}
        h-screen w-full max-w-screen overflow-x-scroll flex items-center justify-start no-scrollbar`}
    >
      <div className="h-full w-full bg-transparent shrink-0 flex flex-col items-center justify-center gap-[calc(0.6vw+0.4rem)]">
        <img {...image1} />
        <p className='text-center text-[calc(0.6vw+0.4rem)]'>{description1}</p>
      </div>
      <div className="h-full w-full bg-transparent shrink-0 flex flex-col items-center justify-center gap-[calc(0.6vw+0.4rem)]">
        <img {...image2} />
        <p className='text-center text-[calc(0.6vw+0.4rem)]'>{description2}</p>
      </div>
    </div>
  );
};

export default Showcase;
