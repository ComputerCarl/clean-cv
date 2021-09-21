import React from "react"
import styled from "styled-components"
import { color } from '../../settings';

export const MonoTyped = styled.span`
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
    color: ${({ color }) => color || 'grey'};
`

export const SubHeader = styled.div`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: ${color.darkest};
    font-size: 1.1rem;
    margin-top: 10px;
    margin-bottom: 10px;
`

export const P = styled.p`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: ${color.medium};
    font-size: 1rem;
    text-align: justify;
`