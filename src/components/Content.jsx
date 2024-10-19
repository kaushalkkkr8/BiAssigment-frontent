import useFetch from "../useFetch";
import { Link } from 'react-router-dom'



const Content = () => {
    // const { data } = useFetch('http://localhost:3000/allEvent')
    const { data } = useFetch('https://bi-assigment-backend.vercel.app/allEvent')
   
    return (
        <>
            <div className="container">
                <div className="row m-3">
                    <div className="col-md-6">
                        <h1 className="fw-bold">Meetup Event</h1>
                    </div>
                    <div className="col-md-6">
                        <select className="form-select">
                            <option value="Offline">Offline</option>
                            <option value="Online">Online</option>
                        </select>
                    </div>
                </div>

                <div className="m-4">
                    <div className="row m-4">
                        {data?.map((event) => (
                            <div className="col-md-4" key={event._id}>
                                <div className="card mb-3 border-0 bg-secondary-subtle" style={{ width: "18rem" }} >
                                    <img src={event.eventImage} className="card-img-top rounded" alt={event.eventName} />

                                    <small className="text-body-secondary">
                                        {event.eventStartDate}  {event.eventStartTime}
                                    </small>
                                   <Link className="text-decoration-none text-black fw-bold h5" to={`/eventPage/${event._id}`} >{event.eventName}</Link>

                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </>
    );
};
export default Content;
