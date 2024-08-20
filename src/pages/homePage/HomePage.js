import "./HomePage.css";
import { useNavigate } from "react-router-dom";


function HomePage() {
    const navigate = useNavigate();

    return (
       <>
        {/* Landing page */}
        <div className="background"></div>
        <div className="homeContainer">
            <h1>Your Path to College and Career Success Starts <span>Here</span></h1>
            <button className="joinUsButton" onClick={() => {navigate('/join-us');}}>Join US</button>
        </div>

        {/* About Learn It, certifications, Mission */}
        <section>

        </section>
        {/* About Learn It, certifications, Mission */}
        <section>

        </section>
        {/* Join Us and Contact Us Page Redirects  */}
        <section>

        </section>
        {/* Upcoming Events Section (Preview)  */}
        <section>

        </section>
        </>

    );
}


export default HomePage;