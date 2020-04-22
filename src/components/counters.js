import React, { useState } from "react"
import styled from "styled-components"

import background from "../images/counters-background.jpg"

const countedObjects = [
    {
    caption: "lorem Ipsum",
    number: 122,
    },
    {
    caption: "lorem Ipsum",
    number: 12,
    },
    {
    caption: "lorem Ipsum",
    number: 76,
    }
];

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

const Counters = () => {
    const [counterValue, setCounterValue] = useState(0);

    // const updateCount = () => {
    //     countedObjects.forEach(elem => {
    //         let time = 300;
    //         const inc = elem.number/time;
    //         if (counterValue < elem.number) {
    //             counterValue = counterValue + inc;
    //             setTimeout(updateCount, 1);
    //         }
    //     });
    // };    

    // window.addEventListener('scroll', () => {
    //     let x = window.scrollY;
    //     if(x > 735 ) {
    //         setCounterValue(prev => updateCount());
    //     } 
    // });

    return (
        <CountersWrapper>
            {
            countedObjects.map(obj =>
                <Counter key={obj.number}> 
                    <CounterValue >{counterValue} </CounterValue>
                    <CounterCaption>{obj.caption} </CounterCaption>
                </Counter>)
            }
        </CountersWrapper>
    )
};


export default Counters
