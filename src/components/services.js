import React from "react"
import styled from "styled-components"
import Service from "../components/service"

import house from "../images/icons/house-searcher.png"

const text = 'nasze kompleksowe usługi:';
const description = 'Analiza nieruchomości. Oglądamy, oceniamy, sprawdzamy, a następnie szacujemy wstępną wartość nieruchomości.'; 
const details = 'hahahaha'

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
    </MainWrapper>    
);

export default Services