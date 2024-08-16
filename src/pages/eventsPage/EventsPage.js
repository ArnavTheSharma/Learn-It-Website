import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import "./EventsPage.css";
import events from "./events-desc";
import NotFoundPage from "../NotFoundPage";
import CommentsList from '../../components/CommentsList';
import AddCommentForm from "../../components/AddCommentForm";
import useUser from "../../hooks/useUser";

function EventsPage() {
    const [eventInfo, setEventInfo] = useState({comments : []});
    const {eventId} = useParams();
    const navigate = useNavigate();

    const { user, isLoading } = useUser();

    useEffect(() => {
        const loadEventInfo = async () => {
            const token = user && await user.getIdToken();
            const headers = token ? {authtoken: token} : {};
            const response = await axios.get(`/api/events/${eventId}`, { headers });
            const newEventInfo = response.data;
            setEventInfo(newEventInfo);
        }
        if (!isLoading) {
            loadEventInfo();
        }
    }, [isLoading, user]);


    const event = events.find(event => event.name === eventId);
    if (!event) {
        return <NotFoundPage />;
    }

    return(
        <div>
            <h1>{event.title}</h1>
            <p className="desc">{event.content}</p>
            <img alt="event-img" className="img" src={event.image}></img>
            
            { user
                ? <AddCommentForm
                    eventName={eventId}
                    onEventUpdated={updatedEvent => setEventInfo(updatedEvent)} />
                : <button onClick={()=> {navigate('/login')}}>Log in to Comment</button>}
            <CommentsList comments={eventInfo.comments} />
        </div>
    );
}

export default EventsPage;