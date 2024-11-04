import Woman from '../Img/women.jpeg'
import Shelves from '../Img/shelves.jpeg'
import TimeClock from '../Img/timeclock.jpeg'
import Vase from '../Img/vase.jpeg'
import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Intro = () => {
    useEffect(() => {
        AOS.init();
      }, [])

  return (
    <div className='px-14 py-14'>
        <div className="relative h-64 w-full overflow-hidden">
            {/* Background Image */}
            <img 
                src={Woman}
                alt="Background"
                className="object-cover w-full h-full"
            />
            {/* Overlay with Flexbox Centering */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <h1 data-aos="fade-down" data-aos-anchor-placement="bottom-bottom" className="font-playfair text-white text-3xl md:text-5xl font-bold">Decore Guidance</h1>
            </div>
        </div>

        <div className="relative h-64 w-full overflow-hidden">
            {/* Background Image */}
            <img 
                src={Shelves}
                alt="Background"
                className="object-cover w-full h-full"
            />
            {/* Overlay with Flexbox Centering */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div>
                    <h1 data-aos="fade-down" data-aos-anchor-placement="bottom-bottom" className="font-playfair text-white text-3xl md:text-5xl font-bold">My Staging Expertise</h1>
                        
                </div>
                
            </div>
        </div>

        <div className="relative h-64 w-full overflow-hidden">
            {/* Background Image */}
            <img 
                src={TimeClock}
                alt="Background"
                className="object-cover w-full h-full"
            />
            {/* Overlay with Flexbox Centering */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <h1 data-aos="fade-down" data-aos-anchor-placement="bottom-bottom" className="font-playfair text-white text-3xl md:text-5xl font-bold">Intentional Layout</h1>
            </div>
        </div>

        <div className="relative h-64 w-full overflow-hidden">
            {/* Background Image */}
            <img 
                src={Vase}
                alt="Background"
                className="object-cover w-full h-full"
            />
            {/* Overlay with Flexbox Centering */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                {/* <h1 className="font-playfair text-white text-3xl md:text-5xl font-bold">Intentional Layout</h1> */}
                <ul data-aos="fade-down" data-aos-anchor-placement="bottom-bottom" className="font-karla text-white list-disc mt-5 ml-10">
                            <li>Unclutter and organize your home</li>
                            <li>Neatly arrange drawers and cabinets</li>
                            <li>Keep pets outdoors or off the premises</li>
                            <li>Play soft music</li>
                        </ul>
            </div>
        </div>
    </div>

    
  )
}

export default Intro