import React from "react"
import styled from "styled-components"
import Service from "../components/service"

import house from "../images/icons/house-searcher.png"
import sell from "../images/icons/sell.png"
import cleaning from "../images/icons/cleaning.png"
import representation from "../images/icons/representation.png"
import loan from "../images/icons/loan.png"
import sold from "../images/icons/sold.png"


const text = 'nasze kompleksowe usługi:';
const description = 'Analiza nieruchomości. Oglądamy, oceniamy, sprawdzamy, a następnie szacujemy wstępną wartość nieruchomości.'; 
const details = 'some more details'

const MainWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    flex-direction: column;
`;

const ServiceTitle = styled.h2`
    margin-top: 5rem;
    font-size: 2rem;
    padding: 2rem 0;
`;


const Services = () => (
    <MainWrapper>
    <ServiceTitle>{text}</ServiceTitle>
        <Service icon={house} caption={description} details={details}/>
        <Service icon={sell} caption={description} details={details}/>
        <Service icon={cleaning} caption={description} details={details}/>
        <Service icon={representation} caption={description} details={details}/>
        <Service icon={loan} caption={description} details={details}/>
        <Service icon={sold} caption={description} details={details}/>
    </MainWrapper>    
);

export default Services