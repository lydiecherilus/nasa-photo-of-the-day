import React, { useState, useEffect } from "react";
import axios from "axios";
import PictureCard from "./PictureCard";

const PictureList = function () {
    const [picture, setPicture] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=rScrdxNaKXfzCfhWFbTP1EGwZM594lzpZG2Z9Npn`)
            .then(response => {
                console.log(response.data);
                setPicture(response.data);
            })
            .catch(error => {
                console.log("data was not return", error);
            })
    }, 
    [])
     return (
        <div>
             <PictureCard
                    title={picture.title}
                    Img={picture.url}
                    date={picture.date}
                    copyright={picture.copyright}
                    explanation={picture.explanation}
                />
    </div>
    )
}
export default PictureList;