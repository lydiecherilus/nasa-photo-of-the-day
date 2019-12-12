import React from "react";
 const PictureCard = props => {
    console.log(props);

    return (
        <div className="name_name">
            <p>{props.date}</p>
            <h2>{props.title}</h2>
            <img src={props.Img} />
            <h5> By:{props.copyright}</h5>
            <p>{props.explanation}</p>
        </div>
    );
};
export default PictureCard;