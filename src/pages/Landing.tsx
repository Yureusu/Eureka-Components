import { useState } from "react";
import Header from "../components/Header";
import Showcase from "../components/Showcase";
import ImageCarousel from "../components/ImageCarousel";
import Cat1 from "../assets/img/Cat1.jpg"
import Cat2 from "../assets/img/Cat2.jpg"
import Cat3 from "../assets/img/Cat3.jpg"
import Cat4 from "../assets/img/Cat4.jpg"

function Landing() {

    const [isDark, setIsDark] = useState(false);

    return (
        <div className={`${isDark? "text-[var(--bg-color)] bg-[var(--text-color)]" : "text-[var(--text-color)] bg-[var(--bg-color)]"} 
            h-auto w-full flex flex-col items-center justify-start p-[calc(0.6vw+0.4rem)] `}>
            <Header isDark={isDark} setIsDark={setIsDark}/>
            <Showcase isDark={isDark} 
                image1={{src: Cat1, width: "240px", height: "240px"}}
                description1={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis veritatis nihil sint quibusdam blanditiis, beatae accusamus nisi obcaecati, eum quae maxime aspernatur eius similique iste officia fugit explicabo? Minus, facilis."}
                image2={{src: Cat2, width: "240px", height: "240px"}}
                description2={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis veritatis nihil sint quibusdam blanditiis, beatae accusamus nisi obcaecati, eum quae maxime aspernatur eius similique iste officia fugit explicabo? Minus, facilis."}            
            />
            <ImageCarousel 
                image1={{src: Cat1}}
                image2={{src: Cat2}}
                image3={{src: Cat3}}
                image4={{src: Cat4}}
            />
        </div>
    )
}

export default Landing
