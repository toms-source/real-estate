import HeroImage from '../Img/hero.jpeg'

const Hero = () => {
  return (
    <>
        <div
            className="font-playfair absolute top-0 left-0 w-full h-[90%] bg-cover bg-center"
            style={{ backgroundImage: `url(${HeroImage})`, }}
        >
            <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                <div className="text-center pb-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                        Journey to find your Dream Home
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-8">
                        Find what you need with our easy-to-use search.
                    </p>

                
                    <div className="flex justify-center">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="px-4 py-2 bg-white bg-opacity-75 rounded-l-md w-full max-w-md focus:outline-none"
                        />
                        <button className="px-4 py-2 bg-black text-white rounded-r-md hover:bg-slate-950">
                            Search
                        </button>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero