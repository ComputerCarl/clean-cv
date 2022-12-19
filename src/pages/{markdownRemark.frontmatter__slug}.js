import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import HeroSection from "../components/HeroSection"

import { StaticImage } from "gatsby-plugin-image"
import ContactSection from "../components/ContactSection"
import BulletsSection from "../components/BulletsSection"
import SiteFooter from "../components/SiteFooter"
import ShareBox from "../components/ShareBox"
import Layout from "../components/layout"
import { Container } from "semantic-ui-react"
import styled from "styled-components"

const Styled = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
  & img {
    max-width: 100%;
  }
`

export default function Article({
  data: {
    markdownRemark: {
      html,
      frontmatter: { title, tags, featuredImage, featuredAltText },
    },
  },
}) {
  return (
    <Layout>
      <Seo title="Home Page" />
      <ShareBox />
      <HeroSection />
      <Container>
        <Styled>
          <h1>{title}</h1>
          <img src={featuredImage} alt={featuredAltText} />
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Styled>
      </Container>

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

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
        featuredImage
        featuredAltText
      }
    }
  }
`
