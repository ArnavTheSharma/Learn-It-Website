import pastEvents from './pastEventsDesc';
import EventsList from '../../components/EventsList';
import hackathon from "./eventImages/pastEvents/hackathon.png";
import hackathon2 from "./eventImages/pastEvents/hackathon2.png";

function EventsListPage() {

    return (
        <div className="EventsListPageContainer">
            <div className='upcomingContainer'>
                <h1>Upcoming Events</h1>
                <p style={{"display": "inline-block", width: "80vw", "text-wrap": "balance", "font-size": "x-large",}}>To sign up for any events please fill out the <a href="https://docs.google.com/forms/d/e/1FAIpQLSfeEdhXjwm2WP-_6tFYKegiToCikM93qCdg5r4G3dBsWXhcDg/viewform" target="_blank">general member form</a> and all information about upcoming webinars will be forwarded to you!</p>
                {/* <EventsList events={upcomingEvents} /> */}
            </div>


            <h1>Our Past Events</h1>
            <div className="hackathonContainer">
            <a href="https://learn-it-global-hackathon.devpost.com/" target="_blank">
                    <h3>Featured: Learn It Global Hackathon</h3>
                    <div className='hackathonImage'><img src={hackathon}></img></div>
                    <p style={{"color": 'white', "font-weight": "bold"}}>Project Gallery</p>
                    <div className='hackathonImage'><img src={hackathon2}></img></div>
            </a>
            </div>

            <div className="pastEventsContainer">
                <EventsList events={pastEvents} />
            </div>
        </div>
    );
}

export default EventsListPage;