import React, { useState } from 'react'
import styled from 'styled-components'
import MainHeader from '../MainHeader'
import { color } from '../../settings'
import Section from '../Section'
import {Container} from 'semantic-ui-react'

const Styled = styled.section`
    text-align: center;
    div#skill-case {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        @media (max-width: 600px) {
            flex-direction: column;
        }
    }
`

function SkillsSection() {

    const [category, setCategory] = useState();
    const [hoveredCategories, setHoveredCategories] = useState([]);

    return (
        <Section altColor>
            <Container>
                <Styled>
                    <MainHeader string="Project Samples" override />
                    <br />
                    styled
                </Styled>
            </Container>
        </Section >
    )
}

export default SkillsSection
