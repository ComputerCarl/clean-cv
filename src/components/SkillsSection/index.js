import React, { useState } from 'react'
import styled from 'styled-components'
import MainHeader from '../MainHeader'
import CategoryList from '../CategoryList'
import { Container } from 'semantic-ui-react'
import { color } from '../../settings'
import ImageDump from '../ImageDump'
import Section from '../Section'
import { P } from '../Stylers/index'

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
                    <MainHeader string="Diverse Skill Set" override />
                    <P>I am amazeballs</P>
                    <br />
                    <div id="skill-case">
                        <CategoryList
                            hoveredCategories={hoveredCategories}
                            handleMouseEnter={category => setCategory(category.toLowerCase())}
                            handleMouseLeave={() => setCategory(null)}
                        />
                        <div
                            style={{
                                backgroundColor: color.lightest,
                                width: '1px',
                            }}
                        />
                        <div>
                            <ImageDump
                                hoveredCategory={category}
                                handleMouseEnter={(el) => setHoveredCategories(el)}
                                handleMouseLeave={() => setHoveredCategories([])}
                            />
                        </div>
                    </div>
                </Styled>
            </Container>
        </Section>
    )
}

export default SkillsSection
