import React from 'react'
import styled from 'styled-components'

export const StyledDiv = styled.div`
    line-height: 1.25em;
    overflow: hidden;
    background-color: white;
    /* height: 60px; */
    border: 1px solid #eee;
    padding: 5px;
    transition: box-shadow 0.25s;
    box-shadow: none;
    ${({ isCardLink }) => (
        isCardLink && `
            &:hover {
                cursor: pointer;
                box-shadow: 0 0 3px 1px lightgreen;
                a {
                    background-color: lemonchiffon;
                }
            }
    `)}
`


export default props => <StyledDiv {...props} />