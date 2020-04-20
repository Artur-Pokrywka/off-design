import React from "react"
import styled, {keyframes} from "styled-components"
import intro from "../video/intro.mp4"


const show = keyframes`
        0% { opacity: 0; }
        // 50% { opacity: 0.5; }
        100% { opacity: 1; }
`;

const VideoWrapper = styled.video`
    width: 100%;
    height: calc(100vh - 5rem);
    position: relative;
`;

const ThemeWrapper = styled.div`
    width: 600px;
    height: 300px; 
    border: 3px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    opacity: 0;
    animation-delay: 1000ms;
    animation-duration: 1000ms;
    animation-fill-mode: forwards;
    animation-name: ${show};

    top: 10rem;
    margin: 0 auto;
`;

const MainTitle = styled.h1`    
    font-size: 2rem;
    color: #000;
`;


const Video = () => (
    <>
        <VideoWrapper src={intro} preload="auto" loop={true} autoPlay/>
            <ThemeWrapper>
                <MainTitle>off design-wnętrza</MainTitle> 
            </ThemeWrapper> 
    </>
);

export default Video


