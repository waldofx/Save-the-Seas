import React, { useState } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

//import components and styles
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import styles from "./Create.module.css";

//import hooks
import {
    validateTitle,
    validateLocation,
    validateDate,
} from "../Hooks/Validation/index";
import { addFormData } from "../Store/formDataSlice";

function Contact() {
    const [formData, setFormData] = useState({
        title: "",
        location: "",
        date: "",
        image: "",
        description: "",
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
            // history.push("/review");
            console.log("Data submitted: ", formData);
        }
    }

    return (
        <div>
            <Header />
            <div className={styles.myContainer}>
                {/* <div className={styles.left}>
                    <div className={styles.inner}>
                        <img src={logo} alt="" />
                    </div>
                </div> */}
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
                            <label htmlFor="image">Image</label>
                            <select
                                data-testid="select"
                                name="image"
                                onChange={handleChange}
                                value={formData.image}
                                id=""
                            >
                                <option value="">Selected</option>
                                <option value="Indonesia">Indonesia</option>
                                <option value="French">French</option>
                                <option value="Australia">Australia</option>
                            </select>
                            <p className={styles.error}>{error.image}</p>
                        </div>
                        <div className={styles["form-control"]}>
                            <label htmlFor="description">Description</label>
                            <textarea
                                data-testid="description"
                                name="description"
                                onChange={handleChange}
                                value={formData.description}
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
