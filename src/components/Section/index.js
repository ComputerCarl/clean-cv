import React from 'react'
import styled from 'styled-components'

const Styled = styled.section`
    background-color: aliceblue;
    min-height: 100px;
    width: 100%;
    text-align: center;
`

function Section({ children }) {
    return (
        <Styled>
            {children}
        </Styled>
    )
}

export default Section
