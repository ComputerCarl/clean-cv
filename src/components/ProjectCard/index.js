import React from 'react'
import styled from 'styled-components'
import { P, MonoTyped } from '../Stylers/index'
import Button from '../Button/index'

const Styled = styled.div`
    justify-content: center;
    align-items: center;
    background-color: none;
    border: 1px solid lightgray;
    border-radius: 10px;
    padding: 15px;
    img {
        max-width: 350px;
        @media (max-width: 450px) {
            max-width: 200px;
        }
    }
    .button-space {
        margin: 15px;
    }
    & > * {
        margin: 15px;
    }
`

function ProjectCard({ image, imageAlt, title, text, buttonLink, buttonText }) {
    return (
        <Styled>
            <div style={{ marginBottom: '-10px' }}>
                <img src={image} alt={imageAlt} />
            </div>
            <MonoTyped >
                {title}
            </MonoTyped>
            <P>
                {text}
            </P>
            <div className="button-space">
                <Button href={buttonLink} text={buttonText} target="_new" />
            </div>
        </Styled>
    )
}

export default ProjectCard
