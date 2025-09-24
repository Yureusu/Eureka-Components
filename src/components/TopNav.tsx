import type { JSX } from "react";

type TopNavInfo = {
    titles: JSX.Element[];
}

const TopNav: React.FC<TopNavInfo> = ({ titles }) => {

    return(
        <div title="Top Navigation" className={`flex flex-row items-center justify-center px-[calc(0.6vw+0.4rem)] py-[calc(0.4vw+0.2rem)] gap-[calc(0.6vw+0.4rem)]`}>
            {titles.map((title, index) => (
                <div key={index} className={`text-[calc(0.6vw+0.4rem)] cursor-pointer text-[var(--placeholder-color)] hover:text-[var(--text-color)]`}>{title}</div>
            ))}
        </div> 
    )
}

export default TopNav;