import React from "react"
import styled from "styled-components"

const Styled = styled.section`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  background-color: ${({ altColor }) => (altColor ? "white" : "aliceblue")};
  height: ${({ fullHeight }) => (fullHeight ? "100vh" : "unset")};
  text-align: center;
  padding: 30px;
  @media (max-width: 400px) {
    padding: 10px;
  }
`

function Section({ children, altColor, fullHeight, container }) {
  return (
    <Styled fullHeight={fullHeight} altColor={altColor}>
      <div style={{ width: "100%" }}>{children}</div>
    </Styled>
  )
}

export default Section
