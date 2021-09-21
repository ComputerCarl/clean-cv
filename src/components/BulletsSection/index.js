import React from 'react'
import Section from '../Section/index'
import { Container } from 'semantic-ui-react'
import MainHeader from '../MainHeader/index'
import styled from 'styled-components'
import IconCard from '../IconCard/index'
import { PaperPlane } from '@styled-icons/entypo'
import svgRocket from '../../images/customer-service-advocate.svg'

const AuxGraphic = styled.div`
    display: flex;
    align-items: flex-end;
    img {
        display: unset;
        filter: opacity(30%);
        max-width: 150px;
        @media(max-width: 700px) {
            display: none;
        }
    }
`


const Styled = styled.div`
    text-align: right;
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    @media(max-width: 550px) {
        flex-direction: column;
    }
    & > * {
        padding: 20px;
    }
`

const cards = [
    {
        icon: PaperPlane,
        title: 'Well Equipped',
        text: 'My main workstation is equipped with modern hardware and software, including a high-resolution screen, 16GB of RAM, 1.2TB of SSD storage, development IDE, and graphics programs.'
    },
    {
        icon: PaperPlane,
        title: 'U.S. Based',
        text: `A native English speaker, I am able to effectively communicate with English speakers around the world. Being based in the U.S. means I'm available when your customers need me.`
    },
    {
        icon: PaperPlane,
        title: 'Available Now',
        text: `With minimal training, I can begin working on your project. I am also available immediately, so don't let this opportunity pass you by.`
    }
]


function BulletsSection() {
    return (
        <Section>
            <Container>
                <AuxGraphic>
                    <div>
                        <img src={svgRocket} alt="rocket ship" />
                    </div>
                    <div>
                        <MainHeader string="Hire Me" />
                        <br />
                        <Styled>
                            {cards.map((el, i) => <IconCard {...el} />)}
                        </Styled>
                    </div>
                </AuxGraphic>
            </Container>
        </Section>
    )
}

export default BulletsSection
