import React, { useEffect } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import HeroSection from "../sections/HeroSection"
import SkillsSection from "../sections/SkillsSection"
import SamplesSection from "../sections/SamplesSection"
import ContactSection from "../sections/ContactSection"
import BulletsSection from "../sections/BulletsSection"
import SiteFooter from "../sections/SiteFooter"
import Parallax from "../components/Parallax"
import ShareBox from "../components/ShareBox"
import loadScript from "../utils/load-script"
import neurons from "../images/bg4.jpg"

import styled from "styled-components"

const ParallaxChoose = styled.div`
  & {
    text-align: center;
    font-size: 2em;
    line-height: 1.4em;
    letter-spacing: 0em;
    font-weight: 300;
    font-style: normal;
    text-transform: uppercase;
    color: ghostwhite;
    font-family: "Open Sans";
  }
  .author {
    font-size: .75em;
  }
`

const ParallaxQuote = () => (
  <section>
    <Parallax bgImage={neurons}>
      <ParallaxChoose>
        “Choose a job that you love, and you will never have to work a day in
        your life.”
        <div class="author">– Confucius</div>
      </ParallaxChoose>
    </Parallax>
  </section>
)

function Home({ data }) {
  useEffect(() => {
    loadScript("/js/matomo.js")
    loadScript("/js/mautic.js") // tracking
  }, [])

  const articles = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <Seo title="Home Page" />
      <ShareBox />
      <HeroSection fullHeight />
      <ParallaxQuote />
      <SamplesSection articles={articles} />
      <BulletsSection />
      <SkillsSection />
      <ContactSection />
      <a id="contact_section" />
      <img
        style={{ position: "absolute", zIndex: 1 }}
        src="https://crm.upchunk.com/mtracking.gif"
        alt="pixel"
      />
      <SiteFooter />
    </Layout>
  )
}

Home.propTypes = {}

export default Home

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      nodes {
        id
        html
        excerpt
        frontmatter {
          title
          slug
          featuredImage
          featuredAltText
        }
      }
    }
  }
`
