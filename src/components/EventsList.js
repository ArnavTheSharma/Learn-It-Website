import {Link} from 'react-router-dom';

const EventsList = ( {events} ) => {
    return(
        <>
            {events.map(event => (
            <Link key={event.name}  className="event-list-item" to={`/events/${event.name}`}>
                <h3>{event.title}</h3>
                <p>{event.content[0].substring(0, 150)} ...</p> 
            </Link>
        ))}
        </>
    );
}

export default EventsList;