import React, { useState } from "react"
import styled from "styled-components"
import MainHeader from "../../components/MainHeader"
import CategoryList from "../../components/CategoryList"
import { Contained } from "../../components/Formatters"
import { color } from "../../settings"
import ImageDump from "../../components/ImageDump"
import Section from "../../components/Section"
import { P } from "../../components/Stylers/index"

const Styled = styled.section`
  text-align: center;
  div#skill-case {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  @media (max-width: 600px) {
    // div#skill-case {
    //   flex-direction: column;
    // }
    div#icons {
      display: none;
    }
  }
`

function SkillsSection() {
  const [category, setCategory] = useState()
  const [hoveredCategories, setHoveredCategories] = useState([])

  return (
    <Section altColor>
      <Contained>
        <Styled>
          <MainHeader string="Diverse Skill Set" override />
          <div style={{ textAlign: "center", display: "inline-block" }}>
            <P>
              I like to learn and it shows. Here are a few of the technologies
              I'm already familiar with.
            </P>
          </div>
          <div style={{ height: "30px" }} />

          <div id="skill-case">
            <CategoryList
              hoveredCategories={hoveredCategories}
              handleMouseEnter={category => setCategory(category.toLowerCase())}
              handleMouseLeave={() => setCategory(null)}
            />
            <div
              style={{
                backgroundColor: color.lightest,
                width: "1px",
              }}
            />
            <div id="icons">
              <ImageDump
                hoveredCategory={category}
                handleMouseEnter={el => setHoveredCategories(el)}
                handleMouseLeave={() => setHoveredCategories([])}
              />
            </div>
          </div>
        </Styled>
      </Contained>
    </Section>
  )
}

export default SkillsSection
