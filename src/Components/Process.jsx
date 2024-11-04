import Picture from '../Img/sellingProcess.jpeg'
import Buying from '../Img/buyingProcess.jpeg'

const Process = () => {
  return (
    <div className="px-4 py-10 flex flex-col md:flex-row gap-4">
  
    <div className="flex-1 bg-white rounded-lg shadow-lg overflow-hidden rounded-tl-[50px] rounded-br-[50px] border border-black border-solid relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${Picture})` }} // Replace with your image URL
      />
      <div className="p-8 relative z-10 bg-black bg-opacity-50 text-white">
        <h1 className="font-playfair text-center font-medium text-xl md:text-2xl lg:text-3xl mb-10">
          The Selling Process
        </h1>
        <ol className="font-karla list-decimal list-inside space-y-2">
          <li>Initial Consultation & Planning</li>
          <li>Devise & Execute Marketing Plan</li>
          <li>Review Offers & Reach Agreement with Buyer</li>
          <li>Complete Transaction Process</li>
          <li>After - Sale Service</li>
        </ol>
      </div>
    </div>
  
    <div className="flex-1 bg-white rounded-lg shadow-lg overflow-hidden rounded-tl-[50px] rounded-br-[50px] border border-black border-solid relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${Buying})` }} // Replace with your image URL
      />
      <div className="p-12 relative z-10 bg-black bg-opacity-50 text-white">
        <h1 className="font-playfair text-center font-medium text-xl md:text-2xl lg:text-3xl mb-10">
          The Buying Process
        </h1>
        <ol className="font-karla list-decimal list-inside space-y-2">
          <li>Initial Consultation & Planning</li>
          <li>Search for a Home & Get Pre-Approved</li>
          <li>Submit an Offer</li>
          <li>Complete Settlement Process</li>
        </ol>
      </div>
    </div>
  
  </div>
  
  )
}

export default Process