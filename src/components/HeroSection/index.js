import React, { useState, useEffect } from 'react'
import Section from '../Section'
import MainHeader from '../MainHeader'
import styled from 'styled-components'
import TypedHeader from '../TypedHeader/index'
import svgCarlCanDoIt from '../../images/carl-at-computer.svg'
import UnderWords from '../UnderWords/index';
import Button from '../Button/index'

const Responsive = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    img {
        filter: opacity(60%);
        padding-top: 2rem;
        width: 200px;
    }
    @media (min-width: 600px) {
        /* & > * {
            width: 50%;
        } */
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
    const [hasScrolled, setHasScrolled] = useState(false);
    const [showArrow, setShowArrow] = useState(false);

    function disableArrow() {
        if (!hasScrolled) setShowArrow(true);
    }

    useEffect(() => {
        var timedEvt = setTimeout(disableArrow, 13000);
        window.addEventListener('scroll', () => {
            setHasScrolled(true);
            setShowArrow(false);
            clearTimeout(timedEvt);
        }, { passive: true });
    }, [])

    return (
        <Section fullHeight>
            <Responsive>
                <div>
                    <MainHeader string="Carl Mann" />
                    <Styler color="#45b4e7">
                        {'{ '}
                    </Styler>
                    <TypedHeader typeOptions={typeOptions} StylerComponent={Styler} />
                    <Styler color="#45b4e7">
                        {' }'}
                    </Styler>
                    <UnderWords />
                    <br />
                    <Button />
                </div>
                <div>
                    <img src={svgCarlCanDoIt} alt="carl at computer" />
                </div>
            </Responsive>
            {showArrow.toString()}
        </Section>
    )
}

export default HeroSection
