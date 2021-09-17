import React from 'react'
import Section from '../Section'
import MainHeader from '../MainHeader'
import styled from 'styled-components'
import TypedHeader from '../TypedHeader/index'
import svgCarlCanDoIt from '../../images/carl-at-computer.svg'

const Responsive = styled.div`
    padding: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    img {
        filter: opacity(75%);
        padding-top: 2rem;
        width: 200px;
    }
    @media (min-width: 600px) {
        padding: 25px;
        flex-direction: row;
        img {
            padding-top: 0;
            width: 375px;
        }
    }
`

const Styler = styled.span`
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
    color: ${({ color }) => color || 'grey'};
    span.typed-cursor {
        display: ${({ killCursor }) => killCursor ? 'unset' : 'none'};
    }
`

var typeOptions = {
    strings: [
        'web developer',
        'customer support agent',
        'virtual assistant',
        'technology generalist',
    ]
}

function HeroSection() {
    return (
        <Section>
            <Responsive>
                <div>
                    <MainHeader string="Carl Mann" />
                    <Styler>
                        {'{ '}
                    </Styler>
                    <TypedHeader typeOptions={typeOptions} StylerComponent={Styler} />
                    <Styler>
                        {' }'}
                    </Styler>
                </div>
                <div>
                    <img src={svgCarlCanDoIt} alt="carl at computer" />
                </div>
            </Responsive>
        </Section>
    )
}

export default HeroSection
