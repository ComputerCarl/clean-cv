import React, { useState, useEffect } from 'react'
import Section from '../Section'
import MainHeader from '../MainHeader'
import styled, { keyframes } from 'styled-components'
import TypedHeader from '../TypedHeader/index'
import svgCarlCanDoIt from '../../images/carl-at-computer.svg'
import UnderWords from '../UnderWords/index';
import Button from '../Button/index'
import DownIndicator from '../DownIndicator/index'
// import Helmet from 'react-helmet'
import loadScript from '../../utils/load-script'
import AnimatedCanvas from '../AnimatedCanvas/index'
import { color } from '../../settings'

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
        'technology generalist',
    ]
}

function HeroSection() {
    // useEffect(() => {
    //     (async () => {
    //         await loadScript('/js/sketch.js');
    //         setTimeout(() => {
    //             console.log({ sketch: !!window.Sketch });
    //         }, 1000);
    //     })()
    //     return (() => {
    //         window.Sketch = null;
    //     })
    // }, [])

    return (
        <Section fullHeight>
            <AnimatedCanvas background={'aliceblue'} color={color.lightest}  >
                <DownIndicator />
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
                        <div style={{ height: '30px' }} />
                        <Button href="#contact_section" />
                    </div>
                    <div>
                        <img src={svgCarlCanDoIt} alt="carl at computer" />
                    </div>
                </Responsive>
            </AnimatedCanvas>
        </Section>
    )
}

export default HeroSection
