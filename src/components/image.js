import React from "react"
import styled from "styled-components"


const ImageWrapper = styled.div`
    width: 33.33%;
    height: 38rem;
    position: relative;
    overflow: hidden;
    &:hover img {
        transform: scale(1.2);
    }
    &:hover a {
        opacity: 1;
        transform: scale(1.2);
    }
`;
    
const ImageElement = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    cursor: pointer; 
    transition: 0.6s ease; 
    :hover {
        transform: scale(1.2);
    }
    :focus {
        transform: scale(1.2);
    }
`;

const ImageCaption = styled.a`
    width: 75%;
    height: 50px;
    opacity: 0;
    font-size: 2rem;
    text-align: center;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    cursor: pointer;
    border: 2px solid #fff;
    padding: 40% 0;
    :hover {
        opacity: 1;
        transform: scale(1.2);
    }
`;


const Image = ({img, caption}) => (
    <ImageWrapper>
        <ImageElement src={img} /> 
        <ImageCaption>{caption}</ImageCaption>
    </ImageWrapper>
);
 

export default Image
