import React from "react";
import { Card, CardBody,
    CardTitle, CardImg, CardText, CardSubtitle} from 'reactstrap';
import styled from "styled-components";
    
const PictureCard = props => {
    console.log(props);
    return (
<div className="nasaPicture">
<Card >
    <CardBody>  
        <CardSubtitle className="subtitle">{props.date}</CardSubtitle>
        <CardTitle className="title">{props.title}</CardTitle>
        <CardImg className="img" top width="100%" src={props.Img} alt="nasa photo of the day"/>
        <CardText className="text">{props.explanation}</CardText>
        <CardSubtitle> By:{props.copyright}</CardSubtitle>
    </CardBody>
</Card>

</div>
    );
};
export default PictureCard;

         
{/* <p>{props.date}</p>
            <h2>{props.title}</h2>
            <img src={props.Img} alt="nasa photo of the day"/>
            <p>{props.explanation}  </p>
            <h5> By:{props.copyright}</h5> */}

