import React from 'react'
import Section from '../Section/index'
import { Container } from 'semantic-ui-react'
import MainHeader from '../MainHeader/index'
import styled from 'styled-components'

const Styled = styled.div`
    text-align: right;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`


function BulletsSection() {
    return (
        <Section>
            <Container>


                <MainHeader string="Hire Me" />
                <Styled>
                    <div>one</div>
                    <div>one</div>
                    <div>one</div>
                </Styled>
            </Container>
        </Section>
    )
}

export default BulletsSection
