import type React from "react";

type ProfileInfo = {
    name: string;
    image: string;
    description: string;
}

const ProfileCard: React.FC<ProfileInfo> = ({
    name,
    image,
    description
}) => {
    return(
        <div title="Profile Card" className="h-auto w-[calc(8.8vw+8.2rem)] flex flex-col items-center justify-start
            m-[calc(0.4vw+0.2rem)] bg-transparent border-2 border-[var(--border-color)] p-[calc(0.6vw+0.4rem)] gap-[calc(0.6vw+0.4rem)] rounded-xl cursor-pointer">
            <img src={image} className={`h-[calc(3.8vw+3.2rem)] w-[calc(3.8vw+3.2rem)]
                rounded-full cursor-pointer`} alt="" />
            <p className="text-[calc(0.6vw+0.4rem)] cursor-pointer">{name}</p>
            <p className="text-[calc(0.6vw+0.3rem)] cursor-pointer text-center">{description}</p>
        </div>
    );
}

export default ProfileCard;