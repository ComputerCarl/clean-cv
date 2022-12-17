import React, { useState } from "react"
import styled from "styled-components"
import { P, MonoTyped } from "../Stylers/index"
import Button from "../Button/index"

const Styled = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: none;
  border: 1px solid lightgray;
  border-radius: 10px;
  img {
    transition: all 250ms;
    max-width: 350px;
    cursor: pointer;
  }
  img:hover {
    transform: scale(1.05);
    filter: saturate(110%);
  }
  .button-space {
    margin-top: 25px;
  }
  & > * {
    margin: 20px;
  }
  & > * > * {
    margin: 10px;
  }
  @media (max-width: 450px) {
    img {
      max-width: 200px;
      padding: unset;
    }
  }
`
function ProjectCard({
  image,
  imageAlt,
  title,
  excerpt,
  text,
  buttonLink,
  buttonText,
}) {
  // [] if there's an excerpt, should have show more
  const [showMore, setShowMore] = useState(false)
  const [stateButtonText, setStateButtonText] = useState(buttonText)
  return (
    <Styled>
      <div>
        <div style={{ marginBottom: "0" }}>
          <a href={buttonLink || image} target="_new">
            <img src={image} alt={imageAlt} />
          </a>
        </div>
        <MonoTyped>{title}</MonoTyped>
        <P
          dangerouslySetInnerHTML={{
            __html: showMore ? text : excerpt || text,
          }}
        />
      </div>
      <div>
        <Button
          href={buttonLink}
          text={buttonText || stateButtonText || "View More"}
          target="_new"
          onClick={ev => {
            if (excerpt) {
              ev.preventDefault()
              setStateButtonText(showMore ? " View More" : "View Less")
              setShowMore(!showMore)
            }
          }}
        />
      </div>
    </Styled>
  )
}

export default ProjectCard
