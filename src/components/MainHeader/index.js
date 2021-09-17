import React from 'react'
import styled from 'styled-components'

const Styled = styled.div`
    font-size: 2.2em;
    text-transform: uppercase;
    span:nth-of-type(even) {
        color: #45b4e7;
    }
`

function MainHeader({ string }) {
    return (
        <Styled>
            {string.match(/\w+/g).map((word, i) => <span>{word}{' '}</span>)}
        </Styled>
    )
}

export default MainHeader
