import React from "react"
import styled from "styled-components"
import theme from "../utils/theme";

const pricesList = [
    {
        name: 'konsulatacje interentowe',
        price: "1500",
        details: ["asdfasf", "sdfasdf", "asdfasd", "asdf"]
    },
    {
        name: 'interentowe',
        price: "1500",
        details: ["asdfasf", "sdfasdf", "asdfasd", "asdf"]
    },
    {
        name: 'konsulatacje',
        price: "1500",
        details: ["asdfasf", "sdfasdf", "asdfasd", "asdf"]
    }
];

const PriceWrapper = styled.div`
    border: 0.1rem solid #fff;
    border-radius: 0.5rem; 
    display: flex;
    flex-direction: column;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    margin-top: 2rem; 
    position: relative;
    min-width: 22.5rem; 
`;

const PackageName = styled.h2`
    font-size: 1.8rem;
    margin: 1.5rem 0;
`;

const PackagePrice = styled.span`
    font-size: 1.5rem;
    margin-bottom: 1.5rem;

`;

const PackageDetails = styled.p`
    font-size: 1.3rem;
    margin-bottom: 2.5rem;

`;

const ShowDetails = styled.button`
    border-radius: 0.5rem;
    background: ${theme.colors.dark};
    color: ${theme.colors.white};
    font-family: Montserrat;
    padding: 0.5rem;
    width: 9rem;
    height: 3rem;
    position: absolute;
    bottom: -1.5rem;
    border: 0.1 solid ${theme.colors.white};
    :hover {
        background: ${theme.colors.white}; 
        color: ${theme.colors.dark};
    }
`;

const PricePackage = () => (
    <>
    {
        pricesList.map(price =>
        <PriceWrapper key={price.name}>
            <PackageName>{price.name}</PackageName>
            <PackagePrice>{price.price}</PackagePrice>
            {
                price.details.map(detail =>
                <PackageDetails>{detail}</PackageDetails>) 
            }
            <ShowDetails>więcej</ShowDetails>
        </PriceWrapper>)
    }        
   </>
);

export default PricePackage;