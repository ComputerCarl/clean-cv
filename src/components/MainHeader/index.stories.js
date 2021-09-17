import React from 'react';
import MainHeader from '.';

export default {
    component: MainHeader,
    title: 'MainHeader',
}

const Template = args => <MainHeader {...args} />

export const Default = Template.bind({});
Default.args = {
    string: 'Carl Mann'
}