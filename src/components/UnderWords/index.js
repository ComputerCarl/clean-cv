import React from 'react'
import styled from 'styled-components'
import {color} from '../../settings'

const Div = styled.div`
    text-align: justify;
    font-family:  'Open Sans', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin-top: 20px;
    max-width: 350px;
    color: ${color.medium};
`

function UnderWords() {
    return (
        <Div>
            I'm a geek and software developer who loves solving problems and helping people.
        </Div>
    )
}

export default UnderWords
