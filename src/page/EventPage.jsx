import { useParams } from "react-router-dom";
import Header from "../components/Header";
import useFetch from "../useFetch";

const EventPage = () => {
    // const { data } = useFetch('http://localhost:3000/allEvent')
    const { data } = useFetch('https://bi-assigment-backend.vercel.app/allEvent')
    console.log("data from DB", data)
    const eventId = useParams()
    console.log("id", eventId);
    const events = data ? data.find(event => eventId.id === event._id) : null
    console.log("comparing", events);




    return (
        <div className="bg-secondary-subtle py-3">
            <Header />
            <hr />
            {events ? (


                <div className=" container mt-5 ">
                    <div className="row">
                        <div className="col-md-6">

                            <h2 className="fw-bold">{events.eventName}</h2>
                            <p>
                                <small className="text-secondary">Hosted By:</small>
                            </p>
                            <p>{events.eventHost}</p>
                            <img
                                src={events.eventImage}
                                alt="conference_img"
                                className="img-fluid"
                            />

                            <h4>Details: </h4>
                            <p>{events.eventDetail}</p>
                            <h4>Additional Information: </h4>
                            <p>
                                <b>Dress Code: </b> {events.dressCode}
                            </p>
                            <p>
                                <b>Age Restriction: </b> {
                                    events.ageRestriction}
                            </p>
                            <h4>Event Tags:</h4>
                            <h5>
                                {events.eventTags.map((tag, index) => (
                                    <span className="badge text-bg-danger me-2" key={index}>{tag}</span>
                                ))}

                            </h5>
                        </div>

                        <div className="col-md-6">
                            <div className=" d-flex justify-content-center">
                                <div className="card  " style={{ width: "22rem" }}>
                                    <div className="card-body">
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "flex-start",
                                            }}
                                        >
                                            <i className="bi bi-stopwatch me-2"></i>
                                            <div>
                                                <small> {events.eventStartDate} {events.eventStartTime} to</small>
                                                <br />
                                                <small>{events.eventEndDate} {events.eventEndTime}</small>
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "flex-start",
                                            }}
                                        >
                                            <i className="bi bi-geo-alt me-2"></i>
                                            <div>
                                                <small>{events.eventAddress}</small>
                                                <br />
                                                <small>789 Marketing Avenue,City</small>
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "flex-start",
                                            }}
                                        >
                                            <i className="bi bi-currency-rupee"></i>
                                            <div>
                                                <small className="ps-2"> {events.eventPrice}</small>
                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="d-flex flex-column align-items-center  mt-3">
                                <h5 className="fw-bold">Speakers </h5>
                                <div className="row">
                                    {events.eventHosts.map((host, i) => (


                                        <div className="col-md-6">
                                            <div className="card text-center " style={{ width: '10rem' }}>
                                                <img className="rounded-circle mt-3" src={host.hostImage} alt="emp1" style={{ width: '50%', margin: '0 auto' }} />
                                                <div className="card-body">
                                                    <h6 className="card-title">{host.hostName}</h6>
                                                    <small className="card-text">Marketing Manager</small>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : ("event not found")}
        </div>
    );
};
export default EventPage;
