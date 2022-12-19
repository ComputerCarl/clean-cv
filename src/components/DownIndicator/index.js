import React, { useEffect, useState } from 'react'
import { BoxArrowDown } from '@styled-icons/bootstrap'
import { tada } from 'react-animations';
import { StyledIconBase } from '@styled-icons/styled-icon'
import styled, { keyframes } from 'styled-components'

var animation = keyframes`${tada}`

const StyledDownIndicator = styled.div`
    width: 32px;
    height: 32px;
    position: fixed;
    bottom: 10%;
    right: 50%;
    z-index: 99;
    border-radius: 32px;
    line-height: 30px;
    background-color: powderblue;
    `

const StyledIconWrapper = styled.div`
   ${StyledIconBase} {
       width: 20px;
       color: white;
       animation: ${animation} 1s 2 2;
    }
`


function DownIndicator() {
    const [hasScrolled, setHasScrolled] = useState(false);
    const [showArrow, setShowArrow] = useState(false);

    function disableArrow() {
        if (!hasScrolled) setShowArrow(true);
    }

    useEffect(() => {
        var timedEvt = setTimeout(disableArrow, 13000);
        window.addEventListener('scroll', () => {
            setHasScrolled(true);
            setShowArrow(false);
            clearTimeout(timedEvt);
        }, { passive: true });
    }, [disableArrow])

    if (!showArrow) return null;

    return (
        <StyledDownIndicator>
            <StyledIconWrapper>
                <BoxArrowDown />
            </StyledIconWrapper>
        </StyledDownIndicator>
    )
}

export default DownIndicator
