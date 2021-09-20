import React from 'react';
import Avatar from '.';
import svgPaperPlane from './paper-plane.svg'
import { color } from '../../settings';
import styled from 'styled-components';

const Backing = styled.div`
    background-color: ghostwhite;
    padding: 100px;
`

export default {
    component: Avatar,
    title: 'Avatar',
}

const Template = args => <Backing>
    <Avatar {...args} />
</Backing>

export const Default = Template.bind({});
Default.args = {
    imgSrc: svgPaperPlane,
    iconColor: color.dark,
    bgColor: ''
}