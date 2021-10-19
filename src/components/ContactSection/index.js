import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import MainHeader from '../MainHeader'
import { Container } from 'semantic-ui-react'
import Section from '../Section'
import svgCactus from '../../images/hire-this-man.svg'
import { Email, Phone, LocationPin, Link, Attachment } from '@styled-icons/entypo'
import { Skype, Github } from '@styled-icons/entypo-social'
import { color } from '../../settings'
import { StyledIconBase } from '@styled-icons/styled-icon'

var contactLinks = [
    { link: 'mailto:carl@computercarl.com', label: 'carl@computercarl.com', icon: Email },
    { link: 'tel:19192834112', label: '+1.919.283.4112', icon: Phone },
    { link: '', label: 'Willow Spring, NC, USA', icon: LocationPin },
    { link: 'skype:hamptonit?chat', label: 'hamptonit', icon: Skype },
    { link: 'https://github.com/ComputerCarl', label: 'ComputerCarl', icon: Github },
    { link: 'https://computercarl.com', label: 'ComputerCarl.com', icon: Link },
    { link: 'https://computercarl.com/carl-mann-technology-generalist-resume.pdf', label: 'résumé', icon: Attachment },
]

// var Icon = ({ icon }) => React.createElement(icon);

export const IconStyleWrapper = styled.div`
    text-align: left;
    line-height: 2.25rem;
    ${StyledIconBase} {
        color: ${color.lightest};
        height: 16px;
        position: relative;
        transform: translateY(-15%) ;
    }
    span {
        font-family: 'Open Sans', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: ${color.darkest};
        font-size: 1.2rem;
        margin-left: 5px;
    }
    div:hover {
        background-color: lemonchiffon;
    }
  `

const Styled = styled.div`
    text-align: center;
  `

const Responsive = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    img {
        filter: opacity(75%);
        /* padding-top: 2rem; */
        width: 200px;
    }
    @media (min-width: 600px) {
         padding: 25px;
        flex-direction: row;
        img {
            padding-top: 0;
            width: 200px;
        }
    }
`


function ContactSection() {
    const [loadedContacts, loadContacts] = useState([]);

    useEffect(() => {
        loadContacts(contactLinks)
    }, [])

    return (
        <Section>
            <Container>
                <Styled>
                    <MainHeader string="Contact Info" />
                    <br />
                    <Responsive>
                        <IconStyleWrapper>
                            {loadedContacts && loadedContacts.map((el, i) => {
                                var Icon = el.icon;
                                return (<div key={i}>
                                    <Icon />
                                    <a href={el.link} target="_new">
                                        <span>{el.label}</span>
                                    </a>
                                </div>)
                            })}
                        </IconStyleWrapper>
                        <div>
                            <img src={svgCactus} alt="computer screen with a wee baby cactus" />
                        </div>
                    </Responsive>
                </Styled>
            </Container>
        </Section>
    )
}

export default ContactSection
