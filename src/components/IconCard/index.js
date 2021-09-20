import React from 'react'
import styled from 'styled-components'
import { StyledIconBase } from '@styled-icons/styled-icon'
import {color} from '../../settings'

export const Styled = styled.div`
  ${StyledIconBase} {
    color: ${color.light};
    max-width: 32px;
    max-height: 32px;
  }

`


function IconCard({ icon, title, text }) {
    var Icon = icon;
    return (
        <Styled>
            <div><Icon /></div>
        </Styled>
    )
}

export default IconCard
