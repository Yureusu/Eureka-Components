import { useEffect } from 'react';
import { gsap } from 'gsap';

function Eureka() {

    useEffect(() => {
        gsap.to('.box', {
            rotateY: 180,
            x: 200,
            duration: 4,
            backgroundColor: 'var(--placeholder-color)',
            rotation: 360,
            scale: 2
        });
    }, []);

    return (
        <div className='h-auto w-auto flex flex-row items-center justify-center'>
            <span className="box h-[calc(1vw+1rem)] w-[calc(1vw+1rem)] bg-[var(--text-color)]"></span>
        </div>
    )
}

export default Eureka
