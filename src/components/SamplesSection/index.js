import React from "react"
import styled from "styled-components"
import MainHeader from "../MainHeader"
import Section from "../Section"
import { Container } from "semantic-ui-react"
import ProjectCard from "../ProjectCard/index"
import jpgProjectDomfeed from "../../images/project-domfeed.jpg"
import jpgProjectWoocommerce from "../../images/project-woocommerce.jpg"
// import {StaticImage} from 'gatsby';
import SectionGitHub from "../SectionSourceCode/index"
import { P } from "../Stylers/index"

const Styled = styled.section`
  text-align: center;
  div.projects-stacking {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    & > * {
      margin: 20px;
      flex: 1;
    }
  }
  @media (max-width: 800px) {
    div.projects-stacking {
      flex-direction: column;
      & > * {
        margin: 20px 0;
        flex: 1;
      }
    }
  }
`

const projects = [
  {
    image: jpgProjectDomfeed,
    imageAlt: "Laptop with React project",
    title: "Domain Name Finder",
    text: `
        This application, entirely designed and engineered by me, has several microservices, including: the (main) front end which pulls articles and products (premium domain names) during build time into a static-site-generator; a Mongo database; services (front and back) to import a humongous list of registered domains into a database; and external API calls for domain verification.
        `,
    buttonLink: "https://domfeed.com",
    buttonText: "Visit Site",
  },
  {
    image: jpgProjectWoocommerce,
    imageAlt: "add",
    title: "Customized WooCommerce",
    text: `
        In this demo for a fictitious store, I used WordPress for the platform.
        Real products were imported from AliExpress suppliers of China and inserted into WooCommerce, which provides (disabled) e-commerce capabilities.
        The free template was modified to add a hero section, affiliate links rather than post/page links, and aesthetic improvements.
        `,
    buttonLink: "https://wpdemo.computercarl.com",
    buttonText: "Visit Site",
  },
]

function SamplesSection({ articles }) {
  return (
    <Section altColor>
      <Container>
        <Styled>
          <MainHeader string="Project Samples" override />
          <div
            style={{
              textAlign: "center",
              display: "inline-block",
              maxWidth: "700px",
            }}
          >
            <P>
              React JS and Node JS are my forte, but I have also developed
              projects in Python, Classic ASP, Bubble, and dabbled in PHP. I'd
              link to think that presented with a need and a bit of time, I
              could become proficient in other languages and platforms as well.
            </P>
            <P>
              I have included a small sample of some of the projects I have
              developed or contributed in, to showcase my flexibility in
              development.
            </P>
          </div>
          <br />
          <div className="projects-stacking">
            {projects.slice(0, 2).map((el, i) => (
              <ProjectCard key={el.imageAlt} {...el} />
            ))}
          </div>
          <div className="projects-stacking">
            {articles.map((el, i) => (
              <ProjectCard
                key={el.id}
                title={el.frontmatter.title}
                image={el.frontmatter.featuredImage}
                imageAlt={el.frontmatter.featuredAltText}
                text={el.frontmatter.description || el.excerpt}
                buttonLink={el.frontmatter.slug}
                buttonText="Read More"
              />
            ))}
          </div>
        </Styled>
        <SectionGitHub />
      </Container>
    </Section>
  )
}

export default SamplesSection
