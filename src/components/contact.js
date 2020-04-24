import React from "react"
import styled from "styled-components"

import phone from "../images/icons/phone.png"
import mail from "../images/icons/mail.png"
import office from "../images/icons/home-run.png"

const contactItems = [
        {
            name: phone,
            value: "234 456 767"
        },
        {
            name: mail,
            value:" loremipsum@gmail.com"
        },
        {
            name: office,
            value: "Brzozowa 14, Kraków"
        }
    ]

const ContactWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    padding-top: 5rem;
`;

const ElementWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 20rem;
`;

const IconWrapper = styled.div`
    border-radius: 50%;
    background: #fff;
    padding: 1rem;
    margin: 0 2rem;
`;

const ContactIcon = styled.img`
    width: 4rem;
    height: 4rem;
    background: #fff; 
`;

const ContactCaption = styled.p`
    display: flex;
    justify-content: space-evenly;
    margin: 2rem 0;
    font-size: 1.5rem;
`;

const Contact = () => (
    <ContactWrapper>
        {
            contactItems.map(item =>  
                <ElementWrapper key={item.name}>
                    <IconWrapper>
                        <ContactIcon src={item.name} />
                    </IconWrapper> 
                    <ContactCaption> {item.value} </ContactCaption>
                </ElementWrapper>
            )
        } 
    </ContactWrapper>
);


export default Contact