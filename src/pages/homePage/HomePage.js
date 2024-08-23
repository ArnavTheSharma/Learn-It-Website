import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import Section3 from "./sections/section3/Section3";


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
        {/*  Section with 23 partners, volunteer count, webinar count */}
        <section className="">
            <Section3 />
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