import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import NewLoading from "../Components/News/NewLoading";
import New from "../Components/News/New";
import styles from "./News.module.css";
import axios from "axios";

function News() {
    const [news, setNews] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const apiurl =
        "https://newsapi.org/v2/everything?" +
        "q=%2B%28ocean+or+sea%29+AND+pollution+AND+trash&" +
        // "from=2021-11-13&" +
        // "to=2021-11-18&" +
        "sortBy=publishedAt&" +
        "apiKey=e5ad7ef6435747e6b7eb99be53df986e";

    useEffect(() => {
        setIsLoading(true);
        async function getData() {
            try {
                const data = await axios.get(apiurl);
                setNews(data.data.articles);
                setIsLoading(false);
            } catch (err) {
                setError("Something went wrong...");
                setIsLoading(false);
            }
        }
        getData();
    }, []);

    return (
        <div>
            <Header />
            <h3 className={styles.title}>What’s the latest news?</h3>
            <div className={styles.container}>
                {error && <p className={styles.error}>{error}</p>}
                {isLoading &&
                    [1, 1, 1, 1].map((el, idx) => {
                        return <NewLoading key={idx} />;
                    })}
                {!error && !isLoading && (
                    <ul>
                        {news.map((e, idx) => {
                            return (
                                <New
                                    key={idx}
                                    title={e.title}
                                    desc={e.description}
                                    author={e.author}
                                    image={e.urlToImage}
                                    url={e.url}
                                    date={e.publishedAt}
                                />
                            );
                        })}
                    </ul>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default News;
