import React from 'react'
import styled from 'styled-components'
import PropTypes from "prop-types";

const Styled = styled.div`
    font-size: 2.2em;
    &&& {
        margin-top: 20px;
        margin-bottom: 10px;
    }
    text-transform: uppercase;
    ${({ override }) => {
        return override ?
            `
            span:not(:first-child) {
                color: #45b4e7;
            }
            `
            :
            `span:nth-of-type(even) {
            color: #45b4e7;
        }`
    }}
`

function MainHeader({ string, override }) {
    return (
        <Styled override={override}>
            {string.match(/\w+/g).map((word, i) => <span key={i}>{word}{' '}</span>)}
        </Styled>
    )
}


MainHeader.propTypes = {
    string: PropTypes.string.isRequired,
}
export default MainHeader
