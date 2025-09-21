import React from "react"

type CarouselImgs = {
    image1: React.ImgHTMLAttributes<HTMLImageElement>;
    image2: React.ImgHTMLAttributes<HTMLImageElement>;
    image3: React.ImgHTMLAttributes<HTMLImageElement>;
    image4: React.ImgHTMLAttributes<HTMLImageElement>;
}

const ImageCarousel: React.FC<CarouselImgs> = ({image1, image2, image3, image4}) => {


    const images = [image1, image2, image3, image4];
    const duplicatedImages = [...images, ...images];
  
    return(
        <div className="overflow-hidden w-[90%] rounded-xl flex flex-col items-center justify-center border-2 border-[var(--border-color)] group">
            <div className="min-w-full image-carousel flex flex-row items-center justify-start animate-scroll-x gap-[calc(0.6vw+0.4rem)]">
                {duplicatedImages.map((imgProps, index) => (
                    <img
                        key={index}
                        {...imgProps}
                        alt=""
                        className="h-[calc(6vw+8rem)] w-[calc(6vw+8rem)] cursor-pointer grayscale hover:grayscale-0 transition duration-300"
                    />
                ))}
            </div>
        </div>
    )
}
  

export default ImageCarousel
