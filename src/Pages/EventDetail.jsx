import { React, useState } from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

//import components and styles
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import LoadingSVG from "../Components/LoadingSVG";
import styles from "./EventDetail.module.css";

//import hooks
import useDeleteEvent from "../Hooks/useDeleteEvents";
import useUpdateEvent from "../Hooks/useUpdateEvents";
import {
    validateTitle,
    validateLocation,
    validateDate,
} from "../Hooks/Validation/index";
import { addFormData } from "../Store/formDataSlice";
import { app } from "../base";

const GetEventByID = gql`
    query MyQuery($id: Int!) {
        events(where: { id: { _eq: $id } }) {
            date
            desc
            id
            img
            location
            participants
            title
        }
    }
`;

function EventDetail() {
    //initial detail
    const { id } = useParams();
    const { data, loading, errorD } = useQuery(GetEventByID, {
        variables: { id },
    });

    //Delete & Edit
    const { isAuthenticated } = useAuth0();
    var isAuthenticatedDummy = true;
    const { deleteEvents } = useDeleteEvent();
    const { updateEvents } = useUpdateEvent();

    function handleDelete(e) {
        if (window.confirm("Are you sure you want to delete this event?")) {
            deleteEvents({
                variables: {
                    id: id,
                },
            });
            window.alert("Event deleted!");
        }
    }

    function handleEdit(e) {
        console.log(data.events[0]);
        setFormData({
            ...formData,
            title: data.events[0].title,
            location: data.events[0].location,
            date: data.events[0].date,
            // img: data.events[0].img,
            desc: data.events[0].desc,
            file: "",
        });
    }

    //form
    const [formData, setFormData] = useState({
        title: "",
        location: "",
        date: "",
        img: "",
        desc: "",
        file: "",
    });
    const [error, setError] = useState({
        title: "",
        location: "",
        date: "",
    });
    const dispatch = useDispatch();
    const history = useHistory();

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        if (name === "title") {
            const valTitle = validateTitle(value);
            if (!valTitle.status) {
                setError((prev) => ({ ...prev, [name]: valTitle.message }));
            } else {
                setError((prev) => ({ ...prev, [name]: "" }));
            }
        }

        if (name === "location") {
            const valLocation = validateLocation(value);
            if (!valLocation.status) {
                setError((prev) => ({ ...prev, [name]: valLocation.message }));
            } else {
                setError((prev) => ({ ...prev, [name]: "" }));
            }
        }

        if (name === "date") {
            const valDate = validateDate(value);
            if (!valDate.status) {
                setError((prev) => ({
                    ...prev,
                    [name]: valDate.message,
                }));
            } else {
                setError((prev) => ({ ...prev, [name]: "" }));
            }
        }

        if (name === "img") {
            //get img file data
            console.log("on change img triggered!");
            console.log("files:", e.target.files[0]);
            const file = e.target.files[0];
            setFormData((prev) => {
                return { ...prev, file: file };
            });
        }

        setFormData((prev) => {
            return { ...prev, [name]: value };
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        let formIsValid = true;
        const valTitle = validateTitle(formData.title);
        if (!valTitle.status) {
            setError((prev) => ({ ...prev, title: valTitle.message }));
            formIsValid = false;
        }

        const valLocation = validateLocation(formData.location);
        if (!valLocation.status) {
            setError((prev) => ({ ...prev, location: valLocation.message }));
            formIsValid = false;
        }

        const valDate = validateDate(formData.date);
        if (!valDate.status) {
            setError((prev) => ({
                ...prev,
                date: valDate.message,
            }));
            formIsValid = false;
        }

        if (formIsValid) {
            dispatch(addFormData(formData));
            console.log("Data submitted: ", formData);

            // send image to firebase
            if (formData.file === "") {
                // insert data to hasura
                updateEvents({
                    variables: {
                        id: id,
                        object: {
                            date: formData.date,
                            desc: formData.desc,
                            location: formData.location,
                            title: formData.title,
                        },
                    },
                });
                console.log("Data berhasil dikirim ke database!");
                // alert("Data berhasil dikirim ke database!");
                // history.push("/volunteer/create"); //change page after submit
            } else {
                const file = formData.file;
                const storageRef = app.storage().ref();
                console.log("tetete", uuidv4());
                const fileRef = storageRef.child(`${file.name}${uuidv4()}`);
                console.log("file = ", file);
                console.log("storageRef = ", storageRef);
                console.log("fileRef = ", fileRef);
                fileRef.put(file).then((e) => {
                    console.log("Uploaded a file");
                    console.log("didalam e = ", e);
                    e.ref.getDownloadURL().then(function (downloadURL) {
                        console.log("File available at", downloadURL);
                        // insert data to hasura
                        updateEvents({
                            variables: {
                                id: id,
                                object: {
                                    date: formData.date,
                                    desc: formData.desc,
                                    img: downloadURL,
                                    location: formData.location,
                                    title: formData.title,
                                },
                            },
                        });
                        console.log("Data berhasil dikirim ke database!");
                        alert("Data berhasil dikirim ke database!");
                        // history.push("/volunteer/create"); //change page after submit
                    });
                });
            }
        }
    }

    //render
    return (
        <div>
            <Header />
            {errorD && (
                <p className={styles["container"]}>Something Went Wrong...</p>
            )}
            {loading && (
                <div className={styles["container"]}>
                    <LoadingSVG />
                </div>
            )}
            {!errorD && !loading && (
                <div>
                    {data?.events.map((v, i) => (
                        <div className={styles["container"]} key={i}>
                            <div className={styles["card"]}>
                                <div>
                                    <img src={v.img} alt="thumbnail" />
                                </div>
                                <div className={styles["details"]}>
                                    <h1>{v.title}</h1>
                                    <h4>Location: {v.location}</h4>
                                    <h5>Date: {v.date}</h5>
                                    <p>
                                        Current Participants:
                                        <span className={styles.participants}>
                                            {v.participants}
                                        </span>
                                    </p>
                                    <p>
                                        Description:
                                        <br />
                                        <span className={styles.description}>
                                            {v.desc}
                                        </span>
                                    </p>
                                </div>
                            </div>

                            {/* form */}

                            {isAuthenticatedDummy && (
                                <div>
                                    <div className={styles.buttons}>
                                        <button
                                            className={styles["delete"]}
                                            onClick={handleDelete}
                                        >
                                            DELETE EVENT
                                        </button>
                                        <button
                                            className={styles["edit"]}
                                            onClick={handleEdit}
                                        >
                                            EDIT EVENT
                                        </button>
                                    </div>
                                    <div className={styles.myContainer}>
                                        <div className={styles.right}>
                                            <form
                                                onSubmit={handleSubmit}
                                                action=""
                                            >
                                                <h1>Create a New Event</h1>
                                                <div
                                                    className={
                                                        styles["form-control"]
                                                    }
                                                >
                                                    <label
                                                        htmlFor="title"
                                                        className={
                                                            styles.required
                                                        }
                                                    >
                                                        Title
                                                    </label>
                                                    <input
                                                        aria-labelledby="title"
                                                        data-testid="title"
                                                        name="title"
                                                        type="text"
                                                        onChange={handleChange}
                                                        placeholder={
                                                            formData.title
                                                        }
                                                        value={formData.title}
                                                    />
                                                    <p className={styles.error}>
                                                        {error.title}
                                                    </p>
                                                </div>
                                                <div
                                                    className={
                                                        styles["form-control"]
                                                    }
                                                >
                                                    <label
                                                        htmlFor="location"
                                                        className={
                                                            styles.required
                                                        }
                                                    >
                                                        Location Address
                                                    </label>
                                                    <input
                                                        data-testid="location"
                                                        name="location"
                                                        onChange={handleChange}
                                                        placeholder={
                                                            formData.location
                                                        }
                                                        value={
                                                            formData.location
                                                        }
                                                        type="text"
                                                    />
                                                    <p className={styles.error}>
                                                        {error.location}
                                                    </p>
                                                </div>
                                                <div
                                                    className={
                                                        styles["form-control"]
                                                    }
                                                >
                                                    <label
                                                        htmlFor="date"
                                                        className={
                                                            styles["required"]
                                                        }
                                                    >
                                                        Date
                                                    </label>
                                                    <input
                                                        data-testid="date"
                                                        name="date"
                                                        onChange={handleChange}
                                                        placeholder={
                                                            formData.date
                                                        }
                                                        value={formData.date}
                                                        type="date"
                                                        format="yyyy/mm/dd"
                                                    />
                                                    <p className={styles.error}>
                                                        {error.date}
                                                    </p>
                                                </div>
                                                <div
                                                    className={
                                                        styles["form-control"]
                                                    }
                                                >
                                                    <label htmlFor="img">
                                                        Image
                                                    </label>
                                                    <input
                                                        data-testid="choose"
                                                        id="img"
                                                        name="img"
                                                        onChange={handleChange}
                                                        value={formData.img}
                                                        type="file"
                                                        accept="image/png, image/jpeg"
                                                    ></input>
                                                    <p className={styles.error}>
                                                        {error.img}
                                                    </p>
                                                </div>
                                                <div
                                                    className={
                                                        styles["form-control"]
                                                    }
                                                >
                                                    <label htmlFor="desc">
                                                        Description
                                                    </label>
                                                    <textarea
                                                        data-testid="desc"
                                                        name="desc"
                                                        onChange={handleChange}
                                                        value={formData.desc}
                                                        placeholder={
                                                            formData.desc
                                                        }
                                                    ></textarea>
                                                </div>
                                                <button
                                                    data-testid="submit"
                                                    className={styles["btn"]}
                                                    type="submit"
                                                >
                                                    Submit
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
            <Footer />
        </div>
    );
}

export default EventDetail;
