import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import Section2 from "./section2/section2.js";


function HomePage() {
    const navigate = useNavigate();

    return (
        <>
        {/* Landing page */}
        <div className="homeContainer">
            <h1>Your Path to College and Career Success Starts <span>Here</span></h1>
            <button className="joinUsButton" onClick={() => {navigate('/join-us');}}>Join US</button>
        </div>
        {/* About Learn It, certifications, Mission */}
        <Section2/>
        {/* About Learn It, certifications, Mission */}
        {/* Join Us and Contact Us Page Redirects  */}
        {/* Upcoming Events Section (Preview)  */}
        </>
    );
}


export default HomePage;