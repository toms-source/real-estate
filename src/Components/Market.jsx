import Partners from '../Img/partners.jpeg'
import WereGlobal from '../Img/wereGlobal.jpeg'
import OurPartnersLuxary from '../Img/ourPartnersInLuxary.jpeg'
import Partnera from '../Img/partners(1).jpeg'
import Partnerb from '../Img/partners(2).jpeg'
import Partnerc from '../Img/partners(3).jpeg'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Market = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div className='px-14 py-10'>
        <div className='flex justify-center'>
            <img src={Partners} alt="" className='w-[150px]'/>
        </div>


        <div className='my-10'>
            <h1 className='font-playfair font-medium text-xl md:text-2xl lg:text-3xl text-center'>We Market Your Home to The World</h1>
        </div>

        <div>
            <h1 className='font-karla font-bold text-md md:text-xl lg:text-2xl text-center'>Our Online Marketing Strategy</h1>
            <p className='font-karla text-center mt-6'>​​​​​​​The Bay Area remains one of the world's most sought-after regions to live in, and when looking to sell, it is vital that your home be marketed online to audiences locally, nationally, and internationally.</p>



            
            <div className="font-karla">
                <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-1 gap-6">
                    <div data-aos="flip-right" data-aos-delay="200">
                        <h3 className="font-bold text-center my-4">Local Exposure</h3>
                        <p className='text-justify'>
                            Through our partnership with Nextdoor, the private online social network now used in over 80% of U.S. neighborhoods and virtually all Bay Area neighborhoods, we make sure your home receives targeted local exposure. When you list your home with Hansen Partners it will automatically appear on Nextdoor in your neighborhood.
                        </p>
                    </div>

                    <div data-aos="flip-right" data-aos-delay="200">
                        <h3 className="font-bold text-center my-4">National Exposure</h3>
                        <p className='text-justify'>
                            We secure strategic positioning and enhancement on Realtor.com, Trulia, and Zillow, driving more consumers to your home and increasing exposure. We will receive every inquiry about your property directly.
                        </p>
                    </div>

                    <div data-aos="flip-right" data-aos-delay="200">
                        <h3 className="font-bold text-center my-4">International Exposure</h3>
                        <p className='text-justify'>
                            To expose your luxury listing to millions of potential homebuyers worldwide, we promote on prominent international real estate portals, including: Wall Street Journal, LuxuryPortfolio.com, LuxuryRealEstate.com, LeadingRE.com, UniqueHomes.com, China.apr.com, Caimeiju, Juwai, Country Life UK.
                        </p>
                    </div>
                </div>
            </div>

        </div>



        <div className="flex flex-col md:flex-row gap-4 ">
            {/* First Text Block */}
            <div className="flex flex-col justify-center items-center text-center md:w-1/2">
                <div className='flex gap-6 mb-6'>
                    <img src={Partnera} alt="" className='h-[50px] '/>
                    <img src={Partnerb} alt="" className='h-[50px]'/>
                    <img src={Partnerc} alt="" className='h-[50px]'/>
                </div>

                <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" >
                    <p className="font-karla mb-8">
                    Leading Real Estate Companies of The World® & Luxury Portfolio International
                    </p>
                    <p className='font-karla text-justify'>JRockcliff is a founding member of Luxury Portfolio International®, the luxury division of Leading Real Estate Companies of the World®. With more than 500 member firms around the world, Our luxury listings are exposed to a vast global audience and reach potential buyers and investors in over 50 countries.</p>
                
                    <div className='font-karla mt-8'>
                        <p>Who's Who in Luxury Real Estate</p>
                    </div>
                </div>
                
            </div>

            {/* First Image */}
            <div className="flex justify-center md:w-1/2 h-[400px]">
                <img src={OurPartnersLuxary} alt="" className="max-w-full h-auto" />
            </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 px-10 md:gap-0 my-10">

                {/* Second Text Block */}
                <div  data-aos="fade-up" data-aos-anchor-placement="bottom-bottom"  className="flex flex-col justify-center items-center text-center md:w-1/2 md:order-2">
                
                    <p className="font-karla text-justify">
                    Through our international affiliations, we have a strong presence in over 50 countries. Our luxury listings are sent to prominent international real estate sites, reaching over 70 million potential buyers and investors worldwide through our relationships with:
                    </p>

                    <div className='flex gap-6 my-6'>
                        <img src={Partnera} alt="" className='h-[50px]'/>
                        <img src={Partnerb} alt="" className='h-[50px]'/>
                        <img src={Partnerc} alt="" className='h-[50px]'/>
                    </div>

                    <p className="font-karla text-justify">
                    We also have several well-positioned affiliate offices in China, providing our clients with access to buyers in Hong Kong, Shanghai, and Beijing. 
                    </p>
                </div>

                {/* Second Image */}
                <div className="flex justify-center md:w-1/2 h-[400px]">
                    <img src={WereGlobal} alt="" className="max-w-full h-auto" />
                </div>
        </div>

    </div>
  )
}

export default Market