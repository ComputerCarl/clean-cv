import React from "react"
import Section from "../../components/Section"
import MainHeader from "../../components/MainHeader"
import styled from "styled-components"
import TypedHeader from "../../components/TypedHeader/index"
import svgCarlCanDoIt from "../../images/carl-at-computer.svg"
import UnderWords from "../../components/UnderWords/index"
import Button from "../../components/Button/index"
import DownIndicator from "../../components/DownIndicator/index"
// import Helmet from 'react-helmet'
// import loadScript from '../../utils/load-script'
// import AnimatedCanvas from '../AnimatedCanvas/index'
import { color } from "../../settings"

const Responsive = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  img {
    filter: opacity(60%);
    padding-top: 2rem;
    width: 200px;
  }
  @media (min-width: 600px) {
    flex-direction: row;
    img {
      padding-top: 0;
      width: ${({ fullHeight }) => (fullHeight ? "375px" : "150px")};
    }
  }
`

const Styler = styled.span`
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    Liberation Mono, Courier New, monospace;
  color: ${({ color }) => color || "grey"};
  span.typed-cursor {
    display: ${({ killCursor }) => (killCursor ? "unset" : "none")};
  }
`

var typeOptions = {
  strings: ["web developer", "customer support agent", "technology generalist"],
}

function HeroSection({ fullHeight }) {
  console.log({ fullHeight })
  return (
    <Section fullHeight={fullHeight}>
      <DownIndicator />
      <Responsive fullHeight>
        <div>
          <MainHeader string="Carl Mann" />
          <Styler color="#45b4e7">{"{ "}</Styler>
          <TypedHeader typeOptions={typeOptions} StylerComponent={Styler} />
          <Styler color="#45b4e7">{" }"}</Styler>
          {fullHeight && (
            <>
              <UnderWords />
              <div style={{ marginTop: "30px" }}>
                <Button href="#contact_section" text="Contact Me" />
              </div>
            </>
          )}
        </div>
        <div>
          <img  src={svgCarlCanDoIt} alt="carl at computer" />
        </div>
      </Responsive>
    </Section>
  )
}

export default HeroSection
