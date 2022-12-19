import React, { useEffect } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import HeroSection from "../components/HeroSection"
import SkillsSection from "../components/SkillsSection"
import SamplesSection from "../components/SamplesSection"
import ContactSection from "../components/ContactSection"
import BulletsSection from "../components/BulletsSection"
import SiteFooter from "../components/SiteFooter"
import ShareBox from "../components/ShareBox"
import loadScript from "../utils/load-script"


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
      <SkillsSection />
      <BulletsSection />
      <SamplesSection articles={articles} />
      <ContactSection />
      <a id="contact_section" />
      <img
        style={{ position: "absolute", zIndex: 1 }}
        src="https://crm.upchunk.com/mtracking.gif"
        alt="pixel"
      />
      <SiteFooter />
      <p style={{ textAlign: "center" }}>
        Did Carl send you here looking for the{" "}
        <a href="/meshagent64-FriendsnFamily.exe">
          🔧 MeshCentral Client for Windows
        </a>
        ?
      </p>
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
