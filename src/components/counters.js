import React, { useState, useEffect } from "react"
import styled from "styled-components"

import background from "../images/counters-background.jpg"

const countedObjects = [
    {
    caption: "Lorem ipsum",
    number: 122,
    counter: 0
    },
    {
    caption: "Lorem ipsum",
    number: 12,
    counter: 0
    },
    {
    caption: "Lorem ipsum",
    number: 76,
    counter: 0
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

const CounterElement = ({start, finish, scrollPosition}) => {
    const [counter, setCounter] = useState(start);
    const [isRuning, setIsRuning] = useState(false);

    window.addEventListener('scroll', () => {
        if(window.scrollY > scrollPosition && isRuning === false ) {
            setIsRuning(true);
        } 
    });

    useEffect(() => {
        if(isRuning) {
            const id = setInterval(() => {
                setCounter(prev => {
                    const newValue = prev + 1;
                    if(newValue >= finish) {
                        clearInterval(id);
                    }
                    return newValue;
                })
            }, finish/600)
        }
    }, [finish, isRuning]);

    return <CounterValue> {counter} </CounterValue>
}

const Counters = () => {
    return (
        <CountersWrapper>
            {
            countedObjects.map((obj ) =>
                {
                    return <Counter key={obj.number}>
                        <CounterElement start={0} finish={obj.number} scrollPosition={720} />
                        <CounterCaption>{obj.caption} </CounterCaption>
                    </Counter>;
                })
            }
        </CountersWrapper>
    )
};


export default Counters
