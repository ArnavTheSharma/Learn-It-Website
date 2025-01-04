import "../../App.css";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import Section2 from "./section2/section2";
import Section3 from "./section3/Section3";


function HomePage() {
    const navigate = useNavigate();

    return (
       <>
        {/* Landing page */}
        <div className="homeContainer">
            <div className="titleWrapper">
                <h1 className='pageTitle'>Learn It:</h1>
                <h2><span>Bridging Gaps, Creating Opportunities</span></h2>
                <button className="joinUsButton" onClick={() => {navigate('/join-us');}}>Join US</button>
            </div>
        </div>

        {/* About Learn It, certifications, Mission */}
        <Section2 />
        {/*  Section with 23 partners, volunteer count, webinar count */}
        <Section3 />
        {/* Join Us and Contact Us Page Redirects  */}
        {/* Upcoming Events Section (Preview)  */}
        {/* Partners Section  */}
        <section id="partners" className="my-7 pt-10" >
                {/* Partners Section */}
        </section>
        </>

    );
}


export default HomePage;