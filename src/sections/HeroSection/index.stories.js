import React from 'react';
import HeroSection from '.';

export default {
    component: HeroSection,
    title: 'HeroSection',
}

const Template = args => <HeroSection {...args} />

export const Default = Template.bind({});
Default.args = {

}