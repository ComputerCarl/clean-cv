import React from 'react'
import styled from 'styled-components'

const Styled = styled.section`
display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    background-color: ${({ altColor }) => altColor ? 'white' : 'aliceblue'};
    height: ${({ fullHeight }) => fullHeight ? '100vh' : 'unset'};
    width: 100%;
    text-align: center;
    padding: 30px;
`

function Section({ children, altColor, fullHeight }) {
    return (
        <Styled fullHeight={fullHeight} altColor={altColor}>
            <div style={{ width: '100%' }}>
                {children}
            </div>
        </Styled>
    )
}

export default Section
