import React from "react"
import styled from "styled-components"
import logo from "../images/icons/logo.png" 


const FooterWrapper = styled.div`
    heigth: 2rem; 
    width: 80%;
    margin: 0 auto; 
    padding-bottom: 2rem; 
`;

const Logo = styled.img `
  width: 2.25rem;
  height: 1.25rem;
  margin-right: 1rem;
`;

const FooterText = styled.span `
  font-size: 0.8rem;
`;

const Separator = styled.hr`
    width: 80%;
    color: #fff;
    margin-bottom: 2rem; 
    border-top: 2px solid #fff;
`;


const Footer = () => (
    <>
        <Separator />
        <FooterWrapper>
            <Logo src={logo} alt="logo" />
            <FooterText> 2020 <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> off design-wnętrza. all rights reserved</FooterText>
        </FooterWrapper>
    </>
);


export default Footer