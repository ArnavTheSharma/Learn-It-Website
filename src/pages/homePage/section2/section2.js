import "./section2.css";
import Certification1 from "./501c3.png";
import Certification2 from "./CMHQ.png";
import { TypeAnimation } from 'react-type-animation';


function Section2() {
    return(
        <>
        <div className="section2Container">
            {/* About Learn It + Mission + Certification*/}
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Our Journey',
                    3000, // wait 3s 
                    'Our Mission',
                    3000,
                    'Our Impact',
                    3000
                ]}
                wrapper="span"
                speed={10}
                className="title"
                repeat={Infinity}
            />

            {/* <h2 className="title">Our Story</h2> */}
            <p className="text">Learn It began as a small passion project from three high school sophomores who simply wanted to bridge the accessibility gap for high-quality STEM education for communities worldwide. Now, we have grown to be a 500-member-plus program with various international platforms!</p>

            <div className="middle">
                <img style={{"background-color": "#F7F2F7"}} src={Certification1}></img>
                <p className="certificateText" id="certificateText">Learn It is a proud 501(c)(3) certified non-profit working to bridge the STEM education accessibility gap by providing free college prep, career, and academic resources resources for all! </p>
            </div>

            <div className="right">
                <img src={Certification2} alt="CMHQ Verification Badge"></img>
                <p className="certificateText">This certificate verifies that Learn It is a youth-led nonprofit that has achieved substantial impact and created positive change within the communities and among the individuals they strive to support!</p>
            </div>
        </div>
        </>
    );
}

export default Section2;