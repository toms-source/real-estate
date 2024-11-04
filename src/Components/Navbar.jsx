import { useState, useEffect } from 'react';
import Logo from '../Logo/jhsereno-light.jpeg';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [scrolled, setScrolled] = useState(false);

    const handleLinkClick = () => {
        setNavbar(false);
    };

    const handleScroll = () => {
        if (typeof window !== "undefined") {
            if (window.scrollY > lastScrollY) {
                setShowNavbar(false); // Scrolling down
            } else {
                setShowNavbar(true); // Scrolling up
            }
            setLastScrollY(window.scrollY);

            // Change background color based on scroll position
            setScrolled(window.scrollY > 50); // Adjust threshold as needed
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <div className={`font-karla w-full sticky z-50 py-4 top-0 transition-all duration-300 ${scrolled ? 'bg-black text-white' : 'bg-transparent text-white'}`}>
            <div className="flex justify-between items-center px-4 mx-auto lg:max-w-7xl md:items-center md:px-8">
                {/* Logo Section */}
                <div className="flex-1">
                    <a href="#">
                        <img src={Logo} alt="Logo" className="w-[200px] h-auto" />
                    </a>
                </div>
                {/* Hamburger Menu Button */}
                <div className="flex items-center space-x-2">
                    <h3 className="text-lg font-semibold">Services</h3>
                    <button
                        className="p-2 rounded-md outline-none focus:border-gray-400 focus:border"
                        onClick={() => setNavbar(!navbar)}
                    >
                        {navbar ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Menu for mobile view */}
                <div className={`fixed inset-0 bg-black opacity-[80%] transform ${navbar ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
                    <div className="flex flex-col w-full h-full">
                        {/* Close Button */}
                        <button className="p-4 text-white absolute top-4 right-4" onClick={() => setNavbar(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="flex-1 pb-3 mt-8">
                            <ul className="flex flex-col items-center space-y-8">
                                <li className="font-bold text-white hover:text-blue-600 active:text-blue-600">
                                    <a href="#home" onClick={handleLinkClick}>Meet the team</a>
                                </li>
                                <li className="font-bold text-white hover:text-blue-600 active:text-blue-600">
                                    <a href="#services" onClick={handleLinkClick}>Search for homes</a>
                                </li>
                                <li className="font-bold text-white hover:text-blue-600 active:text-blue-600">
                                    <a href="#project" onClick={handleLinkClick}>Communities</a>
                                </li>
                                <li className="font-bold text-white hover:text-blue-600 active:text-blue-600">
                                    <a href="#skills" onClick={handleLinkClick}>Home valuation</a>
                                </li>
                                <li className="font-bold text-white hover:text-blue-600 active:text-blue-600">
                                    <a href="#resume" onClick={handleLinkClick}>Services</a>
                                </li>
                                <li className="font-bold text-white hover:text-blue-600 active:text-blue-600">
                                    <a href="#america" onClick={handleLinkClick}>Home across America</a>
                                </li>
                                <li className="font-bold text-white hover:text-blue-600 active:text-blue-600">
                                    <a href="#testimonials" onClick={handleLinkClick}>Testimonials</a>
                                </li>
                                <li className="font-bold text-white hover:text-blue-600 active:text-blue-600">
                                    <a href="#contacts" onClick={handleLinkClick}>Contacts</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
