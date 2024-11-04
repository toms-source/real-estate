import Picture1 from '../Img/women(2).jpeg'
import Picture2 from '../Img/women(3).jpeg'
import Tablet from '../Img/commTablet.jpeg'
import Intro from './Intro'
import Marketing from './Marketing'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Founder = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
<div className="mt-[80vh] pt-10">
           
    <div className="flex flex-col md:flex-row gap-4 px-10">
        {/* First Text Block */}
        <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" className="flex flex-col justify-center items-center text-center md:w-1/2">
            <h2 className="font-playfair font-medium text-3xl md:text-4xl lg:text-5xl mb-10">
                Over 33 Years of Real Estate Success
            </h2>
            <p className="font-karla text-justify">
                We provide every one of our clients with a level of service they won’t find anywhere else. We give them what they need, often before they know they need it. In real estate, almost everything can be negotiated. When you choose Hansen Partners, its experience is 100% nonnegotiable. And it’s an experience like no other.
            </p>
        </div>

        {/* First Image */}
        <div className="flex justify-center md:w-1/2 h-[400px]">
            <img src={Picture1} alt="" className="max-w-full h-auto" />
        </div>
    </div>

    <div className="flex flex-col md:flex-row gap-4 px-10 md:gap-0 my-10">

        {/* Second Text Block */}
        <div  data-aos="fade-up" data-aos-anchor-placement="bottom-bottom"  className="flex flex-col justify-center items-center text-center md:w-1/2 md:order-2">
            <h2 className="font-playfair font-medium text-xl md:text-2xl lg:text-3xl mb-10">
                We Want To Create An Unforgettable Experience For You...
            </h2>
            <p className="font-karla text-justify">
                We combine data gained from your home’s Comparative Market Analysis with local market research to create a marketing plan designed to help you meet your selling goals. Your home’s carefully designed plan will include a range of online, print, and other marketing tools targeted to the best-qualified pool of buyers. Successfully marketing a home in today’s real estate environment requires a firm with experience and flexibility. Hansen Partners provides both.
            </p>
        </div>

        {/* Second Image */}
        <div className="flex justify-center md:w-1/2 md:order-1 h-[400px]">
            <img src={Picture2} alt="" className="max-w-full h-auto" />
        </div>
    </div>


<Marketing />
<Intro />


    <div>
        <div>
            <h1 className='font-playfair font-medium text-xl px-10 md:text-2xl lg:text-3xl lg:mb-10 md:mb-6 text-center'>The Hansen Partners Communications Tablet</h1>
            <p className="font-karla text-justify px-16">We have created this as a wonderful tool so that we can communicate with you daily, provide you with updates on what is happening with your home. We are available at the with a click of your tablet.</p>
        </div>
        <div className='pt-4 pb-6 px-14'> 
            <img src={Tablet} alt="" className='w-screen h-auto'/>
        </div>
       
       <div className='flex flex-col md:flex-row px-14 pb-10'>
        <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" className='font-karla flex-1'>
            <h4 className='font-bold'>Benefits</h4>
            <ul className="list-disc pl-5">
                <li>Review all documents and sign in the comfort of your home or anywhere.</li>
                <li>Stay up to date on all marketing activities, review materials, photos, etc. in real time.</li>
                <li>Meet with us face to face on our Gotomeeting.com platform to go over and discuss the events of the week.</li>
                <li>You have your own email assigned just for you and your common space to quickly write a note, or quickly send a video message to us for fast communication using our Bomb bomb video messaging system</li>
            </ul>
        </div>

        <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="200" className='font-karla text-justify ml-4 flex-1'>
            <p>
                <span className="text-3xl font-extrabold">W</span>
                e believe that transparency and guiding you and your family through the process is key to having the best experience. During these uncertain times, it is a good feeling to know you have someone with a proven track record you can count on. We will be here to handle your needs during the Real Estate process. We think of it before a need even arises. Because, that is just what we do. Who you work with does matter!
            </p>
        </div>
       </div>
    </div>

       
</div>
  )
}

export default Founder