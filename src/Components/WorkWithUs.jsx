import WorkWithUS from '../Img/workWithUs.jpeg'

const WorkWithUs = () => {
  return (
    <div>

        <div
            className="font-playfair relative top-0 left-0 w-full h-[500px] bg-cover bg-center"
            style={{ backgroundImage: `url(${WorkWithUS})`, }}
        >
            <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                <div className="text-center pb-4">
                    <h1 className="text-4xl md:text-4xl lg:text-4xl text-white mb-4">
                         Work With Us
                    </h1>
                    <p className="font-karla text-md text-white w-full md:w-[600px] px-4 md:px-10 mb-8">
                         With decades of experience in luxurious Tri Valley real estate, our team is here to ensure that your dreams are a reality. Let us guide you through your home buying journey, contact us today!
                    </p>
                    <div className="flex justify-center">
                    <button className="font-karla font-bold px-6 py-3 border-2 border-white text-white bg-transparent rounded-md hover:bg-white hover:text-black text-lg transition-colors">
                         Contact Us
                    </button>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkWithUs