import React from 'react';
import TypedStrings from '.';
import { MonoTyped } from '../Stylers';

export default {
    component: TypedStrings,
    title: 'TypedHeader',
}

const Template = args => (
    <>{'{ '}
        <TypedStrings {...args} />
        {' }'}
    </>
)

export const Default = Template.bind({});
Default.args = {
    typeOptions: {
        strings: [
            'web developer',
            'customer support agent',
            'virtual assistant',
            'technology generalist',
        ],
    },
    StylerComponent: MonoTyped
}