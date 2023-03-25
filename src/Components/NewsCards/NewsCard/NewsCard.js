import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@material-ui/core";
import React, { createRef, useEffect, useState } from "react";

const NewsCard = ({
    article: { description, publishedAt, source, title, url, urlToImage },
    activeArticle,
    index,
}) => {
    const [elRefs, setElRefs] = useState([]);
    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - 50);

    useEffect(() => {
        setElRefs((refs) =>
            Array(20)
                .fill()
                .map((_, j) => refs[j] || createRef())
        );
    }, []);

    useEffect(() => {
        if (index === activeArticle && elRefs[activeArticle]) {
            scrollToRef(elRefs[activeArticle]);
        }
    }, [index, activeArticle, elRefs]);
    return (
        <Card
            ref={elRefs[index]}
            className={`${
                activeArticle === index
                    ? " !border-[#097fb9] scale-[1.04]"
                    : null
            } flex flex-col justify-between border-b-[10px] border-solid border-white transition-all`}
        >
            <CardActionArea href={url} target="_blank" className="grow">
                <CardMedia
                    image={
                        urlToImage ||
                        "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png"
                    }
                    className="h-[250px] m-2 rounded-md"
                />
                <div className="flex justify-between m-[20px]">
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="h2"
                    >
                        {new Date(publishedAt).toDateString()}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="h2"
                    >
                        {source.name}
                    </Typography>
                </div>
                <Typography
                    gutterBottom
                    variant="h5"
                    className="py-0 px-4 line-clamp-3"
                    style={{ margin: 0 }}
                >
                    {title}
                </Typography>
                <CardContent>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        className="line-clamp-3"
                    >
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className="px-4 pt-0 pb-8 flex justify-between">
                <Button size="small" color="primary">
                    Learn more
                </Button>
                <Typography variant="h5" color="textSecondary">
                    {index + 1}
                </Typography>
            </CardActions>
        </Card>
    );
};

export default NewsCard;
