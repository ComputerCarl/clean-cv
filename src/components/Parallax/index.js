import React from "react"
import styled from "styled-components"

const Styled = styled.div`
  padding-top: 25px;
  padding-bottom: 25px;
  width: 100%;
  background-image: url(${({ bgImage }) => bgImage});
  background-size: cover;
  background-attachment: fixed;
  & > div {
    max-width: 800px;
    margin: auto;
  }
`

export default function Parallax({ bgImage, children }) {
  return (
    <Styled bgImage={bgImage}>
      <div>{children}</div>
    </Styled>
  )
}
