import React from "react";
import { Grid, Grow, Typography } from "@material-ui/core";

import NewsCard from "./NewsCard/NewsCard";

const infoCards = [
    { color: "#440952", title: "Latest News", text: "Give me the latest news" },
    {
        color: "#440952",
        title: "News by Categories",
        info: "Business, Entertainment, General, Health, Science, Sports, Technology",
        text: "Give me the latest Technology news",
    },
    {
        color: "#440952",
        title: "News by Terms",
        info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
        text: "What's up with PlayStation 5",
    },
    {
        color: "#440952",
        title: "News by Sources",
        info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
        text: "Give me the news from CNN",
    },
];

const NewsCards = ({ articles, activeArticle }) => {
    if (!articles?.length) {
        return (
            <Grow in>
                <Grid
                    container
                    alignItems="stretch"
                    spacing={3}
                    className="py-0 px-[5%] w-full m-0"
                >
                    {infoCards.map((infoCard, index) => (
                        <Grid
                            key={index}
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            className="flex flex-col items-center"
                        >
                            <div
                                className="flex flex-col justify-between items-center w-full h-[45vh] p-[10%] rounded-[10px] text-white"
                                style={{ backgroundColor: infoCard.color }}
                            >
                                <Typography variant="h5">
                                    {infoCard.title}
                                </Typography>
                                {infoCard.info ? (
                                    <Typography variant="h6">
                                        <strong>
                                            {infoCard.title.split(" ")[2]}
                                        </strong>
                                        <br />
                                        {infoCard.info}
                                    </Typography>
                                ) : null}
                                <Typography variant="h6" component="h6">
                                    Try saying: <br /> <i>{infoCard.text}</i>
                                </Typography>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Grow>
        );
    }
    return (
        <Grow in>
            <Grid
                container
                alignItems="stretch"
                spacing={3}
                className="py-0 px-[5%] w-full m-0"
            >
                {articles?.map((article, index) => (
                    <Grid
                        key={index}
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                        style={{ display: "flex" }}
                    >
                        <NewsCard
                            article={article}
                            activeArticle={activeArticle}
                            index={index}
                        />
                    </Grid>
                ))}
            </Grid>
        </Grow>
    );
};

export default NewsCards;
