import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { logos } from "../CategoryList/skills"
import { color } from "../../settings"

const svgFolder = "/svg-logos/"

const StyledCard = styled.div`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  display: inline-flex;
  flex-direction: column;
  margin: 15px;
  cursor: pointer;
  color: ${color.medium};
  img {
    max-height: 3.5rem;
    max-width: 8rem;
    vertical-align: middle;
    filter: opacity(65%);
    transition: all 0.25s;
    margin: 0 5px;
  }
  &.hovered {
    background-color: lemonchiffon;
  }
  &.hovered,
  :hover {
    color: ${color.darkest};
    img {
      transform: rotate(2deg) scale(110%);
      filter: opacity(100%);
    }
  }
`

const Card = ({
  filename,
  label,
  categories,
  hoveredCategory,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  const thisCategory = categories.indexOf(hoveredCategory) > -1
  return (
    <StyledCard
      className={thisCategory ? "hovered" : ""}
      onMouseEnter={() => handleMouseEnter(categories)}
      onMouseLeave={() => handleMouseLeave()}
    >
      <div>
        <img src={`${svgFolder + filename}.svg`} alt={label} />
      </div>
      <div>{label}</div>
    </StyledCard>
  )
}

function ImageDump(props) {
  return (
    <>
      {logos.map((el, i) => (
        <Card key={i} {...el} {...props} />
      ))}
    </>
  )
}

export default ImageDump
