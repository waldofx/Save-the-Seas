const Event = ({ title, location, date, participants, image, desc }) => {
    return (
        <div>
            <div>
                {title}, location: {location}, date: {date}, participants:{" "}
                {participants}
            </div>
        </div>
    );
};

export default Event;
