import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


const Styled = styled.div`
    position: relative;
    text-align: center;
    width: 40px;
    height: 40px;
    background-color: ${({ bgColor }) => bgColor || 'white'};
    border-radius: 40px;
    div {
        position: relative;
        width: 28px;
        height: 28px;
        left: 6px;
        top: 6px;
        background-color: ${({ iconColor }) => iconColor || 'blue'};
        mask-image: url(${({ imgSrc }) => imgSrc});
    }
`

function Avatar(props) {
    return (
        <Styled {...props}>
            <div></div>
        </Styled>
    )
}

Styled.propTypes = {
    squared: PropTypes.bool,
    bgColor: PropTypes.string,
    iconColor: PropTypes.string,
    imgSrc: PropTypes.string,
    imgAltText: PropTypes.string,
}

export default Avatar
