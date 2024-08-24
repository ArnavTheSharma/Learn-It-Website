import "./section2.css";
import Certification1 from "./501c3.png";
import Certification2 from "./CMHQ.png";


function Section2() {
    function revealText() {
        document.getElementById("certificateText").hidden=false;
    }
    function hideText() {
        document.getElementById("certificateText").hidden=true;
    }
    return(
        <>
        <div className="section2Container">
            {/* About Learn It + Mission + Certification*/}
            <h1 className="title">Our Story</h1>
            <p className="text">Learn It began as a small passion project from three high school sophomores who simply wanted to bridge the accessibility gap for high-quality STEM education for communities worldwide. Now, the organization has grown to be a 500-member-plus program with various international platforms.</p>

            <div className="middle">
                <img className="Certification1" src={Certification1}></img>
                <p className="certificateText" id="certificateText">Learn It is a proud 501(c)(3) certified non-profit organization working to bridge the STEM education accessibility gap by providing free STEM education and career-exploration resources for all.</p>
            </div>

            <div className="right">
                <img src={Certification2} alt="CMHQ Verification Badge"></img>
                <p className="certificateText">Learn It is pleased to announce that we are officially impact-certified! Over the past few months, the Learn It team has worked tirelessly to expand our organization and impact as many people as possible.</p>
            </div>
        </div>
        </>
    );
}

export default Section2;