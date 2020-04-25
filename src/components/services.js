import React from "react"
import styled from "styled-components"
import Service from "../components/service"

import house from "../images/icons/house-searcher.png"
import sell from "../images/icons/sell.png"
import cleaning from "../images/icons/cleaning.png"
import representation from "../images/icons/representation.png"
import loan from "../images/icons/loan.png"
import sold from "../images/icons/sold.png"

const servicesList = [
    {
        link: house,
        description: 'Analiza nieruchomości. Oglądamy, oceniamy, sprawdzamy, a następnie szacujemy wstępną wartość nieruchomości.',
        details:'some more details' 
    },
    {
        link: sell,
        description: 'Analiza nieruchomości. Oglądamy, oceniamy, sprawdzamy, a następnie szacujemy wstępną wartość nieruchomości.',
        details:'some more details' 
    },
    {
        link: cleaning,
        description: 'Analiza nieruchomości. Oglądamy, oceniamy, sprawdzamy, a następnie szacujemy wstępną wartość nieruchomości.',
        details:'some more details' 
    },
    {
        link: representation,
        description: 'Analiza nieruchomości. Oglądamy, oceniamy, sprawdzamy, a następnie szacujemy wstępną wartość nieruchomości.',
        details:'some more details' 
    },
    {
        link: loan,
        description: 'Analiza nieruchomości. Oglądamy, oceniamy, sprawdzamy, a następnie szacujemy wstępną wartość nieruchomości.',
        details:'some more details' 
    },
    {
        link: sold,
        description: 'Analiza nieruchomości. Oglądamy, oceniamy, sprawdzamy, a następnie szacujemy wstępną wartość nieruchomości.',
        details:'some more details' 
    }
];

const MainWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    flex-direction: column;
`;

const ServiceTitle = styled.h2`
    margin: 1rem 0 2rem 0;
    font-size: 1.6rem;
    padding: 2rem 0;
`;


const Services = ({text}) => (
    <MainWrapper>
    <ServiceTitle>{text}</ServiceTitle>
        {
            servicesList.map(service =>  
                <Service key={service.link} icon={service.link} caption={service.description} details={service.details} />)
        }
    </MainWrapper>
    
);

export default Services