import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

import HeroSection from '../components/HeroSection'
import SkillsSection from '../components/SkillsSection'
import SamplesSection from '../components/SamplesSection'
import ContactSection from '../components/ContactSection'
import BulletsSection from '../components/BulletsSection'
import SiteFooter from '../components/SiteFooter'

function index(props) {
    return (
        <Layout>
            <Seo title="Home Page" />
            <HeroSection />
            <SkillsSection />
            <BulletsSection />
            <SamplesSection />
            <ContactSection  />
            <a id="contact_section"  />
            <SiteFooter />
        </Layout>
    )
}

index.propTypes = {

}

export default index

