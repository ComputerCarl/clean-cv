import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import SkillsSection from '../components/SkillsSection'

function index(props) {
    return (
        <Layout>
            <Seo title="Home Page" />
            <SkillsSection />
        </Layout>
    )
}

index.propTypes = {

}

export default index

