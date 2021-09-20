import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

import HeroSection from '../components/HeroSection'
import SkillsSection from '../components/SkillsSection'

function index(props) {
    return (
        <Layout>
            <Seo title="Home Page" />
            <HeroSection />
            <SkillsSection />
        </Layout>
    )
}

index.propTypes = {

}

export default index

