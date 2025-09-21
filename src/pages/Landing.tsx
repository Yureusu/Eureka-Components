import { useState } from "react";
import Header from "../components/Header";
import Showcase from "../components/Showcase";
import ImageCarousel from "../components/ImageCarousel";

function Landing() {

    const [isDark, setIsDark] = useState(false);

    return (
        <div className={`${isDark? "text-[var(--bg-color)] bg-[var(--text-color)]" : "text-[var(--text-color)] bg-[var(--bg-color)]"} 
            h-auto w-full flex flex-col items-center justify-start p-[calc(0.6vw+0.4rem)] `}>
            <Header isDark={isDark} setIsDark={setIsDark}/>
            <Showcase isDark={isDark} 
                image1={{src: "/src/assets/img/Cat1.jpg", width: "240px", height: "240px"}}
                description1={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis veritatis nihil sint quibusdam blanditiis, beatae accusamus nisi obcaecati, eum quae maxime aspernatur eius similique iste officia fugit explicabo? Minus, facilis."}
                image2={{src: "/src/assets/img/Cat2.jpg", width: "240px", height: "240px"}}
                description2={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis veritatis nihil sint quibusdam blanditiis, beatae accusamus nisi obcaecati, eum quae maxime aspernatur eius similique iste officia fugit explicabo? Minus, facilis."}            
            />
            <ImageCarousel 
                image1={{src: "/src/assets/img/Cat1.jpg"}}
                image2={{src: "/src/assets/img/Cat2.jpg"}}
                image3={{src: "/src/assets/img/Cat3.jpg"}}
                image4={{src: "/src/assets/img/Cat4.jpg"}}
            />
        </div>
    )
}

export default Landing
