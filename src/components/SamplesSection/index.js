import React from 'react'
import styled from 'styled-components'
import MainHeader from '../MainHeader'
import Section from '../Section'
import { Container } from 'semantic-ui-react'
import ProjectCard from '../ProjectCard/index'
import jpgProjectDomfeed from '../../images/project-domfeed.jpg'
import jpgProjectWoocommerce from '../../images/project-woocommerce.jpg'
// import {StaticImage} from 'gatsby';

const Styled = styled.section`
    text-align: center;
    div.projects-stacking {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        @media(max-width: 800px) {
            flex-direction: column;
        }
        & > * {
            margin: 20px;
        }
    }
`

const projects = [
    {
        image: jpgProjectDomfeed,
        imageAlt: 'Laptop with React project',
        title: 'Domain Name Finder',
        text: `
        This application, entirely designed and engineered by me, has several microservices, including: the (main) front end which pulls articles and products (premium domain names) during build time into a static-site-generator; a Mongo database; services (front and back) to import a humongous list of registered domains into a database; and external API calls for domain verification.
        `,
        buttonLink: 'https://domfeed.com',
        buttonText: 'Visit Site'
    },
    {
        image: jpgProjectWoocommerce,
        imageAlt: 'WordPress Laptop',
        title: 'Customized WooCommerce',
        text: `
        In this demo for a fictitious store, I used WordPress for the platform.
        Real products were imported from AliExpress suppliers of China and inserted into WooCommerce, which provides (disabled) e-commerce capabilities.
        The free template was modified to add a hero section, affiliate links rather than post/page links, and aesthetic improvements.
        `,
        buttonLink: 'https://wpdemo.computercarl.com', buttonText: 'Visit Site'
    },

]



function SamplesSection() {

    return (
        <Section altColor>
            <Container>
                <Styled>
                    <MainHeader string="Project Samples" override />
                    <br />
                    <div className="projects-stacking">
                        {projects.map((el, i) => <ProjectCard key={i} {...el} />)}
                    </div>
                </Styled>
            </Container>
        </Section >
    )
}

export default SamplesSection
