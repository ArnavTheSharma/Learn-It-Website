import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import Section2 from "./section2/section2";
import Section3 from "./section3/Section3";
import homeImage from "./learn-it-final-product.gif";

function HomePage() {
    const navigate = useNavigate();

    return (
       <>
        {/* Landing page */}
        <div className="homeContainer">
            {/* <img className="backgroundImage" src={homeImage}></img> */}
            <div className="titleWrapper">
                <h1>Learn It</h1>
                <h2><span>Bridging Gaps, Creating Opportunities</span></h2>
                <button className="joinUsButton" onClick={() => {navigate('/join-us');}}>Join US</button>
            </div>
            <img className="image" src={homeImage}></img>
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