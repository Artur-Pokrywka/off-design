import React from "react"
import styled from "styled-components"
import Price from "../components/price-package"


const MainWrapper = styled.div `
    display: flex;
    justify-content: space-evenly;
    margin-top: 2rem ;
    padding-bottom: 8rem;
`;

const Prices = () => (
    <MainWrapper>
        <Price />
    </MainWrapper>
);


export default Prices