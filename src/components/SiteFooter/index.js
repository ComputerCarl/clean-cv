import React from 'react'
import styled from 'styled-components'
import MainHeader from '../MainHeader/index'
import { color } from '../../settings'

const BarBg = styled.div`
    margin: 0;
    background-color: ${color.darkest};
`

const MainBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${color.darkest};
    padding-bottom: 10px;
    padding-top: 10px;
    flex-direction: column;
    @media (min-width: 500px) {
        flex-direction: row;
    }
`

const LinksSection = styled.nav`
    color: ghostwhite;
    display: flex;
    & > * {
        padding-left: 5px;
        padding-right: 5px;
    }
`

const StyledLink = styled.a`
    /* margin-right: 25px; */
    padding-bottom: 3px;
    padding-top: 3px;
    font-weight: 500;
    color: ghostwhite;
    border-bottom: 1px solid transparent;
    &:hover {
        color: darksalmon;
        border-bottom: 1px solid darksalmon;
    }
`

const staticLinks = [
    { label: 'Browse', href: '#' },
    { label: 'About', href: '/about' },
]

function SiteFooter({ navLinks = staticLinks }) {
    return (
        <BarBg>
                <MainBar>
                    <LinksSection>
                        social
                    </LinksSection>
                    <MainHeader color="ghostwhite" string=" Carl Mann"/>
                    <LinksSection>
                        {navLinks.map((link, i) => <StyledLink key={i} href={link.href}>{link.label}</StyledLink>)}
                    </LinksSection>
                </MainBar>
        </BarBg >
    )
}

SiteFooter.propTypes = {

}

export default SiteFooter
