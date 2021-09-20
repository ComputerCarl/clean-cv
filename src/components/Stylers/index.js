import React from "react"
import styled from "styled-components"

export const MonoTyped = styled.span`
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
    color: ${({ color }) => color || 'grey'};
`

