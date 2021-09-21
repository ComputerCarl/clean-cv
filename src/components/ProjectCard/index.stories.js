import React from 'react';
import ProjectCard from '.';
import pngProjectDomfeed from '../../images/project-domfeed.png'

export default {
    component: ProjectCard,
    title: 'ProjectCard',
}

const Template = args => <ProjectCard {...args} />

export const Default = Template.bind({});
Default.args = {
    image: pngProjectDomfeed,
    imageAlt: 'Laptop with Project',
    title: 'Domain Name Finder',
    text: `Ain't this some text.`
}