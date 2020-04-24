import React from "react"
import styled from "styled-components"
import Image from "../components/image"

import pic1 from "../images/home-staging/1.png"
import pic2 from "../images/home-staging/2.png"
import pic3 from "../images/home-staging/3.png"
import pic4 from "../images/home-staging/4.png"
import pic5 from "../images/home-staging/5.png"
import pic6 from "../images/home-staging/6.png"

const projects = [
    {
        name: "project name", 
        link: pic1,
    },
    {
        name: "project name", 
        link: pic2,
    },
    {
        name: "project name", 
        link: pic3,
    },
    {
        name: "project name", 
        link: pic4,
    },
    {
        name: "project name", 
        link: pic5,
    },
    {
        name: "project name", 
        link: pic6,
    }
];

const GalleryWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    min-height: 40rem;
    margin-top: 6rem;
`;

const GallerySeparator = styled.hr`
    width: 80%;
    color: #fff;
    margin-bottom: 4rem; 
    border-top: 2px solid #fff;
`;

const Gallery = () => (
    <GalleryWrapper>
        <GallerySeparator />
        {
            projects.map(project =>  <Image key={project.link} img={project.link} caption={project.name} is/>)
        }
    </GalleryWrapper>
);


export default Gallery