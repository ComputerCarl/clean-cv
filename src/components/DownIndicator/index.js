import React, { useEffect, useState } from 'react'
import { BoxArrowDown } from '@styled-icons/bootstrap'
import { tada } from 'react-animations';
import { StyledIconBase } from '@styled-icons/styled-icon'
import styled, { keyframes } from 'styled-components'
import { color } from '../../settings'
var animation = keyframes`${tada}`

const StyledDownIndicator = styled.div`
    width: 32px;
    height: 32px;
    background-color: white;
    position: fixed;
    bottom: 10%;
    right: 50%;
    z-index: 99;
    border-radius: 32px;
    line-height: 28px;
    animation: ${tada} 1s;
    `

const StyledIconWrapper = styled.div`
   ${StyledIconBase} {
       color: ${color.lightest};
       width: 20px;
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
    }, [])

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
