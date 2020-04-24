import React from "react"
import styled from "styled-components"


const Title = styled.h1`
    margin-top: 5rem;
    font-size: 3rem;
    text-align:center;
    padding-top: 6rem;
    height: 2rem;
`;

const PageTitle = ({title}) => (
    <Title>{title} </Title>
);


export default PageTitle