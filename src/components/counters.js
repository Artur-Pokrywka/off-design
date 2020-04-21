import React from "react"
import styled from "styled-components"

import background from "../images/counters-background.jpg"

const CountersWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    background: url(${background});
    background-position-y: 270rem;
`;

const Counter = styled.div`
    height: 20rem; 
    margin: 2rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const CounterValue = styled.span `
   font-size: 4rem;
   font-weight: 700;
`;

const CounterCaption = styled.p `
    font-size: 2rem;
`;

const Counters = () => (
    <CountersWrapper >
        <Counter> 
            <CounterValue> 12% </CounterValue>
            <CounterCaption>Lorem ipsum</CounterCaption>
        </Counter>
        <Counter> 
            <CounterValue> 122 </CounterValue>
            <CounterCaption>Lorem ipsum</CounterCaption>
        </Counter>
        <Counter> 
            <CounterValue> 52 </CounterValue>
            <CounterCaption>Lorem ipsum</CounterCaption>
        </Counter>
        
    </CountersWrapper>
);


export default Counters
