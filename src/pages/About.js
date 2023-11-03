import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { FaXmark } from 'react-icons/fa6';
import WelcomeNavbar from '../components/WelcomeNavbar'

const About = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const navigate = useNavigate();

    return (
        <div>
            <WelcomeNavbar showLoginModal={() => setShowLoginModal(true)}/>

            <div className="flex flex-col items-center justify-center h-screen mt-5">
                <h1>About Us</h1>
                <p> Welcome to the Book Nook About Us page. We are a dedicated team of book enthusiasts working to provide you with the best resources for accessing the university library. </p>
                <p> Learn more about our mission, services, and how we can assist you in your academic journey. </p>
            </div>

            {/* Login Modal */}
            {showLoginModal && (
                <div className="absolute top-0 left-0 flex items-center justify-center w-screen h-screen bg-black bg-opacity-40">
                    <div className="flex flex-col items-center justify-center w-1/3 pb-10 bg-white bg-opacity-100 rounded-lg">
                        <div className="flex justify-end w-full p-4">
                            <FaXmark size={25} color="black" onClick={() => setShowLoginModal(false)} className="hover:cursor-pointer"/>
                        </div>
                        <button onClick={() => navigate("/user-login")} className="w-3/4 h-10 px-2 my-2 text-white bg-blue-500 rounded-md "> User Login </button>
                        <button onClick={() => navigate("/admin-login")} className="w-3/4 h-10 px-2 my-2 text-white bg-blue-500 rounded-md "> Admin Login </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default About