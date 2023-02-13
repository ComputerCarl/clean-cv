import React from 'react'
import Section from '../../components/Section/index'
import { Container } from 'semantic-ui-react'
import MainHeader from '../../components/MainHeader/index'
import styled from 'styled-components'
import IconCard from '../../components/IconCard/index'
import { Cup , ChatText, EmojiSunglasses } from '@styled-icons/bootstrap'
import svgRocket from '../../images/customer-service-advocate.svg'

const AuxGraphic = styled.div`
    display: flex;
    align-items: flex-end;
    img {
        display: unset;
        filter: opacity(30%);
        max-width: 150px;
        @media(max-width: 800px) {
            display: none;
        }
    }
`


const Styled = styled.div`
    text-align: right;
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    & > * {
        width: 33.33%;
        padding: 20px;
    }
    @media(max-width: 550px) {
        flex-direction: column;
        & > * {
            width: unset;
            padding: 0px;
        }
    }

`

const cards = [
    {
        icon: Cup,
        title: 'Well Equipped',
        text: 'My main workstation is equipped with modern hardware and software, including a dual screens, 16GB of RAM, 1.2TB of SSD storage, development IDE, and graphics programs.'
    },
    {
        icon: ChatText,
        title: 'Native English Speaker',
        text: `I am able to effectively communicate with English speakers around the world. Having been born and raised in New York, I can even argue that only people from outside New York speak with accents. :-)`
    },
    {
        icon: EmojiSunglasses,
        title: 'Soft Skills',
        text: `In addition to a myriad of hard skills, I also have many soft skills, which make me a good candidate for many customer-facing positions: flexibility, empathy, determination, and discretion.`
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
                        <MainHeader string="More Benefits"  override/>
                        <br />
                        <Styled>
                            {cards.map((el, i) => <IconCard key={i} {...el} />)}
                        </Styled>
                    </div>
                </AuxGraphic>
            </Container>
        </Section>
    )
}

export default BulletsSection
