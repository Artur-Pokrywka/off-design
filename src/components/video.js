import React from "react"
import styled, {keyframes} from "styled-components"
import intro from "../video/intro.mp4"
import logo from "../images/icon.png" 


const Logo = styled.img `
  width: 9rem;
  height: 5rem;
`;

const VideoWrapper = styled.video`
    width: 100%;
    position: relative;
`;

const show = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`;

const ThemeWrapper = styled.div`
    width: 600px;
    height: 300px; 
    border: 3px solid #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    opacity: 0;
    animation-delay: 1000ms;
    animation-duration: 2000ms;
    animation-fill-mode: forwards;
    animation-name: ${show};
    top: 10rem;
    left: 1rem;
`;

const MainTitle = styled.h1`    
    font-size: 2.9rem;
    letter-spacing: -2px
`;

const Subtitle = styled.p `
    color: #fff;
    font-size: 2.1rem;
    letter-spacing: -1px;
    margin-top: 0.5rem;
    `;

const Video = () => (
    <>
        <VideoWrapper src={intro} preload="auto" loop={true} autoPlay/>
        <ThemeWrapper>
        <MainTitle>  <Logo src={logo} alt="logo"/> off design-wnętrza</MainTitle> 
            <Subtitle>odkryj magię swojej nieruchomości</Subtitle>
        </ThemeWrapper> 
    </>
);

export default Video


