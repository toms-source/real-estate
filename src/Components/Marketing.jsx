import ResponsiveIco from '../Icons/responseIco.jpeg'
import SyndicationIco from '../Icons/syndicationIco.jpeg'
import VirtualTour from '../Icons/virtualTour.jpeg'
import Drone from '../Icons/Drone.jpeg'
import Photography from '../Icons/photographyIco.jpeg'
import Tablet from '../Img/tablet.jpeg'

const Marketing = () => {
  return (
    <div>
        <h1 className='font-playfair text-3xl md:text-4xl lg:text-5xl mb-10 text-center'>Comprehensive Marketing Plan</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-14'>
          <div>
            <div className='flex justify-center'> 
              <img src={ResponsiveIco} alt="" className="w-[150px] max-w-full h-auto rounded-lg shadow-md"/>
            </div>

            <div className='mx-10 text-center'>
              <div>
                <h3 className='font-playfair text-2xl py-4'>Responsive</h3>
              </div>

              <div >
                <p className='font-karla'>I am always available via phone, text, or email.</p>
              </div>
            </div>
          </div>

          <div>
            <div className='flex justify-center'> 
              <img src={SyndicationIco} alt="" className="w-[150px] max-w-full h-auto rounded-lg shadow-md"/>
            </div>

            <div className='mx-10 text-center'>
              <div>
                <h3 className='font-playfair text-2xl py-4'>Syndication</h3>
              </div>

              <div >
                <p className='font-karla'>I market your property locally, nationally, and internationally</p>
              </div>
            </div>
          </div>

          <div>
            <div className='flex justify-center'> 
              <img src={VirtualTour} alt="" className="w-[150px] max-w-full h-auto rounded-lg shadow-md"/>
            </div>

            <div className='mx-10 text-center'>
              <div>
                <h3 className='font-playfair text-2xl py-4'>Virtual Tour</h3>
              </div>

              <div >
                <p className='font-karla'>Let's make your home stand out with a high quality virtual tour.</p>
              </div>
            </div>
          </div>


        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-14 mt-10 gap-4'>

          <div>
            <img src={Tablet} alt="" />
          </div>

          <div className='flex flex-col items-center'>
            <div className='flex justify-center'> 
              <img src={Drone} alt="" className="w-[150px] max-w-full h-auto rounded-lg shadow-md"/>
            </div>

            <div className='mx-10 text-center'>
              <div>
                <h3 className='font-playfair text-2xl py-4'>Drone Photography</h3>
              </div>

              <div >
                <p className='font-karla'>Beautiful photography is a central part of our marketing plan for your property.</p>
              </div>
            </div>
          </div>

          <div>
            <div className='flex justify-center'> 
              <img src={Photography} alt="" className="w-[150px] max-w-full h-auto rounded-lg shadow-md"/>
            </div>

            <div className='mx-10 text-center'>
              <div>
                <h3 className='font-playfair text-2xl py-4'>Photography</h3>
              </div>

              <div >
                <p className='font-karla'>Beatiful, high-end photography is a central part of our marketing plan for your property.</p>
              </div>
            </div>
          </div>
          
        </div>
        

    </div>
  )
}

export default Marketing