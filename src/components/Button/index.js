import React from 'react';
import styled from 'styled-components'
import { color } from '../../settings'

const A = styled.a`
    display: inline;
    font-size: 0.8rem;
    width: 50px;
    height: 12px;
    color: ${color.light};
    border: 1px solid ${color.light};
    border-radius: 50px;
    padding: 5px 15px;
    text-decoration: none;
    transition: background-color 0.5s;
    &:hover {
        color: white;
        background-color: ${color.medium};
    }
`

function Button({ text, href, target, ...rest }) {
    return (
        <A href={href} target={target} {...rest}>
            {text}
        </A>
    )
}

export default Button
