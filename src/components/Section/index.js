import React from 'react'
import styled from 'styled-components'

const Styled = styled.section`
    background-color: ${({ altColor }) => altColor ? 'white' : 'aliceblue'};
    min-height: 100px;
    width: 100%;
    text-align: center;
    padding: 30px;
`

function Section({ children, altColor }) {
    return (
        <Styled altColor={altColor}>
            {children}
        </Styled>
    )
}

export default Section
