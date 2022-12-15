import React from "react"
import styled from "styled-components"
import { StyledIconBase } from "@styled-icons/styled-icon"
import { color } from "../../settings"
import { SubHeader, P } from "../Stylers/index"

const StyledIcon = styled.div`
  ${StyledIconBase} {
    position: absolute;
    transform: translate(-50%, -50%);
    color: ${color.light};
    max-width: 24px;
    max-height: 24px;
  }
`
const IconCircle = styled.div`
  display: inline-flex;
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  height: 50px;
  width: 50px;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function IconCard({ icon, title, text }) {
  var Icon = icon;
  return (
    <Card>
      <IconCircle>
        <StyledIcon>
          <Icon />
        </StyledIcon>
      </ IconCircle >
      <SubHeader>
        {title}
      </SubHeader>
      <P>
        {text}
      </P>
    </Card>
  )
}

export default IconCard
