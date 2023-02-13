import React from "react"
import neurons from "../../images/bg4.jpg"
import Parallax from "../../components/Parallax"
import styled from "styled-components"

const Styled = styled.div`
  & {
    text-align: center;
    font-size: 2em;
    line-height: 1.4em;
    letter-spacing: 0em;
    font-weight: 300;
    font-style: normal;
    text-transform: uppercase;
    color: ghostwhite;
    font-family: "Open Sans";
  }
  .author {
    font-size: 0.75em;
  }
`

const ParallaxQuote = () => (
  <section>
    <Parallax bgImage={neurons}>
      <Styled>
        “Choose a job that you love, and you will never have to work a day in
        your life.”
        <div class="author">– Confucius</div>
      </Styled>
    </Parallax>
  </section>
)

export default ParallaxQuote
