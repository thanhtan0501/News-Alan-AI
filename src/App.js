import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

import NewsCards from "./Components/NewsCards/NewsCards";

import wordsToNumbers from "words-to-numbers";

const alanKey =
    "0d03a7ce51d99255503bb5e2c522ab212e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(0);

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles, number }) => {
                if (command === "newHeadlines") {
                    setNewsArticles(articles);
                    setActiveArticle(-1);
                } else if (command === "highlight") {
                    setActiveArticle((prev) => prev + 1);
                } else if (command === "open") {
                    const parsedNumber =
                        number.length > 2
                            ? wordsToNumbers(number, { fuzzy: true })
                            : number;
                    const article = articles[parsedNumber - 1];

                    if (parsedNumber > articles.length) {
                        alanBtn().playText("Please try that again...");
                    } else if (article) {
                        window.open(article.url, "_blank");
                        alanBtn().playText("Opening...");
                    } else {
                        alanBtn().playText("Please try that again...");
                    }
                }
            },
        });
    }, []);
    return (
        <div>
            <div className="py-0 px-[5%] flex justify-around items-center w-full sm:flex-col-reverse sm:text-center ">
                <img
                    src="https://alan.app/docs/_static/alan-logo.svg"
                    className="h-[27vmin] w-[50%] rounded-[15%] py-0 px-[5%] my-[3%] mx-0 sm:h-[35vmin] sm:w-[40%]"
                    alt="logo"
                />
            </div>
            <NewsCards articles={newsArticles} activeArticle={activeArticle} />
        </div>
    );
};

export default App;
