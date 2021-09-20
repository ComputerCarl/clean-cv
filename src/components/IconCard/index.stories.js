import React from 'react';
import IconCard from '.';
import { PaperPlane } from '@styled-icons/entypo'
import styled from 'styled-components';

const Backing = styled.div`
    background-color: ghostwhite;
    padding: 100px;
`


export default {
    component: IconCard,
    title: 'IconCard',
}

const Template = args => <Backing>
    <IconCard {...args} />
</Backing>

export const Default = Template.bind({});
Default.args = {
    icon: PaperPlane,
    title: 'Well Equipped',
    text: 'I wanna be like yooou-oo. I wanna walk like you, talk like you do!.'
}