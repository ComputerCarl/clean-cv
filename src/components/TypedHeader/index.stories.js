import React from 'react';
import TypedStrings from '.';
import styled from 'styled-components';

const Styler = styled.span`
    /* font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; */
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
    color: grey;

`

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
    StylerComponent: Styler
}