import React from "react"
import styled from "styled-components"

const ServiceWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
`;

const IconWrapper = styled.div`
    border: 1px solid #fff;
    border-radius: 50%;
    background: #fff;
    padding: 3rem;
    margin: 0 2rem;
`;

const Icon = styled.img`
    width: 10rem;
    height: 10rem;
    background: #fff; 
`;

const ServiceCaption = styled.p`   
    width: 33%;
`;

const ServiceDetail = styled.p`
    width: 33%
`;

const FakeDiv = styled.div `
    border-right: 2px solid #fff;
    height: 4rem;
    width: 2rem;
    margin-right: 2rem;
`;


const Service = ({icon, caption, details}) => (
    <>
        <ServiceWrapper>
            <ServiceCaption>{caption}</ServiceCaption>
            <IconWrapper> 
                <Icon src={icon} /> 
            </IconWrapper>
            <ServiceDetail>{details}</ServiceDetail>
        </ServiceWrapper>
        <FakeDiv></FakeDiv>
    </>
);

export default Service