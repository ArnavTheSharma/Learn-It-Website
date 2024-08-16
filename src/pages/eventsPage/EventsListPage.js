import events from './events-desc';
import EventsList from '../../components/EventsList';

function EventsListPage() {

    return (
        <div className="EventsListContainer">
            <h1>Our Past Events</h1>
            <EventsList events={events} />
        </div>
    );
}

export default EventsListPage;