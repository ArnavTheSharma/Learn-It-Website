import "./TeamPage.css"
function TeamPage() {
    return(
        <div className="teamPageContainer">
            <h1>Meet The Team</h1>
            <hr></hr>
            <h2>Founders</h2>
            <div className="teamContainer">
                <div className="teamMembers">
                    <img src="" alt="image"></img>
                    <h3>Piyusha Majgaonkar</h3>
                    <h4><a href="mailto:piyusha.majgaonkar@gmail.com">piyusha.majgaonkar@gmail.com</a></h4>
                </div>
                <div className="teamMembers">
                    <img src="" alt="image"></img>
                    <h3>Aryan Das</h3>
                    <h4><a href="mailto:itsaryandas15@gmail.com">itsaryandas15@gmail.com</a></h4>
                </div>
                <div className="teamMembers">
                    <img src="" alt="image"></img>
                    <h3>Sunaina Pal</h3>
                    <h4><a href="mailto:sunainapal2006@gmail.com">sunainapal2006@gmail.com</a></h4>
                </div>
            </div>
            <p id="aboutTeam">Hi Everyone, we are the Co-Founders of Learn It! We are seniors from Massachusettes and we've always had a passion for learning and making a difference in our community. What better way to do that than to spread joy through our program? We hope you join us on this journey and learn a little something along the way!</p>
            <hr></hr>
            <h2>Social Media Manager</h2>
            <div id="socialMedia">
                <div id="socialMediaPic">
                    <img src="" alt="image"></img>
                    <h3>Himal Bokka</h3>
                    <h4><a href="mailto:Himalkumar2020@gmail.com">Himalkumar2020@gmail.com</a></h4>
                </div>
                <p id="socialText">Meet Himal Bokka, the  Social Media Manager here at Learn It. He is the design manager for the rocketry club at his high school and is part of the social media team at his local library. Himal loves to play sports like football, basketball, and soccer in his free time. Himal is willing to help out Learn It on the social media side of the organization and wants to contribute more to the Learn It group.</p>
            </div>
            <hr></hr>
            <h2>Communications Coordinator</h2>
            <div id="comm">
                <div id="commPic">
                    <img src="" alt="image"></img>
                    <h3>Merav Sriram</h3>
                    <h4><a href="mailto:meravsriram@gmail.com">meravsriram@gmail.com</a></h4>
                </div>
                <p id="commText">Merav Sriram, a rising junior in high school, is the new Communications Coordinator at Learn It Academics. He has made multiple appearances on TV show PL Fanzone, which features soccer enthusiasts as they compete in challenges and enjoys interviewing international soccer stars. Aside from his extensive theoretical knowledge, Merav enjoys competitive soccer, chess and debate, and is a part of NEFC. Merav is excited to contribute to the Learn It team and hopes to organize fun and effective events!</p>
            </div>
        </div>
    );
}

export default TeamPage;