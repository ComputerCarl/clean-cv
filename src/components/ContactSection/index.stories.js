import React from 'react';
import ContactSection from '.';

export default {
    component: ContactSection,
    title: 'ContactSection',
}

const Template = args => <ContactSection {...args} />

export const Default = Template.bind({});
Default.args = {

}