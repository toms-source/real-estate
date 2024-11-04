import { useEffect } from 'react';
import { FaCalendarCheck } from 'react-icons/fa';

const Appointment = () => {
    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes bounce {
                0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
                40% { transform: translateY(-10px); }
                60% { transform: translateY(-5px); }
            }
            .bounce {
                animation: bounce 1.5s infinite;
            }
        `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style); // Clean up on unmount
        };
    }, []);

    return (
        <div className="fixed bottom-4 right-4 flex flex-col space-y-3 z-50">
            {/* Appointment Icon with Text */}
            <a 
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 bg-zinc-800 text-white rounded shadow-lg hover:bg-zinc-900 transition duration-300 bounce" // Add bounce class here
            >
                <FaCalendarCheck className="mr-2" />
                <p>Appointment</p>
            </a>
        </div>
    );
};

export default Appointment;