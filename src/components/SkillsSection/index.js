import React from 'react'
import styled from 'styled-components'
import MainHeader from '../MainHeader'
import CategoryList from '../CategoryList'
import { Container } from 'semantic-ui-react'
import { color } from '../../settings'
import ImageDump from '../ImageDump'

const Styled = styled.section`
    text-align: center;
    div#skill-case {
        display: flex;
        justify-content: space-around;
    }
`

function SkillsSection() {
    return (
        <Styled>
            <Container>
                <MainHeader string="Diverse Skill Set" override />
                <div id="skill-case">
                    <CategoryList />
                    <div
                        style={{
                            backgroundColor: color.lightest,
                            width: '1px',
                        }}
                    />
                    <div>
                        <ImageDump />
                    </div>
                </div>
            </Container>
        </Styled>
    )
}

export default SkillsSection
