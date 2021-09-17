import React from 'react';
import GlowCard from '.';

export default {
    component: GlowCard,
    title: 'GlowCard',
}

const Template = args => <GlowCard {...args} />

export const Default = Template.bind({});
Default.args = {

}