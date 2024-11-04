import { useState } from 'react';
const Bottom = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [inputValue, setInputValue] = useState('');
  
    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic
      console.log('Input Value:', inputValue);
      console.log('Agreed to Privacy Policy:', isChecked);
    };
  return (

    
    <> 

<div className="px-4 py-10 md:px-14">
    <div className="flex flex-col md:flex-row">
        <div className="flex-1 p-4 md:p-8">
            <h2 className="font-playfair text-xl md:text-2xl lg:text-3xl mb-6 underline">
                Julie Hansen Partnership
            </h2>
            <p className="font-karla text-justify mb-6">
                An elite group of the East Bay’s most talented and visionary real estate professionals believed buyers and sellers deserved more from their real estate company. More service. More resources. More integrity. More global reach. In a word, more of everything people should expect when they buy or sell their homes.
            </p>
            <div className="flex flex-col md:flex-row mt-12">
                <div className="flex-1 mb-4 md:mb-0">
                    <h1 className="font-karla font-bold">ADDRESS</h1>
                    <p>
                        <div>4733 Chabot Drive #100</div>
                        <div>Pleasanton, CA 94588</div>
                    </p>
                </div>
                <div className="flex-1">
                    <h1 className="font-karla font-bold">CONTACT INFORMATION</h1>
                    <p>
                        <div>(925) 553-6707</div>
                        <div>luxuryhomesinwc@icloud.com</div>
                    </p>
                </div>
            </div>
        </div>

        <div className="flex-1 p-4 md:p-8">
            <div>
                <h2 className="font-playfair text-xl md:text-2xl lg:text-3xl mb-6 underline">
                    Newsletter
                </h2>
                <p className="font-karla text-justify mb-6">
                    Subscribe to our Newsletter for latest news and updates. Stay tuned!
                </p>
            </div>
            
            <div>
                <form onSubmit={handleSubmit} className="flex flex-col items-center mt-8">
                    <div className="relative w-full mb-4">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Enter text"
                            className="w-full border-b-2 border-gray-300 focus:border-black outline-none transition duration-200"
                        />
                    </div>
                    <label className="flex items-start mb-4 text-sm md:text-base">
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            className="mr-2"
                        />
                        <span className="text-black text-justify">
                            By providing Julie Hansen Partnership your contact information, you acknowledge and agree to our Privacy Policy and consent to receiving marketing communications, including through automated calls, texts, and emails, some of which may use artificial or prerecorded voices. This consent isn’t necessary for purchasing any products or services and you may opt out at any time. To opt out from texts, you can reply, ‘stop’ at any time. To opt out from emails, you can click on the unsubscribe link in the emails. Message and data rates may apply.
                        </span>
                    </label>
                    <button
                        type="submit"
                        className="px-8 py-4 border-2 border-black bg-transparent font-bold text-black rounded hover:bg-black hover:text-white transition duration-200"
                        disabled={!isChecked || !inputValue}
                    >
                        SUBSCRIBE
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>


    </>
   
  )
}

export default Bottom