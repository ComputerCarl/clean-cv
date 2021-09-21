import React, { useEffect, useState } from 'react';
import { debounce } from 'lodash';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import imgScrollUp from './scroll-up.svg'

const ScrollButton = styled.img`
    position: fixed;
    right: 20px;
    bottom: 40px;
    z-index: 999;
    width: 32px;
    cursor: pointer;
    visibility: ${({ showUpButton }) => showUpButton ? 'visible' : 'hidden'};
    transition: .25s;
    filter: opacity(33%);
    &:hover {
        filter: opacity(67%);
    }
`

const ScrollTo = () => {
    const yPosToShowUpIcon = 400;
    const [showUpButton, setShowUpButton] = useState(false);
    useEffect(() => {
        // debounce creates a function
        window.addEventListener('scroll', debounce(() => {
            setShowUpButton(window.pageYOffset > yPosToShowUpIcon);
        }, 100));
    });
    return (<ScrollButton
        showUpButton={showUpButton}
        src={imgScrollUp}
        onClick={() => window.scrollTo(0, 0)}
    />);
};

ScrollTo.propTypes = {};

export default ScrollTo;