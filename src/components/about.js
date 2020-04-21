import React from "react"
import styled from "styled-components"

const text = "Zajmuję się profesjonalnie Home Stagingiem czyli przygotowaniem nieruchomości do sprzedaży lub wynajmu w tak atrakcyjny i niebanalny sposób, żeby uzyskać jak największe zainteresowanie nieruchomością wśród klientów. Moje zadanie –  podnieść na wartości Państwa mieszkanie lub dom, oraz  przyśpieszyć ich sprzedaż  lub wynajem z jak najmniejszym nakładem finansowym."


const AboutTitle = styled.h2`
    margin-bottom: 1rem;
    font-size: 2rem;
`;

const AboutCaption = styled.p`
    line-height: 2rem;
`;

const AboutInfo = styled.div`
    width: 80vw;
    padding-left: 10vw;
    margin: 5rem 0;
    text-align: center
`;


const About = () => (
    <>
        <AboutInfo>
            <AboutTitle>home staging</AboutTitle>
            <AboutCaption>{text}</AboutCaption>
        </AboutInfo>
        <AboutInfo>
            <AboutTitle>projekty wnętrz</AboutTitle>
            <AboutCaption>{text}</AboutCaption>
        </AboutInfo>
    </>
);


export default About