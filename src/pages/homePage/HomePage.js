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
        <section className="my-6">
        earn It is a proud 501(c)(3) certified non-profit organization working to bridge the STEM
education accessibility gap by providing free STEM education and career-exploration
resources for all. Learn It recently gained a Youth-Led Non-Profit Organization Impact
Certification from CMHQ. This, in turn, means that Learn It will be expanding even more
internationally and will be launching more initiatives that will require more volunteers.
● We, here at Learn It, want to create a difference in our community and spread our
mutual joy for learning. We are working towards providing free extracurricular education
and tutoring services for youth around the country who wish to seek higher education in
STEM. This program aims to offer support and informational resources for students while
providing opportunities to gain volunteer hours for our members. We truly believe that
the first step to success is opening the door to knowledge.
● We are a student-run organization whose goal is to aid our student community by
providing FREE, informative, and educational college prep, career, and academic
resources. We host regular webinars regarding various college prep and career
exploration topics, and also offer various volunteer opportunities for our members.

        </section>
        {/* Upcoming Events Section (Preview)  */}
        <section className="my-6">
        earn It is a proud 501(c)(3) certified non-profit organization working to bridge the STEM
education accessibility gap by providing free STEM education and career-exploration
resources for all. Learn It recently gained a Youth-Led Non-Profit Organization Impact
Certification from CMHQ. This, in turn, means that Learn It will be expanding even more
internationally and will be launching more initiatives that will require more volunteers.
● We, here at Learn It, want to create a difference in our community and spread our
mutual joy for learning. We are working towards providing free extracurricular education
and tutoring services for youth around the country who wish to seek higher education in
STEM. This program aims to offer support and informational resources for students while
providing opportunities to gain volunteer hours for our members. We truly believe that
the first step to success is opening the door to knowledge.
● We are a student-run organization whose goal is to aid our student community by
providing FREE, informative, and educational college prep, career, and academic
resources. We host regular webinars regarding various college prep and career
exploration topics, and also offer various volunteer opportunities for our members.

        </section>
        {/* Partners Section  */}
        <section id="partners" >
                partners
        </section>
        </>

    );
}


export default HomePage;