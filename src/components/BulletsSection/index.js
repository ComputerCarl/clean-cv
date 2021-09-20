import React from 'react'
import Section from '../Section/index'
import { Container } from 'semantic-ui-react'
import MainHeader from '../MainHeader/index'
import styled from 'styled-components'
import IconCard from '../IconCard/index'
import { PaperPlane } from '@styled-icons/entypo'
import svgRocket from '../../images/customer-service-advocate.svg'

const Styled = styled.div`
    text-align: right;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    @media(max-width: 550px) {
        flex-direction: column;
    }
    img {
        display: unset;
        filter: opacity(20%);
        max-width: 150px;
        max-height: 200px;
        @media(max-width: 700px) {
            display: none;
        }
    }
    & > * {
        padding: 20px;
    }
`

const cards = [
    {
        icon: PaperPlane,
        title: 'Well Equipped',
        text: 'I wanna be like yooou-oo. I wanna walk like you, talk like you do!.'
    },
    {
        icon: PaperPlane,
        title: 'Well Equipped',
        text: 'I wanna be like yooou-oo. I wanna walk like you, talk like you do!.'
    },
    {
        icon: PaperPlane,
        title: 'Well Equipped',
        text: 'I wanna be like yooou-oo. I wanna walk like you, talk like you do!.'
    }
]


function BulletsSection() {
    return (
        <Section>
            <Container>
                <MainHeader string="Hire Me" />
                <br />
                <Styled>
                    <img src={svgRocket} alt="rocket ship" />
                    {cards.map((el, i) => <IconCard {...el} />)}
                </Styled>
            </Container>
        </Section>
    )
}

export default BulletsSection
