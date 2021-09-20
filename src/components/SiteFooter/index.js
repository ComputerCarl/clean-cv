import React from 'react'
import { color } from '../../settings'
import styled from 'styled-components';

const Styled = styled.div`
    padding: 10px;
    display: flex;
    justify-content: center;

    color: ghostwhite;
    background-color: ${color.darkest};
`

function SiteFooter() {
    return (
        <Styled>
            &copy; 2021 Carl Mann
        </Styled>
    )
}

export default SiteFooter
