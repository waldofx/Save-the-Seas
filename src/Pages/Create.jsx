import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

//import components and styles
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import styles from "./Create.module.css";

//import hooks
import {
    validateTitle,
    validateLocation,
    validateDate,
    validateFile,
} from "../Hooks/Validation/index";
import { addFormData } from "../Store/formDataSlice";
import useInsertEvent from "../Hooks/useInsertEvents";
import { app } from "../base";

function Contact() {
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
        file: "",
    });

    const dispatch = useDispatch();
    const history = useHistory();
    const { insertEvents } = useInsertEvent();

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

        const valFile = validateFile(formData.file);
        if (!valFile.status) {
            setError((prev) => ({
                ...prev,
                file: valFile.message,
            }));
            formIsValid = false;
        }

        if (formIsValid) {
            dispatch(addFormData(formData));
            console.log("Data submitted: ", formData);

            // send image to firebase
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
                    insertEvents({
                        variables: {
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
                    history.push("/volunteer/create"); //change page after submit
                });
            });
        }
    }

    return (
        <div>
            <Header />
            <div className={styles.myContainer}>
                <div className={styles.right}>
                    <form onSubmit={handleSubmit} action="">
                        <h1>Create a New Event</h1>
                        <div className={styles["form-control"]}>
                            <label htmlFor="title" className={styles.required}>
                                Title
                            </label>
                            <input
                                aria-labelledby="title"
                                data-testid="title"
                                name="title"
                                type="text"
                                onChange={handleChange}
                                placeholder="The event's title here..."
                                value={formData.title}
                            />
                            <p className={styles.error}>{error.title}</p>
                        </div>
                        <div className={styles["form-control"]}>
                            <label
                                htmlFor="location"
                                className={styles.required}
                            >
                                Location Address
                            </label>
                            <input
                                data-testid="location"
                                name="location"
                                onChange={handleChange}
                                placeholder="The event’s location here..."
                                value={formData.location}
                                type="text"
                            />
                            <p className={styles.error}>{error.location}</p>
                        </div>
                        <div className={styles["form-control"]}>
                            <label
                                htmlFor="date"
                                className={styles["required"]}
                            >
                                Date
                            </label>
                            <input
                                data-testid="date"
                                name="date"
                                onChange={handleChange}
                                // placeholder="yyyy-mm-dd"
                                value={formData.date}
                                type="date"
                                format="yyyy/mm/dd"
                            />
                            <p className={styles.error}>{error.date}</p>
                        </div>
                        <div className={styles["form-control"]}>
                            <label htmlFor="img">Image</label>
                            <input
                                data-testid="choose"
                                id="img"
                                name="img"
                                onChange={handleChange}
                                value={formData.img}
                                type="file"
                                accept="image/png, image/jpeg"
                            ></input>
                            <p className={styles.error}>{error.file}</p>
                        </div>
                        <div className={styles["form-control"]}>
                            <label htmlFor="desc">Description</label>
                            <textarea
                                data-testid="desc"
                                name="desc"
                                onChange={handleChange}
                                value={formData.desc}
                                placeholder="Your Full Name Here..."
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
            <Footer />
        </div>
    );
}

export default Contact;
