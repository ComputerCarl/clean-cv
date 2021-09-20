import React, { useState } from 'react'
import styled from 'styled-components'
import MainHeader from '../MainHeader'
import CategoryList from '../CategoryList'
import { Container } from 'semantic-ui-react'
import { color } from '../../settings'
import ImageDump from '../ImageDump'
import Section from '../Section'

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

    return (
        <Section altColor>
            <Container>
                <Styled>
                    <MainHeader string="Diverse Skill Set" override />
                    <br />
                    <div id="skill-case">
                        <CategoryList
                            handleHover={category => setCategory(category.toLowerCase())}
                            handleLostHover={() => setCategory(null)}
                        />
                        <div
                            style={{
                                backgroundColor: color.lightest,
                                width: '1px',
                            }}
                        />
                        <div>
                            <ImageDump hoveredCategory={category} />
                        </div>
                    </div>
                </Styled>
            </Container>
        </Section>
    )
}

export default SkillsSection
